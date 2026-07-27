import type { MainPhase, Exercise } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// 5-DAY V-TAPER PLAN — every exercise is its own separate movement (no "A or B",
// no supersets), ordered so doing one first does NOT compromise the next:
//   • Free-weight / stability-heavy moves come BEFORE machine versions
//     (you use your stabilisers while fresh; the machine supports you when tired).
//   • Big compound lifts come before isolation.
//   • A muscle is never pre-fatigued right before a lift that needs it fresh.
// Each cue is tagged COMPOUND (many joints/muscles) or ISOLATION (one muscle).
// ★ = heaviest lift of the day — do 1-2 light ramp-up sets first.
// ─────────────────────────────────────────────────────────────────────────────

// ── MONDAY — PUSH ────────────────────────────────────────────────────────────
const MON_PUSH: Exercise[] = [
  {
    name: "Flat Dumbbell Press",
    target: "Chest",
    sets: 3, reps: "8-12", rest: "90s",
    cue: "COMPOUND. Done FIRST while your shoulders/stabilisers are fresh — free weights need more control than the machine. Do one light feeler set first.",
    steps: [
      "Lie flat, dumbbells at chest level, elbows about 45° from your body.",
      "Press up until arms are nearly straight — don't clash the dumbbells.",
      "Lower slowly for 2-3 seconds to a stretch across the chest.",
      "Keep your shoulder blades pulled back and down the whole set.",
    ],
    difficulty: 1.3, calories: 36,
  },
  {
    name: "Machine Chest Press",
    target: "Chest",
    sets: 2, reps: "10-12", rest: "75s",
    cue: "COMPOUND. Done SECOND — the machine supports you, so it's safe to push hard now that free-weight pressing has tired you.",
    steps: [
      "Set the seat so the handles line up with mid-chest.",
      "Press out until arms are nearly straight, no hard lockout.",
      "Return slowly to a stretch.",
      "Because you're pre-fatigued, use a slightly lighter load than usual.",
    ],
    difficulty: 1.2, calories: 30,
  },
  {
    name: "Incline Dumbbell Press",
    target: "Upper chest",
    sets: 3, reps: "8-12", rest: "75s",
    cue: "COMPOUND. Bench at 30-45°. Hits the upper chest and front delts — the part that fills out a V-taper.",
    steps: [
      "Set the bench to a 30-45 degree incline.",
      "Dumbbells at upper-chest level, elbows slightly wider than shoulders.",
      "Press up and slightly inward until they nearly touch.",
      "Lower slowly under control — don't arch the lower back off the bench.",
    ],
    difficulty: 1.2, calories: 32,
  },
  {
    name: "Pec Deck",
    target: "Chest",
    sets: 2, reps: "12-15", rest: "60s",
    cue: "ISOLATION. Pure chest squeeze with a fixed path — done before the cable fly because it needs zero balancing.",
    steps: [
      "Set the pads so your arms open to a comfortable chest stretch.",
      "Bring the pads together in front of your chest.",
      "Squeeze hard for 1 second in the middle.",
      "Open slowly, feeling the stretch — don't let the weight yank you back.",
    ],
    difficulty: 1, calories: 22,
  },
  {
    name: "Cable Fly",
    target: "Chest",
    sets: 2, reps: "12-15", rest: "60s",
    cue: "ISOLATION. Different angle and constant tension vs the pec deck. Done last for chest — light, so fatigue here won't hurt anything.",
    steps: [
      "Set both cables to about shoulder height, slight bend in the elbows.",
      "Bring your hands together in front of your chest in a hugging arc.",
      "Squeeze the chest hard where the hands meet.",
      "Open slowly to a full stretch across the chest.",
    ],
    difficulty: 1, calories: 22,
  },
  {
    name: "Seated Dumbbell Shoulder Press",
    target: "Shoulders",
    sets: 3, reps: "8-12", rest: "75s",
    cue: "COMPOUND. Chest work is done, so your front delts are warm but not destroyed. Press straight up, don't lean back.",
    steps: [
      "Sit with back support, dumbbells at shoulder height, palms forward.",
      "Press straight up until arms are almost fully extended.",
      "Lower slowly back to shoulder height.",
      "Keep your core braced and ribs down.",
    ],
    difficulty: 1.2, calories: 30,
  },
  {
    name: "Cable Lateral Raise",
    target: "Side delts",
    sets: 4, reps: "12-20", rest: "45s",
    cue: "ISOLATION. Side delts are the #1 muscle for shoulder width. Slow, high-rep, constant tension. May be done one arm at a time.",
    steps: [
      "Stand side-on to a low cable, slight bend in the elbow.",
      "Raise your arm out to shoulder height, leading with the elbow.",
      "Pause briefly at the top.",
      "Lower slowly under constant cable tension.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Reverse Pec Deck",
    target: "Rear delts",
    sets: 3, reps: "15-20", rest: "45s",
    cue: "ISOLATION. Rear delts round out the shoulder and fix posture. Light and high-rep.",
    steps: [
      "Sit facing the machine, straight arms gripping the handles in front.",
      "Pull back and out in a wide arc, squeezing your shoulder blades.",
      "Pause level with your shoulders.",
      "Return slowly under control.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Rope Pushdown",
    target: "Triceps",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Elbows pinned to your ribs, spread the rope apart at the bottom.",
    steps: [
      "Grip the rope, elbows locked to your sides.",
      "Push down until arms are fully straight, spreading the rope.",
      "Squeeze the triceps hard at the bottom.",
      "Let the rope rise slowly — resist on the way up.",
    ],
    difficulty: 1, calories: 22,
  },
  {
    name: "Overhead Dumbbell Triceps Extension",
    target: "Triceps",
    sets: 2, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Overhead position stretches the triceps long head (the biggest part) — best for arm size. Done last.",
    steps: [
      "Hold one dumbbell with both hands directly overhead, arms straight.",
      "Lower slowly behind your head by bending only at the elbows.",
      "Keep your upper arms vertical and still — only forearms move.",
      "Press back to straight arms, feeling the stretch at the bottom.",
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
    cue: "COMPOUND. Heaviest pull today — do 1-2 ramp-up sets first. Chest stays on the pad so your lower back is spared and fresh for the free rows next.",
    steps: [
      "Chest against the pad, arms hanging straight down.",
      "Row the weight to your lower ribs, leading with the elbows.",
      "Squeeze the shoulder blades together at the top.",
      "Lower to a full stretch under control.",
    ],
    difficulty: 1.3, calories: 36,
  },
  {
    name: "Lat Pulldown",
    target: "Lats",
    sets: 3, reps: "8-12", rest: "75s",
    cue: "COMPOUND. Vertical pull for back width — done after the row while your lats are warm. Pull to your collarbone.",
    steps: [
      "Grip wider than shoulders, thighs locked under the pad.",
      "Pull the bar to your collarbone, driving the elbows down.",
      "Lean back only slightly — no big swing.",
      "Let the bar rise slowly to a full stretch.",
    ],
    difficulty: 1.2, calories: 30,
  },
  {
    name: "Single-Arm Dumbbell Row",
    target: "Back",
    sets: 3, reps: "10-12 each arm", rest: "60s",
    cue: "COMPOUND. One side at a time evens out left-right imbalances. Pull toward your hip, not your shoulder.",
    steps: [
      "One knee and same-side hand on a bench for support.",
      "Dumbbell in the other hand, arm hanging straight down.",
      "Pull the dumbbell up toward your hip, squeezing the shoulder blade.",
      "Lower fully before the next rep. All reps one side, then switch.",
    ],
    difficulty: 1.2, calories: 28,
  },
  {
    name: "Straight-Arm Pulldown",
    target: "Lats",
    sets: 3, reps: "12-15", rest: "60s",
    cue: "ISOLATION. Isolates the lats with no biceps involvement — done after the rows so your tired biceps aren't the limit. Reach into a FULL stretch at the top.",
    steps: [
      "Stand at a high cable, straight bar/rope, arms extended overhead.",
      "Keep arms completely straight — no elbow bend.",
      "Pull the bar down in a big arc to your thighs using your lats.",
      "Let it rise slowly into a deep lat stretch at the top.",
    ],
    difficulty: 1.1, calories: 24,
  },
  {
    name: "Reverse Pec Deck",
    target: "Rear delts",
    sets: 3, reps: "15-20", rest: "45s",
    cue: "ISOLATION. Rear delts finish the back and build shoulder width. Light and high-rep.",
    steps: [
      "Sit facing the machine, straight arms gripping the handles in front.",
      "Pull back and out in a wide arc, squeezing the shoulder blades.",
      "Pause level with your shoulders.",
      "Return slowly.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Cable Lateral Raise",
    target: "Side delts",
    sets: 3, reps: "12-20", rest: "45s",
    cue: "ISOLATION. Side-delt work on pull day too — width is the priority for your V-taper.",
    steps: [
      "Stand side-on to a low cable, slight elbow bend.",
      "Raise the arm to shoulder height, leading with the elbow.",
      "Pause at the top, lower slowly.",
      "Switch sides after all reps if doing one arm at a time.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Incline Dumbbell Curl",
    target: "Biceps",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Arms hanging behind the body stretches the biceps for a bigger range — done before the standing curl while the stretch position is fresh.",
    steps: [
      "Lie back on a 45-60° incline bench, dumbbells hanging straight down.",
      "Curl both arms up without swinging the shoulders forward.",
      "Squeeze at the top, lower slowly to a full stretch.",
      "Keep your upper arms still behind your body.",
    ],
    difficulty: 1.1, calories: 22,
  },
  {
    name: "EZ-Bar Curl",
    target: "Biceps",
    sets: 2, reps: "10-12", rest: "45s",
    cue: "ISOLATION. Standing curl to finish the biceps — the angled EZ grip is easier on the wrists. Elbows pinned, no swinging.",
    steps: [
      "Hold the EZ bar underhand on the angled inner grip.",
      "Stand tall, elbows locked to your sides.",
      "Curl the bar up in a smooth arc.",
      "Lower slowly all the way down. Last set may reach 0-1 RIR (from week 3).",
    ],
    difficulty: 1.1, calories: 20,
  },
];

// Optional forearm/elbow-health move, added from Week 3 to Tue & Thu.
const REVERSE_EZ_CURL: Exercise = {
  name: "Reverse EZ-Bar Curl (from Week 3)",
  target: "Forearms",
  sets: 2, reps: "12-15", rest: "45s",
  cue: "ISOLATION. Light weight. Palms-down grip works the forearm top (brachioradialis) and keeps elbows/wrists healthy. Done dead last — nothing follows it.",
  steps: [
    "Hold an EZ bar with an overhand (palms-down) grip.",
    "Curl the bar up keeping elbows pinned to your sides.",
    "Squeeze the top of the forearm.",
    "Lower slowly. Keep it light — for health and thickness, not ego.",
  ],
  difficulty: 1, calories: 14,
};

// ── FOREARM FINISHER (Tue + Wed) — builds thick, veiny forearms ──────────────
// Light and low-fatigue, done dead last so it never hurts the main lifts.
// Remember: forearm size helps veins show, but getting LEAN is what makes them pop.
const FOREARM_FINISHER: Exercise[] = [
  {
    name: "Wrist Curls",
    target: "Forearms",
    sets: 2, reps: "15", rest: "30s",
    cue: "ISOLATION. Palm-up. Builds the underside of the forearm for thickness. Only the wrist moves.",
    steps: [
      "Sit and rest your forearms on your thighs, wrists just past your knees, palms up.",
      "Hold a barbell/dumbbells and let your wrists drop fully down.",
      "Curl the weight up by flexing only your wrists — as high as possible.",
      "Lower slowly all the way. Keep your forearms glued to your thighs.",
    ],
    difficulty: 1, calories: 12,
  },
  {
    name: "Reverse Wrist Curls",
    target: "Forearms",
    sets: 2, reps: "15", rest: "30s",
    cue: "ISOLATION. Palm-DOWN. Builds the top of the forearm and balances the wrist — keeps elbows healthy.",
    steps: [
      "Same seated position, but palms facing DOWN over your knees.",
      "Let the wrists drop, then lift the backs of your hands up as high as you can.",
      "Squeeze the top of the forearm at the top.",
      "Lower slowly. Use lighter weight than the palm-up version.",
    ],
    difficulty: 1, calories: 10,
  },
  {
    name: "Dead Hang Hold",
    target: "Forearms & grip",
    sets: 2, reps: "20-30 sec hold", rest: "45s",
    cue: "ISOLATION. Pure grip and forearm endurance — also decompresses the spine. Done last.",
    steps: [
      "Grip a pull-up bar with both hands, shoulder-width.",
      "Hang with straight arms, shoulders relaxed — do not swing.",
      "Hold for 20-30 seconds, squeezing the bar hard.",
      "Step off gently. Build up the time each week as your grip improves.",
    ],
    difficulty: 1, calories: 10,
  },
];

// ── WEDNESDAY — LEGS & ARMS (lighter) ────────────────────────────────────────
const WED_LEGS_ARMS: Exercise[] = [
  {
    name: "★ Leg Press",
    target: "Quads & glutes",
    sets: 3, reps: "10-15", rest: "90s",
    cue: "COMPOUND. Heaviest leg move today — do 1-2 ramp-up sets first. Done first while your legs are fresh. Don't lock the knees at the top.",
    steps: [
      "Feet shoulder-width on the platform, back flat against the pad.",
      "Lower the platform slowly until knees are around 90°.",
      "Push through your full foot until legs are nearly straight — no hard lockout.",
      "Keep your lower back glued to the seat throughout.",
    ],
    difficulty: 1.2, calories: 34,
  },
  {
    name: "Leg Extension (seat reclined)",
    target: "Quads (rectus femoris)",
    sets: 3, reps: "12-20", rest: "60s",
    cue: "ISOLATION. Lean the backrest BACK (open hip) — a reclined position grows the front thigh far more than sitting upright.",
    steps: [
      "Recline the seat back so your hips are open, not bolt upright.",
      "Extend your legs until straight, squeezing the quads hard.",
      "Hold the squeeze 1 second at the top.",
      "Lower slowly — don't let the weight drop.",
    ],
    difficulty: 1.1, calories: 26,
  },
  {
    name: "Seated Leg Curl",
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
    name: "Hip Thrust",
    target: "Glutes",
    sets: 3, reps: "10-15", rest: "60s",
    cue: "COMPOUND. Best glute builder. Drive hips up to a straight line from knees to shoulders, squeeze hard at the top.",
    steps: [
      "Upper back against a bench, weight padded across your hips.",
      "Feet flat, shoulder-width, toes slightly out.",
      "Drive hips up by squeezing your glutes — body forms a straight line.",
      "Hold the top 1 second, lower slowly. Don't arch the lower back.",
    ],
    difficulty: 1.2, calories: 28,
  },
  {
    name: "Standing Calf Raise",
    target: "Calves",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Drop the heel DEEP and pause at the bottom — the stretch is what grows calves.",
    steps: [
      "Stand on the edge of a step or the calf machine.",
      "Rise onto your tiptoes as high as possible, squeeze 1 second.",
      "Lower your heel as far below the step as it will go and pause.",
      "Full range every rep — no short bounces.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Cable Crunch",
    target: "Abs",
    sets: 3, reps: "12-15", rest: "45s",
    cue: "ISOLATION. From Week 3 you may swap in a kneeling ab-wheel rollout (short, controlled range) — but if your lower back arches at all, go straight back to the cable crunch.",
    steps: [
      "Kneel facing the cable, rope held behind your head.",
      "Crunch your ribs down toward your pelvis using your abs.",
      "Squeeze hard at the bottom.",
      "Return slowly — keep the tension on the abs, not the arms.",
    ],
    difficulty: 1.1, calories: 18,
  },
  {
    name: "Hammer Curl",
    target: "Biceps & forearms",
    sets: 3, reps: "12", rest: "45s",
    cue: "ISOLATION. Palms face each other the whole time — hits the biceps and forearms together.",
    steps: [
      "Hold dumbbells with palms facing your body (thumbs up).",
      "Curl up without swinging your shoulders forward.",
      "Squeeze at the top, lower slowly.",
      "Alternate arms or lift both together.",
    ],
    difficulty: 1.1, calories: 20,
  },
  {
    name: "Overhead Cable Triceps Extension",
    target: "Triceps",
    sets: 3, reps: "12", rest: "45s",
    cue: "ISOLATION. Overhead position stretches the triceps long head for size. Done last.",
    steps: [
      "Face away from a low cable, rope held overhead behind your head.",
      "Extend your arms straight overhead, keeping upper arms still.",
      "Squeeze the triceps, then lower slowly behind your head.",
      "Keep your elbows pointing forward, not flaring out.",
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
    cue: "COMPOUND. Heaviest press today — do 1-2 ramp-up sets first. Bench at 30-45°.",
    steps: [
      "Bench at 30-45°, dumbbells at upper-chest level.",
      "Press up and slightly inward until they nearly touch.",
      "Lower slowly for 2-3 seconds to a stretch.",
      "Keep your shoulder blades pulled back and down.",
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
      "Lean back only slightly.",
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
    cue: "ISOLATION. High-rep side-delt work for shoulder width. Constant tension, slow tempo.",
    steps: [
      "Stand side-on to a low cable, slight elbow bend.",
      "Raise the arm to shoulder height, leading with the elbow.",
      "Pause at the top, lower slowly.",
      "Switch sides after all reps if doing one arm at a time.",
    ],
    difficulty: 1, calories: 20,
  },
  {
    name: "Incline Dumbbell Curl",
    target: "Biceps",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. The incline stretches the biceps for a bigger range of motion.",
    steps: [
      "Lie back on a 45-60° incline bench, dumbbells hanging straight down.",
      "Curl both arms up without swinging.",
      "Squeeze at the top, lower slowly to a full stretch.",
      "Keep your upper arms still behind your body.",
    ],
    difficulty: 1.1, calories: 22,
  },
  {
    name: "Overhead Cable Triceps Extension",
    target: "Triceps",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Overhead stretches the long head for size — done before the pushdown while fresh.",
    steps: [
      "Face away from a low cable, rope overhead behind your head.",
      "Extend your arms straight overhead, upper arms still.",
      "Squeeze, then lower slowly behind your head.",
      "Elbows point forward, not flaring out.",
    ],
    difficulty: 1.1, calories: 22,
  },
  {
    name: "Rope Pushdown",
    target: "Triceps",
    sets: 2, reps: "12-15", rest: "45s",
    cue: "ISOLATION. Triceps finisher. Elbows pinned, spread the rope at the bottom.",
    steps: [
      "Grip the rope, elbows locked to your ribs.",
      "Push down until arms are fully straight, spreading the rope.",
      "Squeeze the triceps at the bottom.",
      "Let it rise slowly. Last set may reach 0-1 RIR (from week 3).",
    ],
    difficulty: 1, calories: 20,
  },
];

// ── SATURDAY — LOWER (heavy) ─────────────────────────────────────────────────
const SAT_LOWER: Exercise[] = [
  {
    name: "★ Hack Squat",
    target: "Quads & glutes",
    sets: 4, reps: "6-10", rest: "2 min",
    cue: "COMPOUND. Heaviest lift of the week — do 1-2 ramp-up sets first. Go to at least parallel.",
    steps: [
      "Feet shoulder-width, toes slightly out, back flat against the pad.",
      "Lower under control until thighs are at least parallel.",
      "Drive through your full foot to stand — don't let the knees cave in.",
      "Keep tension; don't slam into the top lockout.",
    ],
    difficulty: 1.4, calories: 42,
  },
  {
    name: "Romanian Deadlift",
    target: "Hamstrings & glutes",
    sets: 3, reps: "8-12", rest: "90s",
    cue: "COMPOUND. Soft knees, push hips BACK. Feel the hamstring stretch — done after squats while your lower back is still fresh.",
    steps: [
      "Hold a barbell or dumbbells in front of your thighs.",
      "Soft bend in the knees — this is a hip hinge, not a squat.",
      "Push your hips back as you lower the weight along your legs.",
      "Feel the hamstring stretch, then drive hips forward to stand tall.",
    ],
    difficulty: 1.3, calories: 36,
  },
  {
    name: "Reverse Lunge",
    target: "Quads & glutes",
    sets: 3, reps: "10-12 each leg", rest: "75s",
    cue: "COMPOUND. Knee-friendliest lunge — stepping back keeps your front shin vertical. Hold dumbbells to load.",
    steps: [
      "Stand tall, step one foot back and lower until the back knee nearly touches.",
      "Keep your front shin vertical and weight in the front heel.",
      "Push through the front foot to return to standing.",
      "All reps on one leg, then switch (or alternate).",
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
    cue: "ISOLATION. Drop the heel DEEP and pause at the bottom for the best growth.",
    steps: [
      "Stand on the edge of a step or the calf machine.",
      "Rise onto your tiptoes as high as possible, squeeze 1 second.",
      "Lower your heel as far below the step as possible and pause.",
      "Full range, controlled — no bouncing.",
    ],
    difficulty: 1, calories: 22,
  },
  {
    name: "Hanging Leg Raise",
    target: "Abs & core",
    sets: 3, reps: "10-15", rest: "45s",
    cue: "ISOLATION. Use your core to lift — no swinging. Done last, nothing follows it.",
    steps: [
      "Hang from a bar, hands slightly wider than shoulders.",
      "Raise your knees (or straight legs) toward your chest using your abs.",
      "Squeeze at the top, lower slowly — resist the swing.",
      "Too hard? Do lying reverse crunches on a mat instead.",
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
    tue: [...TUE_PULL, ...FOREARM_FINISHER],
    wed: [...WED_LEGS_ARMS, ...FOREARM_FINISHER],
    thu: THU_UPPER,
    sat: SAT_LOWER,
  },
  // PHASE TOGGLE 1 — Week 3+ (push to 1–2 RIR; adds reverse EZ-curl on Tue/Thu)
  {
    label: "Week 3+ · Progression",
    levelRange: "RIR 1-2",
    mon: MON_PUSH,
    tue: [...TUE_PULL, REVERSE_EZ_CURL, ...FOREARM_FINISHER],
    wed: [...WED_LEGS_ARMS, ...FOREARM_FINISHER],
    thu: [...THU_UPPER, REVERSE_EZ_CURL],
    sat: SAT_LOWER,
  },
];
