// Home alternative for every gym exercise in the 5-day plan.
// Keyed by the exercise's clean name (★ and "(...)" suffixes are stripped on lookup).
// `equipment` tells you exactly what you need at home — most of it is a
// backpack + books, two water bottles, a chair, a towel, and a doorframe.

export interface HomeAlt {
  home: string;       // the home exercise name
  equipment: string;  // what you need (or "None — bodyweight")
  setsReps: string;   // suggested sets × reps
  how: string;        // one-line how-to
}

export const HOME_ALTS: Record<string, HomeAlt> = {
  // ── Chest / Push ──
  "Flat Dumbbell Press": {
    home: "Push-ups", equipment: "None (backpack for extra weight)", setsReps: "3 × 12-15",
    how: "Standard push-ups. Too easy? Wear a loaded backpack. Too hard? Drop to your knees.",
  },
  "Machine Chest Press": {
    home: "Wide Push-ups", equipment: "None (backpack optional)", setsReps: "3 × 12-15",
    how: "Hands wider than shoulders to shift the work onto the chest.",
  },
  "Incline Dumbbell Press": {
    home: "Decline Push-ups", equipment: "A sturdy chair", setsReps: "3 × 12",
    how: "Feet up on the chair, hands on the floor — targets the upper chest like an incline.",
  },
  "Pec Deck": {
    home: "Floor Dumbbell/Bottle Fly", equipment: "2 dumbbells or water bottles", setsReps: "3 × 12-15",
    how: "Lie on your back, arms wide with a soft elbow bend, hug the weights together over your chest.",
  },
  "Cable Fly": {
    home: "Towel Slide Fly", equipment: "2 towels + smooth floor", setsReps: "3 × 12",
    how: "Kneel, hands on towels, slide arms apart then squeeze back together.",
  },
  "Seated Dumbbell Shoulder Press": {
    home: "Pike Push-ups", equipment: "None (or backpack)", setsReps: "3 × 10-12",
    how: "Hips high, head pointing down, lower the crown of your head toward the floor and press up.",
  },
  "Cable Lateral Raise": {
    home: "Water Bottle Lateral Raise", equipment: "2 water bottles / light dumbbells", setsReps: "3 × 15",
    how: "Raise the bottles out to the sides to shoulder height. Slow — 2 sec up, 2 sec down.",
  },
  "Reverse Pec Deck": {
    home: "Bent-Over Reverse Fly (or Prone Y-T-W)", equipment: "2 bottles (or none)", setsReps: "3 × 15",
    how: "Hinge forward 45°, raise the bottles out to the sides squeezing the shoulder blades.",
  },
  "Rope Pushdown": {
    home: "Chair Dips", equipment: "A sturdy chair", setsReps: "3 × 12-15",
    how: "Hands on the chair edge behind you, lower until elbows hit 90°, push back up.",
  },
  "Overhead Dumbbell Triceps Extension": {
    home: "Overhead Bottle/Backpack Extension", equipment: "1 water bottle or backpack", setsReps: "3 × 12-15",
    how: "Hold it overhead with both hands, lower behind your head by bending only the elbows.",
  },

  // ── Back / Pull ──
  "Chest-Supported Row": {
    home: "Backpack Bent-Over Row", equipment: "Loaded backpack", setsReps: "3 × 12",
    how: "Hinge forward with a flat back, row the backpack to your lower ribs.",
  },
  "Lat Pulldown": {
    home: "Towel Door Pulldown (or Pull-ups)", equipment: "Towel + door, or a doorframe pull-up bar", setsReps: "3 × 12",
    how: "Loop a towel over a sturdy door top, lean back and pull down to your chest. Or do pull-ups if you have a bar.",
  },
  "Single-Arm Dumbbell Row": {
    home: "One-Arm Backpack Row", equipment: "Backpack or water bottle + chair", setsReps: "3 × 12 each arm",
    how: "One hand on a chair, row the backpack/bottle to your hip with the other.",
  },
  "Straight-Arm Pulldown": {
    home: "Towel Straight-Arm Pull", equipment: "Towel + high anchor (door top)", setsReps: "3 × 12",
    how: "Arms straight, pull the towel down to your thighs using your lats only.",
  },
  "Seated Cable Row": {
    home: "Backpack Row (or Towel Door Row)", equipment: "Backpack, or towel + door", setsReps: "3 × 12",
    how: "Row toward your belly, squeeze the shoulder blades, control the return.",
  },

  // ── Biceps / Forearms ──
  "Incline Dumbbell Curl": {
    home: "Seated Leaning-Back Bottle Curl", equipment: "2 water bottles / dumbbells", setsReps: "3 × 12-15",
    how: "Sit and lean back slightly so your arms hang behind you, then curl — mimics the incline stretch.",
  },
  "EZ-Bar Curl": {
    home: "Backpack Curl", equipment: "Loaded backpack", setsReps: "3 × 12",
    how: "Hold the backpack by the top handle with both hands and curl, elbows pinned.",
  },
  "Reverse EZ-Bar Curl": {
    home: "Reverse Bottle/Backpack Curl", equipment: "Bottles or backpack", setsReps: "2 × 15",
    how: "Palms-down grip, curl lightly — works the top of the forearm.",
  },
  "Hammer Curl": {
    home: "Bottle Hammer Curl", equipment: "2 water bottles", setsReps: "3 × 12",
    how: "Palms facing each other the whole time, no swinging.",
  },

  // ── Legs / Glutes ──
  "Hack Squat": {
    home: "Backpack Goblet Squat", equipment: "Loaded backpack (hug at chest)", setsReps: "3 × 15",
    how: "Hug the backpack at your chest, squat below parallel, drive up through your heels.",
  },
  "Leg Press": {
    home: "Bulgarian Split Squat", equipment: "A chair (backpack to load)", setsReps: "3 × 10-12 each leg",
    how: "Rear foot on the chair, lower straight down on the front leg, push through the front foot.",
  },
  "Leg Extension": {
    home: "Sissy Squat (or Wall Sit)", equipment: "None (hold something for balance)", setsReps: "3 × 12 (or 45 sec wall sit)",
    how: "Lean back on your toes to load the front thigh, or hold a wall sit to burn the quads.",
  },
  "Seated Leg Curl": {
    home: "Sliding Leg Curl", equipment: "Towel + smooth floor", setsReps: "3 × 10-12",
    how: "Lie on your back, heels on a towel, bridge your hips and slide your heels out and in.",
  },
  "Romanian Deadlift": {
    home: "Single-Leg Romanian Deadlift", equipment: "Bottles or backpack", setsReps: "3 × 10 each leg",
    how: "Hinge on one leg, reach the weight toward the floor, feel the hamstring stretch.",
  },
  "Reverse Lunge": {
    home: "Bodyweight Reverse Lunge", equipment: "None (backpack to load)", setsReps: "3 × 12 each leg",
    how: "Step back and lower until the back knee nearly touches, front shin vertical.",
  },
  "Hip Thrust": {
    home: "Single-Leg Hip Thrust", equipment: "A sofa or low bench", setsReps: "3 × 12 each leg",
    how: "Shoulders on the sofa edge, drive one-legged hips up and squeeze the glute at the top.",
  },
  "Standing Calf Raise": {
    home: "Single-Leg Calf Raise on a Stair", equipment: "A step / stair", setsReps: "3 × 15 each leg",
    how: "Heel hanging off the step, rise up high, drop deep at the bottom and pause.",
  },

  // ── Abs / Core ──
  "Cable Crunch": {
    home: "Crunches or Lying Leg Raises", equipment: "None (a mat helps)", setsReps: "3 × 15",
    how: "Crunch your ribs toward your pelvis, or lie flat and raise straight legs.",
  },
  "Hanging Leg Raise": {
    home: "Lying Reverse Crunch", equipment: "None (a mat helps)", setsReps: "3 × 12-15",
    how: "Lie flat, hands under hips, curl your knees to your chest and lift your hips off the floor.",
  },
};

// Strips "★ " prefix and any "(...)" suffix, then looks up the home alternative.
export function homeAltFor(name: string): HomeAlt | null {
  const clean = name.replace(/^★\s*/, "").replace(/\s*\([^)]*\)\s*$/, "").trim();
  return HOME_ALTS[clean] ?? null;
}
