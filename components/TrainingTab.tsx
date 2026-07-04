"use client";
import { motion, type Variants } from "framer-motion";
import type { Day } from "@/types";
import {
  WARMUPS_BY_PHASE,
  MAIN_PROGRAM,
  MAIN_PROGRAM_ABS,
  PELVIC_PROGRAM,
  HEIGHT_EXERCISES,
} from "@/lib/data";
import ExerciseCard from "./ExerciseCard";
import { getWatchUrl } from "@/lib/youtube";

interface Props {
  day: Day;
  phaseIndex: number;
  planPhase: 0 | 1;
  isComplete: (id: string) => boolean;
  onToggle: (id: string) => void;
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function TrainingTab({ day, phaseIndex, planPhase, isComplete, onToggle }: Props) {
  const warmups = WARMUPS_BY_PHASE[planPhase] ?? WARMUPS_BY_PHASE[0];
  const warmup = warmups[day.id];

  const gymDayKey = day.abbr.toLowerCase() as "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
  const phase = MAIN_PROGRAM[phaseIndex];

  const isActiveRest = day.type === "active-rest";

  const mainExercises = (!isActiveRest && day.type === "gym")
    ? (phase[gymDayKey] ?? [])
    : [];

  // Phase 1 Wednesday (shoulders) has no built-in abs tri-set
  const absExercises = (planPhase === 0 && day.id === 3)
    ? MAIN_PROGRAM_ABS[phaseIndex]
    : [];

  const pelvicPhase = phaseIndex <= 0
    ? PELVIC_PROGRAM[0]
    : phaseIndex === 1
      ? PELVIC_PROGRAM[1]
      : PELVIC_PROGRAM[2];

  // Active rest kegel: Sunday uses sun set, all other active rest days use thu set
  const kegelExercises = isActiveRest
    ? (day.id === 0 ? pelvicPhase.sun : pelvicPhase.thu)
    : [];

  const homeExercises = day.type === "home" ? (day.exercises ?? []) : [];

  return (
    <div>
      {/* Warmup */}
      {warmup && (
        <>
          <p className="section-label">Warm-up · {warmup.label}</p>
          <motion.div variants={stagger} initial="hidden" animate="show">
            {warmup.items.map((item_data, i) => {
              const id = `wu-${day.id}-${i}`;
              const done = isComplete(id);
              return (
                <motion.div key={id} variants={item}>
                  <div
                    className="card-inner"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      marginBottom: 8,
                      borderLeft: `3px solid ${done ? "var(--green)" : "var(--border-hover)"}`,
                      opacity: done ? 0.7 : 1,
                      transition: "all 0.25s ease",
                    }}
                  >
                    <motion.button
                      className={`check-btn ${done ? "done" : ""}`}
                      onClick={() => onToggle(id)}
                      whileTap={{ scale: 0.85 }}
                      animate={done ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {done && <CheckIcon />}
                    </motion.button>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontWeight: 600, fontSize: 14,
                        color: done ? "var(--text-muted)" : "var(--text)",
                        textDecoration: done ? "line-through" : "none",
                        marginBottom: 2,
                      }}>
                        {item_data.name}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>{item_data.detail}</div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                        <span className="pill pill-purple">+{item_data.xp} XP</span>
                        <span className="pill pill-green">~{item_data.cal} cal</span>
                        <motion.a
                          href={getWatchUrl(item_data.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                            padding: "2px 10px",
                            borderRadius: 8,
                            background: "rgba(255,0,0,0.1)",
                            border: "1px solid rgba(255,0,0,0.25)",
                            color: "#f87171",
                            fontSize: 11,
                            fontWeight: 600,
                            textDecoration: "none",
                          }}
                          whileHover={{ scale: 1.04, background: "rgba(255,0,0,0.18)" }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <YouTubeIcon />
                          Watch form
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </>
      )}

      {/* Main gym exercises */}
      {day.type === "gym" && mainExercises.length > 0 && (
        <>
          <p className="section-label">
            Main exercises · {phase.label}
            <span className="pill pill-purple">{phase.levelRange}</span>
          </p>
          <div className="safety-note" style={{ marginBottom: 12 }}>
            These exercises change when you level up. Tap &ldquo;How to do it&rdquo; for the full form guide.
          </div>
          <motion.div variants={stagger} initial="hidden" animate="show">
            {mainExercises.map((ex) => {
              const id = `${day.id}-main-${ex.name.replace(/\W+/g, "_")}`;
              return (
                <motion.div key={id} variants={item}>
                  <ExerciseCard exercise={ex} completionId={id} done={isComplete(id)} onToggle={onToggle} />
                </motion.div>
              );
            })}
          </motion.div>
        </>
      )}

      {/* Abs section (Phase 1 Wednesday - optional extra abs) */}
      {absExercises.length > 0 && (
        <>
          <p className="section-label">Core & abs</p>
          <motion.div variants={stagger} initial="hidden" animate="show">
            {absExercises.map((ex) => {
              const id = `${day.id}-abs-${ex.name.replace(/\W+/g, "_")}`;
              return (
                <motion.div key={id} variants={item}>
                  <ExerciseCard exercise={ex} completionId={id} done={isComplete(id)} onToggle={onToggle} />
                </motion.div>
              );
            })}
          </motion.div>
        </>
      )}

      {/* Cardio finisher */}
      {day.finisher && (
        <>
          <p className="section-label">Cardio finisher</p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <div className="finisher-card">
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{day.finisher.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.55 }}>{day.finisher.detail}</div>
                </div>
                <motion.button
                  className={`check-btn ${isComplete(`fin-${day.id}`) ? "done" : ""}`}
                  onClick={() => onToggle(`fin-${day.id}`)}
                  style={{ marginTop: 2 }}
                  whileTap={{ scale: 0.85 }}
                  animate={isComplete(`fin-${day.id}`) ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {isComplete(`fin-${day.id}`) && <CheckIcon />}
                </motion.button>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <span className="pill pill-purple">+{day.finisher.xp} XP</span>
                <span className="pill pill-green">~{day.finisher.cal} cal</span>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Home recovery exercises */}
      {day.type === "home" && homeExercises.length > 0 && (
        <>
          <p className="section-label">Recovery route</p>
          <motion.div variants={stagger} initial="hidden" animate="show">
            {homeExercises.map((ex) => {
              const id = `${day.id}-home-${ex.name.replace(/\W+/g, "_")}`;
              return (
                <motion.div key={id} variants={item}>
                  <ExerciseCard exercise={ex} completionId={id} done={isComplete(id)} onToggle={onToggle} />
                </motion.div>
              );
            })}
          </motion.div>
        </>
      )}

      {/* ── ACTIVE REST DAY: Kegel + Height Training ─────────────────────────── */}
      {isActiveRest && (
        <>
          <ActiveRestBanner />

          {/* Kegel / Pelvic Floor */}
          {kegelExercises.length > 0 && (
            <>
              <p className="section-label">
                Pelvic floor · {pelvicPhase.label}
                <span className="pill pill-purple">{pelvicPhase.levelRange}</span>
              </p>
              <div className="safety-note" style={{ marginBottom: 12 }}>
                Private training — no one else needs to know. These exercises build real strength over time.
              </div>
              <motion.div variants={stagger} initial="hidden" animate="show">
                {kegelExercises.map((ex) => {
                  const id = `${day.id}-kegel-${ex.name.replace(/\W+/g, "_")}`;
                  return (
                    <motion.div key={id} variants={item}>
                      <ExerciseCard exercise={ex} completionId={id} done={isComplete(id)} onToggle={onToggle} />
                    </motion.div>
                  );
                })}
              </motion.div>
            </>
          )}

          {/* Height-increasing stretches */}
          <p className="section-label" style={{ marginTop: 20 }}>
            Height stretching · Spinal decompression
            <span className="pill pill-green">All phases</span>
          </p>
          <div className="safety-note" style={{ marginBottom: 12 }}>
            Done consistently on rest days, these stretches decompress the spine and correct posture —
            both add real visible height over weeks.
          </div>
          <motion.div variants={stagger} initial="hidden" animate="show">
            {HEIGHT_EXERCISES.map((ex) => {
              const id = `${day.id}-height-${ex.name.replace(/\W+/g, "_")}`;
              return (
                <motion.div key={id} variants={item}>
                  <ExerciseCard exercise={ex} completionId={id} done={isComplete(id)} onToggle={onToggle} />
                </motion.div>
              );
            })}
          </motion.div>
        </>
      )}
    </div>
  );
}

function ActiveRestBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      style={{
        background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(16,185,129,0.08))",
        border: "1px solid rgba(124,58,237,0.2)",
        borderRadius: 14,
        padding: "14px 18px",
        marginBottom: 20,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 14, color: "var(--purple)", marginBottom: 4 }}>
        Active Rest Day
      </div>
      <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        No gym today. Your muscles grow during rest — not during the workout.
        Do the kegel sequence and height stretches below, then sleep 7–8 hours tonight.
      </div>
    </motion.div>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7l3.5 3.5L12 3.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
