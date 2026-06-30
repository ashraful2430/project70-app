"use client";
import { useState, useCallback, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const LS_KEY = "project70-done";

function loadLS(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch { return {}; }
}

export function useCompletion(uid?: string | null) {
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (uid) {
      getDoc(doc(db, "users", uid)).then((snap) => {
        if (snap.exists() && snap.data().completions) {
          setDone(snap.data().completions as Record<string, boolean>);
        }
      }).catch(console.error);
    } else {
      setDone(loadLS());
    }
  }, [uid]);

  const toggle = useCallback((id: string) => {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      if (uid) {
        setDoc(doc(db, "users", uid), { completions: next }, { merge: true }).catch(console.error);
      } else {
        localStorage.setItem(LS_KEY, JSON.stringify(next));
      }
      return next;
    });
  }, [uid]);

  const resetCompletions = useCallback(() => {
    setDone({});
    if (uid) {
      setDoc(doc(db, "users", uid), { completions: {} }, { merge: true }).catch(console.error);
    } else {
      localStorage.setItem(LS_KEY, "{}");
    }
  }, [uid]);

  const isComplete     = useCallback((id: string) => !!done[id], [done]);
  const countCompleted = useCallback((ids: string[]) => ids.filter((id) => done[id]).length, [done]);
  const totalCompleted = Object.values(done).filter(Boolean).length;

  return { toggle, isComplete, countCompleted, totalCompleted, resetCompletions };
}
