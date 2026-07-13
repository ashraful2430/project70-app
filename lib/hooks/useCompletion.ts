"use client";
import { useState, useCallback, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const LS_DONE     = "project70-done";
const LS_WEEK     = "project70-week";
const LS_LIFETIME = "project70-lifetime";

// Monday-based week key: the YYYY-MM-DD of the Monday that starts this date's week.
// The training week runs Mon→Sun, so a new key on Monday means "reset the checkmarks".
function currentWeekKey(d = new Date()): string {
  const date = new Date(d);
  const sinceMonday = (date.getDay() + 6) % 7; // Mon=0 … Sun=6
  date.setDate(date.getDate() - sinceMonday);
  date.setHours(0, 0, 0, 0);
  return date.toLocaleDateString("en-CA");
}

/**
 * Two separate stores:
 *   done      — this week's checkmarks. Cleared every Monday so exercises can
 *               be re-completed and counted again.
 *   lifetime  — cumulative completions ever. Drives XP/level. Never weekly-reset,
 *               only cleared by the profile "Reset all progress" button.
 */
export function useCompletion(uid?: string | null) {
  const [done, setDone]         = useState<Record<string, boolean>>({});
  const [lifetime, setLifetime] = useState<number>(0);
  const [loaded, setLoaded]     = useState(false);

  useEffect(() => {
    let cancelled = false;
    const week = currentWeekKey();

    async function load() {
      let comps: Record<string, boolean> = {};
      let life = 0;
      let storedWeek: string | undefined;

      if (uid) {
        try {
          const snap = await getDoc(doc(db, "users", uid));
          const data = snap.exists() ? snap.data() : {};
          comps = (data.completions as Record<string, boolean>) ?? {};
          life = typeof data.lifetime === "number"
            ? data.lifetime
            : Object.values(comps).filter(Boolean).length; // migrate old accounts
          storedWeek = data.weekKey as string | undefined;
        } catch {
          if (!cancelled) setLoaded(true);
          return;
        }
      } else {
        try { comps = JSON.parse(localStorage.getItem(LS_DONE) || "{}"); } catch {}
        const rawLife = Number(localStorage.getItem(LS_LIFETIME));
        life = Number.isFinite(rawLife) && rawLife > 0
          ? rawLife
          : Object.values(comps).filter(Boolean).length;
        storedWeek = localStorage.getItem(LS_WEEK) ?? undefined;
      }

      // New week → clear the checkmarks but keep the lifetime progress
      if (storedWeek !== week) {
        comps = {};
        persist(uid, {}, life, week);
      }

      if (!cancelled) {
        setDone(comps);
        setLifetime(life);
        setLoaded(true);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [uid]);

  const toggle = useCallback((id: string) => {
    const turningOn = !done[id];
    const nextDone  = { ...done, [id]: turningOn };
    const nextLife  = Math.max(0, lifetime + (turningOn ? 1 : -1));
    setDone(nextDone);
    setLifetime(nextLife);
    persist(uid, nextDone, nextLife, currentWeekKey());
  }, [uid, done, lifetime]);

  const resetCompletions = useCallback(() => {
    setDone({});
    setLifetime(0);
    persist(uid, {}, 0, currentWeekKey());
  }, [uid]);

  const isComplete     = useCallback((id: string) => !!done[id], [done]);
  const countCompleted = useCallback((ids: string[]) => ids.filter((id) => done[id]).length, [done]);
  const totalCompleted = lifetime;

  return { toggle, isComplete, countCompleted, totalCompleted, resetCompletions, loaded };
}

function persist(
  uid: string | null | undefined,
  done: Record<string, boolean>,
  lifetime: number,
  weekKey: string,
) {
  if (uid) {
    setDoc(doc(db, "users", uid), { completions: done, lifetime, weekKey }, { merge: true })
      .catch(console.error);
  } else if (typeof window !== "undefined") {
    localStorage.setItem(LS_DONE, JSON.stringify(done));
    localStorage.setItem(LS_LIFETIME, String(lifetime));
    localStorage.setItem(LS_WEEK, weekKey);
  }
}
