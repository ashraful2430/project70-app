"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
  // which views this muscle appears in
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
    id: "tibialis", label: "Tibialis Anterior (Shin)", shortLabel: "Tibialis",
    desc: "Runs along the outer shin. Dorsiflexes the foot (pulls toes up). Balances calf strength — important for ankle and knee health.",
    exercises: ["Tibialis Raise", "Toe Walk", "Band Dorsiflexion", "Reverse Calf Raise"],
    category: "legs", accent: "#c4b5fd", views: ["front"],
  },
];

const CAT_LABEL: Record<Category, string> = { push: "Push", pull: "Pull", legs: "Legs", core: "Core" };
const CAT_COLOR: Record<Category, string> = { push: "#fb923c", pull: "#60a5fa", legs: "#a3e635", core: "#f87171" };

// ─── Muscle Region Polygons ───────────────────────────────────────────────────
// SVG viewBox: "0 0 400 560"
// Coordinates mapped to a standard anatomy front/back figure at this scale.
// Each muscle has a list of polygon point strings (bilateral = render both sides).
// "bilateral" means the LEFT side polygon is also mirrored for the RIGHT side
// using transform="scale(-1,1) translate(-400,0)"

interface MusclePoly {
  id: string;
  view: View;
  // Array of SVG polygon "points" strings (space-separated x,y pairs)
  polys: string[];
  // If true, also render mirror-image polygon on the other side
  bilateral?: boolean;
}

const MUSCLE_POLYS: MusclePoly[] = [
  // ── FRONT VIEW ──────────────────────────────────────────────────────────────

  // Upper Trapezius (front slope, bilateral)
  {
    id: "trap", view: "front", bilateral: true,
    polys: ["148,130 120,140 106,152 110,162 126,158 148,148 156,138"],
  },
  // Deltoid front (bilateral)
  {
    id: "delt", view: "front", bilateral: true,
    polys: ["106,135 86,145 76,160 80,182 92,188 106,180 114,162 112,148"],
  },
  // Pectoralis Major left (bilateral)
  {
    id: "pec", view: "front", bilateral: true,
    polys: ["148,138 116,150 110,162 112,185 124,198 148,202 162,195 168,178 162,158"],
  },
  // Serratus (fingers, bilateral)
  {
    id: "serratus", view: "front", bilateral: true,
    polys: [
      "118,195 112,205 118,210 128,202",
      "116,210 110,220 116,226 126,218",
      "114,226 108,236 114,242 124,234",
    ],
  },
  // Biceps (bilateral)
  {
    id: "biceps", view: "front", bilateral: true,
    polys: ["88,188 72,196 66,216 68,240 76,254 88,256 100,250 106,232 104,210 96,194"],
  },
  // Forearm flexors (bilateral)
  {
    id: "forearm", view: "front", bilateral: true,
    polys: ["80,256 62,264 56,285 58,315 68,328 82,326 94,316 96,290 92,268"],
  },
  // Rectus Abdominis (center, 6 segments)
  {
    id: "abs", view: "front", bilateral: false,
    polys: [
      // top row
      "168,200 168,220 184,220 184,200",
      "216,200 216,220 232,220 232,200",
      // mid row
      "168,224 168,244 184,244 184,224",
      "216,224 216,244 232,244 232,224",
      // bottom row
      "170,248 170,266 184,266 184,248",
      "216,248 216,266 230,266 230,248",
    ],
  },
  // External Obliques (bilateral)
  {
    id: "oblique", view: "front", bilateral: true,
    polys: ["152,198 136,210 128,230 130,260 140,274 154,278 162,265 164,240 162,215"],
  },
  // Quadriceps (bilateral — each has 3 shapes)
  {
    id: "quads", view: "front", bilateral: true,
    polys: [
      // Vastus lateralis
      "136,290 118,300 110,325 112,365 120,385 132,390 140,378 140,340 138,310",
      // Rectus femoris center
      "156,285 148,295 146,320 148,362 156,386 168,390 174,376 174,340 170,310 164,292",
      // Vastus medialis teardrop
      "148,372 140,384 140,398 150,408 166,410 176,402 178,390 168,378",
    ],
  },
  // Tibialis Anterior (bilateral)
  {
    id: "tibialis", view: "front", bilateral: true,
    polys: ["126,400 116,415 114,450 118,480 130,488 140,484 144,466 142,430 134,410"],
  },
  // Calves front edge (bilateral)
  {
    id: "calves", view: "front", bilateral: true,
    polys: ["142,402 136,415 136,455 140,478 152,486 160,480 162,456 160,422 152,406"],
  },

  // ── BACK VIEW ───────────────────────────────────────────────────────────────

  // Full Trapezius (bilateral, back)
  {
    id: "trap", view: "back", bilateral: true,
    polys: [
      // upper slope (bilateral)
      "156,125 134,135 114,148 110,162 124,168 148,158 160,145",
      // middle diamond
      "156,145 148,162 152,192 168,200 180,190 188,172 176,148",
    ],
  },
  // Posterior Deltoid (bilateral)
  {
    id: "delt", view: "back", bilateral: true,
    polys: ["110,138 88,150 78,170 80,196 94,204 108,198 116,182 116,160"],
  },
  // Rhomboids (between scapulae)
  {
    id: "rhomboid", view: "back", bilateral: false,
    polys: [
      "156,162 138,172 134,195 142,210 162,215 180,208 184,190 172,168",
    ],
  },
  // Infraspinatus / Teres (bilateral)
  {
    id: "rhomboid", view: "back", bilateral: true,
    polys: ["114,162 108,180 108,200 116,218 130,224 142,218 148,200 146,175 136,160"],
  },
  // Triceps (bilateral)
  {
    id: "triceps", view: "back", bilateral: true,
    polys: ["92,188 74,198 64,220 64,252 70,272 82,278 96,274 104,254 106,228 100,205"],
  },
  // Forearm extensors (bilateral)
  {
    id: "forearm", view: "back", bilateral: true,
    polys: ["80,278 62,288 56,310 56,342 66,354 80,352 92,342 96,316 90,292"],
  },
  // Latissimus Dorsi (bilateral)
  {
    id: "lats", view: "back", bilateral: true,
    polys: ["116,200 108,220 106,250 108,280 116,305 128,315 140,312 148,295 148,260 144,228 136,205"],
  },
  // Erector Spinae (bilateral, columns beside spine)
  {
    id: "erector", view: "back", bilateral: true,
    polys: ["172,200 165,225 164,260 165,300 170,320 180,322 188,318 190,295 190,258 188,220 182,200"],
  },
  // Gluteus Maximus (bilateral)
  {
    id: "glutes", view: "back", bilateral: true,
    polys: ["148,310 126,322 116,340 116,368 124,388 140,400 158,402 172,392 178,372 176,344 166,320"],
  },
  // Hamstrings (bilateral — 2 heads)
  {
    id: "hamstrings", view: "back", bilateral: true,
    polys: [
      // Biceps femoris outer
      "128,398 112,410 108,440 110,480 118,500 132,504 140,496 144,468 142,432 134,412",
      // Semitendinosus inner
      "150,398 142,410 140,444 142,480 150,500 164,504 172,494 174,466 172,432 162,412",
    ],
  },
  // Gastrocnemius calves (bilateral)
  {
    id: "calves", view: "back", bilateral: true,
    polys: ["130,504 118,520 116,552 120,578 132,588 144,586 152,574 154,546 150,518 140,506"],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const VIEWBOX_W = 400;
const VIEWBOX_H = 560;
// Mirror transform: flip horizontally around center x=200
const MIRROR = `scale(-1,1) translate(-${VIEWBOX_W},0)`;

export default function BodyGuide() {
  const [view, setView]         = useState<View>("front");
  const [selected, setSelected] = useState<string | null>(null);
  const [hovering, setHovering] = useState<string | null>(null);
  const [filter, setFilter]     = useState<Category | "all">("all");
  const [imgMissing, setImgMissing] = useState(false);

  const selectedInfo = selected ? MUSCLES.find(m => m.id === selected) ?? null : null;

  const handleSelect = (id: string) => {
    if (filter !== "all") {
      const info = MUSCLES.find(m => m.id === id);
      if (!info || info.category !== filter) return;
    }
    setSelected(p => p === id ? null : id);
  };

  const getPolyOpacity = (id: string) => {
    if (selected === id || hovering === id) return 0.55;
    if (selected && selected !== id) return 0;
    if (filter !== "all") {
      const info = MUSCLES.find(m => m.id === id);
      if (!info || info.category !== filter) return 0;
    }
    return 0.18;
  };

  const getPolyFill = (id: string) => {
    if (selected === id) {
      return MUSCLES.find(m => m.id === id)?.accent ?? "#FF4020";
    }
    if (hovering === id) {
      return MUSCLES.find(m => m.id === id)?.accent ?? "#FF4020";
    }
    return "#FF5520";
  };

  const viewPolys = MUSCLE_POLYS.filter(p => p.view === view);

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
            <button key={cat} onClick={() => setFilter(f => f === cat ? "all" : cat as typeof filter)} style={{
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

        {/* Body diagram */}
        <div style={{
          flex: "0 0 auto",
          display: "flex", flexDirection: "column", alignItems: "center",
          padding: "12px 8px",
          minWidth: 200,
        }}>
          <div style={{ position: "relative", width: "100%", maxWidth: 260 }}>
            {/* Anatomy image */}
            {!imgMissing ? (
              <img
                src={view === "front" ? "/anatomy-front.jpg" : "/anatomy-back.jpg"}
                alt={`${view} anatomy`}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }}
                onError={() => setImgMissing(true)}
              />
            ) : (
              /* Fallback when images not yet added */
              <div style={{
                width: "100%", aspectRatio: "400/560",
                background: "linear-gradient(180deg, #1a0a0a 0%, #0d0505 100%)",
                borderRadius: 8,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 10, padding: 20,
              }}>
                <div style={{ fontSize: 36 }}>🫀</div>
                <div style={{ fontSize: 12, color: "#888", textAlign: "center", lineHeight: 1.5 }}>
                  Save your anatomy image as:<br />
                  <code style={{ fontSize: 10, color: "#aaa" }}>public/anatomy-front.jpg</code><br />
                  <code style={{ fontSize: 10, color: "#aaa" }}>public/anatomy-back.jpg</code>
                </div>
              </div>
            )}

            {/* SVG overlay with clickable muscle regions */}
            <svg
              viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                cursor: "crosshair",
              }}
              onClick={() => { if (!hovering) setSelected(null); }}
            >
              {viewPolys.map((polyDef, di) =>
                polyDef.polys.map((pts, pi) => {
                  const key = `${polyDef.id}-${di}-${pi}`;
                  const fill = getPolyFill(polyDef.id);
                  const opacity = getPolyOpacity(polyDef.id);

                  return (
                    <g key={key}>
                      {/* Left / center polygon */}
                      <polygon
                        points={pts}
                        fill={fill}
                        opacity={opacity}
                        stroke={selected === polyDef.id ? fill : "transparent"}
                        strokeWidth={1.5}
                        style={{ cursor: "pointer", transition: "opacity 0.15s" }}
                        onClick={e => { e.stopPropagation(); handleSelect(polyDef.id); }}
                        onMouseEnter={() => setHovering(polyDef.id)}
                        onMouseLeave={() => setHovering(null)}
                      />
                      {/* Mirrored right polygon (bilateral) */}
                      {polyDef.bilateral && (
                        <polygon
                          points={pts}
                          fill={fill}
                          opacity={opacity}
                          stroke={selected === polyDef.id ? fill : "transparent"}
                          strokeWidth={1.5}
                          transform={MIRROR}
                          style={{ cursor: "pointer", transition: "opacity 0.15s" }}
                          onClick={e => { e.stopPropagation(); handleSelect(polyDef.id); }}
                          onMouseEnter={() => setHovering(polyDef.id)}
                          onMouseLeave={() => setHovering(null)}
                        />
                      )}
                    </g>
                  );
                })
              )}

              {/* Hover label */}
              {hovering && !selected && (() => {
                const info = MUSCLES.find(m => m.id === hovering);
                return info ? (
                  <text
                    x={VIEWBOX_W / 2} y={VIEWBOX_H - 14}
                    textAnchor="middle" fontSize={13} fontWeight="bold"
                    fill={info.accent} stroke="#000" strokeWidth={3} paintOrder="stroke"
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {info.shortLabel}
                  </text>
                ) : null;
              })()}
            </svg>
          </div>

          {/* Legend dots */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center",
            padding: "10px 4px 0",
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
                  Hover or tap any highlighted region. Use the {view === "front" ? "Back →" : "Front →"} button to flip.
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
