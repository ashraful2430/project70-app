"use client";
import { collection, doc, getDocs, setDoc, writeBatch } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Deletes ALL user data: Firestore completions, every calorie-day doc,
// every saved recipe, and all project70-* localStorage keys (macros,
// weight/height/age, offline logs). Used by the "Reset all progress"
// button in ProfileModal for a true fresh start.
export async function wipeAllData(uid: string | null): Promise<void> {
  // Local data first — works even when signed out
  if (typeof window !== "undefined") {
    Object.keys(localStorage)
      .filter((k) => k.startsWith("project70-"))
      .forEach((k) => localStorage.removeItem(k));
  }

  if (!uid) return;

  // Delete every doc in the calories and recipes subcollections
  for (const sub of ["calories", "recipes"] as const) {
    const snap = await getDocs(collection(db, "users", uid, sub));
    if (snap.empty) continue;
    const batch = writeBatch(db);
    snap.forEach((d) => batch.delete(d.ref));
    await batch.commit();
  }

  // Overwrite the root user doc — clears completions and anything else
  await setDoc(doc(db, "users", uid), { completions: {} });
}
