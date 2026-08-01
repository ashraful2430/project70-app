"use client";
import { useState, useEffect, useCallback } from "react";

export interface CalEntry {
  id: string;
  name: string;
  amount: number;
  unit: string;
  calories: number;
  time: string;
  // macros in grams (auto-calculated from ingredients; absent on old entries)
  protein?: number;
  carbs?: number;
  fat?: number;
  fiber?: number;
}

export interface DayLog {
  date: string;
  entries: CalEntry[];
  total: number;
}

function todayKey() {
  return new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD in local time
}

function lsKey(date: string) {
  return `project70-cal-${date}`;
}

function loadLS(date: string): CalEntry[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(lsKey(date)) || "[]"); } catch { return []; }
}

function saveLS(date: string, entries: CalEntry[]) {
  try { localStorage.setItem(lsKey(date), JSON.stringify(entries)); } catch {}
}

export function useCalories(uid: string | null) {
  const today = todayKey();
  const [entries, setEntries]     = useState<CalEntry[]>([]);
  const [history, setHistory]     = useState<DayLog[]>([]);
  const [viewDate, setViewDate]   = useState(today);
  const [loadingHistory, setLoadingHistory] = useState(false);

  // Load entries for the viewDate — MongoDB when signed in, else localStorage,
  // always falling back to localStorage if the request fails.
  useEffect(() => {
    let cancelled = false;
    async function load() {
      const local = loadLS(viewDate);
      if (uid) {
        try {
          const res = await fetch(`/api/data/calories?uid=${encodeURIComponent(uid)}&date=${viewDate}`);
          if (res.ok) {
            const data = await res.json();
            const cloud = (data.entries as CalEntry[]) ?? [];
            // Prefer whichever source actually has entries
            if (!cancelled) { setEntries(cloud.length ? cloud : local); return; }
          }
        } catch { /* fall through to local */ }
      }
      if (!cancelled) setEntries(local);
    }
    load();
    return () => { cancelled = true; };
  }, [uid, viewDate]);

  const persist = useCallback((next: CalEntry[]) => {
    saveLS(viewDate, next);
    if (uid) {
      fetch("/api/data/calories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid, date: viewDate,
          entries: next,
          total: next.reduce((s, e) => s + e.calories, 0),
        }),
      }).catch(() => {});
    }
  }, [uid, viewDate]);

  const addEntry = useCallback((entry: Omit<CalEntry, "id" | "time">) => {
    const full: CalEntry = {
      ...entry,
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      time: new Date().toISOString(),
    };
    setEntries(prev => {
      const next = [...prev, full];
      persist(next);
      return next;
    });
  }, [persist]);

  const removeEntry = useCallback((id: string) => {
    setEntries(prev => {
      const next = prev.filter(e => e.id !== id);
      persist(next);
      return next;
    });
  }, [persist]);

  const loadHistory = useCallback(async () => {
    setLoadingHistory(true);
    const logs: DayLog[] = [];
    if (uid) {
      try {
        const res = await fetch(`/api/data/calories?uid=${encodeURIComponent(uid)}&history=1`);
        if (res.ok) {
          const data = (await res.json()) as DayLog[];
          data.forEach(d => logs.push(d));
        }
      } catch { /* fall through to local scan */ }
    }
    if (logs.length === 0) {
      // localStorage fallback — scan the last 30 days
      for (let i = 0; i <= 30; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = d.toLocaleDateString("en-CA");
        const ents = loadLS(key);
        if (ents.length > 0) {
          logs.push({ date: key, entries: ents, total: ents.reduce((s, e) => s + e.calories, 0) });
        }
      }
    }
    logs.sort((a, b) => b.date.localeCompare(a.date));
    setHistory(logs);
    setLoadingHistory(false);
  }, [uid]);

  const total = entries.reduce((s, e) => s + e.calories, 0);
  const isToday = viewDate === today;

  return {
    entries, total, viewDate, setViewDate,
    addEntry, removeEntry,
    history, loadHistory, loadingHistory,
    today, isToday,
  };
}
