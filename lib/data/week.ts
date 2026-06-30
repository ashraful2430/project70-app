import type { Day } from "@/types";

export const WEEK: Day[] = [
  {
    "id": 1,
    "day": "Monday",
    "abbr": "Mon",
    "type": "gym",
    "focus": "Push — Chest, Shoulders, Triceps",
    "duration": "60-65 min",
    "note": "Pushing movements only. Chest, shoulders, and triceps. Never work the same muscle group two days in a row.",
    "finisher": {
      "name": "Incline Treadmill Walk",
      "detail": "15 min — speed 4.5 to 5.0 km/h, incline 6 to 8. Walk briskly. Do not hold the rails or you lose the calorie burn effect.",
      "xp": 28,
      "cal": 120
    }
  },
  {
    "id": 2,
    "day": "Tuesday",
    "abbr": "Tue",
    "type": "gym",
    "focus": "Pull — Back, Biceps",
    "duration": "60-65 min",
    "note": "Pulling movements. Back and biceps. After a push day, these muscles are fresh and ready.",
    "finisher": {
      "name": "Stationary Bike",
      "detail": "15 min at moderate pace — mid resistance level. Keep a steady rhythm.",
      "xp": 24,
      "cal": 100
    }
  },
  {
    "id": 3,
    "day": "Wednesday",
    "abbr": "Wed",
    "type": "gym",
    "focus": "Legs + Abs",
    "duration": "65 min",
    "note": "Lower body and core. Highest calorie-burning session of the week. Do not skip this day.",
    "finisher": {
      "name": "Elliptical Trainer",
      "detail": "15 min at steady fast pace. The elliptical is easier on knees after a heavy leg session.",
      "xp": 24,
      "cal": 110
    }
  },
  {
    "id": 4,
    "day": "Thursday",
    "abbr": "Thu",
    "type": "home",
    "focus": "Active Recovery",
    "duration": "40-45 min",
    "note": "No gym. Walk 10,000 steps, stretch, and hydrate. Muscles grow during rest, not during the workout.",
    "exercises": [
      {
        "name": "Walk 10,000 steps",
        "target": "Recovery",
        "sets": 1,
        "reps": "30-45 min",
        "rest": "-",
        "cue": "Walk at a pace where you can speak easily. No need to sweat.",
        "steps": [
          "Walk outside or in place.",
          "Aim for 10,000 steps throughout the day.",
          "Keep pace easy and comfortable.",
          "This keeps blood flowing to your recovering muscles."
        ],
        "difficulty": 1,
        "calories": 80
      },
      {
        "name": "Dynamic Stretching",
        "target": "Mobility",
        "sets": 1,
        "reps": "10 min",
        "rest": "-",
        "cue": "Leg swings, hip circles, arm circles, shoulder rolls. Loosen everything.",
        "steps": [
          "Swing each leg forward and backward 10 times.",
          "Do hip circles 10 each direction.",
          "Roll shoulders forward and backward.",
          "Gentle only. Never force range of motion."
        ],
        "difficulty": 1,
        "calories": 20
      },
      {
        "name": "Deep Breathing or Light Yoga",
        "target": "Recovery",
        "sets": 1,
        "reps": "10 min",
        "rest": "-",
        "cue": "Slow breaths. Relax the nervous system. Help digestion and sleep quality.",
        "steps": [
          "Sit or lie comfortably.",
          "Inhale for 4 counts.",
          "Hold for 4 counts.",
          "Exhale for 4 counts. Repeat 10 times."
        ],
        "difficulty": 1,
        "calories": 10
      },
      {
        "name": "Wrist Circles",
        "target": "Forearm mobility",
        "sets": 2,
        "reps": "30s each direction",
        "rest": "-",
        "cue": "Not a strength exercise — pure mobility. Takes 2 minutes and keeps your wrists healthy for all the wrist curl and bench pressing you do in the gym.",
        "steps": [
          "Extend both arms in front of you or var them hang at your sides.",
          "Make slow, large circles with both wrists clockwise for 30 seconds.",
          "Reverse direction for another 30 seconds.",
          "Finish with a gentle wrist stretch: press one palm flat against a wall for 15 seconds, then switch hands."
        ],
        "difficulty": 1,
        "calories": 5
      },
      {
        "name": "Grip Squeeze Hold",
        "target": "Forearms & grip",
        "sets": 2,
        "reps": "15 squeezes each hand",
        "rest": "-",
        "cue": "No gym equipment needed — use a rolled towel, rubber ball, or a full water bottle. Pure grip work that directly builds forearm size and makes the veins along your arm more visible over time.",
        "steps": [
          "Hold a tightly rolled towel, rubber ball, or full water bottle in one hand.",
          "Squeeze as hard as you can for 2 seconds, then release fully.",
          "Repeat 15 times on one hand, then switch.",
          "Both forearms should feel noticeably fatigued after 2 sets — that is the right intensity for a recovery day."
        ],
        "difficulty": 1,
        "calories": 8
      }
    ]
  },
  {
    "id": 5,
    "day": "Friday",
    "abbr": "Fri",
    "type": "gym",
    "focus": "Upper Body Mix",
    "duration": "60-65 min",
    "note": "Balanced upper day. Both push and pull muscles so they grow together. Fresh muscles after Thursday rest.",
    "finisher": {
      "name": "Incline Treadmill Walk",
      "detail": "20 min — speed 4.8 km/h, incline 7. This is the longest cardio finisher of the week. Pace yourself.",
      "xp": 34,
      "cal": 140
    }
  },
  {
    "id": 6,
    "day": "Saturday",
    "abbr": "Sat",
    "type": "gym",
    "focus": "Lower Body + HIIT",
    "duration": "65 min",
    "note": "Legs and core, then HIIT to maximise calorie burn before the weekend rest. Highest-intensity session.",
    "finisher": {
      "name": "HIIT Bike or Rower",
      "detail": "15 min — 30 seconds all-out hard effort, then 60 seconds easy recovery. Repeat 7 to 8 rounds. This burns the most calories of any finisher this week.",
      "xp": 38,
      "cal": 160
    }
  },
  {
    "id": 0,
    "day": "Sunday",
    "abbr": "Sun",
    "type": "home",
    "focus": "Full Rest",
    "duration": "Rest day",
    "note": "Gym is closed. Sleep 7 to 8 hours. Meal prep for the week ahead. Your body rebuilds muscle tissue during this rest.",
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
          "This is not cardio. It is active recovery."
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
        "cue": "This is the most important recovery action. Sleep is when fat loss and muscle building happen.",
        "steps": [
          "Aim to sleep before midnight.",
          "Keep room cool and dark.",
          "Avoid phone screens 30 minutes before bed.",
          "Poor sleep directly increases hunger the next day."
        ],
        "difficulty": 1,
        "calories": 20
      },
      {
        "name": "Wrist Mobility Stretch",
        "target": "Forearm & wrist flexibility",
        "sets": 1,
        "reps": "2 min",
        "rest": "-",
        "cue": "Sunday is full rest — this is not a workout. Just 2 minutes of gentle wrist stretching to keep the flexibility needed for gym pressing and forearm exercises during the week.",
        "steps": [
          "Kneel and place both palms flat on the floor in front of you, fingers pointing toward your knees.",
          "Gently rock forward and back to feel a stretch along the inside of both forearms. Hold 20 seconds.",
          "Flip: place the backs of both hands flat on the floor, fingers pointing toward you, and rock gently. Hold 20 seconds.",
          "Stand and shake out your wrists. Total time about 2 minutes.",
          "Stop immediately if anything feels sharp or painful — this should feel like a gentle pull, not pain."
        ],
        "difficulty": 1,
        "calories": 3
      }
    ]
  }
];
