import type { Warmup } from "@/types";

// ─── PHASE 1 WARMUPS ─────────────────────────────────────────────────────────
// Mon: Chest/Tri · Tue: Back/Bi · Wed: Shoulders · Thu: Legs/Abs · Sat: Full Body

const WARMUPS_P1: Record<number, Warmup> = {
  // Monday — Push day (Chest & Triceps)
  1: {
    label: "Push day warm-up (10 min) — opens chest and shoulder joints",
    items: [
      {
        name: "Jumping Jacks",
        detail: "2 sets × 20 reps — raises heart rate and loosens all joints",
        xp: 8,
        cal: 18
      },
      {
        name: "Arm Circles",
        detail: "1 min forward, 1 min backward — fully warms the shoulder joint",
        xp: 6,
        cal: 10
      },
      {
        name: "Incline Push-ups (on bench)",
        detail: "2 sets × 10 reps — activates chest with low load before lifting",
        xp: 10,
        cal: 20
      },
      {
        name: "Shoulder Rolls",
        detail: "10 forward, 10 backward — prevents shoulder impingement during pressing",
        xp: 6,
        cal: 8
      },
      {
        name: "Treadmill Walk",
        detail: "3 min at speed 5.0, incline 2.0 — full body warm-up to finish",
        xp: 8,
        cal: 22
      }
    ]
  },

  // Tuesday — Pull day (Back & Biceps)
  2: {
    label: "Pull day warm-up (10 min) — activates back muscles before pulling",
    items: [
      {
        name: "Jumping Jacks",
        detail: "2 sets × 20 reps — raises heart rate",
        xp: 8,
        cal: 18
      },
      {
        name: "Band Pull-Aparts or Towel Rows",
        detail: "3 sets × 12 reps — activates rear shoulder and upper back",
        xp: 10,
        cal: 14
      },
      {
        name: "Bodyweight Good Mornings",
        detail: "2 sets × 10 reps — hands behind head, hinge forward at hips",
        xp: 10,
        cal: 16
      },
      {
        name: "Light Lat Pulldown (30% weight)",
        detail: "2 sets × 10 reps — warms up the lats before loading",
        xp: 10,
        cal: 14
      },
      {
        name: "Stationary Bike (easy pace)",
        detail: "3 min at easy pace — full body warm-up",
        xp: 8,
        cal: 20
      }
    ]
  },

  // Wednesday — Shoulder day
  3: {
    label: "Shoulder day warm-up (10 min) — opens deltoids and rotator cuff",
    items: [
      {
        name: "Jumping Jacks",
        detail: "2 sets × 20 reps — raises heart rate and loosens the whole body",
        xp: 8,
        cal: 18
      },
      {
        name: "Arm Circles (Wide)",
        detail: "1 min each direction — full rotator cuff warm-up, prevents impingement",
        xp: 6,
        cal: 10
      },
      {
        name: "Wall Angels",
        detail: "2 sets × 10 reps — back flat against wall, slide arms up and down slowly",
        xp: 10,
        cal: 12
      },
      {
        name: "Band Pull-Aparts or Towel Rows",
        detail: "2 sets × 12 reps — activates rear deltoid and upper back before pressing",
        xp: 10,
        cal: 14
      },
      {
        name: "Treadmill Walk",
        detail: "3 min at speed 5.0, incline 2.0 — light full-body activation to finish",
        xp: 8,
        cal: 20
      }
    ]
  },

  // Thursday — Legs & Abs (gym day in Phase 1)
  4: {
    label: "Leg day warm-up (10 min) — opens hips and activates glutes",
    items: [
      {
        name: "High Knees",
        detail: "2 sets × 30 seconds — warms up hip flexors and raises heart rate",
        xp: 10,
        cal: 24
      },
      {
        name: "Bodyweight Squats",
        detail: "2 sets × 15 reps — activates quads and glutes with zero load",
        xp: 10,
        cal: 20
      },
      {
        name: "Hip Circles",
        detail: "10 clockwise, 10 anticlockwise each leg — opens the hip joint fully",
        xp: 8,
        cal: 10
      },
      {
        name: "Leg Swings (Forward & Sideways)",
        detail: "10 swings each direction per leg — loosens hamstrings before loading",
        xp: 8,
        cal: 12
      },
      {
        name: "Stationary Bike (easy pace)",
        detail: "3 min at easy pace — prepares knee and ankle joints for squats",
        xp: 8,
        cal: 20
      }
    ]
  },

  // Saturday — Full Body
  6: {
    label: "Full body warm-up (10 min) — prepares legs and upper body",
    items: [
      {
        name: "High Knees",
        detail: "2 sets × 30 seconds — heart rate up immediately",
        xp: 10,
        cal: 24
      },
      {
        name: "Jumping Jacks",
        detail: "1 set × 20 reps — full body warm-up",
        xp: 8,
        cal: 18
      },
      {
        name: "Bodyweight Lunges",
        detail: "2 sets × 10 reps each leg — activates quads, glutes, and hip flexors",
        xp: 10,
        cal: 20
      },
      {
        name: "Arm Circles",
        detail: "1 min each direction — shoulder joint warm-up before upper body work",
        xp: 6,
        cal: 10
      },
      {
        name: "Stationary Bike or Light Jog",
        detail: "3 min at easy pace — opens knees and ankles before squats",
        xp: 8,
        cal: 20
      }
    ]
  }
};

// ─── PHASE 2 WARMUPS ─────────────────────────────────────────────────────────
// Mon: Chest/Shoulder/Tri · Tue: Back/Bi · Wed: Legs · Fri: Upper Body · Sat: Lower Body

const WARMUPS_P2: Record<number, Warmup> = {
  // Monday — Chest, Shoulders & Triceps
  1: {
    label: "Push + shoulder warm-up (10 min) — prepares chest, delts and triceps",
    items: [
      {
        name: "Jumping Jacks",
        detail: "2 sets × 20 reps — raises heart rate across the whole body",
        xp: 8,
        cal: 18
      },
      {
        name: "Arm Circles (Wide)",
        detail: "1 min each direction — fully warms the shoulder joint for pressing and raises",
        xp: 6,
        cal: 10
      },
      {
        name: "Incline Push-ups (on bench)",
        detail: "2 sets × 10 reps — activates chest and triceps before heavy work",
        xp: 10,
        cal: 20
      },
      {
        name: "Band Pull-Aparts or Towel Rows",
        detail: "2 sets × 12 reps — opens the rear deltoid before pressing",
        xp: 10,
        cal: 14
      },
      {
        name: "Treadmill Walk",
        detail: "3 min at speed 5.5, incline 3.0 — slightly harder than Phase 1",
        xp: 8,
        cal: 24
      }
    ]
  },

  // Tuesday — Back & Biceps
  2: {
    label: "Pull day warm-up (10 min) — activates back muscles before pulling",
    items: [
      {
        name: "Jumping Jacks",
        detail: "2 sets × 20 reps — raises heart rate",
        xp: 8,
        cal: 18
      },
      {
        name: "Band Pull-Aparts or Towel Rows",
        detail: "3 sets × 12 reps — activates rear shoulder and upper back",
        xp: 10,
        cal: 14
      },
      {
        name: "Bodyweight Good Mornings",
        detail: "2 sets × 10 reps — hands behind head, hinge forward at hips",
        xp: 10,
        cal: 16
      },
      {
        name: "Light Lat Pulldown (30% weight)",
        detail: "2 sets × 10 reps — warms up the lats before loading",
        xp: 10,
        cal: 14
      },
      {
        name: "Stationary Bike (easy pace)",
        detail: "3 min at easy pace — full body warm-up",
        xp: 8,
        cal: 20
      }
    ]
  },

  // Wednesday — Legs, Calves & Abs
  3: {
    label: "Leg day warm-up (10 min) — opens hips, activates glutes and hamstrings",
    items: [
      {
        name: "High Knees",
        detail: "2 sets × 30 seconds — warms hip flexors and raises heart rate fast",
        xp: 10,
        cal: 24
      },
      {
        name: "Bodyweight Squats",
        detail: "2 sets × 15 reps — activates quads and glutes with no load",
        xp: 10,
        cal: 20
      },
      {
        name: "Hip Circles",
        detail: "10 clockwise, 10 anticlockwise each leg — opens the hip joint",
        xp: 8,
        cal: 10
      },
      {
        name: "Leg Swings (Forward & Sideways)",
        detail: "10 swings each direction per leg — loosens hamstrings and hip flexors",
        xp: 8,
        cal: 12
      },
      {
        name: "Stationary Bike (easy pace)",
        detail: "3 min at easy pace — prepares knee and ankle joints for heavy squats",
        xp: 8,
        cal: 20
      }
    ]
  },

  // Friday — Upper Body (all push + pull together)
  5: {
    label: "Upper body warm-up (10 min) — targets full upper body before mixed session",
    items: [
      {
        name: "Jumping Jacks",
        detail: "2 sets × 20 reps — full body activation",
        xp: 8,
        cal: 18
      },
      {
        name: "Push-ups (floor or on knees)",
        detail: "2 sets × 8 reps — activates chest, shoulders, triceps",
        xp: 10,
        cal: 20
      },
      {
        name: "Wide Arm Circles",
        detail: "1 min each direction — full shoulder joint warm-up",
        xp: 6,
        cal: 10
      },
      {
        name: "Band Pull-Aparts or Towel Rows",
        detail: "2 sets × 12 reps — activates upper back and rear deltoid",
        xp: 10,
        cal: 14
      },
      {
        name: "Row Machine or Treadmill",
        detail: "3 min at easy pace — gets blood moving through upper body",
        xp: 8,
        cal: 22
      }
    ]
  },

  // Saturday — Lower Body (Quad focus)
  6: {
    label: "Lower body warm-up (10 min) — prepares legs for heavy quad work",
    items: [
      {
        name: "High Knees",
        detail: "2 sets × 30 seconds — heart rate up immediately",
        xp: 10,
        cal: 24
      },
      {
        name: "Jumping Jacks",
        detail: "1 set × 20 reps — full body warm-up",
        xp: 8,
        cal: 18
      },
      {
        name: "Bodyweight Lunges",
        detail: "2 sets × 10 reps each leg — activates quads and glutes",
        xp: 10,
        cal: 20
      },
      {
        name: "Leg Swings (Forward and Sideways)",
        detail: "10 each direction per leg — loosens hip and hamstring",
        xp: 8,
        cal: 12
      },
      {
        name: "Stationary Bike or Light Jog",
        detail: "3 min at easy pace — opens knees and ankles for heavy squats",
        xp: 8,
        cal: 20
      }
    ]
  }
};

// Indexed by plan phase (0 = Phase 1, 1 = Phase 2)
export const WARMUPS_BY_PHASE: Record<number, Warmup>[] = [WARMUPS_P1, WARMUPS_P2];

// Legacy export — kept for backward compatibility
export const WARMUPS_BY_DAY: Record<number, Warmup> = WARMUPS_P1;
