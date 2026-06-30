import type { Warmup } from "@/types";

export const WARMUPS_BY_DAY: Record<number, Warmup> = {
  1: {
  "label": "Push day warm-up (10 min) - prepares chest and shoulder joints",
  "items": [
    {
      "name": "Jumping jacks",
      "detail": "2 sets x 20 reps — raises heart rate and loosens joints",
      "xp": 8,
      "cal": 18
    },
    {
      "name": "Arm circles",
      "detail": "1 min forward, 1 min backward — warms shoulder joint fully",
      "xp": 6,
      "cal": 10
    },
    {
      "name": "Incline push-ups (on bench)",
      "detail": "2 sets x 10 reps — activates chest with low load before lifting",
      "xp": 10,
      "cal": 20
    },
    {
      "name": "Shoulder rolls",
      "detail": "10 forward, 10 backward — prevents shoulder impingement",
      "xp": 6,
      "cal": 8
    },
    {
      "name": "Treadmill walk",
      "detail": "3 min at speed 5.0, incline 2.0 — full body warm-up to finish",
      "xp": 8,
      "cal": 22
    }
  ]
},
  2: {
  "label": "Pull day warm-up (10 min) - activates back muscles before pulling",
  "items": [
    {
      "name": "Jumping jacks",
      "detail": "2 sets x 20 reps — raises heart rate",
      "xp": 8,
      "cal": 18
    },
    {
      "name": "Band pull-aparts or towel rows",
      "detail": "3 sets x 12 reps — activates rear shoulder and upper back",
      "xp": 10,
      "cal": 14
    },
    {
      "name": "Bodyweight good mornings",
      "detail": "2 sets x 10 reps — hands behind head, hinge forward at hips",
      "xp": 10,
      "cal": 16
    },
    {
      "name": "Light lat pulldown (30% weight)",
      "detail": "2 sets x 10 reps — warms up the lats before loading",
      "xp": 10,
      "cal": 14
    },
    {
      "name": "Stationary bike easy",
      "detail": "3 min at easy pace — full body warm-up",
      "xp": 8,
      "cal": 20
    }
  ]
},
  3: {
  "label": "Leg day warm-up (10 min) - opens hips and activates glutes",
  "items": [
    {
      "name": "High knees",
      "detail": "2 sets x 30 seconds — warms up hip flexors and raises heart rate",
      "xp": 10,
      "cal": 24
    },
    {
      "name": "Bodyweight squats",
      "detail": "2 sets x 15 reps — activates quads and glutes with zero load",
      "xp": 10,
      "cal": 20
    },
    {
      "name": "Hip circles",
      "detail": "10 clockwise, 10 anticlockwise each leg — opens hip joint",
      "xp": 8,
      "cal": 10
    },
    {
      "name": "Leg swings (forward and side)",
      "detail": "10 swings each direction per leg — loosens hamstrings",
      "xp": 8,
      "cal": 12
    },
    {
      "name": "Stationary bike easy",
      "detail": "3 min at easy pace — prepares knee and ankle joints",
      "xp": 8,
      "cal": 20
    }
  ]
},
  5: {
  "label": "Upper body warm-up (10 min) - targets full upper body before mixed session",
  "items": [
    {
      "name": "Jumping jacks",
      "detail": "2 sets x 20 reps — full body activation",
      "xp": 8,
      "cal": 18
    },
    {
      "name": "Push-ups (floor or on knees)",
      "detail": "2 sets x 8 reps — activates chest, shoulders, triceps",
      "xp": 10,
      "cal": 20
    },
    {
      "name": "Wide arm circles",
      "detail": "1 min each direction — full shoulder joint warm-up",
      "xp": 6,
      "cal": 10
    },
    {
      "name": "Band pull-aparts or towel rows",
      "detail": "2 sets x 12 reps — activates upper back and rear shoulder",
      "xp": 10,
      "cal": 14
    },
    {
      "name": "Row machine or treadmill",
      "detail": "3 min at easy pace — gets blood moving through upper body",
      "xp": 8,
      "cal": 22
    }
  ]
},
  6: {
  "label": "Lower body warm-up (10 min) - prepares legs and lungs for HIIT",
  "items": [
    {
      "name": "High knees",
      "detail": "2 sets x 30 seconds — heart rate up immediately",
      "xp": 10,
      "cal": 24
    },
    {
      "name": "Jumping jacks",
      "detail": "1 set x 20 reps — full body warm-up",
      "xp": 8,
      "cal": 18
    },
    {
      "name": "Bodyweight lunges",
      "detail": "2 sets x 10 reps each leg — activates quads and glutes",
      "xp": 10,
      "cal": 20
    },
    {
      "name": "Leg swings (forward and sideways)",
      "detail": "10 each direction per leg — loosens hip and hamstring",
      "xp": 8,
      "cal": 12
    },
    {
      "name": "Stationary bike or light jog",
      "detail": "3 min at easy pace — opens knees and ankles for heavy squats",
      "xp": 8,
      "cal": 20
    }
  ]
}
};
