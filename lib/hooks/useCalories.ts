"use client";
import { useState, useEffect, useCallback } from "react";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface CalEntry {
  id: string;
  name: string;
  amount: number;
  unit: string;
  calories: number;
  time: string;
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
  localStorage.setItem(lsKey(date), JSON.stringify(entries));
}

export function useCalories(uid: string | null) {
  const today = todayKey();
  const [entries, setEntries]     = useState<CalEntry[]>([]);
  const [history, setHistory]     = useState<DayLog[]>([]);
  const [viewDate, setViewDate]   = useState(today);
  const [loadingHistory, setLoadingHistory] = useState(false);

  // Load entries for the viewDate
  useEffect(() => {
    if (uid) {
      getDoc(doc(db, "users", uid, "calories", viewDate)).then((snap) => {
        if (snap.exists()) setEntries((snap.data().entries as CalEntry[]) ?? []);
        else setEntries([]);
      }).catch(() => setEntries([]));
    } else {
      setEntries(loadLS(viewDate));
    }
  }, [uid, viewDate]);

  const persist = useCallback((next: CalEntry[]) => {
    if (uid) {
      setDoc(doc(db, "users", uid, "calories", viewDate), {
        entries: next,
        total: next.reduce((s, e) => s + e.calories, 0),
        date: viewDate,
      }).catch(console.error);
    } else {
      saveLS(viewDate, next);
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
        const snap = await getDocs(collection(db, "users", uid, "calories"));
        snap.forEach(d => {
          const data = d.data();
          logs.push({ date: d.id, entries: data.entries ?? [], total: data.total ?? 0 });
        });
      } catch {}
    } else {
      // Read from localStorage for last 30 days
      for (let i = 1; i <= 30; i++) {
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
