"use client";

// Deletes ALL user data: MongoDB progress/calories/recipes (via the wipe API)
// and all project70-* localStorage keys (macros, weight/height/age, offline
// logs). Used by the "Reset all progress" button in ProfileModal.
export async function wipeAllData(uid: string | null): Promise<void> {
  // Local data first — works even when signed out
  if (typeof window !== "undefined") {
    Object.keys(localStorage)
      .filter((k) => k.startsWith("project70-"))
      .forEach((k) => localStorage.removeItem(k));
  }

  if (!uid) return;

  try {
    await fetch("/api/data/wipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid }),
    });
  } catch {
    // Local data is already cleared; cloud wipe can be retried later
  }
}
