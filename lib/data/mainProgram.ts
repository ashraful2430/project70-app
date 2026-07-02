import type { MainPhase, Exercise } from "@/types";

export const MAIN_PROGRAM: MainPhase[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 1 — Foundation (Weeks 1–4) · Level 1–2
  // ─────────────────────────────────────────────────────────────────────────
  {
    label: "Foundation",
    levelRange: "Level 1-2",

    // MONDAY — Chest & Triceps
    mon: [
      {
        name: "Dumbbell Chest Press",
        target: "Chest",
        sets: 3,
        reps: "12",
        rest: "60s",
        cue: "Lower dumbbells slowly to chest level, press straight up. Keep feet flat on the floor.",
        steps: [
          "Sit on a flat bench with a dumbbell in each hand.",
          "Lie back and hold dumbbells at chest level, elbows at 90 degrees.",
          "Press both dumbbells straight up until arms are almost fully extended.",
          "Lower slowly back to the start — 2 seconds down, 1 second up."
        ],
        difficulty: 1.2,
        calories: 32
      },
      {
        name: "Incline Dumbbell Press",
        target: "Upper chest",
        sets: 3,
        reps: "12",
        rest: "60s",
        cue: "Set bench to 30–45 degrees. Targets upper chest and front shoulder.",
        steps: [
          "Set the bench to a 30–45 degree incline.",
          "Hold dumbbells at upper-chest level, elbows slightly wider than shoulders.",
          "Press upward and slightly inward — the dumbbells should come close at the top.",
          "Lower slowly under full control. Do not arch your lower back off the bench."
        ],
        difficulty: 1.2,
        calories: 30
      },
      {
        name: "Pec Fly (Machine or Dumbbell)",
        target: "Chest",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Focus on squeezing your chest at the centre. Slow movement matters more than weight.",
        steps: [
          "If using machine: sit with back flat against pad, grip handles at chest height.",
          "If using dumbbells: lie flat, arms wide with a soft elbow bend.",
          "Bring hands together in front of your chest like hugging a barrel.",
          "Squeeze your chest hard at the top for 1 second, then open slowly."
        ],
        difficulty: 1,
        calories: 24
      },
      {
        name: "Overhead Dumbbell Extension",
        target: "Triceps",
        sets: 3,
        reps: "12",
        rest: "60s",
        cue: "Only your forearms move. Keep upper arms still and pointing straight up.",
        steps: [
          "Hold one dumbbell with both hands directly overhead, arms straight.",
          "Lower the dumbbell slowly behind your head by bending only at the elbows.",
          "Keep your upper arms vertical and still throughout — only forearms move.",
          "Press back up to straight arms. Do not flare elbows out."
        ],
        difficulty: 1.1,
        calories: 22
      },
      {
        name: "Rope Cable Pushdown",
        target: "Triceps",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Keep elbows locked to your sides throughout. Only your forearms move.",
        steps: [
          "Stand at cable machine with rope attachment set at chest height.",
          "Grip rope with thumbs up, elbows pinned to your ribs.",
          "Push rope downward until arms are fully straight, spreading the rope at the bottom.",
          "Let rope come back up slowly — resist the weight on the way up."
        ],
        difficulty: 1,
        calories: 22
      },
      {
        name: "Hanging Knee Raises",
        target: "Core & abs",
        sets: 3,
        reps: "10",
        rest: "45s",
        cue: "Use your core to pull knees up — not momentum. Control the lowering.",
        steps: [
          "Hang from a pull-up bar with hands slightly wider than shoulder width.",
          "Brace your core and pull both knees up toward your chest.",
          "Squeeze abs at the top, then lower legs slowly — resist gravity on the way down.",
          "If too hard, do Reverse Crunches on a mat instead: lie flat, lift hips off floor."
        ],
        difficulty: 1.1,
        calories: 20
      }
    ],

    // TUESDAY — Back & Biceps
    tue: [
      {
        name: "Single-Arm Dumbbell Row",
        target: "Back",
        sets: 3,
        reps: "12 each side",
        rest: "60s",
        cue: "Rest one knee on a bench. Pull weight up toward your hip — not your shoulder.",
        steps: [
          "Place one knee and same-side hand on a bench for support.",
          "Hold a dumbbell in the opposite hand, arm hanging straight down.",
          "Pull the dumbbell up toward your hip, squeezing your shoulder blade.",
          "Lower fully before the next rep. Complete all reps then switch sides."
        ],
        difficulty: 1.2,
        calories: 28
      },
      {
        name: "Lat Pulldown",
        target: "Back",
        sets: 3,
        reps: "12",
        rest: "60s",
        cue: "Pull bar to your collarbone, lean slightly back. Do not yank with your neck.",
        steps: [
          "Sit at the lat pulldown machine, thighs locked under the pad.",
          "Grip the bar wider than shoulder width, arms fully extended.",
          "Pull the bar down to your collarbone while squeezing your shoulder blades together.",
          "Let the bar rise slowly under control. If no machine, do Assisted Pull-ups."
        ],
        difficulty: 1.2,
        calories: 30
      },
      {
        name: "Seated Cable Row",
        target: "Back",
        sets: 3,
        reps: "12",
        rest: "60s",
        cue: "Sit tall, pull handle to your belly button. Hold the squeeze for 1 second.",
        steps: [
          "Sit upright at the cable row machine, feet on the platform.",
          "Pull the handle toward your belly button — not your chest.",
          "Squeeze your shoulder blades together hard at the end of the pull.",
          "Let arms extend forward slowly, getting a good stretch before the next rep."
        ],
        difficulty: 1.2,
        calories: 28
      },
      {
        name: "EZ Barbell Curl",
        target: "Biceps",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Elbows stay pinned to your ribs. No swinging. Control both the up and down.",
        steps: [
          "Hold an EZ barbell with an underhand grip, hands on the angled inner grip.",
          "Stand tall, elbows pinned to your sides.",
          "Curl the bar up toward your chest in a smooth arc.",
          "Lower slowly all the way back down before the next rep."
        ],
        difficulty: 1.1,
        calories: 22
      },
      {
        name: "Incline Hammer Curl",
        target: "Biceps & forearms",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Lying on an incline stretches the bicep more at the bottom for a bigger range of motion.",
        steps: [
          "Set a bench to 45-60 degrees incline and lie back against it.",
          "Hold a dumbbell in each hand, palms facing each other (thumbs up).",
          "Curl both arms up without swinging your shoulders forward.",
          "Lower slowly, feeling the full stretch at the bottom."
        ],
        difficulty: 1.1,
        calories: 20
      },
      {
        name: "Dumbbell Wrist Curls",
        target: "Forearms",
        sets: 3,
        reps: "12",
        rest: "30s",
        cue: "Forearm resting on your thigh. Only your wrist moves. Palm facing up.",
        steps: [
          "Sit on a bench and rest one forearm along your thigh, wrist hanging just past your knee.",
          "Hold a light dumbbell palm facing up.",
          "Let your wrist drop fully down, then curl upward as high as possible.",
          "Lower slowly all the way before the next rep. Switch arms after all reps."
        ],
        difficulty: 1,
        calories: 10
      }
    ],

    // WEDNESDAY — Shoulders & Cardio
    wed: [
      {
        name: "Dumbbell Shoulder Press",
        target: "Shoulders",
        sets: 3,
        reps: "12",
        rest: "60s",
        cue: "Press dumbbells straight up from shoulder height. Do not lean back.",
        steps: [
          "Sit on a bench with back support, or stand with feet shoulder-width apart.",
          "Hold dumbbells at shoulder height, palms facing forward.",
          "Press straight up until arms are almost fully extended.",
          "Lower slowly back to shoulder height. Keep core braced throughout."
        ],
        difficulty: 1.2,
        calories: 28
      },
      {
        name: "Lateral Dumbbell Raise",
        target: "Side delts",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Raise arms out sideways to shoulder height. Use light weight — form over ego here.",
        steps: [
          "Hold light dumbbells by your sides, slight bend in elbows.",
          "Raise both arms out like wings until they reach shoulder height.",
          "Pause briefly at the top — you should feel a burn in the side of your shoulders.",
          "Lower slowly. Heavy weight here means wrong form."
        ],
        difficulty: 1,
        calories: 20
      },
      {
        name: "Cable Front Raise",
        target: "Front delts",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Cable keeps tension constant throughout the lift, unlike dumbbells which go slack.",
        steps: [
          "Stand facing away from a low cable machine, handle in one hand (or both with a rope).",
          "Raise your arm straight forward until it reaches shoulder height.",
          "Pause at the top, then lower slowly under control.",
          "No dumbbells? Do a standing dumbbell front raise instead."
        ],
        difficulty: 1,
        calories: 18
      },
      {
        name: "Reverse Pec Deck Fly",
        target: "Rear delts",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Face the machine. This hits rear delts which are critical for posture and shoulder health.",
        steps: [
          "Sit facing the machine, gripping the handles with straight arms in front.",
          "Pull your arms back and out in a wide arc, squeezing your shoulder blades.",
          "Pause when hands are level with your shoulders.",
          "Return slowly. No pec deck? Use cable rear-delt fly or bent-over dumbbell fly."
        ],
        difficulty: 1,
        calories: 20
      },
      {
        name: "LISS Cardio — Treadmill Walk",
        target: "Cardio & fat burn",
        sets: 1,
        reps: "15 min",
        rest: "-",
        cue: "Low-Intensity Steady State. Brisk walk — you should be breathing harder but still able to talk.",
        steps: [
          "Set treadmill to speed 6-7 km/h and incline 3-4%.",
          "Walk briskly for 15 minutes without holding the rails.",
          "Maintain an upright posture — do not hunch forward.",
          "Home option: 10-15 minutes of continuous stair climbing up and down."
        ],
        difficulty: 1,
        calories: 120
      }
    ],

    // FRIDAY — Legs & Abs (moved from Thursday to fit your schedule)
    fri: [
      {
        name: "Stiff-Legged Deadlift",
        target: "Hamstrings",
        sets: 3,
        reps: "12",
        rest: "60s",
        cue: "Knees stay almost straight. Push hips back and feel the hamstring stretch at the bottom.",
        steps: [
          "Hold dumbbells or a barbell in front of your thighs.",
          "Keep knees very slightly bent — almost straight — throughout.",
          "Hinge at your hips, pushing them back as you lower the weight.",
          "Stop when you feel a deep hamstring stretch, then drive hips forward to stand."
        ],
        difficulty: 1.3,
        calories: 34
      },
      {
        name: "Smith Machine Squats",
        target: "Quads & glutes",
        sets: 3,
        reps: "12",
        rest: "75s",
        cue: "Bar on upper traps, squat below parallel. Drive through full foot to stand.",
        steps: [
          "Set bar on Smith machine at shoulder height, step under it and rest on upper traps.",
          "Feet shoulder-width apart, toes slightly out.",
          "Squat down until thighs are at or below parallel — do not cut it short.",
          "Drive through your heels to stand. No Smith machine? Use Goblet Squat."
        ],
        difficulty: 1.3,
        calories: 38
      },
      {
        name: "Leg Curl (Machine)",
        target: "Hamstrings",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Squeeze your hamstring at the bottom of the movement. Control the return up.",
        steps: [
          "Lie face-down on the leg curl machine, pad against the back of your ankles.",
          "Curl your heels upward toward your glutes.",
          "Squeeze hard at the top for 1 second.",
          "Lower slowly back to the start — resist on the way down."
        ],
        difficulty: 1.1,
        calories: 26
      },
      {
        name: "Abductor Machine",
        target: "Outer thighs & glutes",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Push knees outward against the pads. Do not use your back — only your hips move.",
        steps: [
          "Sit in the abductor machine with pads on the outside of your knees.",
          "Push your knees outward as wide as the machine allows.",
          "Squeeze glutes and outer thighs at the end position.",
          "Bring knees back slowly — do not let the weight snap back."
        ],
        difficulty: 1,
        calories: 20
      },
      {
        name: "Standing Calf Raise",
        target: "Calves",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Rise fully on tiptoes. Lower heel down past neutral for a full stretch.",
        steps: [
          "Stand on the edge of a step or use the calf raise machine.",
          "Rise up onto your tiptoes as high as possible.",
          "Pause at the top for 1 second.",
          "Lower your heel slowly below the step level for a full calf stretch."
        ],
        difficulty: 1,
        calories: 20
      },
      {
        name: "Abs Circuit — Leg Raises",
        target: "Lower abs",
        sets: 3,
        reps: "10",
        rest: "0s — go straight into Russian Twists",
        cue: "Superset: do 10 Leg Raises immediately into 10 Russian Twists. Rest 30 sec then repeat.",
        steps: [
          "Lie flat on a mat, hands under your hips for support.",
          "Keep legs straight (or slightly bent) and raise them to 90 degrees.",
          "Lower legs slowly back down without letting heels touch the floor.",
          "Immediately move into Russian Twists — no rest between the two exercises."
        ],
        difficulty: 1.1,
        calories: 16
      },
      {
        name: "Abs Circuit — Russian Twists",
        target: "Obliques & core",
        sets: 3,
        reps: "10",
        rest: "30s — then repeat the superset",
        cue: "After Leg Raises, go straight into this. Lean back 45 degrees, rotate side to side.",
        steps: [
          "Sit on the mat, knees bent, lean back to about 45 degrees.",
          "Lift feet slightly off the floor for extra challenge (or keep them down).",
          "Rotate your torso to tap the floor beside each hip alternately — that is 1 rep each side.",
          "Rest 30 seconds, then repeat the full Leg Raises + Russian Twists circuit 2 more times."
        ],
        difficulty: 1.1,
        calories: 14
      }
    ],

    // SATURDAY — Full Body Workout + LISS
    sat: [
      {
        name: "Sumo Squat",
        target: "Legs — inner thighs & quads",
        sets: 3,
        reps: "10-12",
        rest: "60s",
        cue: "Wide stance, toes pointed out 45 degrees. Targets inner thighs and glutes differently from a regular squat.",
        steps: [
          "Stand with feet wider than shoulder-width, toes angled out 45 degrees.",
          "Hold a dumbbell vertically in front of you for balance and load.",
          "Squat straight down, keeping your chest tall and knees tracking over toes.",
          "Drive through your full foot to stand. Keep the dumbbell close to your body."
        ],
        difficulty: 1.2,
        calories: 34
      },
      {
        name: "Decline Dumbbell Press",
        target: "Lower chest",
        sets: 3,
        reps: "10-12",
        rest: "60s",
        cue: "Feet anchored high, head lower than hips. Targets lower chest specifically.",
        steps: [
          "Set the bench to a decline angle. Hook feet under the ankle pads.",
          "Hold dumbbells at lower-chest level, elbows just below shoulder height.",
          "Press the dumbbells upward and slightly inward.",
          "Lower slowly to the start position under full control."
        ],
        difficulty: 1.2,
        calories: 30
      },
      {
        name: "Straight-Arm Pulldown",
        target: "Back — lats",
        sets: 3,
        reps: "10-12",
        rest: "60s",
        cue: "Arms stay straight throughout. This isolates the lats without bicep involvement.",
        steps: [
          "Stand at a high cable with a straight bar or rope attachment, arms extended overhead.",
          "Keep arms completely straight — no bending at the elbows.",
          "Pull the bar down in a big arc until it reaches your thighs.",
          "Squeeze your lats hard at the bottom, then let the bar rise slowly."
        ],
        difficulty: 1.1,
        calories: 24
      },
      {
        name: "Face Pulls",
        target: "Rear delts & upper back",
        sets: 3,
        reps: "10-12",
        rest: "45s",
        cue: "Pull rope toward your forehead with thumbs pointing back. Great for posture and shoulder health.",
        steps: [
          "Set cable to forehead height with rope attachment.",
          "Hold rope with thumbs up, arms extended forward.",
          "Pull rope toward your face, elbows flaring high and wide.",
          "Squeeze rear delts hard at the end, then return slowly."
        ],
        difficulty: 1,
        calories: 20
      },
      {
        name: "Preacher Curl",
        target: "Biceps",
        sets: 3,
        reps: "10-12",
        rest: "45s",
        cue: "The preacher bench stops you cheating. Arms locked — only biceps do the work.",
        steps: [
          "Sit at the preacher bench, upper arms resting on the pad.",
          "Hold a barbell or EZ bar with underhand grip.",
          "Curl the weight up as far as you can, squeezing your biceps hard.",
          "Lower slowly all the way down to a full arm extension before the next rep."
        ],
        difficulty: 1.1,
        calories: 20
      },
      {
        name: "Cable Triceps Pushdown",
        target: "Triceps",
        sets: 3,
        reps: "10-12",
        rest: "45s",
        cue: "Elbows pinned to your sides. Push down until arms are fully straight.",
        steps: [
          "Stand at a cable machine with a straight bar or V-bar attachment at chest height.",
          "Grip the bar, elbows pinned to your ribs.",
          "Push down until both arms are fully extended.",
          "Let the bar rise slowly back up — control the eccentric."
        ],
        difficulty: 1,
        calories: 20
      },
      {
        name: "LISS Cardio Finisher — Brisk Walk",
        target: "Cardio & fat burn",
        sets: 1,
        reps: "15 min",
        rest: "-",
        cue: "Close your full-body session with 15 minutes of brisk walking to maximise weekly calorie burn.",
        steps: [
          "Treadmill: set speed 6-7 km/h, incline 3-4%.",
          "Walk briskly for 15 minutes without holding the rails.",
          "Keep an upright posture throughout.",
          "Outdoor option: 15 min brisk walk — fast enough that talking takes effort."
        ],
        difficulty: 1,
        calories: 110
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 2 — Build Strength (Weeks 5–8) · Level 3–4
  // ─────────────────────────────────────────────────────────────────────────
  {
    label: "Build Strength",
    levelRange: "Level 3-4",

    // MONDAY — Chest, Shoulders & Triceps
    mon: [
      {
        name: "Incline Bench Press",
        target: "Upper chest",
        sets: 3,
        reps: "10",
        rest: "75s",
        cue: "Incline angle hits upper chest harder. The last 2 reps of each set should feel genuinely difficult.",
        steps: [
          "Set bench to 30-45 degrees. Grip the barbell slightly wider than shoulder-width.",
          "Lower the bar slowly to your upper chest — 3 seconds down.",
          "Press back up explosively without fully locking elbows at the top.",
          "Dumbbell version: hold dumbbells at upper-chest level and press upward."
        ],
        difficulty: 1.3,
        calories: 36
      },
      {
        name: "Cable Chest Fly",
        target: "Chest",
        sets: 3,
        reps: "15",
        rest: "45s",
        cue: "Cable keeps tension on your chest the entire range — unlike dumbbells which go slack at the top.",
        steps: [
          "Stand between two cable stacks set at chest height, handle in each hand.",
          "Arms slightly bent, bring hands together in front of your chest in a hugging motion.",
          "Squeeze your chest hard when hands meet.",
          "Open back out slowly, feeling the stretch across your chest."
        ],
        difficulty: 1.1,
        calories: 24
      },
      {
        name: "Dumbbell Arnold Press",
        target: "Shoulders",
        sets: 3,
        reps: "10",
        rest: "60s",
        cue: "Rotating shoulder press — hits all three heads of the shoulder more than a standard press.",
        steps: [
          "Hold dumbbells at shoulder height with palms facing YOU, elbows in front.",
          "As you press upward, rotate your palms to face FORWARD at the top.",
          "Reverse the rotation on the way back down — palms end facing you again.",
          "Keep the rotation smooth and controlled throughout."
        ],
        difficulty: 1.2,
        calories: 28
      },
      {
        name: "Cable Lateral Raise",
        target: "Side delts",
        sets: 3,
        reps: "15",
        rest: "45s",
        cue: "Cable keeps tension on your shoulder the whole way up AND down — unlike dumbbells.",
        steps: [
          "Stand sideways to a low cable, handle in the hand farthest from the machine.",
          "Keep a slight bend in your elbow throughout.",
          "Raise your arm out to the side until it reaches shoulder height.",
          "Lower slowly and repeat. Switch sides after all reps."
        ],
        difficulty: 1.1,
        calories: 20
      },
      {
        name: "Overhead Triceps Extension",
        target: "Triceps",
        sets: 3,
        reps: "15",
        rest: "45s",
        cue: "Arms overhead stretches the long head of the triceps — the largest portion.",
        steps: [
          "Hold one dumbbell with both hands overhead, arms straight.",
          "Lower slowly behind your head by bending only at the elbows.",
          "Keep upper arms still and pointing straight up.",
          "Press back to straight arms. Repeat."
        ],
        difficulty: 1.1,
        calories: 22
      },
      {
        name: "Bench Dips",
        target: "Triceps",
        sets: 3,
        reps: "15",
        rest: "45s",
        cue: "Hands on bench behind you, hips off. Lower until elbows reach 90 degrees.",
        steps: [
          "Sit on the edge of a bench, hands gripping the edge beside your hips.",
          "Slide your hips off the bench so your weight is on your hands.",
          "Lower your body by bending your elbows to about 90 degrees.",
          "Push back up to straight arms. Keep your back close to the bench."
        ],
        difficulty: 1.1,
        calories: 22
      },
      {
        name: "Hanging Knee Raises",
        target: "Core & abs",
        sets: 4,
        reps: "10",
        rest: "45s",
        cue: "4 sets now instead of 3. Control the lowering — abs are working on the way down too.",
        steps: [
          "Hang from a pull-up bar, hands slightly wider than shoulder-width.",
          "Pull both knees up toward your chest using your core — not momentum.",
          "Squeeze at the top, then lower legs slowly.",
          "Reset fully hanging before the next rep."
        ],
        difficulty: 1.2,
        calories: 22
      }
    ],

    // TUESDAY — Back & Biceps + Cardio
    tue: [
      {
        name: "T-Bar Row",
        target: "Mid back & thickness",
        sets: 3,
        reps: "8",
        rest: "75s",
        cue: "Heavier, lower reps. Pull the weight toward your chest. Feel your mid-back do the work.",
        steps: [
          "Straddle the T-bar machine or use a barbell in a corner with a row handle.",
          "Hinge forward 45 degrees, back flat, arms straight.",
          "Pull the weight up toward your lower chest, leading with your elbows.",
          "Squeeze your shoulder blades together at the top, lower slowly."
        ],
        difficulty: 1.4,
        calories: 36
      },
      {
        name: "Cable Close-Grip Pulldown",
        target: "Lats & biceps",
        sets: 3,
        reps: "8",
        rest: "60s",
        cue: "Narrow grip changes the angle and hits the inner lats. Pull to your collarbone.",
        steps: [
          "Attach a close-grip handle to the lat pulldown. Sit with thighs under the pad.",
          "Grip the handle with palms facing each other, hands close together.",
          "Pull down to your collarbone, elbows driving toward your hips.",
          "Let the weight rise slowly, getting a full lat stretch at the top."
        ],
        difficulty: 1.3,
        calories: 30
      },
      {
        name: "Seated Cable Row",
        target: "Back",
        sets: 3,
        reps: "12",
        rest: "60s",
        cue: "Heavier than Phase 1. Hold the contraction for 2 full seconds this time.",
        steps: [
          "Sit upright at the cable row, feet on the platform.",
          "Pull the handle to your belly button, squeezing shoulder blades hard.",
          "Hold the squeeze for 2 full seconds.",
          "Let arms extend forward slowly, getting a stretch before the next rep."
        ],
        difficulty: 1.3,
        calories: 28
      },
      {
        name: "Dumbbell Hammer Curl",
        target: "Biceps & forearms",
        sets: 4,
        reps: "10-12",
        rest: "45s",
        cue: "Palms facing each other the whole time. This hits biceps AND forearms together.",
        steps: [
          "Stand with a dumbbell in each hand, palms facing your body (thumbs up).",
          "Curl one arm up, keeping your palm facing in the whole way.",
          "Squeeze at the top, then lower slowly.",
          "Switch arms and repeat — alternate for all reps."
        ],
        difficulty: 1.2,
        calories: 22
      },
      {
        name: "Spider Curl",
        target: "Biceps",
        sets: 4,
        reps: "10-12",
        rest: "45s",
        cue: "Lying face-down on an incline keeps your elbows forward and removes all cheating.",
        steps: [
          "Lie face-down on an incline bench set to 45 degrees, holding a dumbbell in each hand.",
          "Arms hang straight down from your shoulders.",
          "Curl both arms upward — elbows stay pointed straight down throughout.",
          "Lower slowly to a full arm extension before the next rep."
        ],
        difficulty: 1.2,
        calories: 20
      },
      {
        name: "Wrist Curls + Dead Hang",
        target: "Forearms & grip",
        sets: 3,
        reps: "15 curls then 20s hang",
        rest: "30s",
        cue: "Superset: 15 wrist curls immediately followed by a 20-second dead hang. Burns the forearms completely.",
        steps: [
          "Do 15 seated wrist curls (palm up, forearm on thigh) with a light dumbbell.",
          "Immediately stand up and grip a pull-up bar with both hands.",
          "Hang with straight arms for 20 seconds — do not swing.",
          "Step off and rest 30 seconds. Repeat for all 3 sets."
        ],
        difficulty: 1.2,
        calories: 14
      },
      {
        name: "LISS Cardio Finisher",
        target: "Cardio & fat burn",
        sets: 1,
        reps: "20 min",
        rest: "-",
        cue: "20 minutes of low-intensity steady-state cardio to maximise fat burning after the lifting session.",
        steps: [
          "Treadmill: set speed 6-7 km/h, incline 3-4%. Walk briskly for 20 minutes.",
          "Stationary bike: moderate resistance, steady comfortable pace.",
          "Elliptical: steady pace for 20 minutes.",
          "Keep intensity low — you should be breathing harder but still able to speak."
        ],
        difficulty: 1,
        calories: 150
      }
    ],

    // WEDNESDAY — Legs (Hamstrings & Glutes focus), Calves & Abs
    wed: [
      {
        name: "Dumbbell Romanian Deadlift",
        target: "Hamstrings & glutes",
        sets: 3,
        reps: "10",
        rest: "75s",
        cue: "Soft knee bend, hips push back. Feel the hamstring stretch at the bottom — that's where the growth happens.",
        steps: [
          "Hold a dumbbell in each hand in front of your thighs.",
          "Soft bend in your knees — not a squat, just enough to unlock them.",
          "Push your hips BACKWARD as you lower the dumbbells along your legs.",
          "Feel the hamstring stretch, then drive hips forward to return to standing."
        ],
        difficulty: 1.3,
        calories: 34
      },
      {
        name: "Hip Thrust",
        target: "Glutes",
        sets: 3,
        reps: "10",
        rest: "60s",
        cue: "The best glute exercise. Drive hips up until body forms a straight line from knees to shoulders.",
        steps: [
          "Sit on the floor with your upper back against a bench, a dumbbell or barbell across your hips.",
          "Feet flat on the floor, shoulder-width apart.",
          "Drive your hips upward by squeezing your glutes hard.",
          "Hold at the top for 1 second, then lower slowly. Do not arch your lower back."
        ],
        difficulty: 1.3,
        calories: 30
      },
      {
        name: "Leg Curl (Machine)",
        target: "Hamstrings",
        sets: 3,
        reps: "15",
        rest: "45s",
        cue: "Higher reps this phase. Squeeze your hamstring hard at the bottom every single rep.",
        steps: [
          "Lie face-down (or seated) at the leg curl machine.",
          "Curl your heels up toward your glutes as far as possible.",
          "Squeeze the hamstring hard at the fully contracted position.",
          "Lower slowly under full control — do not let the weight drop."
        ],
        difficulty: 1.1,
        calories: 26
      },
      {
        name: "Donkey Kickbacks",
        target: "Glutes",
        sets: 3,
        reps: "15 each leg",
        rest: "45s",
        cue: "Use a cable machine or bodyweight. Squeeze your glute at the top of each rep.",
        steps: [
          "On cable machine: attach ankle strap to low cable, face the machine, grip handles for balance.",
          "Kick your leg back and up, squeezing the glute hard at the top.",
          "Lower slowly. Keep your core braced throughout — do not twist your hips.",
          "Complete all reps on one leg then switch. Bodyweight version works on all fours on a mat."
        ],
        difficulty: 1.1,
        calories: 22
      },
      {
        name: "Standing Calf Raise",
        target: "Calves",
        sets: 3,
        reps: "15",
        rest: "45s",
        cue: "Full range every rep — heels go below the step at the bottom, tiptoes fully at the top.",
        steps: [
          "Stand on the edge of a step with heels hanging off.",
          "Rise onto tiptoes as high as possible, squeezing calves.",
          "Pause at the top for 1 second.",
          "Lower your heels below the step level for a full stretch before the next rep."
        ],
        difficulty: 1,
        calories: 20
      },
      {
        name: "Abs Tri-Set — Ab Crunches",
        target: "Upper abs",
        sets: 3,
        reps: "10",
        rest: "0s — go straight into Reverse Crunches",
        cue: "Tri-set: Crunches → Reverse Crunches → Russian Twists back to back, no rest. Rest 30s then repeat.",
        steps: [
          "Lie on your back, knees bent, hands lightly behind your head.",
          "Curl your upper body forward toward your knees using only your abs.",
          "Hold the crunch for 1 second at the top.",
          "Lower slowly back down. Immediately move to Reverse Crunches."
        ],
        difficulty: 1.1,
        calories: 14
      },
      {
        name: "Abs Tri-Set — Reverse Crunches",
        target: "Lower abs",
        sets: 3,
        reps: "10",
        rest: "0s — go straight into Russian Twists",
        cue: "Keep your lower back pressed into the mat. Lift hips using your abs, not momentum.",
        steps: [
          "Lie on your back, hands under your hips, legs bent at 90 degrees.",
          "Use your lower abs to lift your hips off the floor, curling your knees toward your chest.",
          "Pause at the top, then lower hips slowly back down.",
          "Immediately move into Russian Twists — no rest."
        ],
        difficulty: 1.1,
        calories: 14
      },
      {
        name: "Abs Tri-Set — Russian Twists",
        target: "Obliques",
        sets: 3,
        reps: "10 each side",
        rest: "30s — then repeat the full tri-set",
        cue: "Final exercise of the tri-set. Lean back, rotate side to side. Rest 30 sec then repeat from Crunches.",
        steps: [
          "Sit on the floor, knees bent, lean back about 45 degrees.",
          "Hold hands together or a light weight — lift feet slightly off the floor.",
          "Rotate your torso to tap the floor beside each hip alternately.",
          "Rest 30 seconds, then repeat the full tri-set 2 more times."
        ],
        difficulty: 1.2,
        calories: 16
      }
    ],

    // FRIDAY — Upper Body & Cardio
    fri: [
      {
        name: "Barbell Bench Press",
        target: "Chest",
        sets: 3,
        reps: "10",
        rest: "75s",
        cue: "The king of chest exercises. Lower bar to mid-chest, press up and slightly back.",
        steps: [
          "Lie flat on a bench, grip the barbell slightly wider than shoulder-width.",
          "Unrack and lower the bar slowly to your mid-chest — 3 seconds down.",
          "Press back up powerfully without fully locking elbows at the top.",
          "No barbell? Use Dumbbell Bench Press at the same weight progression."
        ],
        difficulty: 1.3,
        calories: 36
      },
      {
        name: "Dumbbell Shoulder Press",
        target: "Shoulders",
        sets: 3,
        reps: "10",
        rest: "60s",
        cue: "Heavier than Phase 1. The last 2 reps should take real effort.",
        steps: [
          "Sit on a bench with back support, dumbbells at shoulder height.",
          "Press both dumbbells straight up simultaneously until nearly fully extended.",
          "Lower slowly back to shoulder height.",
          "Keep your core braced and do not lean back."
        ],
        difficulty: 1.3,
        calories: 30
      },
      {
        name: "Reverse-Grip Lat Pulldown",
        target: "Lats & biceps",
        sets: 3,
        reps: "15",
        rest: "45s",
        cue: "Underhand grip shifts more work to your lower lats and involves biceps more than an overhand grip.",
        steps: [
          "Sit at the lat pulldown, grip the bar underhand (palms facing you), shoulder-width apart.",
          "Pull the bar down to your upper chest, elbows driving toward your hips.",
          "Lean back slightly as you pull — keep it controlled, not a swing.",
          "Let the bar rise slowly under control to a full arm extension."
        ],
        difficulty: 1.2,
        calories: 28
      },
      {
        name: "EZ Barbell Curl",
        target: "Biceps",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Same movement as Phase 1 but heavier. Strict form — no swinging.",
        steps: [
          "Hold an EZ bar with underhand grip on the inner angled grip.",
          "Stand tall, elbows locked to your sides.",
          "Curl the bar up to your chest in a smooth arc.",
          "Lower slowly all the way to full arm extension."
        ],
        difficulty: 1.2,
        calories: 22
      },
      {
        name: "Cable Triceps Pushdown",
        target: "Triceps",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Heavier than Phase 1. Elbows still pinned. Squeeze triceps hard at the bottom.",
        steps: [
          "Stand at cable machine with V-bar or straight bar at chest height.",
          "Grip bar with elbows pinned to ribs.",
          "Push down until arms are fully straight, squeezing triceps.",
          "Return slowly — control the whole movement."
        ],
        difficulty: 1.2,
        calories: 22
      },
      {
        name: "LISS Cardio Finisher",
        target: "Cardio & fat burn",
        sets: 1,
        reps: "20 min",
        rest: "-",
        cue: "20 minutes after upper body work accelerates fat loss. Keep intensity low and steady.",
        steps: [
          "Treadmill: speed 6-7 km/h, incline 3-4%. Walk briskly for 20 minutes.",
          "Or use the elliptical at a steady comfortable pace.",
          "Breathing should be elevated but you can still hold a conversation.",
          "Do not stop moving — consistency of the pace is more important than intensity."
        ],
        difficulty: 1,
        calories: 150
      }
    ],

    // SATURDAY — Lower Body (Quad focus) & Abs
    sat: [
      {
        name: "Smith Machine Front Squat",
        target: "Quads",
        sets: 3,
        reps: "10",
        rest: "90s",
        cue: "Bar across front of shoulders. Upright torso hits quads harder than a back squat.",
        steps: [
          "Set bar on Smith machine at shoulder height, cross your arms to rest it on front delts.",
          "Step feet shoulder-width, slightly forward of the bar.",
          "Squat straight down keeping your torso as upright as possible.",
          "Drive through your full foot to stand. No Smith? Use a dumbbell Goblet Squat."
        ],
        difficulty: 1.4,
        calories: 40
      },
      {
        name: "Leg Press",
        target: "Quads & glutes",
        sets: 3,
        reps: "10",
        rest: "75s",
        cue: "Feet shoulder-width. Do not lock knees at the top. Control the platform down.",
        steps: [
          "Sit in the leg press machine, feet shoulder-width on the platform.",
          "Release the safety handles and lower the platform toward your chest slowly.",
          "Push away through your full foot until legs are nearly straight — do not snap knees.",
          "Lower again slowly for the next rep."
        ],
        difficulty: 1.3,
        calories: 38
      },
      {
        name: "Leg Extension",
        target: "Quads",
        sets: 3,
        reps: "15",
        rest: "45s",
        cue: "Squeeze your quad hard at the top of each rep. Control the return down slowly.",
        steps: [
          "Sit at the leg extension machine, pad resting on your shins just above the ankle.",
          "Extend your legs until they are straight, squeezing your quads hard at the top.",
          "Hold the squeeze for 1 second.",
          "Lower slowly back to the start — do not let the weight drop."
        ],
        difficulty: 1.1,
        calories: 26
      },
      {
        name: "Seated Calf Raise",
        target: "Calves",
        sets: 4,
        reps: "15",
        rest: "45s",
        cue: "4 sets today. Seated version hits the soleus — a deeper calf muscle standing raises miss.",
        steps: [
          "Sit at the seated calf raise machine, pads resting on your thighs near your knees.",
          "Balls of feet on the platform, heels hanging free.",
          "Rise onto your toes as high as possible, squeezing your calves.",
          "Lower heels slowly all the way down for a full stretch."
        ],
        difficulty: 1,
        calories: 22
      },
      {
        name: "Abs Tri-Set — Knee Raises on Captain's Chair",
        target: "Lower abs",
        sets: 3,
        reps: "10",
        rest: "0s — go straight into Flutter Kicks",
        cue: "Tri-set: Knee Raises → Flutter Kicks → High-Knee Crunches back to back. Rest 30s then repeat.",
        steps: [
          "Stand on the captain's chair, forearms on the pads supporting your weight.",
          "Pull both knees up toward your chest using your lower abs.",
          "Lower your legs slowly — resist gravity on the way down.",
          "Immediately move into Flutter Kicks without resting."
        ],
        difficulty: 1.2,
        calories: 18
      },
      {
        name: "Abs Tri-Set — Flutter Kicks",
        target: "Lower abs",
        sets: 3,
        reps: "10 each side",
        rest: "0s — go straight into High-Knee Crunches",
        cue: "Lie flat, legs slightly off the floor. Small alternating kicks. Keep lower back pressed down.",
        steps: [
          "Lie flat on a mat, hands under your hips.",
          "Raise both legs about 6 inches off the floor.",
          "Alternate kicking legs up and down in small controlled movements.",
          "Keep your lower back pressed into the mat throughout. Move into High-Knee Crunches next."
        ],
        difficulty: 1.2,
        calories: 16
      },
      {
        name: "Abs Tri-Set — High-Knee Crunches",
        target: "Full core",
        sets: 3,
        reps: "10",
        rest: "30s — then repeat the full tri-set",
        cue: "Final exercise of the tri-set. Bring knee and opposite elbow together explosively.",
        steps: [
          "Lie on your back, hands behind your head, legs extended.",
          "Simultaneously pull one knee toward your chest and crunch your opposite elbow toward it.",
          "Alternate sides for each rep — left knee to right elbow, then right knee to left elbow.",
          "Rest 30 seconds, then repeat the full tri-set 2 more times from Knee Raises."
        ],
        difficulty: 1.2,
        calories: 18
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 3 — Advanced (Weeks 9+) · Level 5–6
  // Progressive overload of Phase 2 with advanced variations
  // ─────────────────────────────────────────────────────────────────────────
  {
    label: "Advanced",
    levelRange: "Level 5-6",

    // MONDAY — Chest, Shoulders & Triceps (Advanced)
    mon: [
      {
        name: "Incline Bench Press (Heavy)",
        target: "Upper chest",
        sets: 4,
        reps: "8",
        rest: "90s",
        cue: "4 sets now, 8 reps, heavier weight. The last set should be your absolute limit for 8 clean reps.",
        steps: [
          "Set bench to 30-45 degrees. Load the bar heavier than Phase 2.",
          "Lower the bar slowly to your upper chest — 4 seconds down.",
          "Press up powerfully. If form breaks, reduce weight.",
          "Rest the full 90 seconds between sets — you need it at this intensity."
        ],
        difficulty: 1.5,
        calories: 42
      },
      {
        name: "Weighted Dip",
        target: "Lower chest & triceps",
        sets: 3,
        reps: "8-10",
        rest: "75s",
        cue: "Add weight via a dip belt or dumbbell between your feet. Lean forward slightly to hit more chest.",
        steps: [
          "Set up at a dip station, add weight via belt or hold a dumbbell between your feet.",
          "Lower your body until your elbows reach 90 degrees — lean forward slightly for chest emphasis.",
          "Press back up to straight arms.",
          "No dip station: Close-grip push-ups are a solid substitute."
        ],
        difficulty: 1.4,
        calories: 38
      },
      {
        name: "Single-Arm Cable Fly",
        target: "Chest",
        sets: 3,
        reps: "12 each side",
        rest: "45s",
        cue: "One arm at a time exposes any imbalance between your left and right chest.",
        steps: [
          "Stand side-on to a cable at chest height, handle in the hand farther from the machine.",
          "Bring your arm across your body in a hugging arc, squeezing your chest hard.",
          "Return slowly, feeling the full stretch.",
          "Complete all reps on one side, then switch."
        ],
        difficulty: 1.3,
        calories: 26
      },
      {
        name: "Push Press",
        target: "Shoulders",
        sets: 3,
        reps: "8",
        rest: "75s",
        cue: "Use a small leg dip to help drive more weight overhead than a strict press allows.",
        steps: [
          "Hold dumbbells at shoulder height, feet hip-width apart.",
          "Dip your knees slightly, then drive upward explosively, pressing dumbbells overhead.",
          "Arms fully extended at the top.",
          "Lower the dumbbells back to shoulder height with control. Reset between reps."
        ],
        difficulty: 1.4,
        calories: 34
      },
      {
        name: "Skull Crusher",
        target: "Triceps",
        sets: 3,
        reps: "10-12",
        rest: "45s",
        cue: "The most advanced triceps stretch in this program. Upper arms stay vertical and still.",
        steps: [
          "Lie on a bench holding dumbbells or an EZ bar directly above your chest, arms straight.",
          "Bend only at the elbows, lowering the weight toward your forehead.",
          "Keep upper arms vertical and completely still throughout.",
          "Press back to straight arms — triceps do all the work."
        ],
        difficulty: 1.3,
        calories: 28
      },
      {
        name: "Hanging Knee Raises (Weighted)",
        target: "Core & abs",
        sets: 4,
        reps: "10-12",
        rest: "45s",
        cue: "Add a dumbbell held between your feet for extra resistance. Full control throughout.",
        steps: [
          "Hang from a pull-up bar. Hold a light dumbbell between your feet or use ankle weights.",
          "Pull knees upward toward your chest using your lower abs.",
          "Squeeze hard at the top.",
          "Lower slowly under full control. Bodyweight version if too difficult."
        ],
        difficulty: 1.4,
        calories: 26
      }
    ],

    // TUESDAY — Back & Biceps (Advanced) + Cardio
    tue: [
      {
        name: "Full Pull-ups",
        target: "Back",
        sets: 4,
        reps: "6-8",
        rest: "90s",
        cue: "The real thing — no band. If you cannot complete clean reps, drop back to Band-Assisted pull-ups.",
        steps: [
          "Grip the bar slightly wider than shoulder width, palms facing away.",
          "Pull your chest up toward the bar without kicking your legs.",
          "Lower yourself under full control to a dead hang.",
          "Reset completely before the next rep."
        ],
        difficulty: 1.5,
        calories: 42
      },
      {
        name: "T-Bar Row (Heavier)",
        target: "Back",
        sets: 4,
        reps: "8",
        rest: "75s",
        cue: "4 sets now with heavier weight. The mid-back should be burning by the last 2 reps of every set.",
        steps: [
          "Load the T-bar heavier than Phase 2.",
          "Hinge forward 45 degrees, back flat, core braced.",
          "Pull weight to your lower chest, leading with elbows.",
          "Lower slowly — resist the weight on the way down."
        ],
        difficulty: 1.5,
        calories: 40
      },
      {
        name: "Single-Arm Lat Pulldown",
        target: "Lats",
        sets: 3,
        reps: "10 each side",
        rest: "60s",
        cue: "Each arm works alone — no strong side can compensate for a weak side.",
        steps: [
          "Attach a single handle to the lat pulldown cable.",
          "Sit and grip with one hand, arm extended overhead.",
          "Pull your elbow down toward your hip, squeezing your lat.",
          "Return slowly. Switch sides after all reps."
        ],
        difficulty: 1.3,
        calories: 30
      },
      {
        name: "Incline Dumbbell Curl",
        target: "Biceps",
        sets: 4,
        reps: "10-12",
        rest: "45s",
        cue: "Lying on an incline stretches the bicep more at the bottom — a larger range means more growth.",
        steps: [
          "Lie back on a 45-60 degree incline bench, dumbbell in each hand.",
          "Arms hanging straight down, palms forward.",
          "Curl both arms up simultaneously without swinging shoulders.",
          "Lower slowly all the way back to a full stretch."
        ],
        difficulty: 1.3,
        calories: 24
      },
      {
        name: "Spider Curl (Heavier)",
        target: "Biceps",
        sets: 4,
        reps: "10-12",
        rest: "45s",
        cue: "Heavier than Phase 2. Form stays strict — elbows pointing straight down at all times.",
        steps: [
          "Lie face-down on an incline bench, dumbbells hanging straight down.",
          "Curl both arms up, elbows staying pointed toward the floor.",
          "Squeeze hard at the top.",
          "Lower slowly to full arm extension."
        ],
        difficulty: 1.3,
        calories: 22
      },
      {
        name: "Wrist Curl Drop Set",
        target: "Forearms",
        sets: 3,
        reps: "15 then 10",
        rest: "20s",
        cue: "15 reps at your normal weight, only 10 seconds rest, then 10 more at lighter weight. Maximum forearm burn.",
        steps: [
          "Do 15 full wrist curls at your normal Phase 2 weight.",
          "Rest only 10 seconds — just enough to grab a lighter dumbbell.",
          "Immediately do 10 more wrist curls at the lighter weight.",
          "Rest 20 seconds after this combined set, then repeat."
        ],
        difficulty: 1.3,
        calories: 16
      },
      {
        name: "LISS Cardio Finisher",
        target: "Cardio & fat burn",
        sets: 1,
        reps: "20 min",
        rest: "-",
        cue: "Same 20-minute LISS as Phase 2 — but try to push the treadmill incline slightly higher this phase.",
        steps: [
          "Treadmill: speed 6-7 km/h, incline now 5-6% (up from 3-4% in Phase 2).",
          "Walk briskly for the full 20 minutes without holding the rails.",
          "Core stays braced, posture upright.",
          "Bike or elliptical alternatives at a steady elevated pace."
        ],
        difficulty: 1.1,
        calories: 160
      }
    ],

    // WEDNESDAY — Legs Advanced (Hamstrings & Glutes + Power)
    wed: [
      {
        name: "Romanian Deadlift (Barbell)",
        target: "Hamstrings & glutes",
        sets: 4,
        reps: "8-10",
        rest: "90s",
        cue: "Graduated to barbell now — heavier load, same perfect hinge form. Last 2 reps of each set should be hard.",
        steps: [
          "Hold a barbell in front of your thighs with an overhand grip.",
          "Soft knee bend throughout — this is a hip hinge, not a squat.",
          "Push hips back as you lower the bar along your legs, keeping it close.",
          "Drive hips forward to stand, squeezing glutes hard at the top."
        ],
        difficulty: 1.5,
        calories: 40
      },
      {
        name: "Hip Thrust (Weighted)",
        target: "Glutes",
        sets: 4,
        reps: "10",
        rest: "75s",
        cue: "Heavier barbell across hips this phase. Drive all the way up — full glute squeeze.",
        steps: [
          "Upper back against a bench, loaded barbell across your hips.",
          "Feet flat on the floor, slightly wider than hip-width.",
          "Drive hips upward by contracting your glutes — body forms a straight line.",
          "Hold the top for 2 seconds, lower slowly."
        ],
        difficulty: 1.4,
        calories: 36
      },
      {
        name: "Nordic Curl (Assisted)",
        target: "Hamstrings",
        sets: 3,
        reps: "6-8",
        rest: "90s",
        cue: "The hardest hamstring exercise in this program. Use your hands for as much assistance as needed.",
        steps: [
          "Kneel on a mat with ankles anchored under something sturdy.",
          "Lower your torso forward as slowly as you can, catching yourself with your hands.",
          "Use your hands to push back up, then engage hamstrings as they strengthen.",
          "Stop the set when you can no longer control the lowering."
        ],
        difficulty: 1.6,
        calories: 30
      },
      {
        name: "Bulgarian Split Squat",
        target: "Quads & glutes",
        sets: 3,
        reps: "10 each leg",
        rest: "75s",
        cue: "One leg does all the work — much harder than a regular squat. Great for fixing imbalances.",
        steps: [
          "Stand a long step in front of a bench, rest the top of one foot on it behind you.",
          "Hold dumbbells by your sides or barbell on your back.",
          "Lower straight down on your front leg until back knee almost touches the floor.",
          "Push through your front foot to stand. Complete all reps then switch legs."
        ],
        difficulty: 1.4,
        calories: 36
      },
      {
        name: "Calf Raise Drop Set",
        target: "Calves",
        sets: 3,
        reps: "15 then 15 more",
        rest: "45s",
        cue: "Normal set of 15, rest only 10 seconds, then immediately another 15. Calves will be burning.",
        steps: [
          "Perform a normal set of 15 standing calf raises to a full stretch.",
          "Rest only 10 seconds.",
          "Immediately perform another 15 reps at the same weight.",
          "Take the full 45-second rest after this combined set, then repeat."
        ],
        difficulty: 1.4,
        calories: 28
      },
      {
        name: "Abs Tri-Set — Ab Crunches",
        target: "Upper abs",
        sets: 3,
        reps: "10",
        rest: "0s — straight into Reverse Crunches",
        cue: "Same tri-set structure as Phase 2 but heavier and stricter. No momentum.",
        steps: [
          "Lie on your back, knees bent, hands lightly behind head.",
          "Curl your upper body forward using only your abs — elbows do not pull your neck.",
          "Hold at the top for 1 second.",
          "Lower slowly. Move immediately into Reverse Crunches."
        ],
        difficulty: 1.2,
        calories: 14
      },
      {
        name: "Abs Tri-Set — Reverse Crunches",
        target: "Lower abs",
        sets: 3,
        reps: "10",
        rest: "0s — straight into Russian Twists",
        cue: "Hips lift off the floor using your abs. Lower back stays pressed down.",
        steps: [
          "Lie flat, hands under hips, legs bent at 90 degrees.",
          "Contract lower abs to lift hips off the floor, knees moving toward chest.",
          "Pause at the top, lower slowly.",
          "Move immediately into Russian Twists."
        ],
        difficulty: 1.2,
        calories: 14
      },
      {
        name: "Abs Tri-Set — Russian Twists (Weighted)",
        target: "Obliques",
        sets: 3,
        reps: "10 each side",
        rest: "30s — then repeat tri-set",
        cue: "Hold a dumbbell or weight plate for extra resistance this phase. Feet lifted.",
        steps: [
          "Sit on mat, knees bent, lean back 45 degrees, feet lifted off the floor.",
          "Hold a light dumbbell or weight plate with both hands.",
          "Rotate your torso to tap the weight beside each hip alternately.",
          "Rest 30 seconds, repeat the full tri-set 2 more times."
        ],
        difficulty: 1.3,
        calories: 18
      }
    ],

    // FRIDAY — Upper Body Advanced + Cardio
    fri: [
      {
        name: "Barbell Bench Press (Heavy)",
        target: "Chest",
        sets: 4,
        reps: "8",
        rest: "90s",
        cue: "4 sets of 8 at maximum effort. Spotter recommended. Last set should be absolute limit.",
        steps: [
          "Set up with a weight you can barely complete 8 clean reps.",
          "Lower bar slowly to mid-chest — 3-4 seconds down.",
          "Drive up powerfully.",
          "Rack the bar safely. Rest the full 90 seconds."
        ],
        difficulty: 1.5,
        calories: 42
      },
      {
        name: "Renegade Row",
        target: "Back & core",
        sets: 3,
        reps: "8 each side",
        rest: "60s",
        cue: "Row a dumbbell while holding a push-up position. Core fights rotation the entire time.",
        steps: [
          "Get into a push-up position with a dumbbell in each hand.",
          "Row one dumbbell up to your hip without rotating your hips.",
          "Place it back down firmly before rowing the other side.",
          "Alternate sides — keep hips completely square throughout."
        ],
        difficulty: 1.5,
        calories: 34
      },
      {
        name: "Push Press (Heavier)",
        target: "Shoulders",
        sets: 3,
        reps: "8",
        rest: "75s",
        cue: "Heavier than Wednesday's version. The leg drive allows you to press more weight than strict pressing.",
        steps: [
          "Hold heavier dumbbells at shoulder height.",
          "Quick knee dip, then drive up explosively, pressing dumbbells overhead.",
          "Lower slowly and controlled back to shoulder height.",
          "Use the full 75 seconds of rest — you will need it."
        ],
        difficulty: 1.5,
        calories: 36
      },
      {
        name: "Diamond Push-up",
        target: "Triceps",
        sets: 3,
        reps: "12",
        rest: "45s",
        cue: "Hands close in a diamond shape shifts most of the work onto your triceps.",
        steps: [
          "Get into push-up position with thumbs and index fingers touching — forming a diamond.",
          "Lower your chest toward your hands.",
          "Push back up to straight arms.",
          "Keep elbows close to your body throughout."
        ],
        difficulty: 1.4,
        calories: 28
      },
      {
        name: "Incline Dumbbell Curl (Heavier)",
        target: "Biceps",
        sets: 4,
        reps: "10",
        rest: "45s",
        cue: "Heavier than Tuesday's version. Same stretched range of motion — maximize it.",
        steps: [
          "Lie on 45-60 degree incline bench, heavier dumbbells in each hand.",
          "Arms hanging straight down at your sides.",
          "Curl both arms simultaneously, keeping shoulders back.",
          "Lower all the way to full extension — feel the complete stretch."
        ],
        difficulty: 1.4,
        calories: 26
      },
      {
        name: "LISS Cardio Finisher",
        target: "Cardio & fat burn",
        sets: 1,
        reps: "20 min",
        rest: "-",
        cue: "Final cardio of the week. Push the incline higher than Phase 2 if your body can handle it.",
        steps: [
          "Treadmill: speed 6.5-7 km/h, incline 6-8% — higher than Phase 2.",
          "Walk briskly for 20 minutes without holding the rails.",
          "Upright posture, arms swinging naturally.",
          "Elliptical or bike at elevated resistance as alternatives."
        ],
        difficulty: 1.2,
        calories: 170
      }
    ],

    // SATURDAY — Lower Body Advanced + Abs
    sat: [
      {
        name: "Jump Squat",
        target: "Quads & power",
        sets: 3,
        reps: "10",
        rest: "75s",
        cue: "Explosive — you leave the ground at the top. Land softly on bent knees. Skip if knees complain.",
        steps: [
          "Stand feet shoulder-width, bodyweight only or very light dumbbells.",
          "Squat down to a regular squat depth.",
          "Explode upward, leaving the ground briefly.",
          "Land softly on bent knees and go straight into the next rep."
        ],
        difficulty: 1.5,
        calories: 44
      },
      {
        name: "Leg Press (Heavy)",
        target: "Quads & glutes",
        sets: 4,
        reps: "10",
        rest: "75s",
        cue: "4 sets, heavier than Phase 2. Drive through the full foot — not just your toes.",
        steps: [
          "Set the leg press heavier than last phase.",
          "Feet shoulder-width on the platform.",
          "Lower platform slowly until knees are at 90 degrees.",
          "Drive away powerfully through full foot. Rest the full 75 seconds."
        ],
        difficulty: 1.5,
        calories: 44
      },
      {
        name: "Leg Extension (Drop Set)",
        target: "Quads",
        sets: 3,
        reps: "15 then 10",
        rest: "45s",
        cue: "Normal 15 reps, reduce weight immediately, 10 more reps. Quads should be on fire.",
        steps: [
          "Do 15 leg extensions at your normal weight.",
          "Immediately reduce weight by 30-40% without a full rest.",
          "Do 10 more extensions at the lighter weight.",
          "Rest 45 seconds. Repeat for all 3 sets."
        ],
        difficulty: 1.4,
        calories: 30
      },
      {
        name: "Seated Calf Raise (Heavy)",
        target: "Calves",
        sets: 4,
        reps: "15",
        rest: "45s",
        cue: "Heavier than Phase 2. The soleus muscle responds well to heavy, slow reps.",
        steps: [
          "Add more weight to the seated calf raise machine.",
          "Rise onto your toes as high as possible, pause for 2 seconds.",
          "Lower heels slowly all the way to a full stretch.",
          "4 sets of 15 — keep every rep clean and controlled."
        ],
        difficulty: 1.3,
        calories: 26
      },
      {
        name: "Abs Tri-Set — Knee Raises (Weighted)",
        target: "Lower abs",
        sets: 3,
        reps: "10-12",
        rest: "0s — straight into Flutter Kicks",
        cue: "Hold a dumbbell between your feet for extra resistance this phase.",
        steps: [
          "Use the captain's chair or hang from a pull-up bar.",
          "Hold a light dumbbell between your feet (or use ankle weights).",
          "Pull knees up toward chest using lower abs.",
          "Lower slowly. Move immediately into Flutter Kicks."
        ],
        difficulty: 1.4,
        calories: 22
      },
      {
        name: "Abs Tri-Set — Flutter Kicks",
        target: "Lower abs",
        sets: 3,
        reps: "15 each side",
        rest: "0s — straight into High-Knee Crunches",
        cue: "More reps than Phase 2. Keep lower back pinned to the mat throughout.",
        steps: [
          "Lie flat, hands under hips, legs 6 inches off the floor.",
          "Alternate kicking legs in small controlled movements.",
          "Lower back stays pressed into the mat the entire time.",
          "Move straight into High-Knee Crunches."
        ],
        difficulty: 1.3,
        calories: 18
      },
      {
        name: "Abs Tri-Set — High-Knee Crunches (Weighted)",
        target: "Full core",
        sets: 3,
        reps: "10",
        rest: "30s — then repeat tri-set",
        cue: "Hold a weight plate behind your head for extra resistance this phase.",
        steps: [
          "Lie on your back, hold a light weight plate behind your head.",
          "Simultaneously pull one knee toward your chest and crunch the opposite elbow toward it.",
          "Alternate sides explosively but under control.",
          "Rest 30 seconds, then repeat the full tri-set 2 more times."
        ],
        difficulty: 1.4,
        calories: 22
      }
    ]
  }
];

export const MAIN_PROGRAM_ABS: Exercise[][] = [
  [
    {
      name: "Hanging Knee Raises",
      target: "Core",
      sets: 3,
      reps: "10",
      rest: "45s",
      cue: "Pull knees toward chest using core only — not momentum. Control the lowering.",
      steps: [
        "Hang from a pull-up bar, hands slightly wider than shoulder-width.",
        "Pull both knees up toward your chest, squeezing your abs.",
        "Lower legs slowly — do not drop them.",
        "Reverse Crunches on a mat are a valid substitute."
      ],
      difficulty: 1,
      calories: 18
    },
    {
      name: "Russian Twists",
      target: "Obliques",
      sets: 3,
      reps: "10 each side",
      rest: "45s",
      cue: "Lean back 45 degrees, rotate side to side. Feet lifted for more challenge.",
      steps: [
        "Sit on mat, knees bent, lean back to 45 degrees.",
        "Lift feet slightly off the floor.",
        "Rotate torso to tap the floor beside each hip alternately.",
        "Keep the movement controlled — not rushed."
      ],
      difficulty: 1,
      calories: 14
    }
  ],
  [
    {
      name: "Abs Tri-Set — Crunches",
      target: "Upper abs",
      sets: 3,
      reps: "10",
      rest: "0s",
      cue: "First of three. Go into Reverse Crunches immediately after.",
      steps: [
        "Lie on back, knees bent, hands lightly behind head.",
        "Curl upper body toward your knees using abs.",
        "Hold 1 second at the top.",
        "Lower slowly. Move straight to Reverse Crunches."
      ],
      difficulty: 1.1,
      calories: 14
    },
    {
      name: "Abs Tri-Set — Russian Twists",
      target: "Obliques",
      sets: 3,
      reps: "10 each side",
      rest: "30s",
      cue: "Final exercise of the tri-set. Rest 30 sec then repeat from Crunches.",
      steps: [
        "Sit on mat, lean back, feet lifted.",
        "Rotate torso to touch floor beside each hip.",
        "Controlled rotation — not momentum.",
        "Rest 30 seconds, repeat the full circuit 2 more times."
      ],
      difficulty: 1.1,
      calories: 16
    }
  ],
  [
    {
      name: "Abs Tri-Set — Knee Raises",
      target: "Lower abs",
      sets: 3,
      reps: "10-12",
      rest: "0s",
      cue: "Weighted version. Hold dumbbell between feet. Move straight into Flutter Kicks.",
      steps: [
        "Use captain's chair or hang from bar. Hold light dumbbell between feet.",
        "Pull knees up toward chest using lower abs.",
        "Lower slowly.",
        "Move immediately into Flutter Kicks."
      ],
      difficulty: 1.3,
      calories: 20
    },
    {
      name: "Abs Tri-Set — High-Knee Crunches",
      target: "Full core",
      sets: 3,
      reps: "10",
      rest: "30s",
      cue: "Hold a weight plate. Final exercise of the advanced tri-set.",
      steps: [
        "Lie on back, light weight plate behind head.",
        "Pull knee to chest and crunch opposite elbow toward it.",
        "Alternate sides for each rep.",
        "Rest 30 seconds, repeat 2 more times."
      ],
      difficulty: 1.3,
      calories: 20
    }
  ]
];
