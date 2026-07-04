"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Model, { type IMuscleStats, type Muscle } from "react-body-highlighter";

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = "push" | "pull" | "legs" | "core";
type View = "front" | "back";

interface MuscleInfo {
  id: string;
  label: string;
  shortLabel: string;
  desc: string;
  exercises: string[];
  category: Category;
  accent: string;
  views: View[];
}

// ─── Muscle Data ──────────────────────────────────────────────────────────────

const MUSCLES: MuscleInfo[] = [
  {
    id: "trap", label: "Trapezius", shortLabel: "Trapezius",
    desc: "Diamond-shaped muscle covering the upper back. Upper fibers shrug the shoulder; middle fibers retract the shoulder blades; lower fibers depress them. Key for posture and neck/shoulder stability.",
    exercises: ["Barbell Shrug", "Dumbbell Shrug", "Face Pull", "Rack Pull", "Farmer's Carry"],
    category: "pull", accent: "#60a5fa", views: ["front", "back"],
  },
  {
    id: "delt", label: "Deltoids (Shoulders)", shortLabel: "Shoulders",
    desc: "Three-headed muscle wrapping the shoulder joint. Front head presses forward; lateral head raises sideways (creates width); rear head extends and externally rotates. Train all three for round shoulders.",
    exercises: ["Overhead Press", "Lateral Raise", "Arnold Press", "Rear Delt Fly", "Face Pull"],
    category: "push", accent: "#a78bfa", views: ["front", "back"],
  },
  {
    id: "pec", label: "Pectoralis Major (Chest)", shortLabel: "Chest",
    desc: "Large fan-shaped chest muscle. Clavicular head handles upper chest pressing; sternal head does most horizontal pushing. Responds to flat, incline, and cable variations differently.",
    exercises: ["Bench Press", "Incline Dumbbell Press", "Cable Crossover", "Dips", "Push-Up"],
    category: "push", accent: "#fb923c", views: ["front"],
  },
  {
    id: "serratus", label: "Serratus Anterior", shortLabel: "Serratus",
    desc: "The 'boxer's muscle' — finger-like projections on the ribcage. Protracts and rotates the scapula upward. Visible as 'gills' on lean athletes. Weak serratus causes winging scapula.",
    exercises: ["Push-Up Plus", "Ab Rollout", "Landmine Press", "Overhead Press"],
    category: "push", accent: "#2dd4bf", views: ["front"],
  },
  {
    id: "biceps", label: "Biceps Brachii", shortLabel: "Biceps",
    desc: "Two-headed elbow flexor and forearm supinator. Long head (outer) creates the peak; short head (inner) adds width. Works best through full range — all the way down matters as much as all the way up.",
    exercises: ["Barbell Curl", "Hammer Curl", "Incline Dumbbell Curl", "Preacher Curl", "Cable Curl"],
    category: "pull", accent: "#34d399", views: ["front"],
  },
  {
    id: "triceps", label: "Triceps Brachii", shortLabel: "Triceps",
    desc: "Three-headed arm extensor — 2/3 of upper arm size. Long head needs overhead extension to fully stretch; lateral head creates the horseshoe shape; medial head is always active during pressing.",
    exercises: ["Rope Pushdown", "Overhead Extension", "Skull Crusher", "Close-Grip Bench", "Weighted Dips"],
    category: "push", accent: "#f472b6", views: ["back"],
  },
  {
    id: "forearm", label: "Forearms", shortLabel: "Forearms",
    desc: "Flexors (front) control grip and wrist curl; extensors (back) stabilize the wrist under load. Grip strength directly limits pulling performance.",
    exercises: ["Wrist Curl", "Reverse Curl", "Farmer's Walk", "Dead Hang", "Plate Pinch"],
    category: "pull", accent: "#fbbf24", views: ["front", "back"],
  },
  {
    id: "abs", label: "Rectus Abdominis (Abs)", shortLabel: "Abs",
    desc: "The six-pack — one muscle sheet divided by tendinous intersections. Flexes the lumbar spine. Visible only at low body fat (under 12–14% for men). Core strength protects the spine in all heavy lifts.",
    exercises: ["Hanging Leg Raise", "Cable Crunch", "Ab Wheel Rollout", "Dragon Flag", "Decline Sit-Up"],
    category: "core", accent: "#f87171", views: ["front"],
  },
  {
    id: "oblique", label: "External Obliques", shortLabel: "Obliques",
    desc: "Diagonal abdominal muscles on the sides of the waist. Rotate and laterally bend the torso. Give the V-cut appearance and are essential for rotational power in sports.",
    exercises: ["Russian Twist", "Side Plank", "Pallof Press", "Woodchop", "Landmine Rotation"],
    category: "core", accent: "#c084fc", views: ["front"],
  },
  {
    id: "lats", label: "Latissimus Dorsi (Lats)", shortLabel: "Lats",
    desc: "Largest upper-body muscle — the 'wings'. Runs from armpit to lower back. Adducts and extends the arm. Primary driver of the V-taper silhouette. Pull-ups and rows are king.",
    exercises: ["Pull-Up", "Lat Pulldown", "Bent-Over Row", "T-Bar Row", "Single-Arm Row"],
    category: "pull", accent: "#38bdf8", views: ["back"],
  },
  {
    id: "rhomboid", label: "Rhomboids & Mid-Trap", shortLabel: "Rhomboids",
    desc: "Between the shoulder blades — retract and elevate the scapula. Chronically weak in desk workers, causing rounded shoulders. Rows and face pulls are the fix.",
    exercises: ["Face Pull", "Chest-Supported Row", "Seated Cable Row", "Band Pull-Apart"],
    category: "pull", accent: "#86efac", views: ["back"],
  },
  {
    id: "erector", label: "Erector Spinae (Lower Back)", shortLabel: "Lower Back",
    desc: "Column of muscles running the length of the spine. Extends and stabilizes the back under load. The 'Christmas tree' shape when developed. Critical for deadlift and squat safety.",
    exercises: ["Deadlift", "Back Extension", "Romanian Deadlift", "Good Morning", "Hyperextension"],
    category: "pull", accent: "#a3e635", views: ["back"],
  },
  {
    id: "glutes", label: "Gluteus Maximus (Glutes)", shortLabel: "Glutes",
    desc: "Largest muscle in the body. Extends and externally rotates the hip. Powers sprinting, jumping, and heavy lifting. Weak glutes force the lower back to compensate.",
    exercises: ["Hip Thrust", "Squat", "Romanian Deadlift", "Glute Bridge", "Bulgarian Split Squat"],
    category: "legs", accent: "#f9a8d4", views: ["back"],
  },
  {
    id: "quads", label: "Quadriceps (Front Thigh)", shortLabel: "Quads",
    desc: "Four muscles on the front of the thigh. Rectus femoris (center), vastus lateralis (outer), medialis (inner teardrop by knee), intermedius (hidden). They extend the knee. Largest muscle group in the body.",
    exercises: ["Squat", "Leg Press", "Hack Squat", "Leg Extension", "Lunge", "Bulgarian Split Squat"],
    category: "legs", accent: "#fcd34d", views: ["front"],
  },
  {
    id: "hamstrings", label: "Hamstrings (Back Thigh)", shortLabel: "Hamstrings",
    desc: "Three muscles on the back of the thigh. Biceps femoris (outer), semitendinosus and semimembranosus (inner). Flex the knee and extend the hip. Often undertrained vs quads — main cause of hamstring tears.",
    exercises: ["Romanian Deadlift", "Leg Curl", "Nordic Curl", "Good Morning", "Glute-Ham Raise"],
    category: "legs", accent: "#6ee7b7", views: ["back"],
  },
  {
    id: "calves", label: "Gastrocnemius & Soleus (Calves)", shortLabel: "Calves",
    desc: "Two calf muscles — gastrocnemius (visible peak, works with straight knee) and soleus (deeper, works with bent knee). Both plantarflex the ankle. Need high volume — used every step.",
    exercises: ["Standing Calf Raise", "Seated Calf Raise", "Donkey Calf Raise", "Jump Rope"],
    category: "legs", accent: "#93c5fd", views: ["front", "back"],
  },
  {
    id: "adductor", label: "Adductors (Inner Thigh)", shortLabel: "Inner Thigh",
    desc: "Group of five muscles on the inner thigh that pull the leg toward the midline. Heavily involved in squats, sumo stance work, and lateral movement. Weak adductors are a common cause of groin strains.",
    exercises: ["Sumo Squat", "Adductor Machine", "Copenhagen Plank", "Side Lunge", "Deep Squat Hold"],
    category: "legs", accent: "#fda4af", views: ["front"],
  },
];

const CAT_LABEL: Record<Category, string> = { push: "Push", pull: "Pull", legs: "Legs", core: "Core" };
const CAT_COLOR: Record<Category, string> = { push: "#fb923c", pull: "#60a5fa", legs: "#a3e635", core: "#f87171" };

// ─── Map our muscle ids → react-body-highlighter muscle names per view ────────

const LIB_MUSCLES: Record<string, { front: Muscle[]; back: Muscle[] }> = {
  trap:       { front: ["trapezius"],       back: ["trapezius"] },
  delt:       { front: ["front-deltoids"],  back: ["back-deltoids"] },
  pec:        { front: ["chest"],           back: [] },
  serratus:   { front: [],                  back: [] },  // not in the model — chip-only
  biceps:     { front: ["biceps"],          back: [] },
  triceps:    { front: [],                  back: ["triceps"] },
  forearm:    { front: ["forearm"],         back: ["forearm"] },
  abs:        { front: ["abs"],             back: [] },
  oblique:    { front: ["obliques"],        back: [] },
  lats:       { front: [],                  back: ["upper-back"] },
  rhomboid:   { front: [],                  back: [] },  // covered visually by trapezius — chip-only
  erector:    { front: [],                  back: ["lower-back"] },
  glutes:     { front: [],                  back: ["gluteal"] },
  quads:      { front: ["quadriceps"],      back: [] },
  hamstrings: { front: [],                  back: ["hamstring"] },
  calves:     { front: ["calves"],          back: ["calves", "left-soleus", "right-soleus"] },
  adductor:   { front: ["adductor"],        back: [] },
};

function libFor(id: string, view: View): Muscle[] {
  return LIB_MUSCLES[id]?.[view] ?? [];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BodyGuide() {
  const [view, setView]         = useState<View>("front");
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter]     = useState<Category | "all">("all");

  const selectedInfo = selected ? MUSCLES.find(m => m.id === selected) ?? null : null;

  const handleSelect = (id: string) => {
    if (filter !== "all") {
      const info = MUSCLES.find(m => m.id === id);
      if (!info || info.category !== filter) return;
    }
    setSelected(p => p === id ? null : id);
  };

  // Clicking a region on the model — reverse-map lib muscle name → our muscle id
  const handleModelClick = (stats: IMuscleStats) => {
    const hit = MUSCLES.find(m =>
      libFor(m.id, view).includes(stats.muscle) &&
      (filter === "all" || m.category === filter)
    );
    if (hit) handleSelect(hit.id);
  };

  // Model highlight data: selected muscle in its accent color,
  // otherwise all (filtered) muscles dimly lit so regions are discoverable
  const modelData = selectedInfo
    ? [{ name: selectedInfo.label, muscles: libFor(selectedInfo.id, view) }]
    : MUSCLES
        .filter(m => (filter === "all" || m.category === filter) && libFor(m.id, view).length > 0)
        .map(m => ({ name: m.label, muscles: libFor(m.id, view) }));

  const highlightColor = selectedInfo ? selectedInfo.accent : "#5b4a91";

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%", background: "var(--surface)" }}>

      {/* Header */}
      <div style={{
        padding: "12px 20px 10px",
        borderBottom: "1px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap",
      }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text)" }}>Body Guide</div>
          <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 1 }}>Tap any muscle to learn exercises</div>
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {selected && (
            <button onClick={() => setSelected(null)} style={{
              padding: "5px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600,
              background: "var(--bg)", border: "1px solid var(--border)",
              color: "var(--muted)", cursor: "pointer",
            }}>× Clear</button>
          )}
          <div style={{
            display: "flex", background: "var(--bg)", borderRadius: 8,
            border: "1px solid var(--border)", overflow: "hidden",
          }}>
            {(["front", "back"] as View[]).map(v => (
              <button key={v} onClick={() => { setView(v); setSelected(null); }} style={{
                padding: "6px 18px", fontSize: 12, fontWeight: 600, border: "none",
                background: view === v ? "var(--purple)" : "transparent",
                color: view === v ? "#fff" : "var(--muted)",
                cursor: "pointer", transition: "all 0.2s",
              }}>
                {v === "front" ? "Front" : "Back"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter */}
      <div style={{
        display: "flex", gap: 6, padding: "8px 20px",
        borderBottom: "1px solid var(--border)",
        overflowX: "auto", scrollbarWidth: "none",
      }}>
        {(["all", "push", "pull", "legs", "core"] as const).map(cat => {
          const active = filter === cat;
          const color  = cat === "all" ? "var(--purple)" : CAT_COLOR[cat];
          return (
            <button key={cat} onClick={() => { setFilter(f => f === cat ? "all" : cat as typeof filter); setSelected(null); }} style={{
              padding: "4px 14px", borderRadius: 20, fontSize: 11, fontWeight: 600,
              border: `1px solid ${active ? color : "var(--border)"}`,
              background: active ? `${color}22` : "transparent",
              color: active ? color : "var(--muted)",
              cursor: "pointer", whiteSpace: "nowrap", flex: "0 0 auto",
            }}>
              {cat === "all" ? "All" : CAT_LABEL[cat]}
            </button>
          );
        })}
      </div>

      {/* Main content */}
      <div style={{ display: "flex", flex: 1, minHeight: 0, flexWrap: "wrap" }}>

        {/* Body diagram — same model as the exercise cards */}
        <div style={{
          flex: "0 0 auto",
          display: "flex", flexDirection: "column", alignItems: "center",
          padding: "16px 12px",
          minWidth: 220,
        }}>
          <Model
            type={view === "front" ? "anterior" : "posterior"}
            data={modelData}
            highlightedColors={[highlightColor]}
            bodyColor="#33333f"
            onClick={handleModelClick}
            style={{ width: 220, padding: 0 }}
          />

          {/* Legend chips */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center",
            padding: "12px 4px 0",
            maxWidth: 260,
          }}>
            {MUSCLES
              .filter(m => m.views.includes(view) && (filter === "all" || m.category === filter))
              .map(m => (
                <button
                  key={m.id}
                  onClick={() => handleSelect(m.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 4,
                    padding: "3px 8px", borderRadius: 20, fontSize: 10, fontWeight: 600,
                    border: `1px solid ${selected === m.id ? m.accent : m.accent + "44"}`,
                    background: selected === m.id ? `${m.accent}22` : "transparent",
                    color: selected === m.id ? m.accent : "var(--muted)",
                    cursor: "pointer",
                  }}
                >
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: m.accent, flexShrink: 0,
                  }} />
                  {m.shortLabel}
                </button>
              ))}
          </div>
        </div>

        {/* Info panel */}
        <div style={{ flex: 1, minWidth: 190, padding: "14px 16px", overflowY: "auto" }}>
          <AnimatePresence mode="wait">
            {selectedInfo ? (
              <motion.div key={selectedInfo.id}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>{selectedInfo.label}</div>
                    <span style={{
                      display: "inline-block", marginTop: 4,
                      padding: "2px 10px", borderRadius: 20,
                      background: `${CAT_COLOR[selectedInfo.category]}22`,
                      border: `1px solid ${CAT_COLOR[selectedInfo.category]}55`,
                      fontSize: 10, fontWeight: 600, color: CAT_COLOR[selectedInfo.category],
                    }}>{CAT_LABEL[selectedInfo.category]}</span>
                  </div>
                  <button onClick={() => setSelected(null)} style={{
                    background: "none", border: "none", color: "var(--muted)",
                    cursor: "pointer", fontSize: 20, lineHeight: 1, padding: 2,
                  }}>×</button>
                </div>

                <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65, marginBottom: 16 }}>
                  {selectedInfo.desc}
                </p>

                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "var(--text)", marginBottom: 8, textTransform: "uppercase" }}>
                  Best Exercises
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {selectedInfo.exercises.map((ex, i) => (
                    <motion.div key={ex}
                      initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "8px 12px", borderRadius: 8,
                        background: "var(--bg)", border: "1px solid var(--border)",
                      }}
                    >
                      <span style={{
                        width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                        background: `${selectedInfo.accent}22`,
                        border: `1px solid ${selectedInfo.accent}66`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 9, fontWeight: 700, color: selectedInfo.accent,
                      }}>{i + 1}</span>
                      <span style={{ fontSize: 12, color: "var(--text)" }}>{ex}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>
                  {filter !== "all"
                    ? `${CAT_LABEL[filter as Category]} Muscles`
                    : view === "front" ? "Front Body Muscles" : "Back Body Muscles"}
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5, marginBottom: 16 }}>
                  Tap any highlighted region on the body, or use the chips below it.
                  Use the {view === "front" ? "Back" : "Front"} button to flip the figure.
                </div>
                {(["push", "pull", "legs", "core"] as Category[])
                  .filter(cat => filter === "all" || filter === cat)
                  .map(cat => {
                    const catMuscles = MUSCLES.filter(m => m.category === cat && m.views.includes(view));
                    if (catMuscles.length === 0) return null;
                    return (
                      <div key={cat} style={{ marginBottom: 14 }}>
                        <div style={{
                          fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
                          color: CAT_COLOR[cat], textTransform: "uppercase", marginBottom: 6,
                        }}>{CAT_LABEL[cat]}</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                          {catMuscles.map(m => (
                            <button key={m.id} onClick={() => handleSelect(m.id)} style={{
                              padding: "4px 12px", borderRadius: 20,
                              border: `1px solid ${m.accent}44`,
                              background: `${m.accent}11`,
                              color: m.accent, fontSize: 11, fontWeight: 600, cursor: "pointer",
                            }}>{m.shortLabel}</button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
