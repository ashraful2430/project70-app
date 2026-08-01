import { NextRequest } from "next/server";
import { getDb } from "@/lib/mongodb";

// Calorie logs: one doc per user+date { uid, date, entries, total }
// GET ?uid=&date=YYYY-MM-DD  → that day's log
// GET ?uid=&history=1        → all days for the user (newest first)
export async function GET(req: NextRequest) {
  const uid = req.nextUrl.searchParams.get("uid");
  const date = req.nextUrl.searchParams.get("date");
  const history = req.nextUrl.searchParams.get("history");
  if (!uid) return Response.json({ error: "missing uid" }, { status: 400 });
  try {
    const db = await getDb();
    const col = db.collection("calories");
    if (history) {
      const docs = await col.find({ uid }).sort({ date: -1 }).toArray();
      return Response.json(
        docs.map((d) => ({ date: d.date, entries: d.entries ?? [], total: d.total ?? 0 })),
      );
    }
    if (!date) return Response.json({ error: "missing date" }, { status: 400 });
    const doc = await col.findOne({ uid, date });
    return Response.json({ entries: doc?.entries ?? [], total: doc?.total ?? 0, date });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { uid, date, entries, total } = (await req.json()) ?? {};
    if (!uid || !date) return Response.json({ error: "missing uid/date" }, { status: 400 });
    const db = await getDb();
    await db.collection("calories").updateOne(
      { uid, date },
      { $set: { uid, date, entries: entries ?? [], total: total ?? 0 } },
      { upsert: true },
    );
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
