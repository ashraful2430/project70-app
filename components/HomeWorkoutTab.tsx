"use client";
import { motion, type Variants } from "framer-motion";
import type { Day } from "@/types";
import { MAIN_PROGRAM, homeAltFor } from "@/lib/data";
import { getWatchUrl } from "@/lib/youtube";

interface Props {
  day: Day;
  planPhase: 0 | 1;
}

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function HomeWorkoutTab({ day, planPhase }: Props) {
  const phase = MAIN_PROGRAM[planPhase] ?? MAIN_PROGRAM[0];
  const gymDayKey = day.abbr.toLowerCase() as "mon" | "tue" | "wed" | "thu" | "sat";
  const exercises = day.type === "gym" ? (phase[gymDayKey] ?? []) : [];

  if (day.type !== "gym") {
    return (
      <div className="card" style={{ textAlign: "center", padding: "28px 20px" }}>
        <div style={{ fontSize: 32, marginBottom: 8 }}>🏠</div>
        <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 6 }}>
          {day.focus} — no gym workout today
        </div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
          This is a rest day. Do the kegel + height stretches from the Training tab, and get a walk in for steps.
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{
        background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(59,130,246,0.08))",
        border: "1px solid rgba(16,185,129,0.22)",
        borderRadius: 14, padding: "14px 18px", marginBottom: 16,
      }}>
        <div style={{ fontWeight: 800, fontSize: 14, color: "var(--green)", marginBottom: 4 }}>
          🏠 Home version — {day.focus}
        </div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
          Can't make the gym? Do these at home instead — same muscles, same order. Most of it needs only a
          <strong style={{ color: "var(--text)" }}> backpack, 2 water bottles, a chair, a towel, and a doorframe.</strong>
        </div>
      </div>

      <motion.div variants={stagger} initial="hidden" animate="show">
        {exercises.map((ex, i) => {
          const alt = homeAltFor(ex.name);
          const gymName = ex.name.replace(/^★\s*/, "").replace(/\s*\([^)]*\)\s*$/, "");
          return (
            <motion.div key={`${ex.name}-${i}`} variants={item}>
              <div className="card-inner" style={{ marginBottom: 8 }}>
                {/* gym → home */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                  <span style={{ fontSize: 11, color: "var(--text-muted)", textDecoration: "line-through" }}>
                    {gymName}
                  </span>
                  <span style={{ color: "var(--text-muted)", fontSize: 12 }}>→</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>
                    {alt ? alt.home : gymName}
                  </span>
                  <span className="muscle-tag">{ex.target}</span>
                </div>

                {alt ? (
                  <>
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 8 }}>
                      <Stat label="Sets × Reps" value={alt.setsReps} />
                      <Stat label="Rest" value={ex.rest} />
                    </div>
                    <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 8 }}>
                      {alt.how}
                    </p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, color: "var(--gold-light)",
                        padding: "3px 10px", borderRadius: 20,
                        background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)",
                      }}>
                        🧰 {alt.equipment}
                      </span>
                      <motion.a
                        href={getWatchUrl(alt.home)}
                        target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 5,
                          padding: "3px 10px", borderRadius: 8,
                          background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.25)",
                          color: "#f87171", fontSize: 11, fontWeight: 600, textDecoration: "none",
                        }}
                      >
                        <YouTubeIcon /> Watch form
                      </motion.a>
                    </div>
                  </>
                ) : (
                  <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
                    No home swap needed — do it as bodyweight, or skip if you have no equipment.
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 9.5, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--green)" }}>{value}</div>
    </div>
  );
}

function YouTubeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
