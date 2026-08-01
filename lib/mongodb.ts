import { MongoClient, ServerApiVersion, type Db } from "mongodb";

// Connection string comes from an env var only — never hard-code it.
// Local: put MONGODB_URI in .env.local   ·   Netlify: add it in env vars.
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "project70";

// Cache the client across serverless invocations so we don't open a new
// connection on every request (which would exhaust the Atlas connection limit).
let cached = (globalThis as unknown as { _mongo?: Promise<MongoClient> })._mongo;

function clientPromise(): Promise<MongoClient> {
  if (!uri) throw new Error("MONGODB_URI is not set. Add it to .env.local and your Netlify env vars.");
  if (!cached) {
    const client = new MongoClient(uri, {
      serverApi: { version: ServerApiVersion.v1, strict: false, deprecationErrors: true },
    });
    cached = client.connect();
    (globalThis as unknown as { _mongo?: Promise<MongoClient> })._mongo = cached;
  }
  return cached;
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise();
  return client.db(dbName);
}
