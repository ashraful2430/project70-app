"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Muscle {
  id: string;
  label: string;
  shortLabel: string;
  color: string;
  description: string;
  exercises: string[];
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

const FRONT: Muscle[] = [
  { id:"front-delt-l", label:"Front Deltoid (Left)", shortLabel:"Delt", color:"#0891b2", description:"The front portion of your shoulder muscle. Responsible for raising your arm forward.", exercises:["Shoulder Press","Arnold Press","Front Raise","Cable Lateral Raise","Push Press"], cx:68, cy:100, rx:16, ry:13 },
  { id:"front-delt-r", label:"Front Deltoid (Right)", shortLabel:"Delt", color:"#0891b2", description:"The front portion of your shoulder muscle. Responsible for raising your arm forward.", exercises:["Shoulder Press","Arnold Press","Front Raise","Cable Lateral Raise","Push Press"], cx:132, cy:100, rx:16, ry:13 },
  { id:"pec-l", label:"Left Pectoralis (Chest)", shortLabel:"Chest", color:"#7c3aed", description:"The pec major covers most of your chest. It pushes things away from your body.", exercises:["Bench Press","Incline Dumbbell Press","Pec Fly","Cable Chest Fly","Decline Dumbbell Press","Dips"], cx:88, cy:122, rx:22, ry:20 },
  { id:"pec-r", label:"Right Pectoralis (Chest)", shortLabel:"Chest", color:"#7c3aed", description:"The pec major covers most of your chest. It pushes things away from your body.", exercises:["Bench Press","Incline Dumbbell Press","Pec Fly","Cable Chest Fly","Decline Dumbbell Press","Dips"], cx:112, cy:122, rx:22, ry:20 },
  { id:"bicep-l", label:"Left Biceps Brachii", shortLabel:"Biceps", color:"#10b981", description:"The bicep is the muscle on the front of your upper arm. It flexes your elbow and turns your palm up.", exercises:["Barbell Curl","Hammer Curl","Incline Curl","Spider Curl","Preacher Curl","Lat Pulldown"], cx:60, cy:160, rx:12, ry:26 },
  { id:"bicep-r", label:"Right Biceps Brachii", shortLabel:"Biceps", color:"#10b981", description:"The bicep is the muscle on the front of your upper arm. It flexes your elbow and turns your palm up.", exercises:["Barbell Curl","Hammer Curl","Incline Curl","Spider Curl","Preacher Curl","Lat Pulldown"], cx:140, cy:160, rx:12, ry:26 },
  { id:"forearm-l", label:"Left Forearm Flexors", shortLabel:"Forearm", color:"#059669", description:"The forearm flexors run along the inside of your forearm. They flex your wrist and fingers.", exercises:["Wrist Curl","Hammer Curl","Dead Hang","Farmer's Carry","Grip Squeeze"], cx:55, cy:210, rx:10, ry:22 },
  { id:"forearm-r", label:"Right Forearm Flexors", shortLabel:"Forearm", color:"#059669", description:"The forearm flexors run along the inside of your forearm. They flex your wrist and fingers.", exercises:["Wrist Curl","Hammer Curl","Dead Hang","Farmer's Carry","Grip Squeeze"], cx:145, cy:210, rx:10, ry:22 },
  { id:"abs", label:"Rectus Abdominis (Abs / Six-pack)", shortLabel:"Abs", color:"#f59e0b", description:"The rectus abdominis is the 'six pack' muscle running vertically down your stomach. It flexes your spine forward.", exercises:["Crunches","Hanging Knee Raises","Reverse Crunches","Leg Raises","Ab Crunches"], cx:100, cy:160, rx:14, ry:32 },
  { id:"oblique-l", label:"Left Obliques (Side Core)", shortLabel:"Obliques", color:"#d97706", description:"The obliques run diagonally along the sides of your abdomen. They rotate and bend your torso sideways.", exercises:["Russian Twists","Side Plank","Bicycle Crunch","High-Knee Crunches"], cx:83, cy:162, rx:9, ry:28 },
  { id:"oblique-r", label:"Right Obliques (Side Core)", shortLabel:"Obliques", color:"#d97706", description:"The obliques run diagonally along the sides of your abdomen. They rotate and bend your torso sideways.", exercises:["Russian Twists","Side Plank","Bicycle Crunch","High-Knee Crunches"], cx:117, cy:162, rx:9, ry:28 },
  { id:"quad-l", label:"Left Quadriceps (Front Thigh)", shortLabel:"Quads", color:"#ef4444", description:"The quads are 4 muscles on the front of your thigh. They straighten your knee — the biggest leg muscle group.", exercises:["Squat","Leg Press","Leg Extension","Lunge","Jump Squat","Sumo Squat"], cx:88, cy:285, rx:21, ry:48 },
  { id:"quad-r", label:"Right Quadriceps (Front Thigh)", shortLabel:"Quads", color:"#ef4444", description:"The quads are 4 muscles on the front of your thigh. They straighten your knee — the biggest leg muscle group.", exercises:["Squat","Leg Press","Leg Extension","Lunge","Jump Squat","Sumo Squat"], cx:112, cy:285, rx:21, ry:48 },
  { id:"shin-l", label:"Left Tibialis Anterior (Shin)", shortLabel:"Shin", color:"#fb923c", description:"The tibialis runs along your shin (front of lower leg). It lifts your foot up toward your shin.", exercises:["Treadmill Walk (incline)","Stair Climbing"], cx:86, cy:375, rx:11, ry:28 },
  { id:"shin-r", label:"Right Tibialis Anterior (Shin)", shortLabel:"Shin", color:"#fb923c", description:"The tibialis runs along your shin (front of lower leg). It lifts your foot up toward your shin.", exercises:["Treadmill Walk (incline)","Stair Climbing"], cx:114, cy:375, rx:11, ry:28 },
];

const BACK: Muscle[] = [
  { id:"trap", label:"Trapezius (Upper Back / Neck Base)", shortLabel:"Traps", color:"#2563eb", description:"The trapezius is the large diamond-shaped muscle of your upper back and neck. It shrugs your shoulders and pulls your shoulder blades together.", exercises:["Face Pulls","Rows","Deadlift","Farmer's Carry","Shrugs"], cx:100, cy:108, rx:30, ry:20 },
  { id:"rear-delt-l", label:"Left Rear Deltoid (Posterior Delt)", shortLabel:"Rear Delt", color:"#0891b2", description:"The rear deltoid is the back of your shoulder. It pulls your arm backward and improves posture.", exercises:["Reverse Pec Deck","Face Pulls","Reverse Cable Fly"], cx:68, cy:100, rx:16, ry:13 },
  { id:"rear-delt-r", label:"Right Rear Deltoid (Posterior Delt)", shortLabel:"Rear Delt", color:"#0891b2", description:"The rear deltoid is the back of your shoulder. It pulls your arm backward and improves posture.", exercises:["Reverse Pec Deck","Face Pulls","Reverse Cable Fly"], cx:132, cy:100, rx:16, ry:13 },
  { id:"lat-l", label:"Left Latissimus Dorsi (Lats)", shortLabel:"Lats", color:"#4f46e5", description:"The lats are the largest back muscles — they create the V-taper shape. They pull your arms down and back.", exercises:["Lat Pulldown","Pull-ups","Straight-Arm Pulldown","Single-Arm Row","Seated Cable Row"], cx:74, cy:152, rx:18, ry:40 },
  { id:"lat-r", label:"Right Latissimus Dorsi (Lats)", shortLabel:"Lats", color:"#4f46e5", description:"The lats are the largest back muscles — they create the V-taper shape. They pull your arms down and back.", exercises:["Lat Pulldown","Pull-ups","Straight-Arm Pulldown","Single-Arm Row","Seated Cable Row"], cx:126, cy:152, rx:18, ry:40 },
  { id:"rhomboid", label:"Rhomboids & Mid Back", shortLabel:"Mid Back", color:"#7c3aed", description:"The rhomboids sit between your shoulder blades. They retract (squeeze) your shoulder blades and improve posture.", exercises:["Seated Cable Row","Face Pulls","T-Bar Row","Close-Grip Pulldown"], cx:100, cy:143, rx:20, ry:25 },
  { id:"tricep-l", label:"Left Triceps Brachii", shortLabel:"Triceps", color:"#10b981", description:"The triceps make up 2/3 of your upper arm size. They straighten your elbow — opposite of the bicep.", exercises:["Rope Pushdown","Overhead Extension","Bench Dips","Skull Crusher","Diamond Push-up","Weighted Dip"], cx:60, cy:160, rx:12, ry:26 },
  { id:"tricep-r", label:"Right Triceps Brachii", shortLabel:"Triceps", color:"#10b981", description:"The triceps make up 2/3 of your upper arm size. They straighten your elbow — opposite of the bicep.", exercises:["Rope Pushdown","Overhead Extension","Bench Dips","Skull Crusher","Diamond Push-up","Weighted Dip"], cx:140, cy:160, rx:12, ry:26 },
  { id:"forearm-ext-l", label:"Left Forearm Extensors", shortLabel:"Forearm", color:"#059669", description:"The forearm extensors run along the outside/top of your forearm. They extend your wrist and fingers.", exercises:["Reverse Wrist Curl","Farmer's Carry","Dead Hang"], cx:55, cy:210, rx:10, ry:22 },
  { id:"forearm-ext-r", label:"Right Forearm Extensors", shortLabel:"Forearm", color:"#059669", description:"The forearm extensors run along the outside/top of your forearm. They extend your wrist and fingers.", exercises:["Reverse Wrist Curl","Farmer's Carry","Dead Hang"], cx:145, cy:210, rx:10, ry:22 },
  { id:"lower-back", label:"Erector Spinae (Lower Back)", shortLabel:"Lower Back", color:"#a855f7", description:"The erector spinae run along your spine from neck to tailbone. They keep your back straight and extend your torso.", exercises:["Romanian Deadlift","Stiff-Leg Deadlift","Hip Thrust"], cx:100, cy:218, rx:20, ry:18 },
  { id:"glute-l", label:"Left Gluteus Maximus (Glutes)", shortLabel:"Glutes", color:"#f59e0b", description:"The glutes are the largest single muscle in your body. They extend your hip (push your leg back) and are crucial for posture and power.", exercises:["Hip Thrust","Squat","Romanian Deadlift","Bulgarian Split Squat","Donkey Kickbacks"], cx:87, cy:255, rx:24, ry:26 },
  { id:"glute-r", label:"Right Gluteus Maximus (Glutes)", shortLabel:"Glutes", color:"#f59e0b", description:"The glutes are the largest single muscle in your body. They extend your hip (push your leg back) and are crucial for posture and power.", exercises:["Hip Thrust","Squat","Romanian Deadlift","Bulgarian Split Squat","Donkey Kickbacks"], cx:113, cy:255, rx:24, ry:26 },
  { id:"hamstring-l", label:"Left Hamstrings (Back Thigh)", shortLabel:"Hamstrings", color:"#dc2626", description:"Three muscles on the back of your thigh that bend your knee and extend your hip. Opposite of quads.", exercises:["Romanian Deadlift","Stiff-Leg Deadlift","Leg Curl","Nordic Curl","Hip Thrust"], cx:88, cy:308, rx:21, ry:46 },
  { id:"hamstring-r", label:"Right Hamstrings (Back Thigh)", shortLabel:"Hamstrings", color:"#dc2626", description:"Three muscles on the back of your thigh that bend your knee and extend your hip. Opposite of quads.", exercises:["Romanian Deadlift","Stiff-Leg Deadlift","Leg Curl","Nordic Curl","Hip Thrust"], cx:112, cy:308, rx:21, ry:46 },
  { id:"calf-l", label:"Left Gastrocnemius (Calf)", shortLabel:"Calf", color:"#fb923c", description:"The calf muscles (gastrocnemius + soleus) point your foot downward (plantarflexion). They're used every time you take a step.", exercises:["Standing Calf Raise","Seated Calf Raise","Calf Raise Drop Set","Jump Squat"], cx:86, cy:378, rx:12, ry:28 },
  { id:"calf-r", label:"Right Gastrocnemius (Calf)", shortLabel:"Calf", color:"#fb923c", description:"The calf muscles (gastrocnemius + soleus) point your foot downward (plantarflexion). They're used every time you take a step.", exercises:["Standing Calf Raise","Seated Calf Raise","Calf Raise Drop Set","Jump Squat"], cx:114, cy:378, rx:12, ry:28 },
];

// Body silhouette background shapes (muted, non-interactive)
function BodySilhouette({ view }: { view: "front" | "back" }) {
  const fill = "rgba(30,30,70,0.7)";
  return (
    <g>
      {/* Head */}
      <ellipse cx={100} cy={35} rx={24} ry={27} fill={fill} />
      {/* Neck */}
      <rect x={90} y={60} width={20} height={20} rx={6} fill={fill} />
      {/* Shoulders */}
      <rect x={62} y={80} width={76} height={26} rx={12} fill={fill} />
      {/* Left upper arm */}
      <ellipse cx={58} cy={155} rx={16} ry={32} fill={fill} />
      {/* Right upper arm */}
      <ellipse cx={142} cy={155} rx={16} ry={32} fill={fill} />
      {/* Left forearm */}
      <ellipse cx={52} cy={210} rx={13} ry={28} fill={fill} />
      {/* Right forearm */}
      <ellipse cx={148} cy={210} rx={13} ry={28} fill={fill} />
      {/* Left hand */}
      <ellipse cx={50} cy={248} rx={11} ry={16} fill={fill} />
      {/* Right hand */}
      <ellipse cx={150} cy={248} rx={11} ry={16} fill={fill} />
      {/* Torso */}
      <rect x={72} y={106} width={56} height={108} rx={8} fill={fill} />
      {/* Hips */}
      <rect x={74} y={225} width={52} height={30} rx={10} fill={fill} />
      {/* Left thigh */}
      <ellipse cx={88} cy={292} rx={22} ry={50} fill={fill} />
      {/* Right thigh */}
      <ellipse cx={112} cy={292} rx={22} ry={50} fill={fill} />
      {/* Left knee */}
      <ellipse cx={87} cy={345} rx={15} ry={12} fill={fill} />
      {/* Right knee */}
      <ellipse cx={113} cy={345} rx={15} ry={12} fill={fill} />
      {/* Left shin/calf */}
      <ellipse cx={86} cy={378} rx={13} ry={32} fill={fill} />
      {/* Right shin/calf */}
      <ellipse cx={114} cy={378} rx={13} ry={32} fill={fill} />
      {/* Left foot */}
      <ellipse cx={84} cy={418} rx={15} ry={10} fill={fill} />
      {/* Right foot */}
      <ellipse cx={116} cy={418} rx={15} ry={10} fill={fill} />
      {/* Face details (front only) */}
      {view === "front" && (
        <>
          <ellipse cx={93} cy={32} rx={4} ry={5} fill="rgba(80,80,120,0.6)" />
          <ellipse cx={107} cy={32} rx={4} ry={5} fill="rgba(80,80,120,0.6)" />
          <path d="M94 46 Q100 50 106 46" stroke="rgba(80,80,120,0.6)" strokeWidth={1.5} fill="none" strokeLinecap="round" />
        </>
      )}
    </g>
  );
}

function MuscleShape({ m, isHovered, isSelected, onHover, onClick }: {
  m: Muscle;
  isHovered: boolean;
  isSelected: boolean;
  onHover: (id: string | null) => void;
  onClick: (m: Muscle) => void;
}) {
  const active = isHovered || isSelected;
  return (
    <g
      style={{ cursor: "pointer" }}
      onMouseEnter={() => onHover(m.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(m)}
    >
      <defs>
        <radialGradient id={`grad-${m.id}`} cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor={m.color} stopOpacity={active ? 1 : 0.5} />
          <stop offset="100%" stopColor={m.color} stopOpacity={active ? 0.7 : 0.2} />
        </radialGradient>
        {active && (
          <filter id={`glow-${m.id}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      <ellipse
        cx={m.cx} cy={m.cy} rx={m.rx} ry={m.ry}
        fill={`url(#grad-${m.id})`}
        stroke={active ? m.color : "rgba(255,255,255,0.12)"}
        strokeWidth={active ? 1.5 : 0.8}
        filter={active ? `url(#glow-${m.id})` : undefined}
        style={{ transition: "all 0.2s ease" }}
      />
      {active && (
        <text
          x={m.cx} y={m.cy + 4}
          textAnchor="middle"
          fontSize={m.rx > 14 ? 7 : 6}
          fill="white"
          fontWeight="bold"
          style={{ pointerEvents: "none" }}
        >
          {m.shortLabel}
        </text>
      )}
    </g>
  );
}

export default function BodyGuide() {
  const [view, setView]           = useState<"front" | "back">("front");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selected, setSelected]   = useState<Muscle | null>(null);
  const [zoom, setZoom]           = useState(1);
  const [flipping, setFlipping]   = useState(false);

  const muscles = view === "front" ? FRONT : BACK;

  function toggleView() {
    setFlipping(true);
    setTimeout(() => {
      setView(v => v === "front" ? "back" : "front");
      setSelected(null);
      setFlipping(false);
    }, 200);
  }

  return (
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      {/* Header */}
      <div style={{
        padding: "16px 20px", borderBottom: "1px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 10,
      }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>Body Guide</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
            Tap any muscle to learn what it's called and which exercises target it
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {/* Zoom */}
          <button onClick={() => setZoom(z => Math.max(0.8, z - 0.2))} style={iconBtn}>−</button>
          <span style={{ fontSize: 11, color: "var(--text-muted)", minWidth: 30, textAlign: "center" }}>
            {Math.round(zoom * 100)}%
          </span>
          <button onClick={() => setZoom(z => Math.min(2.5, z + 0.2))} style={iconBtn}>+</button>
          {/* Front/Back */}
          <motion.button
            onClick={toggleView}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: "8px 14px", borderRadius: 10, cursor: "pointer",
              background: "linear-gradient(135deg, var(--purple), #4c1d95)",
              border: "1px solid rgba(167,139,250,0.3)",
              color: "#fff", fontSize: 12, fontWeight: 700,
            }}
          >
            {view === "front" ? "⇄ View Back" : "⇄ View Front"}
          </motion.button>
        </div>
      </div>

      {/* Body + Info layout */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>

          {/* SVG body diagram */}
          <div style={{
            flex: "0 0 auto", overflow: "hidden",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px 10px",
            background: "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)",
            minWidth: 200,
          }}>
            <div style={{
              transform: `scale(${zoom}) ${flipping ? "rotateY(90deg)" : "rotateY(0deg)"}`,
              transition: "transform 0.2s ease",
              transformOrigin: "center top",
            }}>
              <svg
                viewBox="0 0 200 440"
                width={180}
                height={396}
                style={{ display: "block", overflow: "visible" }}
              >
                <BodySilhouette view={view} />
                {muscles.map(m => (
                  <MuscleShape
                    key={m.id}
                    m={m}
                    isHovered={hoveredId === m.id}
                    isSelected={selected?.id === m.id}
                    onHover={setHoveredId}
                    onClick={setSelected}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Info panel */}
          <div style={{ flex: 1, minWidth: 200, padding: "16px 20px", borderLeft: "1px solid var(--border)" }}>
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Muscle name */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 10, marginBottom: 12,
                  }}>
                    <div style={{
                      width: 12, height: 12, borderRadius: "50%",
                      background: selected.color, flexShrink: 0,
                      boxShadow: `0 0 8px ${selected.color}`,
                    }} />
                    <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", lineHeight: 1.3 }}>
                      {selected.label}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="card-inner" style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 }}>
                      What it does
                    </div>
                    <p style={{ fontSize: 12, color: "var(--text)", lineHeight: 1.65 }}>
                      {selected.description}
                    </p>
                  </div>

                  {/* Exercises */}
                  <div className="card-inner">
                    <div style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>
                      Exercises that target this
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {selected.exercises.map(ex => (
                        <span key={ex} style={{
                          fontSize: 11, padding: "4px 9px", borderRadius: 8,
                          background: `${selected.color}18`,
                          border: `1px solid ${selected.color}40`,
                          color: selected.color, fontWeight: 600,
                        }}>
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    style={{
                      marginTop: 12, fontSize: 11, color: "var(--text-muted)",
                      background: "none", border: "none", cursor: "pointer", padding: 0,
                    }}
                  >
                    ← Back
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ paddingTop: 16 }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
                    {view === "front" ? "Front View" : "Back View"}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 16 }}>
                    Tap any glowing muscle region to learn its name, what it does, and which exercises in your program target it.
                  </div>

                  {/* Legend */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {[...new Map(muscles.map(m => [m.color, m])).values()]
                      .filter((m, i) => i < 7)
                      .map(m => (
                        <div key={m.color} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{
                            width: 8, height: 8, borderRadius: "50%",
                            background: m.color, flexShrink: 0,
                          }} />
                          <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
                            {m.shortLabel}
                          </span>
                        </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

const iconBtn: React.CSSProperties = {
  width: 28, height: 28, borderRadius: 8,
  background: "var(--surface2)", border: "1px solid var(--border)",
  color: "var(--text)", cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  fontSize: 16, fontWeight: 700, lineHeight: 1,
};
