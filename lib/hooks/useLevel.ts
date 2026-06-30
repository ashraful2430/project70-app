"use client";
import { useState, useCallback } from "react";

const KEY = "project70-level";
const RANKS = ["","E","E+","D","D+","C","B"];
const TITLES = ["","Initiate Hunter","Bronze Hunter","Iron Hunter","Silver Hunter","Gold Hunter","Platinum Hunter"];

export function useLevel() {
  const [level, setLevel] = useState<number>(() => {
    if (typeof window === "undefined") return 1;
    return Math.min(6, Math.max(1, Number(localStorage.getItem(KEY) || 1)));
  });

  const upgrade = useCallback(() => {
    setLevel((prev) => {
      const next = Math.min(6, prev + 1);
      localStorage.setItem(KEY, String(next));
      return next;
    });
  }, []);

  const phaseIndex = level <= 2 ? 0 : level <= 4 ? 1 : 2;
  const xpForLevel = [0, 0, 1000, 2500, 4500, 7000, 10000];
  const xpNext = [1000, 1000, 2500, 4500, 7000, 10000, 10000];
  const xpProgress = level >= 6 ? 100 : Math.round(((xpForLevel[level]) / xpNext[level]) * 100);

  return {
    level,
    upgrade,
    phaseIndex,
    rank: RANKS[level] || "E",
    title: TITLES[level] || "Initiate Hunter",
    xpProgress,
    maxLevel: level >= 6,
  };
}
