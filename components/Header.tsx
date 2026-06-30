"use client";

interface Props {
  level: number;
  rank: string;
  title: string;
  xpProgress: number;
  maxLevel: boolean;
  onUpgrade: () => void;
  onProfile: () => void;
}

export default function Header({ level, rank, title, xpProgress, maxLevel, onUpgrade, onProfile }: Props) {
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
          <div
            style={{
              fontSize: 26,
              fontWeight: 900,
              background: "linear-gradient(90deg, var(--purple-light), var(--gold-light))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.1,
            }}
          >
            Solo Hunter
          </div>
        </div>
        <button onClick={onProfile} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <div className="level-badge glow-gold">{level}</div>
        </button>
      </div>

      {/* Rank + upgrade */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="pill pill-purple">Rank {rank}</span>
          <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>{title}</span>
        </div>
        <button className="upgrade-btn" onClick={onUpgrade} disabled={maxLevel}>
          {maxLevel ? "MAX LEVEL" : `Upgrade → Lv.${level + 1}`}
        </button>
      </div>

      {/* XP bar */}
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase" }}>
            Experience
          </span>
          <span style={{ fontSize: 11, color: "var(--purple-light)", fontWeight: 700 }}>{xpProgress}%</span>
        </div>
        <div className="progress-track">
          <div className="xp-bar-fill" style={{ height: "100%", width: `${xpProgress}%`, borderRadius: "inherit" }} />
        </div>
      </div>
    </div>
  );
}
