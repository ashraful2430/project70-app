"use client";
import { useState } from "react";
import { WEEK } from "@/lib/data";

export function useDay() {
  // JS getDay(): 0=Sun,1=Mon,...,6=Sat — matches our Day.id
  const todayId = new Date().getDay();
  const [selectedId, setSelectedId] = useState<number>(todayId);

  const day = WEEK.find((d) => d.id === selectedId) ?? WEEK[0];

  return { day, selectedId, setSelectedId, todayId };
}
