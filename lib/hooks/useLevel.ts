"use client";

// XP awarded per completed exercise
export const XP_PER_EXERCISE = 15;

// Cumulative XP needed to reach each level (index = level-1)
const XP_THRESHOLDS = [0, 525, 1500, 3000, 5550, 9000];

const RANKS  = ["E", "E+", "D", "D+", "C", "S"];
const TITLES = [
  "Initiate Hunter",
  "Bronze Hunter",
  "Iron Hunter",
  "Silver Hunter",
  "Gold Hunter",
  "Platinum Hunter",
];

export function xpToLevel(xp: number): number {
  for (let i = XP_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= XP_THRESHOLDS[i]) return i + 1;
  }
  return 1;
}

export function useLevel(totalCompleted: number) {
  const xp      = totalCompleted * XP_PER_EXERCISE;
  const level   = xpToLevel(xp);
  const maxLevel = level >= 6;

  const currentFloor = XP_THRESHOLDS[level - 1] ?? 0;
  const nextCeiling  = XP_THRESHOLDS[level]     ?? XP_THRESHOLDS[XP_THRESHOLDS.length - 1];
  const xpProgress   = maxLevel
    ? 100
    : Math.round(((xp - currentFloor) / (nextCeiling - currentFloor)) * 100);

  const xpIntoLevel = xp - currentFloor;
  const xpForNext   = nextCeiling - currentFloor;

  const phaseIndex = level <= 2 ? 0 : level <= 4 ? 1 : 2;

  return {
    xp, level, maxLevel, xpProgress, xpIntoLevel, xpForNext,
    phaseIndex,
    rank:  RANKS[level - 1]  ?? "E",
    title: TITLES[level - 1] ?? "Initiate Hunter",
  };
}
