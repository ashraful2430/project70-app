"use client";
import { motion } from "framer-motion";

interface Props {
  phaseIndex: number;
  level: number;
}

const PHASES = [
  {
    label: "Foundation",
    range: "Level 1 – 2",
    desc: "Learn every movement. Build the gym habit. Establish baseline strength.",
    next: "Build Strength",
    nextLevel: 3,
    color: "var(--purple)",
  },
  {
    label: "Build Strength",
    range: "Level 3 – 4",
    desc: "Add weight, increase volume. The body adapts fast — muscle begins to show.",
    next: "Advanced",
    nextLevel: 5,
    color: "var(--gold)",
  },
  {
    label: "Advanced",
    range: "Level 5 – 6",
    desc: "Complex movements. Maximum intensity. This is where the real transformation happens.",
    next: null,
    nextLevel: null,
    color: "#f87171",
  },
];

export default function SidebarStats({ phaseIndex, level }: Props) {
  const phase = PHASES[phaseIndex] ?? PHASES[0];
  const levelInPhase = phaseIndex === 0 ? level : phaseIndex === 1 ? level - 2 : level - 4;
  const phasePct = Math.min(100, Math.round((levelInPhase / 2) * 100));

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="card"
      style={{ borderLeft: `3px solid ${phase.color}` }}
    >
      <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "1.6px", textTransform: "uppercase", marginBottom: 6 }}>
        Training Phase
      </div>

      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 17, fontWeight: 800, color: "var(--text)" }}>{phase.label}</span>
        <span className="pill pill-purple">{phase.range}</span>
      </div>

      <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 14 }}>
        {phase.desc}
      </p>

      {/* Phase progress */}
      <div style={{ marginBottom: 4 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
          <span style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.8px" }}>
            Phase progress
          </span>
          <span style={{ fontSize: 11, color: phase.color, fontWeight: 700 }}>{phasePct}%</span>
        </div>
        <div className="progress-track">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${phasePct}%` }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            style={{ background: `linear-gradient(90deg, ${phase.color}, ${phase.color}aa)` }}
          />
        </div>
      </div>

      {phase.next && (
        <div style={{ marginTop: 10, padding: "8px 10px", borderRadius: 8, background: "rgba(124,58,237,0.07)", border: "1px dashed var(--border-hover)" }}>
          <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 2 }}>
            Next phase
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)" }}>
            {phase.next} <span style={{ color: "var(--purple-light)" }}>· Lv.{phase.nextLevel}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
