import type { MainPhase, Exercise } from "@/types";

export const MAIN_PROGRAM: MainPhase[] = [
  {
    "label": "Foundation",
    "levelRange": "Level 1-2",
    "mon": [
      {
        "name": "Dumbbell Chest Press (flat bench)",
        "target": "Chest",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "cue": "Lower dumbbells to chest level slowly, press straight up. Keep feet flat on the floor.",
        "steps": [
          "Sit on bench with a dumbbell in each hand.",
          "Lie back and press dumbbells above your chest, arms extended.",
          "Lower slowly until elbows are at 90 degrees.",
          "Press back up. Slow down beats fast up."
        ],
        "difficulty": 1.2,
        "calories": 32
      },
      {
        "name": "Incline Dumbbell Press",
        "target": "Upper chest",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "cue": "Set bench to 30 to 45 degrees. Targets upper chest and front shoulder.",
        "steps": [
          "Adjust bench to 30 to 45 degree angle.",
          "Press dumbbells from upper chest upward.",
          "Lower slowly under control.",
          "Do not flare elbows too wide."
        ],
        "difficulty": 1.2,
        "calories": 30
      },
      {
        "name": "Chest Fly (machine or dumbbell)",
        "target": "Chest",
        "sets": 2,
        "reps": "12-15",
        "rest": "45s",
        "cue": "Focus on squeezing your chest at the center. Slow movement matters more than weight here.",
        "steps": [
          "If using dumbbells, lie flat and open arms wide with soft elbow bend.",
          "Bring hands together over chest like hugging a barrel.",
          "Squeeze chest at the top for 1 second.",
          "Open slowly."
        ],
        "difficulty": 1,
        "calories": 24
      },
      {
        "name": "Seated Shoulder Press (machine or dumbbell)",
        "target": "Shoulders",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "cue": "Keep back straight against the pad. Press directly upward. Do not lean back.",
        "steps": [
          "Sit tall with back supported.",
          "Press dumbbells from shoulder height straight up.",
          "Do not lock elbows fully at the top.",
          "Lower to shoulder height and repeat."
        ],
        "difficulty": 1.2,
        "calories": 28
      },
      {
        "name": "Tricep Rope Pushdown (cable)",
        "target": "Triceps",
        "sets": 3,
        "reps": "12-15",
        "rest": "45s",
        "cue": "Keep elbows locked to your sides throughout. Only your forearms move.",
        "steps": [
          "Stand at cable machine with rope attachment at chest height.",
          "Grip rope, elbows pinned to ribs.",
          "Push rope down until arms are straight.",
          "Let rope come back up slowly."
        ],
        "difficulty": 1,
        "calories": 22
      },
      {
        "name": "Wrist Curl (Seated)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15",
        "rest": "30s",
        "cue": "After pushing movements your forearm flexors are fresh — train them directly now. Palm facing up, curl using only your wrist.",
        "steps": [
          "Sit on the bench and rest one forearm along your thigh, wrist hanging just past your knee.",
          "Hold a light dumbbell, palm facing up.",
          "Let your wrist drop fully, then curl upward as high as you can.",
          "Lower slowly all the way back down before the next rep.",
          "Complete all reps on one arm, then switch."
        ],
        "difficulty": 1,
        "calories": 10
      },
      {
        "name": "Reverse Wrist Curl (Seated)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15",
        "rest": "30s",
        "cue": "Same position, palm facing DOWN. Targets the top of your forearm — the extensor muscles most people never train.",
        "steps": [
          "Forearm on your thigh, wrist past your knee, palm facing down.",
          "Hold a light dumbbell.",
          "Lift the back of your hand upward as high as you can.",
          "Lower slowly and fully before the next rep.",
          "Complete all reps on one arm, then switch."
        ],
        "difficulty": 1,
        "calories": 8
      }
    ],
    "tue": [
      {
        "name": "Lat Pulldown (machine)",
        "target": "Back",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "cue": "Pull bar to your collarbone, lean slightly back. Do not yank with your neck.",
        "steps": [
          "Sit at lat pulldown with thighs under the pad.",
          "Grip bar wider than shoulder width.",
          "Pull bar down to collarbone while squeezing shoulder blades together.",
          "Let bar rise slowly under control."
        ],
        "difficulty": 1.2,
        "calories": 30
      },
      {
        "name": "Seated Cable Row",
        "target": "Back",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "cue": "Sit tall, pull handle to your belly button. Hold the squeeze for 1 second at the end.",
        "steps": [
          "Sit upright at cable row machine.",
          "Pull handle toward belly button, not chest.",
          "Squeeze shoulder blades together at the end.",
          "Let arms extend forward slowly."
        ],
        "difficulty": 1.2,
        "calories": 28
      },
      {
        "name": "One-Arm Dumbbell Row",
        "target": "Back",
        "sets": 3,
        "reps": "10 each",
        "rest": "60s",
        "cue": "Rest one knee on a bench. Pull weight up to your hip, not your shoulder.",
        "steps": [
          "Place one knee and same-side hand on a bench.",
          "Hold dumbbell in opposite hand, arm hanging.",
          "Pull dumbbell up toward hip.",
          "Lower slowly. Complete all reps on one side then switch."
        ],
        "difficulty": 1.2,
        "calories": 30
      },
      {
        "name": "Face Pull (cable)",
        "target": "Rear delts",
        "sets": 3,
        "reps": "12-15",
        "rest": "45s",
        "cue": "Pull rope toward your forehead with thumbs slightly back. Great for posture.",
        "steps": [
          "Set cable to forehead height with rope attachment.",
          "Pull rope toward your face, elbows high.",
          "Squeeze rear delts at the end of the movement.",
          "Control the return."
        ],
        "difficulty": 1,
        "calories": 22
      },
      {
        "name": "Dumbbell Bicep Curl",
        "target": "Biceps",
        "sets": 3,
        "reps": "12",
        "rest": "45s",
        "cue": "Alternate arms. Keep body still, no swinging. Lower the weight slowly.",
        "steps": [
          "Stand with a dumbbell in each hand.",
          "Curl one arm up, keeping elbow pinned to ribs.",
          "Squeeze bicep at the top.",
          "Lower slowly. Switch arms."
        ],
        "difficulty": 1,
        "calories": 20
      },
      {
        "name": "Wrist Curl (Seated)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15",
        "rest": "30s",
        "cue": "Sit with your forearm resting on your thigh, palm facing up. Curl the dumbbell using only your wrist. This targets the forearm flexors — the muscles behind the veins along the inside of your arm.",
        "steps": [
          "Sit on a bench and rest one forearm along your thigh, wrist hanging just past your knee.",
          "Hold a light dumbbell, palm facing up.",
          "Let your wrist drop fully, then curl your hand upward as high as you can.",
          "Lower slowly all the way back down before the next rep — the lowering builds just as much as the curl.",
          "Complete all reps on one arm, then switch."
        ],
        "difficulty": 1,
        "calories": 10
      },
      {
        "name": "Reverse Wrist Curl (Seated)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15",
        "rest": "30s",
        "cue": "Same position as Wrist Curl but palm facing DOWN. Targets the top of your forearm — the part visible when your arm rests on a table. Most people never train these muscles at all.",
        "steps": [
          "Sit with your forearm on your thigh, wrist just past your knee — this time palm facing down.",
          "Hold a light dumbbell.",
          "Lift the back of your hand upward as high as you can, squeezing at the top.",
          "Lower slowly and fully before the next rep.",
          "Complete all reps on one arm, then switch."
        ],
        "difficulty": 1,
        "calories": 8
      }
    ],
    "wed": [
      {
        "name": "Goblet Squat (hold 1 dumbbell at chest)",
        "target": "Quads",
        "sets": 3,
        "reps": "10-12",
        "rest": "90s",
        "cue": "Hold weight close to chest. Sit back deep like lowering into a chair. Knees track over toes.",
        "steps": [
          "Hold one dumbbell vertically at your chest.",
          "Feet shoulder-width, toes slightly out.",
          "Lower down slowly until thighs are parallel or below.",
          "Push through full foot to stand."
        ],
        "difficulty": 1.3,
        "calories": 36
      },
      {
        "name": "Leg Press Machine",
        "target": "Quads",
        "sets": 4,
        "reps": "10-12",
        "rest": "60s",
        "cue": "Feet shoulder-width. Do not lock knees at the top. Control the weight down.",
        "steps": [
          "Set a weight you can do 12 reps with.",
          "Feet shoulder-width on the platform.",
          "Lower platform toward chest slowly.",
          "Push away through full foot. Do not snap knees straight at top."
        ],
        "difficulty": 1.3,
        "calories": 40
      },
      {
        "name": "Romanian Deadlift (dumbbells)",
        "target": "Hamstrings",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "cue": "Push hips backward with slight bend in knees. Feel the hamstring stretch at the bottom.",
        "steps": [
          "Hold dumbbells in front of thighs.",
          "Hinge at hips, pushing them back.",
          "Lower dumbbells along your legs.",
          "Feel hamstring stretch, then drive hips forward to stand."
        ],
        "difficulty": 1.3,
        "calories": 36
      },
      {
        "name": "Seated Leg Curl (machine)",
        "target": "Hamstrings",
        "sets": 2,
        "reps": "12-15",
        "rest": "45s",
        "cue": "Squeeze hamstring at the bottom of the movement. Control the return up.",
        "steps": [
          "Sit at machine with pad on lower legs.",
          "Curl legs downward under the seat.",
          "Squeeze at the bottom.",
          "Return slowly."
        ],
        "difficulty": 1,
        "calories": 26
      },
      {
        "name": "Standing Calf Raise",
        "target": "Calves",
        "sets": 3,
        "reps": "15",
        "rest": "45s",
        "cue": "Rise fully on tiptoes. Lower slowly for a full stretch at the bottom.",
        "steps": [
          "Stand on the edge of a step or flat floor.",
          "Rise on tiptoes as high as possible.",
          "Pause at the top.",
          "Lower heel down past neutral for full stretch."
        ],
        "difficulty": 1,
        "calories": 20
      },
      {
        "name": "Wrist Curl (Seated)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15",
        "rest": "30s",
        "cue": "Legs and forearms are completely separate muscle groups — after a full leg session your forearms are fully fresh and ready. Train them now rather than leaving them idle.",
        "steps": [
          "Sit on the bench and rest one forearm along your thigh, wrist hanging just past your knee.",
          "Hold a light dumbbell, palm facing up.",
          "Let your wrist drop fully, then curl upward as high as you can.",
          "Lower slowly all the way back down before the next rep.",
          "Complete all reps on one arm, then switch."
        ],
        "difficulty": 1,
        "calories": 10
      },
      {
        "name": "Reverse Wrist Curl (Seated)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15",
        "rest": "30s",
        "cue": "Palm facing DOWN. Targets the extensor muscles across the top of your forearm — completely different muscle group from legs, so there is no reason to skip it on a leg day.",
        "steps": [
          "Forearm on your thigh, wrist past your knee, palm facing down.",
          "Hold a light dumbbell.",
          "Lift the back of your hand upward as high as you can.",
          "Lower slowly and fully before the next rep.",
          "Complete all reps on one arm, then switch."
        ],
        "difficulty": 1,
        "calories": 8
      }
    ],
    "fri": [
      {
        "name": "Incline Dumbbell Press",
        "target": "Upper chest",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "cue": "Bench at 30 degrees. Targets upper chest and front shoulder.",
        "steps": [
          "Set bench to 30 degree incline.",
          "Press dumbbells from upper chest upward.",
          "Lower slowly under control.",
          "Do not arch lower back off the bench."
        ],
        "difficulty": 1.2,
        "calories": 30
      },
      {
        "name": "Single-Arm Dumbbell Row",
        "target": "Back",
        "sets": 3,
        "reps": "10 each",
        "rest": "60s",
        "cue": "Rest one knee on bench. Pull weight up to your hip. Avoid twisting torso.",
        "steps": [
          "One knee and hand on bench for support.",
          "Hold dumbbell in the other hand.",
          "Pull toward your hip.",
          "Lower fully before the next rep."
        ],
        "difficulty": 1.2,
        "calories": 28
      },
      {
        "name": "Dumbbell Lateral Raise",
        "target": "Shoulders",
        "sets": 3,
        "reps": "12",
        "rest": "45s",
        "cue": "Raise arms out sideways to shoulder height. Use light weight. Focus on form.",
        "steps": [
          "Hold light dumbbells by your sides.",
          "Raise arms out like wings to shoulder height.",
          "Soft elbow bend throughout.",
          "Lower slowly. Heavy weight here is wrong form."
        ],
        "difficulty": 1,
        "calories": 22
      },
      {
        "name": "Push-ups (floor or on knees)",
        "target": "Chest",
        "sets": 2,
        "reps": "to failure",
        "rest": "45s",
        "cue": "Go until you cannot do another clean rep. Stop before form breaks.",
        "steps": [
          "Start in high plank or knees position.",
          "Lower chest to just above the floor.",
          "Push back up with body straight.",
          "Stop the set when hips start to sag."
        ],
        "difficulty": 1,
        "calories": 24
      },
      {
        "name": "Tricep Bench Dip",
        "target": "Triceps",
        "sets": 2,
        "reps": "10",
        "rest": "45s",
        "cue": "Hands on bench behind you. Lower until elbows reach 90 degrees.",
        "steps": [
          "Sit on bench edge, hands gripping the edge beside hips.",
          "Slide hips off bench.",
          "Lower by bending elbows to 90 degrees.",
          "Push back up."
        ],
        "difficulty": 1,
        "calories": 22
      },
      {
        "name": "Farmer's Carry or Dead Hang",
        "target": "Forearms & grip",
        "sets": 3,
        "reps": "30s",
        "rest": "30s",
        "cue": "Two options — pick whichever your gym allows. Both build grip strength and forearm thickness that makes veins pop. You will feel the forearm pump immediately.",
        "steps": [
          "Option A — Farmer's Carry: Pick up two heavy dumbbells, hold at your sides, and walk 20 to 30 steps at a steady pace. Squeeze the handles hard the entire 30 seconds. Shoulders stay back, core stays braced.",
          "Option B — Dead Hang: Jump up to a pull-up bar and simply hang with straight arms for 30 seconds. Do not swing. Just hold on.",
          "Rest 30 seconds between sets.",
          "If your grip gives out early the first week, reduce to 20 seconds and build up — grip strength improves faster than almost any other muscle."
        ],
        "difficulty": 1,
        "calories": 12
      }
    ],
    "sat": [
      {
        "name": "Goblet Squat",
        "target": "Quads",
        "sets": 3,
        "reps": "12",
        "rest": "60s",
        "cue": "Same movement as Wednesday. Try to go slightly deeper this week.",
        "steps": [
          "Hold dumbbell at chest.",
          "Squat deep and controlled.",
          "Keep chest up throughout.",
          "Push through full foot to stand."
        ],
        "difficulty": 1.3,
        "calories": 36
      },
      {
        "name": "Dumbbell Romanian Deadlift",
        "target": "Hamstrings",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "cue": "Focus on the hamstring stretch at the bottom. Hips push back.",
        "steps": [
          "Soft knees throughout the movement.",
          "Push hips backward as you lower.",
          "Feel hamstring stretch.",
          "Drive hips forward to return."
        ],
        "difficulty": 1.3,
        "calories": 34
      },
      {
        "name": "Leg Extensions (machine)",
        "target": "Quads",
        "sets": 2,
        "reps": "12-15",
        "rest": "45s",
        "cue": "Squeeze quad at the top of each rep. Control the return down.",
        "steps": [
          "Sit at machine with pad on shin.",
          "Extend legs until straight.",
          "Squeeze quad hard at the top.",
          "Lower slowly."
        ],
        "difficulty": 1,
        "calories": 26
      },
      {
        "name": "Standing Calf Raises",
        "target": "Calves",
        "sets": 3,
        "reps": "15",
        "rest": "45s",
        "cue": "Slow and controlled. Feel the full range each rep.",
        "steps": [
          "Rise fully on tiptoes.",
          "Pause at top.",
          "Lower heel slowly.",
          "Full stretch at the bottom."
        ],
        "difficulty": 1,
        "calories": 20
      },
      {
        "name": "Plank Hold",
        "target": "Core",
        "sets": 3,
        "reps": "40s",
        "rest": "45s",
        "cue": "5 seconds longer than Wednesday to track your progress over time.",
        "steps": [
          "High plank or forearm plank.",
          "Straight line from head to heels.",
          "Abs and glutes squeezed.",
          "Breathe slowly and steadily."
        ],
        "difficulty": 1,
        "calories": 16
      },
      {
        "name": "Wrist Curl (Seated)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15",
        "rest": "30s",
        "cue": "A quick forearm finisher before the cardio. Keeps blood flowing to the arms all the way to the end of the session.",
        "steps": [
          "Sit on the bench and rest one forearm along your thigh, wrist hanging just past your knee.",
          "Hold a light dumbbell, palm facing up.",
          "Let your wrist drop fully, then curl upward as high as you can.",
          "Lower slowly all the way back down before the next rep.",
          "Complete all reps on one arm, then switch."
        ],
        "difficulty": 1,
        "calories": 10
      },
      {
        "name": "Reverse Wrist Curl (Seated)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15",
        "rest": "30s",
        "cue": "Palm facing DOWN. Last strength exercise before the HIIT finisher — keep the reps clean and controlled.",
        "steps": [
          "Forearm on your thigh, wrist past your knee, palm facing down.",
          "Hold a light dumbbell.",
          "Lift the back of your hand upward as high as you can.",
          "Lower slowly and fully before the next rep.",
          "Complete all reps on one arm, then switch."
        ],
        "difficulty": 1,
        "calories": 8
      }
    ]
  },
  {
    "label": "Build Strength",
    "levelRange": "Level 3-4",
    "mon": [
      {
        "name": "Flat Dumbbell Bench Press (heavier)",
        "target": "Chest",
        "sets": 4,
        "reps": "8-10",
        "rest": "75s",
        "cue": "Same flat press as Foundation, but heavier weight and lower reps. The last 2 reps of each set should need real effort.",
        "steps": [
          "Sit on the bench with a heavier pair of dumbbells than you used at lower levels.",
          "Lie back and press the dumbbells above your chest.",
          "Lower under control until your elbows reach 90 degrees.",
          "Press back up — the last 2 reps of each set should feel genuinely hard."
        ],
        "difficulty": 1.3,
        "calories": 36
      },
      {
        "name": "Decline Push-up",
        "target": "Lower chest & triceps",
        "sets": 3,
        "reps": "12-15",
        "rest": "60s",
        "cue": "Feet elevated on a step or low bench. This shifts more of the work onto your lower chest and triceps than a flat push-up.",
        "steps": [
          "Place your feet on a step, bench, or chair behind you.",
          "Hands on the floor, slightly wider than shoulder width.",
          "Lower your chest toward the floor with control.",
          "Push back up to a straight-arm position."
        ],
        "difficulty": 1.2,
        "calories": 26
      },
      {
        "name": "Cable Chest Fly (standing)",
        "target": "Chest",
        "sets": 3,
        "reps": "12-15",
        "rest": "45s",
        "cue": "A standing cable keeps tension on your chest through the entire range, unlike a dumbbell fly which goes slack at the top.",
        "steps": [
          "Stand between two cable stacks set to chest height.",
          "Hold a handle in each hand, arms slightly bent.",
          "Bring your hands together in front of your chest in a hugging motion.",
          "Open back out slowly, feeling a stretch across your chest."
        ],
        "difficulty": 1.1,
        "calories": 24
      },
      {
        "name": "Arnold Press",
        "target": "Shoulders",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "cue": "A rotating shoulder press — palms face you at the bottom, face forward at the top. Hits more of the shoulder than a standard press.",
        "steps": [
          "Hold dumbbells at shoulder height, palms facing you.",
          "Press up while rotating your palms to face forward at the top.",
          "Reverse the rotation as you lower back down.",
          "Keep the movement smooth, not jerky."
        ],
        "difficulty": 1.2,
        "calories": 28
      },
      {
        "name": "Overhead Dumbbell Tricep Extension",
        "target": "Triceps",
        "sets": 3,
        "reps": "12",
        "rest": "45s",
        "cue": "Stretches the triceps more than a pushdown because your arms are overhead instead of at your sides.",
        "steps": [
          "Hold one dumbbell with both hands above your head, arms straight.",
          "Lower it slowly behind your head by bending only at the elbows.",
          "Keep your upper arms still — only your forearms move.",
          "Press back up to straight arms."
        ],
        "difficulty": 1.1,
        "calories": 22
      },
      {
        "name": "Wrist Curl (Seated, Heavier)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Slightly heavier than Foundation phase. Your forearm flexors should be noticeably stronger by now — use that progress.",
        "steps": [
          "Sit with your forearm resting along your thigh, palm facing up, wrist just past your knee.",
          "Use a slightly heavier dumbbell than you used at Foundation level.",
          "Curl upward fully, pause at the top, then lower slowly and completely.",
          "Switch arms after all reps."
        ],
        "difficulty": 1.1,
        "calories": 11
      },
      {
        "name": "Reverse Wrist Curl (Heavier)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Palm facing DOWN, slightly heavier dumbbell than Foundation. The extensor muscles develop more slowly than the flexors — stay patient.",
        "steps": [
          "Forearm on your thigh, palm facing down.",
          "Use a slightly heavier dumbbell than the Foundation phase.",
          "Lift the back of your hand all the way up, pause, then lower fully.",
          "Switch arms after all reps."
        ],
        "difficulty": 1.1,
        "calories": 9
      }
    ],
    "tue": [
      {
        "name": "Band-Assisted Pull-up",
        "target": "Back",
        "sets": 3,
        "reps": "6-8",
        "rest": "75s",
        "cue": "A real step toward a full pull-up. The band takes some of your bodyweight so you can practice the motion with good form.",
        "steps": [
          "Loop a resistance band over the pull-up bar and place one foot or knee in the loop.",
          "Grip the bar slightly wider than shoulder width.",
          "Pull your chest up toward the bar, leading with your elbows.",
          "Lower under control — don't just drop down."
        ],
        "difficulty": 1.3,
        "calories": 32
      },
      {
        "name": "Bent-Over Dumbbell Row (both arms)",
        "target": "Back",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "cue": "Both arms at once instead of one at a time — more core and lower-back stability needed to hold the position.",
        "steps": [
          "Hold a dumbbell in each hand, hinge forward at the hips with a flat back.",
          "Let the dumbbells hang at arm's length.",
          "Pull both elbows back, squeezing your shoulder blades together.",
          "Lower with control without rounding your back."
        ],
        "difficulty": 1.3,
        "calories": 30
      },
      {
        "name": "Chest-Supported Row",
        "target": "Back",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "cue": "Resting your chest on an incline bench removes any chance of cheating with your lower back — it's all back muscle.",
        "steps": [
          "Lie face-down on an incline bench holding a dumbbell in each hand.",
          "Let your arms hang straight down.",
          "Pull both elbows back, squeezing your shoulder blades.",
          "Lower slowly back to the start."
        ],
        "difficulty": 1.2,
        "calories": 28
      },
      {
        "name": "Reverse Cable Fly",
        "target": "Rear delts",
        "sets": 3,
        "reps": "12-15",
        "rest": "45s",
        "cue": "Same rear-delt target as Face Pull, different angle — keeps the muscle guessing instead of doing the identical motion every week.",
        "steps": [
          "Stand between two cables set above shoulder height.",
          "Cross your arms and grab the opposite handles.",
          "Pull your arms out and back in a wide arc, squeezing your shoulder blades.",
          "Return slowly to the start."
        ],
        "difficulty": 1.1,
        "calories": 22
      },
      {
        "name": "Hammer Curl",
        "target": "Biceps & forearms",
        "sets": 3,
        "reps": "12",
        "rest": "45s",
        "cue": "Palms face each other instead of up — shifts some of the work to your forearms as well as your biceps.",
        "steps": [
          "Stand holding a dumbbell in each hand, palms facing your body.",
          "Curl one arm up keeping your palm facing in the whole way.",
          "Squeeze at the top, then lower slowly.",
          "Switch arms and repeat."
        ],
        "difficulty": 1.1,
        "calories": 20
      },
      {
        "name": "Wrist Curl (Seated, Heavier)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Same movement as Foundation phase but with a slightly heavier dumbbell. By this level your forearm flexors should be noticeably stronger than when you started the wrist work.",
        "steps": [
          "Sit with your forearm resting along your thigh, palm facing up, wrist past your knee.",
          "Use a slightly heavier dumbbell than you used in the Foundation phase.",
          "Curl upward fully, pause at the top, then lower slowly and completely.",
          "Switch arms after all reps."
        ],
        "difficulty": 1.1,
        "calories": 11
      },
      {
        "name": "Reverse Wrist Curl (Heavier)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Heavier than Foundation phase. The extensor muscles on the top of your forearm develop more slowly than the flexors — stay patient, they show clearly in the veins along the top of your forearm once they build up.",
        "steps": [
          "Sit with your forearm on your thigh, palm facing down.",
          "Use a slightly heavier dumbbell than the Foundation phase.",
          "Lift the back of your hand all the way up, pause, then lower fully before the next rep.",
          "Switch arms after all reps."
        ],
        "difficulty": 1.1,
        "calories": 9
      }
    ],
    "wed": [
      {
        "name": "Bulgarian Split Squat",
        "target": "Quads & glutes",
        "sets": 3,
        "reps": "10 each leg",
        "rest": "75s",
        "cue": "One leg does almost all the work here — much harder than a regular squat at the same weight, and great for fixing side-to-side imbalances.",
        "steps": [
          "Stand a long step in front of a bench, rest the top of one foot on it behind you.",
          "Lower straight down on your front leg until the back knee nearly touches the floor.",
          "Push through your front foot to stand back up.",
          "Complete all reps, then switch legs."
        ],
        "difficulty": 1.4,
        "calories": 38
      },
      {
        "name": "Walking Lunge (weighted)",
        "target": "Quads & glutes",
        "sets": 3,
        "reps": "10 each leg",
        "rest": "75s",
        "cue": "Now holding dumbbells — the same lunge pattern a beginner does with bodyweight, but loaded.",
        "steps": [
          "Hold a dumbbell in each hand at your sides.",
          "Step forward into a lunge, back knee dropping toward the floor.",
          "Push through your front foot to step into the next lunge.",
          "Keep alternating legs as you walk forward."
        ],
        "difficulty": 1.3,
        "calories": 34
      },
      {
        "name": "Stiff-Leg Deadlift",
        "target": "Hamstrings",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "cue": "Knees stay almost straight here, unlike a Romanian deadlift's soft bend — puts more stretch directly on the hamstrings.",
        "steps": [
          "Hold dumbbells in front of your thighs, knees only very slightly bent.",
          "Hinge at your hips, lowering the dumbbells along your legs.",
          "Stop when you feel a deep hamstring stretch.",
          "Drive your hips forward to stand back up."
        ],
        "difficulty": 1.3,
        "calories": 34
      },
      {
        "name": "Lying Leg Curl (machine)",
        "target": "Hamstrings",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "cue": "Lying instead of seated changes the angle on your hamstrings — a useful variation, not a harder or easier version.",
        "steps": [
          "Lie face down on the machine with the pad against the back of your ankles.",
          "Curl your heels up toward your glutes.",
          "Squeeze at the top for 1 second.",
          "Lower slowly back to the start."
        ],
        "difficulty": 1.1,
        "calories": 26
      },
      {
        "name": "Seated Calf Raise",
        "target": "Calves",
        "sets": 3,
        "reps": "15",
        "rest": "45s",
        "cue": "A seated calf raise targets a slightly different part of the calf than standing — keep both versions in rotation.",
        "steps": [
          "Sit at the machine with the pads on your thighs and the balls of your feet on the platform.",
          "Rise up onto your toes as high as you can.",
          "Pause at the top.",
          "Lower your heels down for a full stretch."
        ],
        "difficulty": 1,
        "calories": 18
      },
      {
        "name": "Wrist Curl (Seated, Heavier)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Your legs are done — forearms are completely fresh. Heavier dumbbell than Foundation phase, same clean movement.",
        "steps": [
          "Sit with your forearm resting along your thigh, palm facing up, wrist just past your knee.",
          "Use a slightly heavier dumbbell than Foundation phase.",
          "Curl upward fully, pause, then lower slowly and completely.",
          "Switch arms after all reps."
        ],
        "difficulty": 1.1,
        "calories": 11
      },
      {
        "name": "Reverse Wrist Curl (Heavier)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Palm facing DOWN. Same progression as the Tuesday version — slightly heavier than Foundation, focus on the top of the forearm.",
        "steps": [
          "Forearm on your thigh, palm facing down.",
          "Use a slightly heavier dumbbell than Foundation phase.",
          "Lift the back of your hand all the way up, pause, then lower fully.",
          "Switch arms after all reps."
        ],
        "difficulty": 1.1,
        "calories": 9
      }
    ],
    "fri": [
      {
        "name": "Flat Dumbbell Press",
        "target": "Chest",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "cue": "A flat bench angle instead of incline — works the middle of your chest instead of the upper portion.",
        "steps": [
          "Lie flat on a bench holding a dumbbell in each hand.",
          "Press them straight up above your chest.",
          "Lower under control until your elbows hit about 90 degrees.",
          "Press back up."
        ],
        "difficulty": 1.2,
        "calories": 30
      },
      {
        "name": "Chest-Supported Dumbbell Row",
        "target": "Back",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "cue": "Same idea as Tuesday's version — lying face-down removes any lower-back cheating from the row.",
        "steps": [
          "Lie face-down on an incline bench with a dumbbell in each hand.",
          "Let your arms hang straight down.",
          "Pull both elbows back, squeezing your shoulder blades together.",
          "Lower slowly."
        ],
        "difficulty": 1.2,
        "calories": 28
      },
      {
        "name": "Cable Lateral Raise",
        "target": "Shoulders",
        "sets": 3,
        "reps": "12-15",
        "rest": "45s",
        "cue": "A cable keeps tension on your shoulder the whole way up and down, unlike a dumbbell which goes slack at the bottom.",
        "steps": [
          "Stand sideways to a low cable pulley, handle in the hand farthest from the machine.",
          "Raise your arm out to the side until it reaches shoulder height.",
          "Pause briefly at the top.",
          "Lower slowly and repeat."
        ],
        "difficulty": 1.1,
        "calories": 22
      },
      {
        "name": "Decline Push-up",
        "target": "Lower chest & shoulders",
        "sets": 3,
        "reps": "12-15",
        "rest": "45s",
        "cue": "Feet elevated this time instead of flat on the floor — a small change that shifts the emphasis and keeps push-ups from getting stale.",
        "steps": [
          "Place your feet on a step or low chair behind you.",
          "Hands on the floor a bit wider than shoulder width.",
          "Lower your chest toward the floor.",
          "Push back up to straight arms."
        ],
        "difficulty": 1.2,
        "calories": 26
      },
      {
        "name": "Overhead Tricep Extension",
        "target": "Triceps",
        "sets": 3,
        "reps": "12",
        "rest": "45s",
        "cue": "Same triceps stretch-focused move from Monday's Build phase — repeated here since Friday already mixes push and pull.",
        "steps": [
          "Hold one dumbbell with both hands overhead, arms straight.",
          "Lower it behind your head by bending only your elbows.",
          "Keep your upper arms still.",
          "Press back up to straight arms."
        ],
        "difficulty": 1.1,
        "calories": 22
      },
      {
        "name": "Farmer's Carry (Heavier)",
        "target": "Forearms, grip & traps",
        "sets": 3,
        "reps": "40s",
        "rest": "30s",
        "cue": "Heavier than the Foundation version and 10 extra seconds per carry. Your grip should have improved noticeably by this phase — use weight that genuinely challenges you to hold on past the 30-second mark.",
        "steps": [
          "Pick up two dumbbells that feel genuinely heavy — grip should start to struggle around 30 to 35 seconds in.",
          "Walk with shoulders back, core braced, back straight.",
          "Keep your grip tight the entire 40 seconds — do not var the dumbbells slip into your fingers.",
          "Put them down under control at the end. Rest the full 30 seconds before the next set."
        ],
        "difficulty": 1.1,
        "calories": 14
      }
    ],
    "sat": [
      {
        "name": "Bulgarian Split Squat",
        "target": "Quads & glutes",
        "sets": 3,
        "reps": "10 each leg",
        "rest": "60s",
        "cue": "Same single-leg challenge as Wednesday's Build phase — Saturday keeps the pace a little quicker since a HIIT finisher follows.",
        "steps": [
          "Rest the top of one foot on a bench behind you, standing a long step in front of it.",
          "Lower straight down until your back knee nearly touches the floor.",
          "Push through your front foot to stand.",
          "Switch legs after completing all reps."
        ],
        "difficulty": 1.4,
        "calories": 38
      },
      {
        "name": "Single-Leg Romanian Deadlift",
        "target": "Hamstrings & balance",
        "sets": 3,
        "reps": "8 each leg",
        "rest": "60s",
        "cue": "Balancing on one leg adds a real stability challenge on top of the hamstring stretch.",
        "steps": [
          "Stand on one leg holding a dumbbell in the opposite hand.",
          "Hinge forward at the hips, letting your free leg extend back for balance.",
          "Lower the dumbbell toward the floor, feeling the hamstring stretch.",
          "Drive your hips forward to stand back up, then switch legs."
        ],
        "difficulty": 1.4,
        "calories": 34
      },
      {
        "name": "Walking Lunge",
        "target": "Quads & glutes",
        "sets": 3,
        "reps": "10 each leg",
        "rest": "60s",
        "cue": "Same pattern as Wednesday's Build-phase lunge — moving instead of standing in place makes your legs and balance work harder.",
        "steps": [
          "Step forward into a lunge, back knee dropping toward the floor.",
          "Push through your front foot to step forward into the next lunge.",
          "Keep your torso upright throughout.",
          "Continue alternating legs."
        ],
        "difficulty": 1.3,
        "calories": 32
      },
      {
        "name": "Seated Calf Raise",
        "target": "Calves",
        "sets": 3,
        "reps": "15",
        "rest": "45s",
        "cue": "Same seated variation as Wednesday — calves respond well to being hit from a couple of different angles each week.",
        "steps": [
          "Sit with the pads on your thighs and your toes on the platform.",
          "Rise onto your toes as high as you can.",
          "Pause at the top.",
          "Lower for a full stretch."
        ],
        "difficulty": 1,
        "calories": 18
      },
      {
        "name": "Side Plank",
        "target": "Obliques & core",
        "sets": 3,
        "reps": "30s each side",
        "rest": "45s",
        "cue": "A side-on hold instead of a front plank — targets the obliques along the sides of your core.",
        "steps": [
          "Lie on your side, prop yourself up on one forearm, elbow under your shoulder.",
          "Lift your hips so your body forms a straight line.",
          "Hold, keeping your hips from sagging toward the floor.",
          "Switch sides after the hold."
        ],
        "difficulty": 1.1,
        "calories": 14
      },
      {
        "name": "Wrist Curl (Seated, Heavier)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Saturday finisher before HIIT — heavier than Foundation, same movement. Forearms are fresh after a leg session so give it full effort.",
        "steps": [
          "Sit with your forearm along your thigh, palm facing up, wrist past your knee.",
          "Use a slightly heavier dumbbell than Foundation phase.",
          "Curl fully upward, pause, then lower slowly.",
          "Switch arms after all reps."
        ],
        "difficulty": 1.1,
        "calories": 11
      },
      {
        "name": "Reverse Wrist Curl (Heavier)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Palm facing DOWN. Keep reps clean — this is the last strength exercise before the HIIT finisher.",
        "steps": [
          "Forearm on your thigh, palm facing down.",
          "Use a slightly heavier dumbbell than Foundation phase.",
          "Lift the back of your hand all the way up, pause, then lower fully.",
          "Switch arms after all reps."
        ],
        "difficulty": 1.1,
        "calories": 9
      }
    ]
  },
  {
    "label": "Advanced",
    "levelRange": "Level 5-6",
    "mon": [
      {
        "name": "Weighted Dip or Close-Grip Push-up",
        "target": "Chest & triceps",
        "sets": 4,
        "reps": "8-10",
        "rest": "75s",
        "cue": "The most advanced push move in this program. Use a dip station with added weight if available, or close-grip push-ups as the bodyweight version.",
        "steps": [
          "If using a dip station: add light weight via a belt or hold a dumbbell between your feet.",
          "Lower your body until your elbows reach about 90 degrees.",
          "Press back up to straight arms.",
          "Bodyweight version: hands close together under your chest for push-ups, same depth and control."
        ],
        "difficulty": 1.4,
        "calories": 40
      },
      {
        "name": "Single-Arm Dumbbell Press",
        "target": "Chest & core",
        "sets": 3,
        "reps": "8 each side",
        "rest": "60s",
        "cue": "Pressing one side at a time forces your core to fight rotation — a genuinely harder version of a regular press.",
        "steps": [
          "Lie on a bench holding one dumbbell at shoulder height.",
          "Press it straight up while keeping your hips and shoulders square — don't var your body twist.",
          "Lower under control.",
          "Complete all reps before switching sides."
        ],
        "difficulty": 1.3,
        "calories": 32
      },
      {
        "name": "Single-Arm Cable Fly",
        "target": "Chest",
        "sets": 3,
        "reps": "10 each side",
        "rest": "45s",
        "cue": "One arm at a time, which exposes any strength imbalance between your left and right side.",
        "steps": [
          "Stand side-on to a cable machine set at chest height.",
          "Hold the handle in the hand farther from the machine.",
          "Bring your arm across your body in a hugging motion, squeezing your chest.",
          "Return slowly, then switch sides after all reps."
        ],
        "difficulty": 1.2,
        "calories": 24
      },
      {
        "name": "Push Press",
        "target": "Shoulders",
        "sets": 3,
        "reps": "8",
        "rest": "75s",
        "cue": "Uses a small leg dip and drive to help push more weight overhead than a strict press — teaches your whole body to work together.",
        "steps": [
          "Hold dumbbells at shoulder height, feet hip-width apart.",
          "Dip your knees slightly, then drive up explosively, pressing the dumbbells overhead as your legs straighten.",
          "Lower the dumbbells back to shoulder height with control.",
          "Reset your stance between reps if needed."
        ],
        "difficulty": 1.4,
        "calories": 34
      },
      {
        "name": "Skull Crusher",
        "target": "Triceps",
        "sets": 3,
        "reps": "10-12",
        "rest": "45s",
        "cue": "Lying down with the weight moving toward your forehead — a more advanced triceps stretch than the standing pushdown.",
        "steps": [
          "Lie on a bench holding dumbbells above your chest, arms straight.",
          "Bend only at the elbows, lowering the weights toward your forehead.",
          "Keep your upper arms still and vertical throughout.",
          "Press back up to straight arms."
        ],
        "difficulty": 1.2,
        "calories": 26
      },
      {
        "name": "Wrist Curl Drop Set",
        "target": "Forearms",
        "sets": 3,
        "reps": "15 + 10",
        "rest": "20s",
        "cue": "15 reps at your normal weight, 10 seconds rest only, then 10 more at a lighter weight. The most intense forearm exercise in this program — forearms should be burning by the second set.",
        "steps": [
          "Start with your regular wrist curl weight for 15 full reps.",
          "Rest only 10 seconds — just enough to grab a lighter dumbbell.",
          "Immediately do 10 more wrist curls at the lighter weight.",
          "Take the full 20 seconds rest after the combined set before repeating."
        ],
        "difficulty": 1.2,
        "calories": 13
      },
      {
        "name": "Reverse Wrist Curl (Advanced)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Heaviest reverse curl in the program. Palm down, maximum controllable weight — the veins along the top of your forearm will be clearly visible during this set.",
        "steps": [
          "Forearm resting on your thigh, palm facing down.",
          "Use the heaviest dumbbell you can curl cleanly for 15 to 20 reps.",
          "Lift the back of your hand all the way up, pause, then lower under full control.",
          "Switch arms after all reps."
        ],
        "difficulty": 1.2,
        "calories": 10
      }
    ],
    "tue": [
      {
        "name": "Full Pull-up",
        "target": "Back",
        "sets": 3,
        "reps": "5-8",
        "rest": "90s",
        "cue": "The real version, no band assistance. If you can't yet complete clean reps, drop back to the Band-Assisted Pull-up for a few more weeks first.",
        "steps": [
          "Grip the bar slightly wider than shoulder width, hands facing away from you.",
          "Pull your chest up toward the bar without kicking your legs.",
          "Lower yourself under control, all the way to a full arm extension.",
          "Reset and repeat."
        ],
        "difficulty": 1.4,
        "calories": 38
      },
      {
        "name": "Single-Arm Row (Pendlay-style)",
        "target": "Back",
        "sets": 3,
        "reps": "8 each side",
        "rest": "60s",
        "cue": "Each rep starts from a dead stop on the floor instead of staying tense the whole set — builds explosive pulling strength.",
        "steps": [
          "Hinge forward with a flat back, dumbbell on the floor below your shoulder.",
          "Pull it up to your hip in one strong motion.",
          "Lower it all the way back to the floor and var it fully rest before the next rep.",
          "Switch sides after completing all reps."
        ],
        "difficulty": 1.3,
        "calories": 30
      },
      {
        "name": "Single-Arm Lat Pulldown",
        "target": "Back",
        "sets": 3,
        "reps": "10 each side",
        "rest": "60s",
        "cue": "Removes the ability to favor your stronger side — each side has to do its own full share of the work.",
        "steps": [
          "Attach a single handle to the lat pulldown cable.",
          "Sit and grip the handle with one hand, arm extended overhead.",
          "Pull your elbow down toward your hip, squeezing your back.",
          "Control the return, then switch sides."
        ],
        "difficulty": 1.2,
        "calories": 28
      },
      {
        "name": "Face Pull with External Rotation",
        "target": "Rear delts & rotator cuff",
        "sets": 3,
        "reps": "12-15",
        "rest": "45s",
        "cue": "Adds a small rotation at the end of the pull, which targets the rotator cuff muscles that a plain Face Pull mostly skips.",
        "steps": [
          "Set the cable to face height with a rope attachment.",
          "Pull the rope toward your face, elbows high.",
          "At the end of the pull, rotate your hands so your knuckles point toward the ceiling.",
          "Reverse slowly back to the start."
        ],
        "difficulty": 1.2,
        "calories": 24
      },
      {
        "name": "Incline Dumbbell Curl",
        "target": "Biceps",
        "sets": 3,
        "reps": "10-12",
        "rest": "45s",
        "cue": "Lying back on an incline bench stretches the biceps more at the bottom of the curl than standing does.",
        "steps": [
          "Lie back on an incline bench, a dumbbell in each hand, arms hanging straight down.",
          "Curl both arms up without swinging your shoulders forward.",
          "Squeeze at the top.",
          "Lower slowly, feeling the stretch at the bottom."
        ],
        "difficulty": 1.2,
        "calories": 22
      },
      {
        "name": "Wrist Curl Drop Set",
        "target": "Forearms",
        "sets": 3,
        "reps": "15 + 10",
        "rest": "20s",
        "cue": "A drop set: 15 reps at your usual weight, only 10 seconds break, then immediately 10 more reps at a lighter weight without stopping. The second set burns — that is exactly the point. The most intense forearm exercise in this program.",
        "steps": [
          "Start with your regular wrist curl weight for 15 full reps.",
          "Rest only 10 seconds — just enough to grab a lighter dumbbell.",
          "Immediately do 10 more wrist curls at the lighter weight without fully resetting.",
          "Take the full 20 seconds rest after this combined set before repeating."
        ],
        "difficulty": 1.2,
        "calories": 13
      },
      {
        "name": "Reverse Wrist Curl (Advanced)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Same movement as before at the heaviest weight you have used for this exercise. Forearm extensors are a small muscle group — even at advanced level the weight stays modest, but the visible muscle definition along the top of your forearm will be real.",
        "steps": [
          "Forearm resting on your thigh, palm facing down.",
          "Use the heaviest dumbbell you can curl cleanly for 15 to 20 reps.",
          "Lift the back of your hand all the way up, pause briefly at the top, then lower under full control.",
          "Switch arms after completing all reps."
        ],
        "difficulty": 1.2,
        "calories": 10
      }
    ],
    "wed": [
      {
        "name": "Front-Loaded Squat",
        "target": "Quads",
        "sets": 4,
        "reps": "8-10",
        "rest": "90s",
        "cue": "Holding the weight at your chest/shoulders instead of low forces a more upright torso and demands more from your quads directly.",
        "steps": [
          "Hold two dumbbells at shoulder height, elbows pointing forward.",
          "Squat down keeping your chest tall and elbows up.",
          "Go as deep as your mobility allows, knees tracking over your toes.",
          "Drive through your full foot to stand."
        ],
        "difficulty": 1.4,
        "calories": 42
      },
      {
        "name": "Single-Leg Romanian Deadlift",
        "target": "Hamstrings & balance",
        "sets": 3,
        "reps": "8 each leg",
        "rest": "75s",
        "cue": "Same balance-and-stretch challenge from Saturday's Build phase — by this level you should be moving it with control, not wobbling through it.",
        "steps": [
          "Stand on one leg holding a dumbbell in the opposite hand.",
          "Hinge forward, letting your free leg extend back.",
          "Lower the dumbbell toward the floor, then drive your hips forward to return.",
          "Switch legs after all reps."
        ],
        "difficulty": 1.4,
        "calories": 36
      },
      {
        "name": "Walking Lunge with Overhead Reach",
        "target": "Quads, glutes & shoulders",
        "sets": 3,
        "reps": "10 each leg",
        "rest": "75s",
        "cue": "Adding an overhead reach to the lunge challenges your balance and core stability on top of your legs.",
        "steps": [
          "Hold a light dumbbell in each hand.",
          "Step forward into a lunge while raising both dumbbells overhead.",
          "Lower the dumbbells as you push through your front foot to step forward.",
          "Continue alternating legs."
        ],
        "difficulty": 1.3,
        "calories": 34
      },
      {
        "name": "Nordic Curl Progression (assisted)",
        "target": "Hamstrings",
        "sets": 3,
        "reps": "6-8",
        "rest": "75s",
        "cue": "The hardest hamstring exercise in this program. Use your hands on the floor in front of you for as much assistance as you need — even a couple inches of controlled lowering builds real strength.",
        "steps": [
          "Kneel on a cushion with your ankles anchored under something sturdy or held by a partner.",
          "Lower your torso forward as slowly as you can, using your hands to catch yourself when needed.",
          "Push back up using your hands for assistance, then your hamstrings as they get stronger.",
          "Stop the set once you can no longer control the lowering."
        ],
        "difficulty": 1.5,
        "calories": 30
      },
      {
        "name": "Calf Raise Drop Set",
        "target": "Calves",
        "sets": 3,
        "reps": "15 then 15 more",
        "rest": "45s",
        "cue": "Do a normal set, rest only 10 seconds instead of the usual 45, then immediately do another set without changing weight — a real finisher for stubborn calves.",
        "steps": [
          "Perform a normal set of 15 standing calf raises.",
          "Rest only 10 seconds.",
          "Immediately perform another 15 reps at the same weight.",
          "Take the full 45 second rest after this combined set, then repeat for all 3 sets."
        ],
        "difficulty": 1.3,
        "calories": 24
      },
      {
        "name": "Wrist Curl Drop Set",
        "target": "Forearms",
        "sets": 3,
        "reps": "15 + 10",
        "rest": "20s",
        "cue": "Forearms are fresh after a leg session — do the full drop set. 15 reps at normal weight, 10 seconds rest, then 10 more at a lighter weight.",
        "steps": [
          "Start with your regular wrist curl weight for 15 full reps.",
          "Rest only 10 seconds, then grab a lighter dumbbell.",
          "Immediately do 10 more wrist curls at the lighter weight.",
          "Take the full 20 seconds rest after the combined set before the next round."
        ],
        "difficulty": 1.2,
        "calories": 13
      },
      {
        "name": "Reverse Wrist Curl (Advanced)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Palm facing DOWN — heaviest weight you can manage cleanly. This is immediately before the HIIT, so make the reps count.",
        "steps": [
          "Forearm on your thigh, palm facing down.",
          "Use the heaviest dumbbell you can control for 15 to 20 reps.",
          "Lift the back of your hand fully upward, pause, then lower with control.",
          "Switch arms after all reps."
        ],
        "difficulty": 1.2,
        "calories": 10
      }
    ],
    "fri": [
      {
        "name": "Archer Push-up",
        "target": "Chest & triceps",
        "sets": 3,
        "reps": "6 each side",
        "rest": "75s",
        "cue": "Shifting your weight toward one arm while the other stays nearly straight — a bodyweight way to load one side harder, similar to a single-arm press.",
        "steps": [
          "Start in a wide push-up position, hands further apart than shoulder width.",
          "Lower toward one hand, bending that elbow while the other arm stays mostly straight.",
          "Push back up to the start.",
          "Alternate sides each rep."
        ],
        "difficulty": 1.4,
        "calories": 34
      },
      {
        "name": "Renegade Row",
        "target": "Back & core",
        "sets": 3,
        "reps": "8 each side",
        "rest": "60s",
        "cue": "Rowing a dumbbell while holding a plank position — your core has to fight rotation the entire time, not just your back.",
        "steps": [
          "Get into a push-up position with a dumbbell in each hand.",
          "Row one dumbbell up to your hip without rotating your hips.",
          "Lower it back down and place your hand flat.",
          "Switch sides, alternating for all reps."
        ],
        "difficulty": 1.4,
        "calories": 32
      },
      {
        "name": "Lean-Away Cable Lateral Raise",
        "target": "Shoulders",
        "sets": 3,
        "reps": "10-12 each side",
        "rest": "45s",
        "cue": "Leaning away from the cable increases the range of motion and tension on your shoulder compared to standing straight.",
        "steps": [
          "Stand beside a low cable pulley and hold the handle in the far hand.",
          "Lean your upper body away from the machine, holding onto something stable if needed.",
          "Raise your arm out to the side to shoulder height.",
          "Lower slowly, then switch sides after all reps."
        ],
        "difficulty": 1.2,
        "calories": 24
      },
      {
        "name": "Diamond Push-up",
        "target": "Triceps & chest",
        "sets": 3,
        "reps": "10-12",
        "rest": "45s",
        "cue": "Hands close together in a diamond shape under your chest shifts most of the work onto your triceps.",
        "steps": [
          "Get into a push-up position with your thumbs and index fingers touching, forming a diamond.",
          "Lower your chest toward your hands.",
          "Push back up to straight arms.",
          "Keep your elbows close to your body throughout."
        ],
        "difficulty": 1.3,
        "calories": 28
      },
      {
        "name": "Weighted Dip",
        "target": "Triceps & chest",
        "sets": 3,
        "reps": "8-10",
        "rest": "60s",
        "cue": "Same advanced dip from Monday's Advanced phase — Friday repeats it since this is your second push-focused day of the week.",
        "steps": [
          "Add light weight via a dip belt, or hold a dumbbell between your feet.",
          "Lower your body until your elbows reach about 90 degrees.",
          "Press back up to straight arms.",
          "If a dip station isn't available, use close-grip push-ups instead."
        ],
        "difficulty": 1.3,
        "calories": 30
      },
      {
        "name": "Heavy Farmer's Carry",
        "target": "Forearms, grip, traps & core",
        "sets": 3,
        "reps": "45s",
        "rest": "45s",
        "cue": "The heaviest carry in the entire program. If you can hold on for 45 seconds per set without the dumbbells slipping, your grip and forearm strength are genuinely advanced. Visible veins across your forearm during this exercise mean the training is working.",
        "steps": [
          "Pick up the heaviest pair of dumbbells you can hold — grip should start to genuinely fail around the 40-second mark if the weight is right.",
          "Walk with perfect posture: shoulders packed back, core tight, spine straight.",
          "If the gym space is too small to walk, do a stationary hold instead.",
          "Lower the dumbbells under full control at the end — never drop them. Rest the full 45 seconds before the next set."
        ],
        "difficulty": 1.3,
        "calories": 18
      }
    ],
    "sat": [
      {
        "name": "Jump Squat",
        "target": "Quads & power",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "cue": "Explosive — you leave the ground at the top of each rep. This is genuinely higher impact, so land soft and skip it if your knees complain.",
        "steps": [
          "Stand with feet shoulder-width apart.",
          "Squat down to about the same depth as a regular squat.",
          "Explode upward, leaving the ground briefly.",
          "Land softly with bent knees and go straight into the next rep."
        ],
        "difficulty": 1.4,
        "calories": 40
      },
      {
        "name": "Single-Leg Deadlift to Balance",
        "target": "Hamstrings & balance",
        "sets": 3,
        "reps": "8 each leg",
        "rest": "60s",
        "cue": "Similar hinge pattern to the Single-Leg RDL, but focused on holding a stable balanced position at the bottom rather than just touching and returning.",
        "steps": [
          "Stand on one leg, dumbbell in the opposite hand.",
          "Hinge forward, reaching the dumbbell toward the floor while your free leg lifts behind you.",
          "Pause for 1 to 2 seconds at the bottom, balanced.",
          "Return to standing, then switch legs."
        ],
        "difficulty": 1.4,
        "calories": 34
      },
      {
        "name": "Lateral Lunge",
        "target": "Quads, glutes & inner thigh",
        "sets": 3,
        "reps": "10 each side",
        "rest": "60s",
        "cue": "Stepping sideways instead of forward or backward works your legs from a completely different angle than every other lunge in this program.",
        "steps": [
          "Stand tall, feet together.",
          "Step one foot wide to the side, bending that knee and pushing your hips back.",
          "Keep your other leg straight.",
          "Push off the bent leg to return to standing, then switch sides."
        ],
        "difficulty": 1.3,
        "calories": 32
      },
      {
        "name": "Calf Raise + Hop",
        "target": "Calves & power",
        "sets": 3,
        "reps": "12",
        "rest": "45s",
        "cue": "Adds a small hop at the top of the raise — more explosive than a standard calf raise, similar to the jump in Jump Squats.",
        "steps": [
          "Stand on the edge of a step.",
          "Rise onto your toes, then push off into a small hop.",
          "Land softly back on the edge of the step.",
          "Lower your heels for a brief stretch before the next rep."
        ],
        "difficulty": 1.2,
        "calories": 22
      },
      {
        "name": "Plank with Shoulder Taps",
        "target": "Core & shoulders",
        "sets": 3,
        "reps": "16 taps",
        "rest": "45s",
        "cue": "A regular plank with a twist — lifting one hand to tap the opposite shoulder forces your core to resist rotation.",
        "steps": [
          "Start in a high plank, hands under your shoulders.",
          "Lift one hand and tap the opposite shoulder, keeping your hips still.",
          "Place it back down and repeat with the other hand.",
          "Keep alternating, fighting the urge to rock side to side."
        ],
        "difficulty": 1.3,
        "calories": 20
      },
      {
        "name": "Wrist Curl Drop Set",
        "target": "Forearms",
        "sets": 3,
        "reps": "15 + 10",
        "rest": "20s",
        "cue": "The hardest forearm finisher in the program, on the highest-intensity day of the week. 15 reps at normal weight, 10 seconds rest, 10 more at lighter weight — do not skip this on a heavy Saturday.",
        "steps": [
          "Start with your regular wrist curl weight for 15 full reps.",
          "Rest only 10 seconds, then grab a lighter dumbbell.",
          "Immediately do 10 more wrist curls at the lighter weight.",
          "Take the full 20 seconds rest after the combined set before the next round."
        ],
        "difficulty": 1.2,
        "calories": 13
      },
      {
        "name": "Reverse Wrist Curl (Advanced)",
        "target": "Forearms",
        "sets": 3,
        "reps": "15-20",
        "rest": "30s",
        "cue": "Final strength exercise of the week before HIIT — palm DOWN, heaviest clean weight. Finish strong.",
        "steps": [
          "Forearm on your thigh, palm facing down.",
          "Use the heaviest dumbbell you can control for 15 to 20 reps.",
          "Lift the back of your hand fully upward, pause, then lower with control.",
          "Switch arms after all reps."
        ],
        "difficulty": 1.2,
        "calories": 10
      }
    ]
  }
];

export const MAIN_PROGRAM_ABS: Exercise[][] = [
  [
    {
      "name": "Plank Hold",
      "target": "Core",
      "sets": 3,
      "reps": "30-45s",
      "rest": "45s",
      "cue": "Squeeze glutes and abs. Keep a straight line from head to heels. Breathe.",
      "steps": [
        "Start in push-up position on forearms.",
        "Body straight from head to heels.",
        "Squeeze abs and glutes.",
        "Breathe normally. Stop if your back sags."
      ],
      "difficulty": 1,
      "calories": 14
    },
    {
      "name": "Crunches or Hanging Knee Raises",
      "target": "Core",
      "sets": 2,
      "reps": "12-15",
      "rest": "45s",
      "cue": "Pull knees toward chest using core muscles only. Not momentum.",
      "steps": [
        "For crunches: lie on back, curl upper body toward knees.",
        "For knee raises: hang from a bar and pull knees to chest.",
        "Control the descent.",
        "Never use momentum."
      ],
      "difficulty": 1,
      "calories": 18
    }
  ],
  [
    {
      "name": "Side Plank",
      "target": "Obliques",
      "sets": 3,
      "reps": "30s each side",
      "rest": "45s",
      "cue": "Targets the sides of your core, which a front plank barely touches.",
      "steps": [
        "Lie on your side, prop up on one forearm, elbow under shoulder.",
        "Lift your hips so your body forms a straight line.",
        "Hold steady without letting your hips sag.",
        "Switch sides after the hold."
      ],
      "difficulty": 1.1,
      "calories": 14
    },
    {
      "name": "Bicycle Crunch",
      "target": "Core & obliques",
      "sets": 3,
      "reps": "20 each side",
      "rest": "45s",
      "cue": "Adds rotation on top of a normal crunch, hitting your obliques as well as your central abs.",
      "steps": [
        "Lie on your back, hands lightly behind your head, knees bent.",
        "Bring one knee toward your chest while rotating to touch it with the opposite elbow.",
        "Switch sides in a smooth pedaling motion.",
        "Keep your lower back pressed into the floor throughout."
      ],
      "difficulty": 1.2,
      "calories": 18
    }
  ],
  [
    {
      "name": "Weighted Plank",
      "target": "Core",
      "sets": 3,
      "reps": "45-60s hold",
      "rest": "45s",
      "cue": "Same plank position, but with a light plate or backpack on your back — by this level, time alone isn't enough of a challenge.",
      "steps": [
        "Get into a forearm plank position.",
        "Have a light weight plate or a backpack placed gently on your upper back.",
        "Hold the position, keeping your hips level and not sagging.",
        "Remove the weight carefully at the end of the hold."
      ],
      "difficulty": 1.3,
      "calories": 20
    },
    {
      "name": "Weighted Russian Twist",
      "target": "Obliques",
      "sets": 3,
      "reps": "16 each side",
      "rest": "45s",
      "cue": "Holding a weight while rotating adds real resistance compared to a bodyweight twist.",
      "steps": [
        "Sit on the floor, knees bent, leaning back slightly, holding a light dumbbell or plate with both hands.",
        "Lift your feet slightly off the floor for more challenge, or keep them down if that's too hard.",
        "Rotate the weight to touch the floor beside one hip.",
        "Rotate to the other side, alternating for all reps."
      ],
      "difficulty": 1.3,
      "calories": 20
    }
  ]
];
