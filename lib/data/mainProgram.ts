import type { MainPhase, Exercise } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// 5-DAY V-TAPER PLAN
// Training days: Mon (Push) · Tue (Pull) · Wed (Legs & Arms) · Thu (Upper) · Sat (Lower)
// Off / active-rest: Fri (Jumu'ah) · Sun (gym closed)
//
// The plan toggle switches Weeks 1–2 (RIR 2–3, no extras) ↔ Week 3+ (RIR 1–2,
// adds reverse EZ-bar curl on Tue/Thu + optional ab-wheel on Wed).
//
// ★ marks the single heaviest compound lift of the day — do 2 ramp-up sets first
//   (~50% × a few reps, then ~75% × a few reps) before your working sets.
// Every exercise cue is tagged COMPOUND (works several joints/muscles) or
// ISOLATION (works one muscle at one joint).
// ─────────────────────────────────────────────────────────────────────────────

// ── MONDAY — PUSH ────────────────────────────────────────────────────────────
const MON_PUSH: Exercise[] = [
  {
    name: "★ Machine Chest Press (or Flat Dumbbell Press)",
    target: "Chest",
    sets: 4, reps: "8-12", rest: "90s",
    cue: "COMPOUND. Heaviest lift today — do 2 ramp-up sets first. Press with control, do not bounce.",
    steps: [
      "Ramp up: ~50% weight × 6 reps, then ~75% × 3 reps before your working sets.",
      "Set your shoulder blades back and down against the pad/bench.",
      "Press until arms are nearly straight — don't lock out hard.",
      "Lower slowly for 2-3 seconds to a stretch across the chest.",
    ],
    difficulty: 1.3, calories: 38,
  },
  {
    name: "Incline Dumbbell Press",
    target: "Upper chest",
    sets: 3, reps: "8-12", rest: "75s",
    cue: "COMPOUND. Bench at 30-45°. Targets upper chest and front delts.",
    steps: [
      "Set the bench to a 30-45 degree incline.",
      "Hold dumbbells at upper-chest level, elbows slightly wider than shoulders.",
      "Press up and slightly inward until the dumbbells nearly touch.",
      "Lower slowly under control — do not arch the lower back off the bench.",
    ],
    difficulty: 1.2, calories: 32,
  },
  {
    name: "Pec Deck (or Cable Fly)",
    target: "Chest",
    sets: 3, reps: "12-15", rest: "60s",
    cue: "ISOLATION. Squeeze the chest together and hold 1 second. Form over weight.",
    steps: [
      "Set the pec deck so your arms open to a comfortable chest stretch.",
      "Bring the pads/handles together in front of your chest.",
      "Squeeze hard for 1 second at the middle.",
      "Open slowly, feeling the stretch — do not let the weight yank your arms back.",
    ],
    difficulty: 1, calories: 24,
  },
  {
    name: "Seated Dumbbell (or Machine) Shoulder Press",
    target: "Shoulders",
    sets: 3, reps: "8-12", rest: "75s",
    cue: "COMPOUND. Press straight up from shoulder height. Do not lean back.",
    steps: [
      "Sit with back support, dumbbells at shoulder height, palms forward.",
      "Press straight up until arms are almost fully extended.",
      "Lower slowly back to shoulder height.",
      "Keep your core braced and ribs down throughout.",
    ],
    difficulty: 1.2, calories: 30,
  },
  {
    name: "Cable Lateral Raise",
    target: "Side delts",
    sets: 4, reps: "12-20", rest: "45s",
    cue: "ISOLATION. Superset with Reverse Pec Deck. May be done one arm at a time if you prefer.",
    steps: [
      "Stand side-on to a low cable, slight bend in the elbow.",
      "Raise your arm out to the side to shoulder height — lead with the elbow.",
      "Lower slowly under constant cable tension.",
      "Go straight into Reverse Pec Deck with no rest.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Reverse Pec Deck",
    target: "Rear delts",
    sets: 3, reps: "15-20", rest: "60s",
    cue: "ISOLATION. Superset partner for the lateral raise. Critical for posture and 3D shoulders.",
    steps: [
      "Sit facing the machine, grip the handles with straight arms in front.",
      "Pull your arms back and out in a wide arc, squeezing your shoulder blades.",
      "Pause when hands are level with your shoulders.",
      "Return slowly. Rest after this, then repeat the superset.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Rope Pushdown",
    target: "Triceps",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Elbows pinned to your sides. Spread the rope apart at the bottom.",
    steps: [
      "Grip the rope, elbows locked to your ribs.",
      "Push down until arms are fully straight, spreading the rope apart.",
      "Squeeze the triceps hard at the bottom.",
      "Let the rope rise slowly — resist on the way up.",
    ],
    difficulty: 1, calories: 22,
  },
  {
    name: "Overhead Dumbbell Triceps Extension",
    target: "Triceps",
    sets: 2, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Priority for triceps size — the overhead position stretches the long head (the biggest part).",
    steps: [
      "Hold one dumbbell with both hands directly overhead, arms straight.",
      "Lower slowly behind your head by bending only at the elbows.",
      "Keep your upper arms vertical and still — only forearms move.",
      "Press back to straight arms. Feel the stretch at the bottom.",
    ],
    difficulty: 1.1, calories: 22,
  },
];

// ── TUESDAY — PULL ───────────────────────────────────────────────────────────
const TUE_PULL: Exercise[] = [
  {
    name: "★ Chest-Supported Row",
    target: "Back",
    sets: 4, reps: "8-12", rest: "90s",
    cue: "COMPOUND. Heaviest pull today — do 2 ramp-up sets first. Chest stays on the pad so your lower back is spared.",
    steps: [
      "Ramp up: ~50% × 6 reps, then ~75% × 3 reps first.",
      "Set your chest against the pad, arms hanging straight down.",
      "Row the weight toward your lower ribs, leading with the elbows.",
      "Squeeze the shoulder blades, then lower to a full stretch.",
    ],
    difficulty: 1.3, calories: 36,
  },
  {
    name: "Pull-up (or Lat Pulldown)",
    target: "Lats",
    sets: 3, reps: "8-12", rest: "90s",
    cue: "COMPOUND. Builds the width of your V-taper. Use band-assist or the pulldown if needed.",
    steps: [
      "Grip slightly wider than shoulder-width, palms facing away.",
      "Pull your chest toward the bar, driving elbows down.",
      "Lower under full control to a dead hang / full stretch.",
      "No pull-up yet? Lat pulldown to the collarbone, same cues.",
    ],
    difficulty: 1.3, calories: 32,
  },
  {
    name: "Single-Arm Dumbbell Row",
    target: "Back",
    sets: 3, reps: "10-12 each arm", rest: "60s",
    cue: "COMPOUND. One knee and hand on a bench. Pull toward your hip, not your shoulder.",
    steps: [
      "Place one knee and same-side hand on a bench for support.",
      "Hold a dumbbell in the other hand, arm hanging straight down.",
      "Pull the dumbbell up toward your hip, squeezing your shoulder blade.",
      "Lower fully before the next rep. Complete all reps, then switch.",
    ],
    difficulty: 1.2, calories: 28,
  },
  {
    name: "Straight-Arm Pulldown",
    target: "Lats",
    sets: 3, reps: "12-15", rest: "60s",
    cue: "ISOLATION. Reach into a FULL stretch at the top each rep — this is the lats' most direct job.",
    steps: [
      "Stand at a high cable with a straight bar/rope, arms extended overhead.",
      "Keep arms completely straight — no bending at the elbows.",
      "Pull the bar down in a big arc to your thighs using your lats.",
      "Let the bar rise slowly and reach into a deep lat stretch at the top.",
    ],
    difficulty: 1.1, calories: 24,
  },
  {
    name: "Reverse Pec Deck",
    target: "Rear delts",
    sets: 3, reps: "15-20", rest: "45s",
    cue: "ISOLATION. Superset with Cable Lateral Raise. Rear + side delts build shoulder width.",
    steps: [
      "Sit facing the machine, straight arms gripping the handles in front.",
      "Pull back and out in a wide arc, squeezing the shoulder blades.",
      "Pause level with your shoulders.",
      "Return slowly, then go straight into the cable lateral raise.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Cable Lateral Raise",
    target: "Side delts",
    sets: 3, reps: "12-20", rest: "60s",
    cue: "ISOLATION. Superset partner for the reverse pec deck. Slow and controlled.",
    steps: [
      "Stand side-on to a low cable, slight elbow bend.",
      "Raise the arm to shoulder height, leading with the elbow.",
      "Lower slowly under tension.",
      "Rest after the pair, then repeat the superset.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Preacher (or Incline) Curl",
    target: "Biceps",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. The bench removes cheating — only the biceps do the work.",
    steps: [
      "Rest your upper arms on the preacher pad (or lie back on an incline bench).",
      "Curl the weight up, squeezing the biceps hard.",
      "Lower slowly all the way to a full arm extension.",
      "No swinging — strict reps only.",
    ],
    difficulty: 1.1, calories: 20,
  },
  {
    name: "Barbell (or EZ-Bar) Curl",
    target: "Biceps",
    sets: 2, reps: "10-12", rest: "45s",
    cue: "ISOLATION. Elbows pinned to your ribs. Control up and down.",
    steps: [
      "Hold the bar with an underhand grip, elbows locked to your sides.",
      "Curl the bar up in a smooth arc toward your chest.",
      "Lower slowly all the way down.",
      "Final set may go to 0-1 reps from failure (from week 3).",
    ],
    difficulty: 1.1, calories: 20,
  },
];

// Optional forearm/elbow-health move, added from Week 3 to Tue & Thu.
const REVERSE_EZ_CURL: Exercise = {
  name: "Reverse EZ-Bar Curl (from Week 3)",
  target: "Forearms",
  sets: 2, reps: "12-15", rest: "45s",
  cue: "ISOLATION. Light weight. Palms-down grip hits the forearm top (brachioradialis) and keeps elbows/wrists healthy.",
  steps: [
    "Hold an EZ bar with an overhand (palms-down) grip.",
    "Curl the bar up keeping your elbows pinned to your sides.",
    "Squeeze the top of the forearm at the top.",
    "Lower slowly. Keep it light — this is for health and thickness, not ego.",
  ],
  difficulty: 1, calories: 14,
};

// ── WEDNESDAY — LEGS & ARMS (lighter) ────────────────────────────────────────
const WED_LEGS_ARMS: Exercise[] = [
  {
    name: "★ Leg Press (or Hack Squat)",
    target: "Quads & glutes",
    sets: 3, reps: "10-15", rest: "90s",
    cue: "COMPOUND. Do 1-2 ramp-up sets first. Feet shoulder-width, do not lock the knees at the top.",
    steps: [
      "Ramp up with 1-2 lighter feeler sets first.",
      "Feet shoulder-width on the platform, back flat against the pad.",
      "Lower the platform slowly until knees are around 90 degrees.",
      "Push through your full foot until legs are nearly straight — no hard lockout.",
    ],
    difficulty: 1.2, calories: 34,
  },
  {
    name: "Leg Extension (seat reclined)",
    target: "Quads (rectus femoris)",
    sets: 3, reps: "12-20", rest: "60s",
    cue: "ISOLATION. Lean the backrest BACK (open hip ~40°) — a reclined position grows the front thigh far more than sitting upright.",
    steps: [
      "Recline the seat back so your hips are open, not bolt upright.",
      "Extend your legs until straight, squeezing the quads hard.",
      "Hold the squeeze 1 second at the top.",
      "Lower slowly — do not let the weight drop.",
    ],
    difficulty: 1.1, calories: 26,
  },
  {
    name: "Seated Leg Curl (or Romanian Deadlift)",
    target: "Hamstrings",
    sets: 3, reps: "8-12", rest: "60s",
    cue: "ISOLATION. SEATED, not lying — the seated position stretches the hamstrings and grows them more.",
    steps: [
      "Sit with the pad on the back of your ankles, thighs strapped down.",
      "Curl your heels underneath you toward the seat.",
      "Squeeze the hamstrings hard at the bottom.",
      "Return slowly under control.",
    ],
    difficulty: 1.1, calories: 26,
  },
  {
    name: "Hip Thrust (or Glute Bridge)",
    target: "Glutes",
    sets: 3, reps: "10-15", rest: "60s",
    cue: "COMPOUND. Drive hips up to a straight line from knees to shoulders. Squeeze hard at the top.",
    steps: [
      "Upper back against a bench, weight padded across your hips.",
      "Feet flat, shoulder-width, toes slightly out.",
      "Drive hips up by squeezing your glutes — body forms a straight line.",
      "Hold the top 1 second, lower slowly. Do not arch the lower back.",
    ],
    difficulty: 1.2, calories: 28,
  },
  {
    name: "Standing Calf Raise",
    target: "Calves",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Superset with abs. Drop the heel DEEP and pause at the bottom — the stretch grows calves most.",
    steps: [
      "Stand on the edge of a step or the calf machine.",
      "Rise onto your tiptoes as high as possible, squeeze 1 second.",
      "Lower your heel as far below the step as it will go and pause.",
      "Go straight into the ab exercise with no rest.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Cable Crunch or Hanging Leg Raise",
    target: "Abs",
    sets: 3, reps: "12-15", rest: "45s",
    cue: "ISOLATION. Superset partner for the calf raise. From Week 3 you may swap in a kneeling ab-wheel rollout (short, controlled range) — but if your lower back arches, go straight back to the cable crunch.",
    steps: [
      "Cable crunch: kneel, rope behind your head, crunch your ribs toward your pelvis.",
      "Or hang and raise your knees/legs using your lower abs.",
      "Squeeze the abs hard, lower slowly.",
      "Rest after the pair, then repeat the superset.",
    ],
    difficulty: 1.1, calories: 18,
  },
  {
    name: "Hammer Curl",
    target: "Biceps & forearms",
    sets: 3, reps: "12", rest: "45s",
    cue: "ISOLATION. Superset with Overhead Cable Triceps Extension. Palms face each other the whole time.",
    steps: [
      "Hold dumbbells with palms facing your body (thumbs up).",
      "Curl up without swinging your shoulders forward.",
      "Squeeze at the top, lower slowly.",
      "Go straight into the overhead triceps extension.",
    ],
    difficulty: 1.1, calories: 20,
  },
  {
    name: "Overhead Cable Triceps Extension",
    target: "Triceps",
    sets: 3, reps: "12", rest: "45s",
    cue: "ISOLATION. Superset partner for the hammer curl. Overhead position grows the triceps long head.",
    steps: [
      "Face away from a cable set low, rope held overhead behind your head.",
      "Extend your arms straight overhead, keeping upper arms still.",
      "Squeeze the triceps, then lower slowly behind your head.",
      "Rest after the pair, then repeat the superset.",
    ],
    difficulty: 1.1, calories: 22,
  },
];

// ── THURSDAY — UPPER ─────────────────────────────────────────────────────────
const THU_UPPER: Exercise[] = [
  {
    name: "★ Incline Dumbbell Press",
    target: "Upper chest",
    sets: 3, reps: "6-10", rest: "90s",
    cue: "COMPOUND. Heaviest press today — do 2 ramp-up sets first. Bench at 30-45°.",
    steps: [
      "Ramp up: ~50% × 6 reps, then ~75% × 3 reps first.",
      "Bench at 30-45°, dumbbells at upper-chest level.",
      "Press up and slightly inward until they nearly touch.",
      "Lower slowly for 2-3 seconds to a stretch.",
    ],
    difficulty: 1.3, calories: 34,
  },
  {
    name: "Lat Pulldown",
    target: "Lats",
    sets: 3, reps: "8-12", rest: "75s",
    cue: "COMPOUND. Pull to your collarbone, drive the elbows down. Builds back width.",
    steps: [
      "Grip wider than shoulders, thighs locked under the pad.",
      "Pull the bar to your collarbone, squeezing the shoulder blades.",
      "Lean back only slightly — no big swing.",
      "Let the bar rise slowly to a full stretch.",
    ],
    difficulty: 1.2, calories: 30,
  },
  {
    name: "Seated Cable Row",
    target: "Back",
    sets: 2, reps: "10-12", rest: "60s",
    cue: "COMPOUND. Sit tall, pull the handle to your belly button, hold the squeeze 1 second.",
    steps: [
      "Sit upright, feet on the platform, slight knee bend.",
      "Pull the handle to your belly button — not your chest.",
      "Squeeze the shoulder blades together at the end.",
      "Let the arms extend forward slowly to a stretch.",
    ],
    difficulty: 1.2, calories: 26,
  },
  {
    name: "Cable Lateral Raise",
    target: "Side delts",
    sets: 4, reps: "12-20", rest: "45s",
    cue: "ISOLATION. Side delts are the #1 muscle for shoulder width — high reps, constant tension.",
    steps: [
      "Stand side-on to a low cable, slight elbow bend.",
      "Raise the arm to shoulder height, leading with the elbow.",
      "Lower slowly under tension.",
      "Switch sides after all reps if doing one arm at a time.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Incline Dumbbell Curl",
    target: "Biceps",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Superset with Overhead Cable Triceps Extension. The incline stretches the biceps for a bigger range.",
    steps: [
      "Lie back on a 45-60° incline bench, dumbbells hanging straight down.",
      "Curl both arms up without swinging the shoulders forward.",
      "Squeeze at the top, lower slowly to a full stretch.",
      "Go straight into the overhead triceps extension.",
    ],
    difficulty: 1.1, calories: 22,
  },
  {
    name: "Overhead Cable Triceps Extension",
    target: "Triceps",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Superset partner for the incline curl. Overhead stretches the long head for size.",
    steps: [
      "Face away from a low cable, rope overhead behind your head.",
      "Extend your arms straight overhead, upper arms still.",
      "Squeeze, then lower slowly behind your head.",
      "Rest after the pair, then repeat the superset.",
    ],
    difficulty: 1.1, calories: 22,
  },
  {
    name: "Rope Pushdown",
    target: "Triceps",
    sets: 2, reps: "12-15", rest: "45s",
    cue: "ISOLATION. Finisher for the triceps. Elbows pinned, spread the rope at the bottom.",
    steps: [
      "Grip the rope, elbows locked to your ribs.",
      "Push down until arms are fully straight, spreading the rope.",
      "Squeeze the triceps at the bottom.",
      "Let it rise slowly. Final set may reach 0-1 RIR (from week 3).",
    ],
    difficulty: 1, calories: 20,
  },
];

// ── SATURDAY — LOWER (heavy) ─────────────────────────────────────────────────
const SAT_LOWER: Exercise[] = [
  {
    name: "★ Hack Squat (or Barbell Squat)",
    target: "Quads & glutes",
    sets: 4, reps: "6-10", rest: "2 min",
    cue: "COMPOUND. Heaviest lift of the week — do 2 ramp-up sets first. Go to at least parallel.",
    steps: [
      "Ramp up: ~50% × 6 reps, then ~75% × 3 reps first.",
      "Feet shoulder-width, toes slightly out, back flat.",
      "Lower under control until thighs are at least parallel.",
      "Drive through your full foot to stand — do not let the knees cave in.",
    ],
    difficulty: 1.4, calories: 42,
  },
  {
    name: "Romanian Deadlift",
    target: "Hamstrings & glutes",
    sets: 3, reps: "8-12", rest: "90s",
    cue: "COMPOUND. Soft knees, push hips BACK. Feel the hamstring stretch at the bottom.",
    steps: [
      "Hold a barbell or dumbbells in front of your thighs.",
      "Soft bend in the knees — this is a hip hinge, not a squat.",
      "Push your hips back as you lower the weight along your legs.",
      "Feel the hamstring stretch, then drive hips forward to stand tall.",
    ],
    difficulty: 1.3, calories: 36,
  },
  {
    name: "Reverse Lunge (or Walking Lunge / Bulgarian Split Squat)",
    target: "Quads & glutes",
    sets: 3, reps: "10-12 each leg", rest: "75s",
    cue: "COMPOUND. Pick ONE. Reverse lunge is the knee-friendliest (shin stays vertical) — best on cranky-knee days.",
    steps: [
      "Reverse lunge: step one foot back and lower until the back knee nearly touches.",
      "Keep your front shin vertical; push through the front foot to stand.",
      "Or Bulgarian split squat (rear foot on a bench) for the most glute stretch.",
      "Complete all reps on one leg, then switch. Hold dumbbells to load.",
    ],
    difficulty: 1.3, calories: 34,
  },
  {
    name: "Seated Leg Curl",
    target: "Hamstrings",
    sets: 3, reps: "10-15", rest: "60s",
    cue: "ISOLATION. SEATED version — stretched hamstrings grow more than the lying curl.",
    steps: [
      "Sit with the pad on the back of your ankles, thighs strapped.",
      "Curl your heels down and under toward the seat.",
      "Squeeze the hamstrings hard at the bottom.",
      "Return slowly under full control.",
    ],
    difficulty: 1.1, calories: 26,
  },
  {
    name: "Standing Calf Raise",
    target: "Calves",
    sets: 4, reps: "8-12", rest: "45s",
    cue: "ISOLATION. Superset with Hanging Leg Raise. Drop the heel DEEP and pause at the bottom for the best growth.",
    steps: [
      "Stand on the edge of a step or the calf machine.",
      "Rise onto your tiptoes as high as possible, squeeze 1 second.",
      "Lower your heel as far below the step as possible and pause.",
      "Go straight into the hanging leg raise.",
    ],
    difficulty: 1, calories: 22,
  },
  {
    name: "Hanging Leg Raise",
    target: "Abs & core",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Superset partner for the calf raise. Use your core to lift — no swinging.",
    steps: [
      "Hang from a bar, hands slightly wider than shoulders.",
      "Raise your knees (or straight legs) toward your chest using your abs.",
      "Squeeze at the top, lower slowly — resist the swing.",
      "Rest after the pair, then repeat the superset.",
    ],
    difficulty: 1.1, calories: 18,
  },
];

export const MAIN_PROGRAM: MainPhase[] = [
  // PHASE TOGGLE 0 — Weeks 1–2 (learn form, stay 2–3 reps from failure)
  {
    label: "Weeks 1–2 · Foundation",
    levelRange: "RIR 2-3",
    mon: MON_PUSH,
    tue: TUE_PULL,
    wed: WED_LEGS_ARMS,
    thu: THU_UPPER,
    sat: SAT_LOWER,
  },
  // PHASE TOGGLE 1 — Week 3+ (push to 1–2 RIR; adds reverse EZ-curl on Tue/Thu)
  {
    label: "Week 3+ · Progression",
    levelRange: "RIR 1-2",
    mon: MON_PUSH,
    tue: [...TUE_PULL, REVERSE_EZ_CURL],
    wed: WED_LEGS_ARMS,
    thu: [...THU_UPPER, REVERSE_EZ_CURL],
    sat: SAT_LOWER,
  },
];
