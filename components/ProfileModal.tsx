"use client";

interface Props {
  level: number;
  rank: string;
  title: string;
  onClose: () => void;
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

export default function ProfileModal({ level, rank, title, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 20,
              background: "linear-gradient(90deg, var(--purple-light), var(--gold-light))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hunter Profile
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "var(--surface2)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              cursor: "pointer",
              width: 34,
              height: 34,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              transition: "all 0.2s",
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* Rank card */}
        <div
          className="card"
          style={{
            textAlign: "center",
            marginBottom: 20,
            borderColor: "rgba(245,158,11,0.35)",
            background: "linear-gradient(135deg, var(--surface), rgba(245,158,11,0.06))",
          }}
        >
          <div style={{ fontSize: 52, marginBottom: 10 }}>{STAGES[level - 1]?.icon}</div>
          <div style={{ fontSize: 24, fontWeight: 900, color: "var(--gold)" }}>Rank {rank}</div>
          <div style={{ fontSize: 14, color: "var(--purple-light)", marginTop: 3 }}>{title}</div>
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
                display: "flex",
                alignItems: "center",
                gap: 14,
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
              {s.level < level && <span style={{ fontSize: 12, color: "var(--green)", fontWeight: 600 }}>✓ Done</span>}
              {s.level === level && <span className="pill pill-gold">Current</span>}
              {s.level > level && <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Locked</span>}
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
        <div
          className="card-inner"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 20px" }}
        >
          {[
            { label: "Current weight", val: "86 kg" },
            { label: "Target weight",  val: "70 kg" },
            { label: "To lose",        val: "16 kg" },
            { label: "Weekly sessions",val: "5 gym days" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--gold)" }}>{stat.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
