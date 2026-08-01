import dns from "node:dns";
import { MongoClient, ServerApiVersion, type Db } from "mongodb";

// Many ISPs/home networks (common in Bangladesh) refuse the SRV DNS lookup that
// mongodb+srv:// requires. Force Node to use public DNS servers that support SRV
// so the connection works regardless of the local network's resolver.
const PUBLIC_DNS = ["8.8.8.8", "1.1.1.1"];
try { dns.setServers(PUBLIC_DNS); } catch {}
try { dns.promises.setServers(PUBLIC_DNS); } catch {}

// Connection string comes from an env var only — never hard-code it.
// Local: put MONGODB_URI in .env.local   ·   Netlify: add it in env vars.
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "project70";

// Cache the client across serverless invocations so we don't open a new
// connection on every request (which would exhaust the Atlas connection limit).
let cached = (globalThis as unknown as { _mongo?: Promise<MongoClient> })._mongo;

function clientPromise(): Promise<MongoClient> {
  if (!uri) throw new Error("MONGODB_URI is not set. Add it to .env.local and your Netlify env vars.");
  // Re-assert public DNS right before connecting (covers dev hot-reloads).
  try { dns.setServers(PUBLIC_DNS); dns.promises.setServers(PUBLIC_DNS); } catch {}
  if (!cached) {
    const client = new MongoClient(uri, {
      serverApi: { version: ServerApiVersion.v1, strict: false, deprecationErrors: true },
    });
    cached = client.connect().catch((e) => {
      // Don't cache a failed connection — clear it so the next request retries
      cached = undefined;
      (globalThis as unknown as { _mongo?: Promise<MongoClient> })._mongo = undefined;
      throw e;
    });
    (globalThis as unknown as { _mongo?: Promise<MongoClient> })._mongo = cached;
  }
  return cached;
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise();
  return client.db(dbName);
}
