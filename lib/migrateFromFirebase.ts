"use client";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Must match useLevel.ts
const XP_THRESHOLDS = [0, 525, 1500, 3000, 5550, 9000];
const XP_PER_EXERCISE = 15;

function minLifetimeForLevel(level: number): number {
  const idx = Math.min(Math.max(level - 1, 0), XP_THRESHOLDS.length - 1);
  return Math.ceil(XP_THRESHOLDS[idx] / XP_PER_EXERCISE);
}

async function post(url: string, body: unknown) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    let detail = "";
    try { detail = (await res.json()).error ?? ""; } catch {}
    throw new Error(detail || `Save failed (${res.status}) — MongoDB not reachable`);
  }
}

export interface MigrationResult {
  lifetime: number;
  completions: number;
  calorieDays: number;
  recipes: number;
}

// One-time copy of the signed-in user's Firestore data into MongoDB.
// Requires Firestore reads to work (publish the rules fix first).
export async function migrateFromFirebase(uid: string): Promise<MigrationResult> {
  // 1) Root user doc → completions + lifetime (preserving the old level/rank)
  const userSnap = await getDoc(doc(db, "users", uid));
  const data = userSnap.exists() ? userSnap.data() : {};
  const completions = (data.completions as Record<string, boolean>) ?? {};
  const trueCount = Object.values(completions).filter(Boolean).length;
  let lifetime = typeof data.lifetime === "number" ? data.lifetime : trueCount;
  if (typeof data.level === "number") {
    lifetime = Math.max(lifetime, minLifetimeForLevel(data.level));
  }
  await post("/api/data/completions", { uid, completions, lifetime, weekKey: null });

  // 2) Calorie logs subcollection
  let calorieDays = 0;
  try {
    const calSnap = await getDocs(collection(db, "users", uid, "calories"));
    for (const d of calSnap.docs) {
      const c = d.data();
      await post("/api/data/calories", { uid, date: d.id, entries: c.entries ?? [], total: c.total ?? 0 });
      calorieDays++;
    }
  } catch { /* subcollection may not exist */ }

  // 3) Saved recipes subcollection
  let recipes = 0;
  try {
    const recSnap = await getDocs(collection(db, "users", uid, "recipes"));
    for (const d of recSnap.docs) {
      const r = d.data();
      await post("/api/data/recipes", { uid, recipe: { id: d.id, ...r } });
      recipes++;
    }
  } catch { /* subcollection may not exist */ }

  return { lifetime, completions: Object.keys(completions).length, calorieDays, recipes };
}
