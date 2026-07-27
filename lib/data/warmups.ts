import type { Warmup } from "@/types";

// Muscle-specific warm-ups for the 5-day V-taper split.
// Keyed by day id: 1 Push · 2 Pull · 3 Legs · 4 Upper · 6 Lower.
// (Fri=5 and Sun=0 are active rest — no gym warm-up.)
// Plus the plan's rule: on your ★ heaviest lift, do 2 ramp-up sets
// (~50% × a few reps, then ~75% × a few reps) before the working sets.

const WARMUPS: Record<number, Warmup> = {
  // Monday — Push
  1: {
    label: "Push warm-up (8-10 min) — opens chest & shoulders",
    items: [
      { name: "Jumping Jacks", detail: "2 sets × 20 — raise heart rate and loosen joints", xp: 8, cal: 18 },
      { name: "Arm Circles", detail: "1 min forward, 1 min backward — full shoulder warm-up", xp: 6, cal: 10 },
      { name: "Band Pull-Aparts", detail: "2 sets × 15 — wakes up rear delts before pressing", xp: 8, cal: 12 },
      { name: "Incline Push-ups", detail: "2 sets × 10 — primes the chest with low load", xp: 10, cal: 20 },
      { name: "★ Ramp-up on chest press", detail: "50% × 6 reps, then 75% × 3 reps before working sets", xp: 8, cal: 14 },
    ],
  },
  // Tuesday — Pull
  2: {
    label: "Pull warm-up (8-10 min) — activates back & biceps",
    items: [
      { name: "Jumping Jacks", detail: "2 sets × 20 — raise heart rate", xp: 8, cal: 18 },
      { name: "Band Pull-Aparts or Towel Rows", detail: "3 sets × 12 — upper back and rear delts", xp: 10, cal: 14 },
      { name: "Dead Hang", detail: "2 × 20 sec — decompresses the spine, wakes up the grip", xp: 8, cal: 10 },
      { name: "Light Lat Pulldown", detail: "2 sets × 12 at 30% — grooves the pull pattern", xp: 10, cal: 14 },
      { name: "★ Ramp-up on chest-supported row", detail: "50% × 6 reps, then 75% × 3 reps", xp: 8, cal: 14 },
    ],
  },
  // Wednesday — Legs & Arms (lighter)
  3: {
    label: "Leg warm-up (8-10 min) — opens hips, knees & ankles",
    items: [
      { name: "High Knees", detail: "2 sets × 30 sec — warms hip flexors, raises heart rate", xp: 10, cal: 24 },
      { name: "Bodyweight Squats", detail: "2 sets × 15 — activates quads and glutes", xp: 10, cal: 20 },
      { name: "Leg Swings (front & side)", detail: "10 each direction per leg — loosens hips & hamstrings", xp: 8, cal: 12 },
      { name: "Light Leg Press feeler set", detail: "1-2 easy sets × 12 before working weight", xp: 8, cal: 14 },
    ],
  },
  // Thursday — Upper
  4: {
    label: "Upper warm-up (8-10 min) — full upper body prep",
    items: [
      { name: "Jumping Jacks", detail: "2 sets × 20 — full body activation", xp: 8, cal: 18 },
      { name: "Wide Arm Circles", detail: "1 min each direction — shoulder joint warm-up", xp: 6, cal: 10 },
      { name: "Push-ups", detail: "2 sets × 8 — chest, shoulders, triceps", xp: 10, cal: 20 },
      { name: "Band Pull-Aparts", detail: "2 sets × 12 — upper back & rear delts", xp: 8, cal: 12 },
      { name: "★ Ramp-up on incline dumbbell press", detail: "50% × 6 reps, then 75% × 3 reps", xp: 8, cal: 14 },
    ],
  },
  // Saturday — Lower (heavy)
  6: {
    label: "Heavy leg warm-up (10 min) — protect knees & hips before squats",
    items: [
      { name: "High Knees", detail: "2 sets × 30 sec — heart rate up fast", xp: 10, cal: 24 },
      { name: "Bodyweight Squats", detail: "2 sets × 15 — deep and controlled", xp: 10, cal: 20 },
      { name: "Hip Circles + Leg Swings", detail: "10 each per leg — open the hips fully", xp: 8, cal: 14 },
      { name: "Walking Lunges (bodyweight)", detail: "2 × 10 per leg — activate glutes and quads", xp: 10, cal: 20 },
      { name: "★ Ramp-up on hack squat", detail: "50% × 6 reps, then 75% × 3 reps — heaviest lift of the week", xp: 8, cal: 16 },
    ],
  },
};

// Both plan stages share the same warm-ups.
export const WARMUPS_BY_PHASE: Record<number, Warmup>[] = [WARMUPS, WARMUPS];

// Legacy export
export const WARMUPS_BY_DAY: Record<number, Warmup> = WARMUPS;
