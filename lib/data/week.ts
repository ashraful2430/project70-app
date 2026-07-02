import type { Day } from "@/types";

export const WEEK: Day[] = [
  {
    "id": 1,
    "day": "Monday",
    "abbr": "Mon",
    "type": "gym",
    "focus": "Chest & Triceps",
    "duration": "60-65 min",
    "note": "Push day. Chest and triceps. Start with compound presses, finish with isolation and core.",
    "finisher": {
      "name": "Incline Treadmill Walk",
      "detail": "15 min — speed 6-7 km/h, incline 3-4%. Brisk walk. Do not hold the rails.",
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
    "duration": "60-65 min",
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
    "duration": "55-60 min",
    "note": "Shoulder session followed by 15 min LISS cardio. A lighter day before the long weekend rest.",
    "finisher": {
      "name": "LISS Cardio",
      "detail": "15 min brisk walk on treadmill — speed 6-7 km/h, incline 3-4%. Or 10-15 min continuous stair climbing.",
      "xp": 24,
      "cal": 110
    }
  },
  {
    "id": 4,
    "day": "Thursday",
    "abbr": "Thu",
    "type": "home",
    "focus": "Rest Day",
    "duration": "Rest",
    "note": "Rest day. No gym. Your muscles grow during rest — not during the workout. Stay hydrated and get good sleep.",
    "exercises": [
      {
        "name": "Light Walk",
        "target": "Recovery",
        "sets": 1,
        "reps": "20-30 min",
        "rest": "-",
        "cue": "Easy pace only. This keeps blood flowing to your recovering muscles without taxing them further.",
        "steps": [
          "Walk outside at a comfortable, easy pace.",
          "You should be able to hold a conversation comfortably.",
          "Aim for 20-30 minutes — no targets, no hustle.",
          "Stop early if legs feel heavy from Wednesday."
        ],
        "difficulty": 1,
        "calories": 60
      },
      {
        "name": "Dynamic Stretching",
        "target": "Mobility",
        "sets": 1,
        "reps": "10 min",
        "rest": "-",
        "cue": "Leg swings, hip circles, arm circles, shoulder rolls. Loosen everything up gently.",
        "steps": [
          "Swing each leg forward and backward 10 times.",
          "Do hip circles 10 times each direction.",
          "Roll shoulders forward and backward 10 times.",
          "Gentle only — never force range of motion."
        ],
        "difficulty": 1,
        "calories": 20
      },
      {
        "name": "Deep Breathing",
        "target": "Recovery",
        "sets": 1,
        "reps": "10 min",
        "rest": "-",
        "cue": "Slow breaths. Relax the nervous system. Helps digestion and sleep quality.",
        "steps": [
          "Sit or lie comfortably in a quiet spot.",
          "Inhale slowly for 4 counts through your nose.",
          "Hold for 4 counts.",
          "Exhale slowly for 4 counts through your mouth. Repeat 10 times."
        ],
        "difficulty": 1,
        "calories": 10
      }
    ]
  },
  {
    "id": 5,
    "day": "Friday",
    "abbr": "Fri",
    "type": "gym",
    "focus": "Legs & Abs",
    "duration": "65 min",
    "note": "Leg day. Highest calorie-burning session of the week. Do not skip this — legs are your biggest muscle group.",
    "finisher": {
      "name": "Abs Circuit",
      "detail": "Leg Raises (10) → Russian Twists (10 reps). Rest 30 sec. Repeat 3 times.",
      "xp": 20,
      "cal": 80
    }
  },
  {
    "id": 6,
    "day": "Saturday",
    "abbr": "Sat",
    "type": "gym",
    "focus": "Full Body + LISS",
    "duration": "65 min",
    "note": "Full body session hitting every muscle group. Ends with 15 min LISS cardio to maximise weekly fat burn.",
    "finisher": {
      "name": "LISS Cardio Walk",
      "detail": "15 min brisk walking at 6-7 km/h. This is the fat-burning finisher that closes your week.",
      "xp": 30,
      "cal": 130
    }
  },
  {
    "id": 0,
    "day": "Sunday",
    "abbr": "Sun",
    "type": "home",
    "focus": "Full Rest",
    "duration": "Rest day",
    "note": "Complete rest. Sleep 7-8 hours. Meal prep for the week. Your body rebuilds muscle tissue during this rest.",
    "exercises": [
      {
        "name": "Light Walk",
        "target": "Recovery",
        "sets": 1,
        "reps": "20-30 min",
        "rest": "-",
        "cue": "Easy pace only. No targets. Just move gently and enjoy the rest day.",
        "steps": [
          "Walk outside or around the house.",
          "Easy enough for comfortable conversation.",
          "Stop early if legs feel heavy from Saturday.",
          "This is not cardio — it is active recovery."
        ],
        "difficulty": 1,
        "calories": 60
      },
      {
        "name": "Meal Prep",
        "target": "Nutrition",
        "sets": 1,
        "reps": "30-45 min",
        "rest": "-",
        "cue": "Prepare chicken, boil eggs, soak dal. Preparation makes clean eating easy all week.",
        "steps": [
          "Boil 6 to 8 eggs for the week.",
          "Cook a batch of chicken breast to portion.",
          "Soak motor dal or chana for the next day.",
          "Portion rice into cups so it is ready to cook."
        ],
        "difficulty": 1,
        "calories": 20
      },
      {
        "name": "Sleep 7 to 8 hours",
        "target": "Recovery",
        "sets": 1,
        "reps": "Tonight",
        "rest": "-",
        "cue": "This is the most important recovery action of the week. Sleep is when fat loss and muscle building actually happen.",
        "steps": [
          "Aim to sleep before midnight.",
          "Keep room cool and dark.",
          "Avoid phone screens 30 minutes before bed.",
          "Poor sleep directly increases hunger the next day."
        ],
        "difficulty": 1,
        "calories": 20
      }
    ]
  }
];
