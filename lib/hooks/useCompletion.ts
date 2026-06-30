"use client";
import { useState, useCallback } from "react";

const KEY = "project70-done";

function load(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; }
}

export function useCompletion() {
  const [done, setDone] = useState<Record<string, boolean>>(load);

  const toggle = useCallback((id: string) => {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isComplete = useCallback((id: string) => !!done[id], [done]);

  const countCompleted = useCallback(
    (ids: string[]) => ids.filter((id) => done[id]).length,
    [done]
  );

  return { toggle, isComplete, countCompleted };
}
