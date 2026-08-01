"use client";
import { useState, useCallback, useEffect } from "react";

const LS_DONE     = "project70-done";
const LS_WEEK     = "project70-week";
const LS_LIFETIME = "project70-lifetime";

// Monday-based week key: the YYYY-MM-DD of the Monday that starts this date's week.
function currentWeekKey(d = new Date()): string {
  const date = new Date(d);
  const sinceMonday = (date.getDay() + 6) % 7; // Mon=0 … Sun=6
  date.setDate(date.getDate() - sinceMonday);
  date.setHours(0, 0, 0, 0);
  return date.toLocaleDateString("en-CA");
}

interface Store { comps: Record<string, boolean>; life: number; week?: string; }

function readLS(): Store {
  if (typeof window === "undefined") return { comps: {}, life: 0 };
  let comps: Record<string, boolean> = {};
  try { comps = JSON.parse(localStorage.getItem(LS_DONE) || "{}"); } catch {}
  const rawLife = Number(localStorage.getItem(LS_LIFETIME));
  const life = Number.isFinite(rawLife) && rawLife > 0
    ? rawLife
    : Object.values(comps).filter(Boolean).length;
  return { comps, life, week: localStorage.getItem(LS_WEEK) ?? undefined };
}

// Always mirror to localStorage (survives the network being down); also push to
// MongoDB via the API when signed in. A failed cloud write never loses local data.
function persistStore(uid: string | null | undefined, comps: Record<string, boolean>, life: number, week: string) {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(LS_DONE, JSON.stringify(comps));
      localStorage.setItem(LS_LIFETIME, String(life));
      localStorage.setItem(LS_WEEK, week);
    } catch {}
  }
  if (uid) {
    fetch("/api/data/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid, completions: comps, lifetime: life, weekKey: week }),
    }).catch(() => {});
  }
}

/**
 * done     — this week's checkmarks, cleared every Monday.
 * lifetime — cumulative completions ever; drives XP/level, never weekly-reset.
 * Stored in MongoDB (via /api/data/completions) and mirrored to localStorage so
 * progress persists even if the network/DB is briefly unreachable.
 */
export function useCompletion(uid?: string | null) {
  const [done, setDone]         = useState<Record<string, boolean>>({});
  const [lifetime, setLifetime] = useState<number>(0);
  const [loaded, setLoaded]     = useState(false);

  useEffect(() => {
    let cancelled = false;
    const week = currentWeekKey();

    async function load() {
      let chosen = readLS();

      if (uid) {
        try {
          const res = await fetch(`/api/data/completions?uid=${encodeURIComponent(uid)}`);
          if (res.ok) {
            const data = await res.json();
            const cloud: Store = {
              comps: data.completions ?? {},
              life: typeof data.lifetime === "number" ? data.lifetime : 0,
              week: data.weekKey ?? undefined,
            };
            // Prefer the cloud copy only when it holds at least as much progress
            if (cloud.life >= chosen.life) chosen = cloud;
          }
        } catch {
          // DB/network unreachable — keep the local copy
        }
      }

      let comps = chosen.comps;
      const life = chosen.life;
      if (chosen.week !== week) comps = {}; // new week → clear checkmarks, keep lifetime

      persistStore(uid, comps, life, week);

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
    persistStore(uid, nextDone, nextLife, currentWeekKey());
  }, [uid, done, lifetime]);

  const resetCompletions = useCallback(() => {
    setDone({});
    setLifetime(0);
    persistStore(uid, {}, 0, currentWeekKey());
  }, [uid]);

  const isComplete     = useCallback((id: string) => !!done[id], [done]);
  const countCompleted = useCallback((ids: string[]) => ids.filter((id) => done[id]).length, [done]);
  const totalCompleted = lifetime;

  return { toggle, isComplete, countCompleted, totalCompleted, resetCompletions, loaded };
}
