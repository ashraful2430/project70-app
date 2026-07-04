// Home alternatives for every gym exercise — keys must match exercise names
// in mainProgram.ts exactly. Each alternative includes a named exercise with
// sets × reps so a full home session can replace the gym day 1:1.
export const NO_EQUIPMENT_ALT: Record<string, string> = {
  // ── PHASE 1 · MONDAY — Chest & Triceps ──────────────────────────────────
  "Dumbbell Chest Press":
    "Home: Push-ups — 3 sets × 15 reps, rest 60s. Same chest muscles. Too easy? Elevate your feet on a chair.",
  "Incline Dumbbell Press":
    "Home: Decline Push-ups (feet on a chair, hands on floor) — 3 sets × 12 reps, rest 60s. Feet-up angle hits the upper chest like an incline press.",
  "Pec Fly (Machine or Dumbbell)":
    "Home: Wide-Grip Push-ups (hands 1.5× shoulder width) — 3 sets × 12 reps, rest 45s. Stretches and squeezes the chest like a fly.",
  "Overhead Dumbbell Extension":
    "Home: Bodyweight Skull Crushers on a table edge (lean into it, bend only at elbows) — 3 sets × 12 reps, rest 60s. Or use a full 1.5L water bottle overhead.",
  "Rope Cable Pushdown":
    "Home: Chair Dips — 3 sets × 12 reps, rest 45s. Hands on a sturdy chair behind you, lower until elbows hit 90°, push back up.",
  "Hanging Knee Raises":
    "Home: Reverse Crunches on a mat — 3 sets × 12 reps, rest 45s. Lie flat, curl knees to chest and lift hips off the floor.",

  // ── PHASE 1 · TUESDAY — Back & Biceps ───────────────────────────────────
  "Single-Arm Dumbbell Row":
    "Home: Backpack Row — 3 sets × 12 each side, rest 60s. Load a backpack with books, one hand on a chair, row it to your hip.",
  "Lat Pulldown":
    "Home: Towel Doorway Rows — 3 sets × 12 reps, rest 60s. Loop a towel around a door handle, lean back with straight arms, pull chest to hands.",
  "Seated Cable Row":
    "Home: Inverted Rows under a sturdy table — 3 sets × 10 reps, rest 60s. Lie under the table, grab the edge, pull your chest up to it.",
  "EZ Barbell Curl":
    "Home: Backpack Curls — 3 sets × 12 reps, rest 45s. Hold a loaded backpack by the top handle with both hands and curl.",
  "Incline Hammer Curl":
    "Home: Water Bottle Hammer Curls — 3 sets × 15 reps, rest 45s. Two 1.5L bottles, palms facing each other, slow 3-second lowering.",
  "Dumbbell Wrist Curls":
    "Home: Water Bottle Wrist Curls — 3 sets × 15 reps, rest 30s. Same movement with a full bottle. Add towel wringing (twist a towel hard, 30s) for grip.",

  // ── PHASE 1 · WEDNESDAY — Shoulders ─────────────────────────────────────
  "Dumbbell Shoulder Press":
    "Home: Pike Push-ups — 3 sets × 10 reps, rest 60s. Hips high, head pointing down, lower crown of head to floor and press. Or press a loaded backpack overhead × 12.",
  "Lateral Dumbbell Raise":
    "Home: Water Bottle Lateral Raises — 3 sets × 15 reps, rest 45s. Two full bottles raised out like wings. Slow reps — 2 seconds up, 2 down.",
  "Cable Front Raise":
    "Home: Water Bottle Front Raises — 3 sets × 15 reps, rest 45s. Raise the bottles straight forward to shoulder height, pause 1 second.",
  "Reverse Pec Deck Fly":
    "Home: Bent-Over Reverse Fly with bottles — 3 sets × 15 reps, rest 45s. Hinge forward 45°, raise both arms out to the sides, squeeze shoulder blades.",
  "LISS Cardio — Treadmill Walk":
    "Home: 15 min brisk outdoor walk, or 10–15 min continuous stair climbing up and down.",

  // ── PHASE 1 · THURSDAY — Legs & Abs ─────────────────────────────────────
  "Stiff-Legged Deadlift":
    "Home: Single-Leg Romanian Deadlift (bodyweight) — 3 sets × 10 each leg, rest 60s. Hinge on one leg, reach toward the floor. Hold water bottles to add load.",
  "Smith Machine Squats":
    "Home: Bodyweight Squats — 3 sets × 20 reps, rest 60s. Go below parallel every rep. Too easy? Backpack Goblet Squats × 15 or Bulgarian Split Squats × 10 each leg.",
  "Leg Curl (Machine)":
    "Home: Sliding Leg Curls — 3 sets × 10 reps, rest 60s. Lie on your back, heels on a towel on smooth floor, bridge hips up and slide heels in and out.",
  "Barbell Hip Thrust":
    "Home: Single-Leg Hip Thrust (shoulders on a sofa edge) — 3 sets × 12 each leg, rest 60s. One leg doubles the load — no barbell needed.",
  "Standing Calf Raise":
    "Home: Single-Leg Calf Raises on a stair edge — 3 sets × 15 each leg, rest 45s. Full stretch at the bottom, full squeeze at the top.",

  // ── PHASE 1 · FRIDAY (legacy legs data) ─────────────────────────────────
  "Abductor Machine":
    "Home: Side-Lying Leg Raises — 3 sets × 15 each side, rest 45s. Or banded Clamshells × 15 each side if you have a loop band.",

  // ── PHASE 1 · SATURDAY — Full Body ──────────────────────────────────────
  "Sumo Squat":
    "Home: Bodyweight Sumo Squats — 3 sets × 15 reps, rest 60s. Wide stance, toes out 45°. Hold a loaded backpack at your chest to add weight.",
  "Decline Dumbbell Press":
    "Home: Incline Push-ups (hands on a chair seat, body straight) — 3 sets × 15 reps, rest 60s. This angle emphasizes the lower chest.",
  "Straight-Arm Pulldown":
    "Home: Towel Straight-Arm Pulls — 3 sets × 12 reps, rest 45s. Towel over a door top, arms straight, pull down to your thighs using your lats only.",
  "Face Pulls":
    "Home: Prone Y-T-W Raises — 3 sets × 8 of each letter, rest 45s. Lie face-down, raise arms in Y, then T, then W shapes, squeezing your upper back.",
  "Preacher Curl":
    "Home: Strict Wall Curls — 3 sets × 12 reps, rest 45s. Back and elbows pinned flat against a wall, curl water bottles or a backpack. The wall removes all cheating.",
  "Cable Triceps Pushdown":
    "Home: Close-Grip Push-ups — 3 sets × 12 reps, rest 45s. Hands directly under shoulders, elbows brushing your ribs the whole way.",
  "LISS Cardio Finisher — Brisk Walk":
    "Home: 15 min brisk outdoor walk — fast enough that talking takes effort.",

  // ── PHASE 2 · MONDAY — Chest, Shoulders & Triceps ───────────────────────
  "Incline Bench Press":
    "Home: Decline Push-ups (feet on chair) — 4 sets × 12 reps, rest 75s. Add a loaded backpack worn on your back to progress.",
  "Cable Chest Fly":
    "Home: Towel Slide Flys — 3 sets × 10 reps, rest 60s. Kneel with hands on towels on smooth floor, slide arms apart and squeeze back together.",
  "Dumbbell Arnold Press":
    "Home: Pike Push-ups — 3 sets × 12 reps, rest 60s. Or Arnold Press with water bottles — 3 sets × 15 with the same rotation.",
  "Cable Lateral Raise":
    "Home: Water Bottle Lateral Raises with 3-second lowering — 3 sets × 15 reps, rest 45s. The slow negative replaces the cable's constant tension.",
  "Overhead Triceps Extension":
    "Home: Bodyweight Skull Crushers on a table/counter edge — 3 sets × 12 reps, rest 45s. The lower the surface, the harder it gets.",
  "Bench Dips":
    "Home: Chair Dips — 3 sets × 15 reps, rest 45s. Feet further away = harder. Feet on a second chair = hardest.",

  // ── PHASE 2 · TUESDAY — Back & Biceps ───────────────────────────────────
  "T-Bar Row":
    "Home: Bent-Over Backpack Rows (heavy) — 4 sets × 10 reps, rest 75s. Load the backpack as heavy as it safely goes, hinge 45°, row to your lower chest.",
  "Cable Close-Grip Pulldown":
    "Home: Close-Grip Towel Rows — 3 sets × 10 reps, rest 60s. Towel around a door handle, hands close together, pull to your collarbone leaning back.",
  "Dumbbell Hammer Curl":
    "Home: Water Bottle Hammer Curls — 4 sets × 15 reps, rest 45s. Palms facing in, alternate arms, no swinging.",
  "Spider Curl":
    "Home: Prone Bed-Edge Curls — 4 sets × 12 reps, rest 45s. Lie face-down on the bed with arms hanging off the edge, curl bottles with elbows pointing straight down.",
  "Wrist Curls + Dead Hang":
    "Home: Wrist Curls with bottle × 15, then Towel Wring (twist a thick towel as hard as possible) × 30 seconds — 3 rounds, rest 30s.",
  "LISS Cardio Finisher":
    "Home: 20 min brisk outdoor walk, or 15 min continuous stair climbing at a steady pace.",

  // ── PHASE 2 · WEDNESDAY — Legs, Calves & Abs ────────────────────────────
  "Dumbbell Romanian Deadlift":
    "Home: Single-Leg Romanian Deadlift — 3 sets × 10 each leg, rest 60s. Hold water bottles or a backpack for load. Balance demand doubles the difficulty.",
  "Hip Thrust":
    "Home: Single-Leg Hip Thrust (shoulders on sofa) — 3 sets × 12 each leg, rest 60s. Pause 2 seconds at the top of every rep.",
  "Donkey Kickbacks":
    "Home: Donkey Kickbacks on a mat (all fours) — 3 sets × 15 each leg, rest 45s. Add a 3-second squeeze at the top since there's no cable resistance.",

  // ── PHASE 2 · FRIDAY — Upper Body ───────────────────────────────────────
  "Barbell Bench Press":
    "Home: Weighted Push-ups (backpack on your back) — 4 sets × 12 reps, rest 75s. Add books until the last 2 reps are genuinely hard.",
  "Reverse-Grip Lat Pulldown":
    "Home: Underhand Towel Rows — 3 sets × 12 reps, rest 45s. Towel around a door handle, palms up, pull to your lower chest leaning back.",

  // ── PHASE 2 · SATURDAY — Lower Body ─────────────────────────────────────
  "Smith Machine Front Squat":
    "Home: Backpack Front Squats — 3 sets × 15 reps, rest 90s. Hug a loaded backpack at your chest, torso upright, squat below parallel.",
  "Leg Press":
    "Home: Bulgarian Split Squats (rear foot on a chair) — 3 sets × 10 each leg, rest 75s. One-leg loading replaces machine weight.",
  "Leg Extension":
    "Home: Wall Sit — 3 sets × 45 seconds, rest 45s. Or Slow Step-ups on a stair — 3 sets × 12 each leg with a 3-second lowering.",
  "Seated Calf Raise":
    "Home: Seated Calf Raises with a loaded backpack on your knees — 4 sets × 20 reps, rest 45s. Sit on a chair, balls of feet on a book, raise heels.",
  "Abs Tri-Set — Knee Raises on Captain's Chair":
    "Home: Lying Knee Tucks — 3 sets × 12 reps. Sit on the floor edge-of-mat, lean back on hands, pull knees to chest and extend out.",

  // ── PHASE 3 · Advanced ──────────────────────────────────────────────────
  "Incline Bench Press (Heavy)":
    "Home: Weighted Decline Push-ups (backpack on, feet on chair) — 4 sets × 10 reps, rest 90s.",
  "Weighted Dip":
    "Home: Chair Dips with a backpack on your lap — 3 sets × 10 reps, rest 75s. Or slow Close-Grip Push-ups with 4-second lowering × 12.",
  "Single-Arm Cable Fly":
    "Home: Single-Arm Towel Slide Fly — 3 sets × 10 each side, rest 45s. One hand on a towel on smooth floor, slide out and squeeze back.",
  "Push Press":
    "Home: Explosive Pike Push-ups — 3 sets × 8 reps, rest 75s. Push hard enough that your hands nearly leave the floor. Or heavy backpack push press × 10.",
  "Skull Crusher":
    "Home: Bodyweight Skull Crushers on a low table — 3 sets × 10 reps, rest 45s. The lower the surface, the closer it matches a loaded skull crusher.",
  "Hanging Knee Raises (Weighted)":
    "Home: V-Ups — 4 sets × 12 reps, rest 45s. Lie flat, lift legs and torso together to touch your toes at the top.",
  "Full Pull-ups":
    "Home: Doorway Rows at maximum angle — 4 sets × 8 reps, rest 90s. Or buy a doorframe pull-up bar — it is the single best home purchase for your back.",
  "T-Bar Row (Heavier)":
    "Home: Heavy Backpack Rows with 3-second lowering — 4 sets × 8 reps, rest 75s.",
  "Single-Arm Lat Pulldown":
    "Home: Single-Arm Towel Row — 3 sets × 10 each side, rest 60s. One arm at a time exposes strength imbalances the same way.",
  "Incline Dumbbell Curl":
    "Home: Wall Curls with slow negatives — 4 sets × 12 reps, rest 45s. Back against wall, 4 seconds down every rep.",
  "Spider Curl (Heavier)":
    "Home: Prone Bed-Edge Curls with heavier bottles or a small backpack — 4 sets × 10 reps, rest 45s.",
  "Wrist Curl Drop Set":
    "Home: Wrist Curls × 15 with a full bottle, then immediately × 10 with a half-full bottle — 3 rounds, rest 20s.",
  "Romanian Deadlift (Barbell)":
    "Home: Single-Leg RDL with heavy backpack — 4 sets × 8 each leg, rest 90s.",
  "Hip Thrust (Weighted)":
    "Home: Single-Leg Hip Thrust with a backpack on your hips — 4 sets × 10 each leg, rest 75s.",
  "Nordic Curl (Assisted)":
    "Home: Works at home already — anchor ankles under a sofa. 3 sets × 6 reps, use hands to push back up.",
  "Bulgarian Split Squat":
    "Home: Works at home already — rear foot on a chair. 3 sets × 10 each leg. Hold bottles or a backpack for load.",
  "Calf Raise Drop Set":
    "Home: Single-leg calf raises on a stair × 15, drop to both legs × 15 immediately — 3 rounds, rest 45s.",
  "Barbell Bench Press (Heavy)":
    "Home: Weighted Push-ups, maximum backpack load — 4 sets × 8 reps, rest 90s. Slow 4-second lowering.",
  "Renegade Row":
    "Home: Works at home already — push-up position rowing water bottles or small backpacks. 3 sets × 8 each side, rest 60s.",
  "Push Press (Heavier)":
    "Home: Heavy Backpack Push Press — 3 sets × 8 reps, rest 75s. Knee dip, then drive it overhead explosively.",
  "Diamond Push-up":
    "Home: Works at home already — thumbs and index fingers touching. 3 sets × 12 reps, rest 45s.",
  "Incline Dumbbell Curl (Heavier)":
    "Home: Wall Curls with your heaviest bottles/backpack, 4-second negatives — 4 sets × 10 reps, rest 45s.",
  "Jump Squat":
    "Home: Works at home already — bodyweight only. 3 sets × 10 reps, rest 75s. Land softly on bent knees.",
  "Leg Press (Heavy)":
    "Home: Backpack Bulgarian Split Squats — 4 sets × 10 each leg, rest 75s. Heaviest safe backpack load.",
  "Leg Extension (Drop Set)":
    "Home: Wall Sit 45 seconds straight into 15 slow bodyweight squats — 3 rounds, rest 45s.",
  "Seated Calf Raise (Heavy)":
    "Home: Seated Calf Raises, backpack + books stacked on knees — 4 sets × 20 reps, rest 45s.",
  "Abs Tri-Set — Knee Raises (Weighted)":
    "Home: V-Ups holding a water bottle at your chest — 3 sets × 12 reps.",
};
