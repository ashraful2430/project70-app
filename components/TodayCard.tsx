"use client";
import type { Day } from "@/types";
import { WARMUPS_BY_DAY, MAIN_PROGRAM, MAIN_PROGRAM_ABS, PELVIC_PROGRAM } from "@/lib/data";

interface Props {
  day: Day;
  phaseIndex: number;
  countCompleted: (ids: string[]) => number;
}

export default function TodayCard({ day, phaseIndex, countCompleted }: Props) {
  const ids: string[] = [];
  const warmup = WARMUPS_BY_DAY[day.id];
  if (warmup) warmup.items.forEach((_, i) => ids.push(`wu-${day.id}-${i}`));

  if (day.type === "gym") {
    const phase = MAIN_PROGRAM[phaseIndex];
    const gymKey = day.abbr.toLowerCase() as "mon" | "tue" | "wed" | "fri" | "sat";
    (phase[gymKey] ?? []).forEach((ex) => ids.push(`${day.id}-main-${ex.name.replace(/\W+/g, "_")}`));
    if (day.id === 3) {
      MAIN_PROGRAM_ABS[phaseIndex].forEach((ex) => ids.push(`${day.id}-abs-${ex.name.replace(/\W+/g, "_")}`));
    }
    if (day.finisher) ids.push(`fin-${day.id}`);
  } else {
    (day.exercises ?? []).forEach((ex) => ids.push(`${day.id}-home-${ex.name.replace(/\W+/g, "_")}`));
    const pelvicPhase = PELVIC_PROGRAM[phaseIndex];
    const pelvicEx = day.id === 4 ? pelvicPhase.thu : day.id === 0 ? pelvicPhase.sun : [];
    pelvicEx.forEach((ex) => ids.push(`${day.id}-pelvic-${ex.name.replace(/\W+/g, "_")}`));
  }

  const total = ids.length;
  const completed = countCompleted(ids);
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  return (
    <div
      className="card"
      style={{
        borderLeft: "3px solid var(--purple)",
        background: "linear-gradient(135deg, var(--surface), rgba(124,58,237,0.07))",
      }}
    >
      {/* Date + quest count */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 3 }}>{dateStr}</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text)" }}>{day.day}</div>
          <div style={{ fontSize: 13, color: "var(--purple-light)", marginTop: 3, fontWeight: 500 }}>{day.focus}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 36, fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>{completed}</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>of {total} quests</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-track" style={{ marginBottom: 6 }}>
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{pct}% complete today</span>
        {pct === 100 && (
          <span style={{ fontSize: 11, color: "var(--green)", fontWeight: 700 }}>All done!</span>
        )}
      </div>

      {/* Day note */}
      {day.note && (
        <div className="safety-note" style={{ marginTop: 12, fontSize: 11 }}>
          {day.note}
        </div>
      )}
    </div>
  );
}
