"use client";
import { useState } from "react";
import type { Day } from "@/types";
import { WEEK } from "@/lib/data";

export function useDay(week?: Day[]) {
  // JS getDay(): 0=Sun,1=Mon,...,6=Sat — matches our Day.id
  const todayId = new Date().getDay();
  const [selectedId, setSelectedId] = useState<number>(todayId);

  const activeWeek = week ?? WEEK;
  const day = activeWeek.find((d) => d.id === selectedId) ?? activeWeek[0];

  return { day, selectedId, setSelectedId, todayId };
}
