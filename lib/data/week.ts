import type { Day } from "@/types";

// ─── PHASE 1 WEEK ─────────────────────────────────────────────────────────────
// Mon: Chest/Tri · Tue: Back/Bi · Wed: Shoulder/Cardio
// Thu: Legs/Abs (gym) · Fri: Active Rest · Sat: Full Body · Sun: Active Rest
const WEEK_P1: Day[] = [
  {
    "id": 1,
    "day": "Monday",
    "abbr": "Mon",
    "type": "gym",
    "focus": "Chest & Triceps",
    "duration": "60–65 min",
    "note": "Push day. Chest and triceps. Start with compound presses, finish with isolation and core.",
    "finisher": {
      "name": "Incline Treadmill Walk",
      "detail": "15 min — speed 6–7 km/h, incline 3–4%. Brisk walk. Do not hold the rails.",
      "xp": 28,
      "cal": 120
    }
  },
  {
    "id": 2,
    "day": "Tuesday",
    "abbr": "Tue",
    "type": "gym",
    "focus": "Back & Biceps",
    "duration": "60–65 min",
    "note": "Pull day. Back and biceps. After a push day these muscles are fresh and ready to work hard.",
    "finisher": {
      "name": "Stationary Bike",
      "detail": "15 min at moderate pace — mid resistance. Keep a steady rhythm throughout.",
      "xp": 24,
      "cal": 100
    }
  },
  {
    "id": 3,
    "day": "Wednesday",
    "abbr": "Wed",
    "type": "gym",
    "focus": "Shoulders & Cardio",
    "duration": "55–60 min",
    "note": "Shoulder session followed by 15 min LISS cardio. Lighter day between leg days.",
    "finisher": {
      "name": "LISS Cardio",
      "detail": "15 min brisk walk — speed 6–7 km/h, incline 3–4%. Or 10–15 min continuous stair climbing.",
      "xp": 24,
      "cal": 110
    }
  },
  {
    "id": 4,
    "day": "Thursday",
    "abbr": "Thu",
    "type": "gym",
    "focus": "Legs & Abs",
    "duration": "65 min",
    "note": "Leg day. Highest calorie-burning session of the week. Do not skip — legs are your biggest muscle group.",
    "finisher": {
      "name": "Abs Circuit",
      "detail": "Leg Raises (10) → Russian Twists (10 reps). Rest 30 sec. Repeat 3 times.",
      "xp": 20,
      "cal": 80
    }
  },
  {
    "id": 5,
    "day": "Friday",
    "abbr": "Fri",
    "type": "active-rest",
    "focus": "Active Recovery",
    "duration": "45–50 min",
    "note": "Active rest day. Kegel training + height-increasing stretches. Low intensity — keep the nervous system fresh."
  },
  {
    "id": 6,
    "day": "Saturday",
    "abbr": "Sat",
    "type": "gym",
    "focus": "Full Body",
    "duration": "65 min",
    "note": "Full body session hitting every muscle group. Ends with 15 min LISS cardio to maximise weekly fat burn.",
    "finisher": {
      "name": "LISS Cardio Walk",
      "detail": "15 min brisk walking at 6–7 km/h. Fat-burning finisher that closes the week.",
      "xp": 30,
      "cal": 130
    }
  },
  {
    "id": 0,
    "day": "Sunday",
    "abbr": "Sun",
    "type": "active-rest",
    "focus": "Active Recovery",
    "duration": "45–50 min",
    "note": "Active rest day. Kegel training + height stretches + meal prep. Sleep 7–8 hours tonight."
  }
];

// ─── PHASE 2 WEEK ─────────────────────────────────────────────────────────────
// Mon: Chest/Shoulder/Tri · Tue: Back/Bi · Wed: Legs/Calves/Abs
// Thu: Active Rest · Fri: Upper Body · Sat: Lower Body · Sun: Active Rest
const WEEK_P2: Day[] = [
  {
    "id": 1,
    "day": "Monday",
    "abbr": "Mon",
    "type": "gym",
    "focus": "Chest, Shoulders & Triceps",
    "duration": "65–70 min",
    "note": "Push day. Heavier compound work this phase — last 2 reps of every set should feel hard.",
    "finisher": {
      "name": "Incline Treadmill Walk",
      "detail": "15 min — speed 6–7 km/h, incline 4–5%. Push incline higher than Phase 1.",
      "xp": 28,
      "cal": 130
    }
  },
  {
    "id": 2,
    "day": "Tuesday",
    "abbr": "Tue",
    "type": "gym",
    "focus": "Back & Biceps",
    "duration": "65–70 min",
    "note": "Pull day. Heavier loads, fewer reps. Focus on feeling each muscle, not just moving the weight.",
    "finisher": {
      "name": "LISS Cardio Finisher",
      "detail": "20 min brisk walk or stationary bike at moderate pace. Extends fat-burning window.",
      "xp": 30,
      "cal": 150
    }
  },
  {
    "id": 3,
    "day": "Wednesday",
    "abbr": "Wed",
    "type": "gym",
    "focus": "Legs, Calves & Abs",
    "duration": "70 min",
    "note": "Full leg session — hamstrings, glutes, calves, abs. The most demanding workout of Phase 2.",
    "finisher": {
      "name": "Abs Tri-Set",
      "detail": "Crunches (10) → Reverse Crunches (10) → Russian Twists (10). Rest 30s. Repeat 3 times.",
      "xp": 24,
      "cal": 90
    }
  },
  {
    "id": 4,
    "day": "Thursday",
    "abbr": "Thu",
    "type": "active-rest",
    "focus": "Active Recovery",
    "duration": "45–50 min",
    "note": "Active rest. Kegel training + height-increasing stretches. Keep intensity zero — full recovery."
  },
  {
    "id": 5,
    "day": "Friday",
    "abbr": "Fri",
    "type": "gym",
    "focus": "Upper Body",
    "duration": "65 min",
    "note": "Upper body push + pull together. Chest, shoulders, back, biceps, triceps all in one session.",
    "finisher": {
      "name": "LISS Cardio Finisher",
      "detail": "20 min brisk walk — speed 6–7 km/h, incline 4–5%. Keeps fat burn high after lifting.",
      "xp": 30,
      "cal": 150
    }
  },
  {
    "id": 6,
    "day": "Saturday",
    "abbr": "Sat",
    "type": "gym",
    "focus": "Lower Body",
    "duration": "65 min",
    "note": "Lower body — quads, calves, abs. Heavy compound squats and presses. Biggest muscle group = most fat burned.",
    "finisher": {
      "name": "Abs Tri-Set Finisher",
      "detail": "Knee Raises → Flutter Kicks → High-Knee Crunches. Rest 30s. Repeat 3 times.",
      "xp": 24,
      "cal": 90
    }
  },
  {
    "id": 0,
    "day": "Sunday",
    "abbr": "Sun",
    "type": "active-rest",
    "focus": "Active Recovery",
    "duration": "45–50 min",
    "note": "Active rest day. Kegel training + height stretches + meal prep. Sleep 7–8 hours tonight."
  }
];

// Indexed by plan phase (0 = Phase 1, 1 = Phase 2)
export const WEEKS: Day[][] = [WEEK_P1, WEEK_P2];

// Legacy export — defaults to Phase 1 for any code that hasn't migrated
export const WEEK = WEEK_P1;
