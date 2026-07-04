"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Model from "react-body-highlighter";
import type { Exercise } from "@/types";
import { NO_EQUIPMENT_ALT } from "@/lib/data";
import { getWatchUrl } from "@/lib/youtube";
import { getMuscleData } from "@/lib/muscleMap";

interface Props {
  exercise: Exercise;
  completionId: string;
  done: boolean;
  onToggle: (id: string) => void;
  category?: string;
}

export default function ExerciseCard({ exercise, completionId, done, onToggle, category }: Props) {
  const [expanded, setExpanded] = useState(false);
  const alt = NO_EQUIPMENT_ALT[exercise.name];
  const muscleData = getMuscleData(exercise.target);

  return (
    <motion.div
      layout
      className="card-inner"
      style={{
        borderLeft: `3px solid ${done ? "var(--green)" : "var(--border-hover)"}`,
        marginBottom: 8,
        transition: "border-color 0.3s ease",
      }}
      animate={{ opacity: done ? 0.7 : 1 }}
      transition={{ duration: 0.25 }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        {/* Completion toggle */}
        <motion.button
          className={`check-btn ${done ? "done" : ""}`}
          onClick={() => onToggle(completionId)}
          aria-label={done ? "Mark incomplete" : "Mark complete"}
          style={{ marginTop: 1 }}
          whileTap={{ scale: 0.85 }}
          animate={done ? { scale: [1, 1.25, 1] } : { scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <AnimatePresence>
            {done && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
              >
                <CheckIcon />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Name + tags */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
            <span
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: done ? "var(--text-muted)" : "var(--text)",
                textDecoration: done ? "line-through" : "none",
                transition: "all 0.2s ease",
              }}
            >
              {exercise.name}
            </span>
            <span className="muscle-tag">{exercise.target}</span>
            {category && <span className="pill pill-blue">{category}</span>}
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 8 }}>
            <Stat label="Sets" value={String(exercise.sets)} />
            <Stat label="Reps" value={exercise.reps} />
            <Stat label="Rest" value={exercise.rest} />
            <Stat label="Cal" value={`~${exercise.calories}`} />
          </div>

          {/* Cue */}
          <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 8 }}>
            {exercise.cue}
          </p>

          {/* Action row: Watch Form + expand */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            {/* YouTube Watch Form button */}
            <motion.a
              href={getWatchUrl(exercise.name)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                borderRadius: 8,
                background: "rgba(255, 0, 0, 0.1)",
                border: "1px solid rgba(255, 0, 0, 0.25)",
                color: "#f87171",
                fontSize: 12,
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              whileHover={{ scale: 1.03, background: "rgba(255,0,0,0.18)" }}
              whileTap={{ scale: 0.97 }}
            >
              <YouTubeIcon />
              Watch form
            </motion.a>

            {/* Expand steps */}
            {exercise.steps.length > 0 && (
              <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
                <span>{expanded ? "▲" : "▼"}</span>
                <span>{expanded ? "Hide steps" : "How to do it"}</span>
              </button>
            )}
          </div>

          {/* No-gym alternative */}
          {alt && (
            <div className="safety-note" style={{ marginTop: 10 }}>
              <strong style={{ color: "var(--gold)", fontSize: 11 }}>No gym?</strong>{" "}
              <span style={{ fontSize: 12 }}>{alt}</span>
            </div>
          )}

          {/* Steps accordion */}
          <div className={`recipe-content ${expanded ? "open" : ""}`}>
            <ol className="step-list" style={{ marginTop: 12 }}>
              {exercise.steps.map((step, i) => (
                <li key={i}>
                  <span className="step-num">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Muscle map — which area this exercise hits */}
        {muscleData && (
          <div style={{
            flexShrink: 0, width: 74, textAlign: "center",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
          }}>
            <Model
              type={muscleData.view}
              data={[{ name: exercise.name, muscles: muscleData.muscles }]}
              highlightedColors={["#a78bfa"]}
              bodyColor="#33333f"
              style={{ width: 64, padding: 0 }}
            />
            <span style={{
              fontSize: 9, color: "var(--text-muted)",
              textTransform: "uppercase", letterSpacing: "0.5px",
            }}>
              {muscleData.view === "anterior" ? "Front" : "Back"}
            </span>
            <span style={{ fontSize: 9, color: "#a78bfa", fontWeight: 600, lineHeight: 1.3 }}>
              {exercise.target}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 9.5, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gold)" }}>{value}</div>
    </div>
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
