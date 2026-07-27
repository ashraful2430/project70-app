import type { Day } from "@/types";

// ─── 5-DAY V-TAPER WEEK ───────────────────────────────────────────────────────
// Mon Push · Tue Pull · Wed Legs & Arms · Thu Upper · Sat Lower (heavy)
// Fri (Jumu'ah) + Sun (gym closed) = active rest: kegel + height stretches + steps.
// The two "phases" are the same split at two progression stages (Weeks 1–2 → Week 3+).

function buildWeek(rirNote: string): Day[] {
  return [
    {
      id: 1, day: "Monday", abbr: "Mon", type: "gym",
      focus: "Push — Chest, Shoulders, Triceps",
      duration: "60-75 min",
      note: `Push day (8 movements, one superset). ${rirNote} Ramp up your ★ chest press with 2 warm-up sets. Do NOT add a third chest press — that's junk volume in a deficit.`,
    },
    {
      id: 2, day: "Tuesday", abbr: "Tue", type: "gym",
      focus: "Pull — Back & Biceps",
      duration: "55-70 min",
      note: `Pull day. ${rirNote} Ramp up your ★ chest-supported row. Reach into a full stretch on the straight-arm pulldown for the lats.`,
    },
    {
      id: 3, day: "Wednesday", abbr: "Wed", type: "gym",
      focus: "Legs & Arms (lighter)",
      duration: "50-60 min",
      note: `Lighter leg + arm day (two supersets). ${rirNote} Lean the leg-extension seat back, keep calf raises deep-stretched.`,
    },
    {
      id: 4, day: "Thursday", abbr: "Thu", type: "gym",
      focus: "Upper — Chest, Back, Delts, Arms",
      duration: "50-65 min",
      note: `Upper day. ${rirNote} Ramp up your ★ incline dumbbell press. Prioritise side delts and lats for the V-taper.`,
    },
    {
      id: 5, day: "Friday", abbr: "Fri", type: "active-rest",
      focus: "Active Rest (Jumu'ah)",
      duration: "30-45 min",
      note: "Off from the gym for Jumu'ah. Do the kegel sequence + height stretches below, and get a good walk in for daily steps — steps drive fat loss more than extra exercises.",
    },
    {
      id: 6, day: "Saturday", abbr: "Sat", type: "gym",
      focus: "Lower — Heavy Legs",
      duration: "55-70 min",
      note: `Heavy lower day (6 movements). ${rirNote} Ramp up your ★ hack squat with 2 warm-up sets — this is the heaviest lift of the week.`,
    },
    {
      id: 0, day: "Sunday", abbr: "Sun", type: "active-rest",
      focus: "Active Rest (gym closed)",
      duration: "30-45 min",
      note: "Gym closed. Kegel + height stretches, meal prep for the week, and a light walk. Sleep 7-8 hours tonight.",
    },
  ];
}

const WEEK_WK12 = buildWeek("Stay 2-3 reps from failure while you clean up form.");
const WEEK_WK3  = buildWeek("Push to 1-2 reps from failure; only the last isolation set may reach 0-1 RIR.");

// Indexed by the plan toggle (0 = Weeks 1–2, 1 = Week 3+)
export const WEEKS: Day[][] = [WEEK_WK12, WEEK_WK3];

// Legacy default
export const WEEK = WEEK_WK12;
