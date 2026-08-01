import { NextRequest } from "next/server";
import { getDb } from "@/lib/mongodb";

// Per-user progress doc: { _id: uid, completions, lifetime, weekKey }
export async function GET(req: NextRequest) {
  const uid = req.nextUrl.searchParams.get("uid");
  if (!uid) return Response.json({ error: "missing uid" }, { status: 400 });
  try {
    const db = await getDb();
    const doc = await db.collection("userdata").findOne({ _id: uid as unknown as never });
    return Response.json({
      completions: doc?.completions ?? {},
      lifetime: typeof doc?.lifetime === "number" ? doc.lifetime : 0,
      weekKey: doc?.weekKey ?? null,
    });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { uid, completions, lifetime, weekKey } = body ?? {};
    if (!uid) return Response.json({ error: "missing uid" }, { status: 400 });
    const db = await getDb();
    await db.collection("userdata").updateOne(
      { _id: uid },
      { $set: { completions: completions ?? {}, lifetime: lifetime ?? 0, weekKey: weekKey ?? null } },
      { upsert: true },
    );
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
