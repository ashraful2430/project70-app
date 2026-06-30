"use client";
import type { Day } from "@/types";
import { DIET } from "@/lib/data";
import MealCard from "./MealCard";

export default function DietTab({ day }: { day: Day }) {
  const dietDay = DIET.find((d) => d.weekday === day.abbr);

  if (!dietDay) {
    return (
      <div className="card" style={{ textAlign: "center", padding: "32px 16px", color: "var(--text-muted)" }}>
        No diet data for this day.
      </div>
    );
  }

  const totalKcal = dietDay.meals.reduce((sum, m) => sum + (m.info.kcal ?? 0), 0);

  return (
    <div>
      <div
        className="card"
        style={{
          borderLeft: "3px solid var(--gold)",
          marginBottom: 16,
          background: "linear-gradient(135deg, var(--surface), rgba(245,158,11,0.05))",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text)", marginBottom: 6 }}>{dietDay.type}</div>
        {totalKcal > 0 && (
          <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65 }}>
            Today&apos;s plan totals{" "}
            <strong style={{ color: "var(--gold)" }}>~{totalKcal} kcal</strong>.
            Tap <em style={{ color: "var(--purple-light)" }}>View recipe</em> on any meal for step-by-step instructions.
          </div>
        )}
      </div>

      {dietDay.meals.map((meal, i) => (
        <MealCard key={i} meal={meal} />
      ))}
    </div>
  );
}
