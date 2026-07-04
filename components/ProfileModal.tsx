"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { User } from "firebase/auth";

interface Props {
  level: number;
  rank: string;
  title: string;
  user: User | null;
  onClose: () => void;
  onSignOut: () => void;
  onReset: () => void;
}

const STAGES = [
  { level: 1, label: "Initiate",  icon: "🧍" },
  { level: 2, label: "Trainee",   icon: "🏃" },
  { level: 3, label: "Fighter",   icon: "💪" },
  { level: 4, label: "Hunter",    icon: "⚔️" },
  { level: 5, label: "Elite",     icon: "🔥" },
  { level: 6, label: "Legend",    icon: "👑" },
];

const PHASE_INFO = [
  { range: "1–2", label: "Foundation",     desc: "Learn the movements. Build the habit. Establish baseline strength." },
  { range: "3–4", label: "Build Strength", desc: "Add weight, increase volume. The body adapts. Muscle shows." },
  { range: "5–6", label: "Advanced",       desc: "Complex movements, maximum intensity. Real transformation." },
];

export default function ProfileModal({ level, rank, title, user, onClose, onSignOut, onReset }: Props) {
  const [confirmReset, setConfirmReset] = useState(false);

  function handleReset() {
    onReset();
    setConfirmReset(false);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-sheet"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <h2 style={{
            fontWeight: 800, fontSize: 20,
            background: "linear-gradient(90deg, var(--purple-light), var(--gold-light))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Hunter Profile
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "var(--surface2)", border: "1px solid var(--border)",
              color: "var(--text-muted)", cursor: "pointer",
              width: 34, height: 34, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, transition: "all 0.2s", flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* User identity card */}
        <div
          className="card"
          style={{
            textAlign: "center", marginBottom: 20,
            borderColor: "rgba(245,158,11,0.35)",
            background: "linear-gradient(135deg, var(--surface), rgba(245,158,11,0.06))",
          }}
        >
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            border: "3px solid var(--gold)",
            margin: "0 auto 12px",
            overflow: "hidden",
            background: "linear-gradient(135deg, var(--purple), #4c1d95)",
            boxShadow: "0 0 20px rgba(245,158,11,0.25)",
          }}>
            {user?.photoURL ? (
              <img src={user.photoURL} alt="You" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <img
                src="/SAVE_20260109_010635.jpg"
                alt="Ashikur"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  el.parentElement!.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:900;color:var(--gold)">A</div>`;
                }}
              />
            )}
          </div>

          <div style={{ fontSize: 18, fontWeight: 800, color: "var(--text)", marginBottom: 2 }}>
            {user?.displayName ?? "Ashikur"}
          </div>
          {user?.email && (
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 10 }}>{user.email}</div>
          )}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: "var(--gold)" }}>Rank {rank}</div>
          </div>
          <div style={{ fontSize: 13, color: "var(--purple-light)" }}>{title}</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>Level {level} Hunter</div>
        </div>

        {/* Progression ladder */}
        <p className="section-label">Progression ladder</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
          {STAGES.map((s) => (
            <div
              key={s.level}
              className="card-inner"
              style={{
                display: "flex", alignItems: "center", gap: 14,
                borderLeft: s.level === level ? "3px solid var(--gold)" : "3px solid var(--border)",
                opacity: s.level > level ? 0.32 : 1,
              }}
            >
              <span style={{ fontSize: 24 }}>{s.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: s.level === level ? "var(--gold)" : "var(--text)" }}>
                  Level {s.level} — {s.label}
                </div>
              </div>
              {s.level < level  && <span style={{ fontSize: 12, color: "var(--green)", fontWeight: 600 }}>✓ Done</span>}
              {s.level === level && <span className="pill pill-gold">Current</span>}
              {s.level > level  && <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Locked</span>}
            </div>
          ))}
        </div>

        {/* Training phases */}
        <p className="section-label">Training phases</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
          {PHASE_INFO.map((p, i) => (
            <div key={i} className="card-inner">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontSize: 13 }}>{p.label}</span>
                <span className="pill pill-purple">Level {p.range}</span>
              </div>
              <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Goal stats */}
        <p className="section-label">Your goal</p>
        <div className="card-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 20px", marginBottom: 20 }}>
          {[
            { label: "Current weight", val: "86 kg" },
            { label: "Target weight",  val: "70 kg" },
            { label: "To lose",        val: "16 kg" },
            { label: "Weekly sessions", val: "5 gym days" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--gold)" }}>{stat.val}</div>
            </div>
          ))}
        </div>

        {/* Reset progress */}
        <p className="section-label">Danger zone</p>
        <AnimatePresence mode="wait">
          {!confirmReset ? (
            <motion.button
              key="reset-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setConfirmReset(true)}
              style={{
                width: "100%", padding: "12px",
                borderRadius: 12, cursor: "pointer",
                background: "rgba(245,158,11,0.07)",
                border: "1px solid rgba(245,158,11,0.22)",
                color: "var(--gold)", fontSize: 13, fontWeight: 600,
                transition: "all 0.2s ease", marginBottom: 10,
              }}
            >
              🔄 Reset all progress
            </motion.button>
          ) : (
            <motion.div
              key="reset-confirm"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.3)",
                borderRadius: 12, padding: "14px 16px",
                marginBottom: 10,
              }}
            >
              <p style={{ fontSize: 13, color: "var(--text)", fontWeight: 600, marginBottom: 4 }}>
                Delete ALL data? Exercises, calorie logs, recipes, macros and body stats. Level resets to 1.
              </p>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 12 }}>
                This wipes Firebase + local data. It cannot be undone.
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={handleReset}
                  style={{
                    flex: 1, padding: "10px",
                    borderRadius: 10, cursor: "pointer",
                    background: "rgba(239,68,68,0.12)",
                    border: "1px solid rgba(239,68,68,0.35)",
                    color: "#f87171", fontSize: 13, fontWeight: 700,
                  }}
                >
                  Yes, reset
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  style={{
                    flex: 1, padding: "10px",
                    borderRadius: 10, cursor: "pointer",
                    background: "var(--surface2)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)", fontSize: 13, fontWeight: 600,
                  }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sign out */}
        {user && (
          <button
            onClick={onSignOut}
            style={{
              width: "100%", padding: "12px",
              borderRadius: 12, cursor: "pointer",
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.25)",
              color: "#f87171", fontSize: 13, fontWeight: 600,
              transition: "all 0.2s ease",
            }}
          >
            Sign out
          </button>
        )}
      </motion.div>
    </div>
  );
}
