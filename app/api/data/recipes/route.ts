import { NextRequest } from "next/server";
import { getDb } from "@/lib/mongodb";

// Saved recipes: docs { uid, id, name, ingredients, totalCalories, createdAt }
export async function GET(req: NextRequest) {
  const uid = req.nextUrl.searchParams.get("uid");
  if (!uid) return Response.json({ error: "missing uid" }, { status: 400 });
  try {
    const db = await getDb();
    const docs = await db.collection("recipes").find({ uid }).sort({ createdAt: -1 }).toArray();
    return Response.json(
      docs.map((d) => ({
        id: d.id,
        name: d.name,
        ingredients: d.ingredients ?? [],
        totalCalories: d.totalCalories ?? 0,
        createdAt: d.createdAt,
      })),
    );
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { uid, recipe } = (await req.json()) ?? {};
    if (!uid || !recipe?.id) return Response.json({ error: "missing uid/recipe" }, { status: 400 });
    const db = await getDb();
    await db.collection("recipes").updateOne(
      { uid, id: recipe.id },
      { $set: { uid, ...recipe } },
      { upsert: true },
    );
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const uid = req.nextUrl.searchParams.get("uid");
  const id = req.nextUrl.searchParams.get("id");
  if (!uid || !id) return Response.json({ error: "missing uid/id" }, { status: 400 });
  try {
    const db = await getDb();
    await db.collection("recipes").deleteOne({ uid, id });
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
