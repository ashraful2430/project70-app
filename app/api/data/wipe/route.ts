import { NextRequest } from "next/server";
import { getDb } from "@/lib/mongodb";

// Deletes ALL of a user's data from MongoDB (progress, calorie logs, recipes).
export async function POST(req: NextRequest) {
  try {
    const { uid } = (await req.json()) ?? {};
    if (!uid) return Response.json({ error: "missing uid" }, { status: 400 });
    const db = await getDb();
    await Promise.all([
      db.collection("userdata").deleteOne({ _id: uid }),
      db.collection("calories").deleteMany({ uid }),
      db.collection("recipes").deleteMany({ uid }),
    ]);
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
