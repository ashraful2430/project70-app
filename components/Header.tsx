"use client";
import { motion } from "framer-motion";
import type { User } from "firebase/auth";

interface Props {
  level: number;
  rank: string;
  title: string;
  xp: number;
  xpIntoLevel: number;
  xpForNext: number;
  xpProgress: number;
  maxLevel: boolean;
  onProfile: () => void;
  user: User | null;
}

export default function Header({
  level, rank, title, xp, xpIntoLevel, xpForNext, xpProgress, maxLevel, onProfile, user,
}: Props) {
  return (
    <div
      className="card"
      style={{
        background: "linear-gradient(135deg, var(--surface), rgba(124,58,237,0.1))",
        borderColor: "rgba(124,58,237,0.22)",
      }}
    >
      {/* Title row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 4 }}>
            Project 70
          </div>
          <div style={{
            fontSize: 26, fontWeight: 900, lineHeight: 1.1,
            background: "linear-gradient(90deg, var(--purple-light), var(--gold-light))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Solo Hunter
          </div>
        </div>

        {/* Avatar — tap to open profile */}
        <motion.button
          onClick={onProfile}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          <div
            className="glow-gold"
            style={{
              width: 46, height: 46, borderRadius: "50%",
              border: "2px solid var(--gold)",
              overflow: "hidden", flexShrink: 0,
              background: "linear-gradient(135deg, var(--purple), #4c1d95)",
            }}
          >
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
                  if (el.parentElement) {
                    el.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:var(--gold)">A</div>`;
                  }
                }}
              />
            )}
          </div>
        </motion.button>
      </div>

      {/* Name + email */}
      {user && (
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
            {user.displayName ?? "Ashikur"}
          </div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{user.email}</div>
        </div>
      )}

      {/* Rank + level badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 10,
          background: "linear-gradient(135deg, var(--purple), #4c1d95)",
          border: "1px solid rgba(167,139,250,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14, fontWeight: 900, color: "#fff",
          flexShrink: 0,
        }}>
          {level}
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>
            Rank {rank} — {title}
          </div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
            {maxLevel ? "Maximum level reached" : `Level ${level} → ${level + 1}`}
          </div>
        </div>
      </div>

      {/* XP bar */}
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase" }}>
            Experience
          </span>
          <span style={{ fontSize: 11, color: "var(--purple-light)", fontWeight: 700 }}>
            {maxLevel ? `${xp} XP — MAX` : `${xpIntoLevel} / ${xpForNext} XP`}
          </span>
        </div>
        <div className="progress-track">
          <motion.div
            className="xp-bar-fill"
            style={{ height: "100%", borderRadius: "inherit" }}
            initial={{ width: 0 }}
            animate={{ width: `${xpProgress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 5, textAlign: "right" }}>
          {xp} total XP · {Math.round(xp / 15)} exercises done
        </div>
      </div>
    </div>
  );
}
