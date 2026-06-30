import type { Meal, DietDay } from "@/types";

export const GYM_DAY_MEALS: Meal[] = [
  {
    "time": "7:30 AM",
    "title": "Hydration: chia lemon water",
    "items": [
      "500 ml water",
      "1 tsp chia seeds",
      "Juice of half a lemon"
    ],
    "steps": [
      "Pour the water into a glass.",
      "Stir in the chia seeds right away for about 10 seconds so they don't clump together at the bottom.",
      "Squeeze in the lemon juice and stir again.",
      "Drink slowly on an empty stomach, first thing after waking up."
    ],
    "info": {
      "prep": "3 min",
      "cook": "0 min",
      "serves": "1",
      "kcal": 60,
      "tip": "This is mostly water — it just helps with fullness and digestion before breakfast. Nothing complicated here."
    }
  },
  {
    "time": "8:00 AM",
    "title": "Breakfast: masala oats with boiled eggs",
    "items": [
      "50 g rolled oats (dry)",
      "½ cup (120 ml) low-fat or skim milk",
      "Pinch of cinnamon or basic masala spice",
      "2 whole eggs, boiled",
      "1 cup green tea or black tea, no sugar"
    ],
    "steps": [
      "Boil the 2 eggs for 9 minutes from a full boil, then cool in cold water for 2 minutes before peeling.",
      "In a small pot, heat the milk and stir in the oats and a pinch of cinnamon or masala spice.",
      "Simmer on low for 4 to 5 minutes, stirring now and then, until thick and soft.",
      "Plate the oats with the boiled eggs on the side and brew the tea separately."
    ],
    "info": {
      "prep": "5 min",
      "cook": "8 min",
      "serves": "1",
      "kcal": 400,
      "tip": "Roughly: oats 190 kcal, eggs 140 kcal, milk 70 kcal. This is your biggest breakfast of the week — eat it fully, you'll need the energy for training."
    }
  },
  {
    "time": "11:00 AM",
    "title": "Snack: motor chaat (yellow pea salad)",
    "items": [
      "50 g dry yellow split peas (motor dal), boiled",
      "Cucumber, diced",
      "Tomato, diced",
      "Onion, diced",
      "Juice of half a lemon",
      "Pinch of cumin"
    ],
    "steps": [
      "Soak the dal for 30 minutes, then boil in fresh water for 15 to 20 minutes until soft but not mushy.",
      "Drain well and var it cool for 5 minutes.",
      "Mix in the cucumber, tomato, and onion.",
      "Add the lemon juice and cumin, stir, and eat within 30 minutes."
    ],
    "info": {
      "prep": "30 min soak + 10 min chop",
      "cook": "20 min",
      "serves": "1",
      "kcal": 200,
      "tip": "No oil needed at all here — the lemon and cumin do all the work."
    }
  },
  {
    "time": "1:30 PM",
    "title": "Lunch: rice with chicken or fish and vegetables",
    "items": [
      "150 g cooked rice",
      "120 g grilled chicken breast OR 150 g fish",
      "200 g mixed vegetables, cooked with 1 tsp oil"
    ],
    "steps": [
      "Season the chicken or fish with salt, turmeric, and a little chili, then grill or pan-cook until fully done.",
      "Cook the mixed vegetables in a pan with the measured 1 tsp oil until just tender, not mushy.",
      "Measure out the rice (150 g cooked, about 1 level cup) so you don't overserve yourself.",
      "Plate the rice, protein, and vegetables together."
    ],
    "info": {
      "prep": "10 min",
      "cook": "20 min",
      "serves": "1",
      "kcal": 550,
      "tip": "This is your biggest meal of the day, which makes sense — it's fueling the rest of your gym session."
    }
  },
  {
    "time": "4:00 PM",
    "title": "Pre-workout: banana and black coffee",
    "items": [
      "1 banana (about 100 g)",
      "1 cup black coffee, no sugar"
    ],
    "steps": [
      "Eat the banana on its own about 30 minutes before training.",
      "Brew the coffee strong and drink it black in the same window."
    ],
    "info": {
      "prep": "5 min",
      "cook": "0 min",
      "serves": "1",
      "kcal": 100,
      "tip": "Simple and fast — quick energy plus a caffeine boost for focus, without weighing down your stomach before lifting."
    }
  },
  {
    "time": "6:00 PM",
    "title": "Post-workout: egg whites or soya bhuna",
    "items": [
      "Option A: egg white omelet (3 egg whites + a handful of spinach)",
      "Option B: soya bhuna (50 g dried soya chunks, cooked)"
    ],
    "steps": [
      "Option A: whisk the 3 egg whites with chopped spinach, then cook on a lightly oiled non-stick pan until just set.",
      "Option B: boil the soya chunks for 5 minutes, drain, squeeze the water out firmly, then sauté with a little onion, tomato, and spices until browned. (This is what 'soya bhuna' means — soya cooked like a light meat curry.)",
      "Eat whichever option within 30 minutes of finishing your workout — this is when your muscles absorb protein best."
    ],
    "info": {
      "prep": "5 min",
      "cook": "8 min",
      "serves": "1",
      "kcal": 150,
      "tip": "Pick whichever is faster for you that day — both options do the same job of feeding your muscles after training."
    }
  },
  {
    "time": "8:30 PM",
    "title": "Dinner: roti with grilled fish or chicken and salad",
    "items": [
      "2 whole-wheat roti (about 50 g each)",
      "100 to 120 g grilled fish or chicken",
      "100 g tomato-cucumber salad"
    ],
    "steps": [
      "Knead the atta into a soft dough, rest 10 minutes, then roll out and cook on a dry, hot pan, 1 to 2 minutes per side.",
      "Season the fish or chicken with salt, turmeric, and a little chili, then grill or pan-cook with minimal oil.",
      "Slice the tomato and cucumber for the salad.",
      "Plate everything together. Try to eat at least 2 hours before bed."
    ],
    "info": {
      "prep": "15 min",
      "cook": "15 min",
      "serves": "1",
      "kcal": 450,
      "tip": "Total for the whole day comes to about 1,910 kcal — right inside your 1,800 to 2,000 kcal target."
    }
  }
];

export const RECOVERY_DAY_MEALS: Meal[] = [
  {
    "time": "7:30 AM",
    "title": "Hydration: chia lemon water",
    "items": [
      "500 ml water",
      "1 tsp chia seeds",
      "Juice of half a lemon"
    ],
    "steps": [
      "Pour the water into a glass and stir in the chia seeds right away.",
      "Squeeze in the lemon juice and stir again.",
      "Drink slowly on an empty stomach."
    ],
    "info": {
      "prep": "3 min",
      "cook": "0 min",
      "serves": "1",
      "kcal": 60,
      "tip": "Same drink every morning, gym day or not — it's a small habit, not a big task."
    }
  },
  {
    "time": "8:00 AM",
    "title": "Breakfast: masala oats with boiled eggs (smaller portion)",
    "items": [
      "40 g rolled oats (dry)",
      "½ cup (120 ml) low-fat milk",
      "Pinch of cinnamon",
      "2 whole eggs, boiled"
    ],
    "steps": [
      "Boil the eggs for 9 minutes from a full boil, then cool in cold water for 2 minutes before peeling.",
      "Heat the milk, stir in the oats and cinnamon, and simmer 4 minutes until thick.",
      "Plate the oats with the eggs on the side."
    ],
    "info": {
      "prep": "5 min",
      "cook": "8 min",
      "serves": "1",
      "kcal": 380,
      "tip": "Slightly smaller than your gym-day breakfast — you're not training today, so you don't need quite as much fuel this early."
    }
  },
  {
    "time": "11:00 AM",
    "title": "Snack: motor chaat or fresh fruit",
    "items": [
      "Option A: same motor chaat as gym days (50 g motor dal, boiled, with cucumber/tomato/onion/lemon)",
      "Option B: 1 guava or apple (about 100 g) + a small handful of almonds"
    ],
    "steps": [
      "Option A: follow the same steps as the gym-day motor chaat.",
      "Option B: wash the fruit, slice it, and eat it slowly with the almonds on the side.",
      "Either option works — pick whichever you have ready at home."
    ],
    "info": {
      "prep": "2-30 min depending on option",
      "cook": "0-20 min depending on option",
      "serves": "1",
      "kcal": 200,
      "tip": "Rotate between the two so you don't get bored eating the same snack every single day."
    }
  },
  {
    "time": "1:30 PM",
    "title": "Lunch: light fish curry with rice and lau",
    "items": [
      "100 g fish, cut into pieces",
      "100 g cooked rice",
      "150 g bottle gourd (lau), peeled and cubed",
      "1 tsp oil",
      "Onion, turmeric, cumin to taste"
    ],
    "steps": [
      "Season the fish lightly with salt and turmeric.",
      "Heat the 1 tsp oil, fry a little onion, then add turmeric and cumin.",
      "Add a splash of water and the cubed lau, simmer until soft, then gently add the fish and cook until it flakes apart easily.",
      "Serve with the measured rice. The curry should look light and watery (this is called 'jhol') — that's correct, not a mistake."
    ],
    "info": {
      "prep": "10 min",
      "cook": "15 min",
      "serves": "1",
      "kcal": 450,
      "tip": "This is deliberately lighter than your gym-day lunch since you're not training today."
    }
  },
  {
    "time": "4:00 PM",
    "title": "Snack: tok doi with fruit and chia",
    "items": [
      "100 g plain yogurt (tok doi)",
      "100 g chopped papaya (or any fruit you have)",
      "1 tsp chia seeds",
      "10 g almonds"
    ],
    "steps": [
      "Stir the yogurt smooth if it has separated in the fridge.",
      "Mix in the chia seeds and chopped fruit.",
      "Let it sit 5 minutes so the chia softens slightly, then scatter the almonds on top and eat."
    ],
    "info": {
      "prep": "8 min (includes 5 min rest)",
      "cook": "0 min",
      "serves": "1",
      "kcal": 200,
      "tip": "If the yogurt tastes too sour, var the fruit balance it — don't add sugar or honey."
    }
  },
  {
    "time": "8:30 PM",
    "title": "Dinner: roti with dal and vegetable stir-fry",
    "items": [
      "2 whole-wheat roti (about 50 g each)",
      "100 g cooked dal (masoor or moong)",
      "100 g sautéed mixed vegetables"
    ],
    "steps": [
      "Boil the rinsed dal until it breaks down into a thick soup, about 20 to 25 minutes.",
      "In a separate pan, stir-fry the vegetables with a small splash of oil until just tender.",
      "Cook the roti on a dry, hot pan, 1 to 2 minutes per side.",
      "Plate everything together."
    ],
    "info": {
      "prep": "10 min",
      "cook": "25 min",
      "serves": "1",
      "kcal": 400,
      "tip": "Day total comes to about 1,790 kcal — slightly under your gym-day total, which is correct since you're resting, not training."
    }
  }
];

export const DIET: DietDay[] = [
  {
    "weekday": "Mon",
    "type": "Gym day — Push",
    "meals": [
      {
        "time": "7:30 AM",
        "title": "Hydration: chia lemon water",
        "items": [
          "500 ml water",
          "1 tsp chia seeds",
          "Juice of half a lemon"
        ],
        "steps": [
          "Pour the water into a glass.",
          "Stir in the chia seeds right away for about 10 seconds so they don't clump together at the bottom.",
          "Squeeze in the lemon juice and stir again.",
          "Drink slowly on an empty stomach, first thing after waking up."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 60,
          "tip": "This is mostly water — it just helps with fullness and digestion before breakfast. Nothing complicated here."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: masala oats with boiled eggs",
        "items": [
          "50 g rolled oats (dry)",
          "½ cup (120 ml) low-fat or skim milk",
          "Pinch of cinnamon or basic masala spice",
          "2 whole eggs, boiled",
          "1 cup green tea or black tea, no sugar"
        ],
        "steps": [
          "Boil the 2 eggs for 9 minutes from a full boil, then cool in cold water for 2 minutes before peeling.",
          "In a small pot, heat the milk and stir in the oats and a pinch of cinnamon or masala spice.",
          "Simmer on low for 4 to 5 minutes, stirring now and then, until thick and soft.",
          "Plate the oats with the boiled eggs on the side and brew the tea separately."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 400,
          "tip": "Roughly: oats 190 kcal, eggs 140 kcal, milk 70 kcal. This is your biggest breakfast of the week — eat it fully, you'll need the energy for training."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: motor chaat (yellow pea salad)",
        "items": [
          "50 g dry yellow split peas (motor dal), boiled",
          "Cucumber, diced",
          "Tomato, diced",
          "Onion, diced",
          "Juice of half a lemon",
          "Pinch of cumin"
        ],
        "steps": [
          "Soak the dal for 30 minutes, then boil in fresh water for 15 to 20 minutes until soft but not mushy.",
          "Drain well and var it cool for 5 minutes.",
          "Mix in the cucumber, tomato, and onion.",
          "Add the lemon juice and cumin, stir, and eat within 30 minutes."
        ],
        "info": {
          "prep": "30 min soak + 10 min chop",
          "cook": "20 min",
          "serves": "1",
          "kcal": 200,
          "tip": "No oil needed at all here — the lemon and cumin do all the work."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: rice with chicken or fish and vegetables",
        "items": [
          "150 g cooked rice",
          "120 g grilled chicken breast OR 150 g fish",
          "200 g mixed vegetables, cooked with 1 tsp oil"
        ],
        "steps": [
          "Season the chicken or fish with salt, turmeric, and a little chili, then grill or pan-cook until fully done.",
          "Cook the mixed vegetables in a pan with the measured 1 tsp oil until just tender, not mushy.",
          "Measure out the rice (150 g cooked, about 1 level cup) so you don't overserve yourself.",
          "Plate the rice, protein, and vegetables together."
        ],
        "info": {
          "prep": "10 min",
          "cook": "20 min",
          "serves": "1",
          "kcal": 550,
          "tip": "This is your biggest meal of the day, which makes sense — it's fueling the rest of your gym session."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Pre-workout: banana and black coffee",
        "items": [
          "1 banana (about 100 g)",
          "1 cup black coffee, no sugar"
        ],
        "steps": [
          "Eat the banana on its own about 30 minutes before training.",
          "Brew the coffee strong and drink it black in the same window."
        ],
        "info": {
          "prep": "5 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 100,
          "tip": "Simple and fast — quick energy plus a caffeine boost for focus, without weighing down your stomach before lifting."
        }
      },
      {
        "time": "6:00 PM",
        "title": "Post-workout: egg whites or soya bhuna",
        "items": [
          "Option A: egg white omelet (3 egg whites + a handful of spinach)",
          "Option B: soya bhuna (50 g dried soya chunks, cooked)"
        ],
        "steps": [
          "Option A: whisk the 3 egg whites with chopped spinach, then cook on a lightly oiled non-stick pan until just set.",
          "Option B: boil the soya chunks for 5 minutes, drain, squeeze the water out firmly, then sauté with a little onion, tomato, and spices until browned. (This is what 'soya bhuna' means — soya cooked like a light meat curry.)",
          "Eat whichever option within 30 minutes of finishing your workout — this is when your muscles absorb protein best."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 150,
          "tip": "Pick whichever is faster for you that day — both options do the same job of feeding your muscles after training."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: roti with grilled fish or chicken and salad",
        "items": [
          "2 whole-wheat roti (about 50 g each)",
          "100 to 120 g grilled fish or chicken",
          "100 g tomato-cucumber salad"
        ],
        "steps": [
          "Knead the atta into a soft dough, rest 10 minutes, then roll out and cook on a dry, hot pan, 1 to 2 minutes per side.",
          "Season the fish or chicken with salt, turmeric, and a little chili, then grill or pan-cook with minimal oil.",
          "Slice the tomato and cucumber for the salad.",
          "Plate everything together. Try to eat at least 2 hours before bed."
        ],
        "info": {
          "prep": "15 min",
          "cook": "15 min",
          "serves": "1",
          "kcal": 450,
          "tip": "Total for the whole day comes to about 1,910 kcal — right inside your 1,800 to 2,000 kcal target."
        }
      }
    ]
  },
  {
    "weekday": "Tue",
    "type": "Gym day — Pull",
    "meals": [
      {
        "time": "7:30 AM",
        "title": "Hydration: chia lemon water",
        "items": [
          "500 ml water",
          "1 tsp chia seeds",
          "Juice of half a lemon"
        ],
        "steps": [
          "Pour the water into a glass.",
          "Stir in the chia seeds right away for about 10 seconds so they don't clump together at the bottom.",
          "Squeeze in the lemon juice and stir again.",
          "Drink slowly on an empty stomach, first thing after waking up."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 60,
          "tip": "This is mostly water — it just helps with fullness and digestion before breakfast. Nothing complicated here."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: masala oats with boiled eggs",
        "items": [
          "50 g rolled oats (dry)",
          "½ cup (120 ml) low-fat or skim milk",
          "Pinch of cinnamon or basic masala spice",
          "2 whole eggs, boiled",
          "1 cup green tea or black tea, no sugar"
        ],
        "steps": [
          "Boil the 2 eggs for 9 minutes from a full boil, then cool in cold water for 2 minutes before peeling.",
          "In a small pot, heat the milk and stir in the oats and a pinch of cinnamon or masala spice.",
          "Simmer on low for 4 to 5 minutes, stirring now and then, until thick and soft.",
          "Plate the oats with the boiled eggs on the side and brew the tea separately."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 400,
          "tip": "Roughly: oats 190 kcal, eggs 140 kcal, milk 70 kcal. This is your biggest breakfast of the week — eat it fully, you'll need the energy for training."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: motor chaat (yellow pea salad)",
        "items": [
          "50 g dry yellow split peas (motor dal), boiled",
          "Cucumber, diced",
          "Tomato, diced",
          "Onion, diced",
          "Juice of half a lemon",
          "Pinch of cumin"
        ],
        "steps": [
          "Soak the dal for 30 minutes, then boil in fresh water for 15 to 20 minutes until soft but not mushy.",
          "Drain well and var it cool for 5 minutes.",
          "Mix in the cucumber, tomato, and onion.",
          "Add the lemon juice and cumin, stir, and eat within 30 minutes."
        ],
        "info": {
          "prep": "30 min soak + 10 min chop",
          "cook": "20 min",
          "serves": "1",
          "kcal": 200,
          "tip": "No oil needed at all here — the lemon and cumin do all the work."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: rice with chicken or fish and vegetables",
        "items": [
          "150 g cooked rice",
          "120 g grilled chicken breast OR 150 g fish",
          "200 g mixed vegetables, cooked with 1 tsp oil"
        ],
        "steps": [
          "Season the chicken or fish with salt, turmeric, and a little chili, then grill or pan-cook until fully done.",
          "Cook the mixed vegetables in a pan with the measured 1 tsp oil until just tender, not mushy.",
          "Measure out the rice (150 g cooked, about 1 level cup) so you don't overserve yourself.",
          "Plate the rice, protein, and vegetables together."
        ],
        "info": {
          "prep": "10 min",
          "cook": "20 min",
          "serves": "1",
          "kcal": 550,
          "tip": "This is your biggest meal of the day, which makes sense — it's fueling the rest of your gym session."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Pre-workout: banana and black coffee",
        "items": [
          "1 banana (about 100 g)",
          "1 cup black coffee, no sugar"
        ],
        "steps": [
          "Eat the banana on its own about 30 minutes before training.",
          "Brew the coffee strong and drink it black in the same window."
        ],
        "info": {
          "prep": "5 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 100,
          "tip": "Simple and fast — quick energy plus a caffeine boost for focus, without weighing down your stomach before lifting."
        }
      },
      {
        "time": "6:00 PM",
        "title": "Post-workout: egg whites or soya bhuna",
        "items": [
          "Option A: egg white omelet (3 egg whites + a handful of spinach)",
          "Option B: soya bhuna (50 g dried soya chunks, cooked)"
        ],
        "steps": [
          "Option A: whisk the 3 egg whites with chopped spinach, then cook on a lightly oiled non-stick pan until just set.",
          "Option B: boil the soya chunks for 5 minutes, drain, squeeze the water out firmly, then sauté with a little onion, tomato, and spices until browned. (This is what 'soya bhuna' means — soya cooked like a light meat curry.)",
          "Eat whichever option within 30 minutes of finishing your workout — this is when your muscles absorb protein best."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 150,
          "tip": "Pick whichever is faster for you that day — both options do the same job of feeding your muscles after training."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: roti with grilled fish or chicken and salad",
        "items": [
          "2 whole-wheat roti (about 50 g each)",
          "100 to 120 g grilled fish or chicken",
          "100 g tomato-cucumber salad"
        ],
        "steps": [
          "Knead the atta into a soft dough, rest 10 minutes, then roll out and cook on a dry, hot pan, 1 to 2 minutes per side.",
          "Season the fish or chicken with salt, turmeric, and a little chili, then grill or pan-cook with minimal oil.",
          "Slice the tomato and cucumber for the salad.",
          "Plate everything together. Try to eat at least 2 hours before bed."
        ],
        "info": {
          "prep": "15 min",
          "cook": "15 min",
          "serves": "1",
          "kcal": 450,
          "tip": "Total for the whole day comes to about 1,910 kcal — right inside your 1,800 to 2,000 kcal target."
        }
      }
    ]
  },
  {
    "weekday": "Wed",
    "type": "Gym day — Legs",
    "meals": [
      {
        "time": "7:30 AM",
        "title": "Hydration: chia lemon water",
        "items": [
          "500 ml water",
          "1 tsp chia seeds",
          "Juice of half a lemon"
        ],
        "steps": [
          "Pour the water into a glass.",
          "Stir in the chia seeds right away for about 10 seconds so they don't clump together at the bottom.",
          "Squeeze in the lemon juice and stir again.",
          "Drink slowly on an empty stomach, first thing after waking up."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 60,
          "tip": "This is mostly water — it just helps with fullness and digestion before breakfast. Nothing complicated here."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: masala oats with boiled eggs",
        "items": [
          "50 g rolled oats (dry)",
          "½ cup (120 ml) low-fat or skim milk",
          "Pinch of cinnamon or basic masala spice",
          "2 whole eggs, boiled",
          "1 cup green tea or black tea, no sugar"
        ],
        "steps": [
          "Boil the 2 eggs for 9 minutes from a full boil, then cool in cold water for 2 minutes before peeling.",
          "In a small pot, heat the milk and stir in the oats and a pinch of cinnamon or masala spice.",
          "Simmer on low for 4 to 5 minutes, stirring now and then, until thick and soft.",
          "Plate the oats with the boiled eggs on the side and brew the tea separately."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 400,
          "tip": "Roughly: oats 190 kcal, eggs 140 kcal, milk 70 kcal. This is your biggest breakfast of the week — eat it fully, you'll need the energy for training."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: motor chaat (yellow pea salad)",
        "items": [
          "50 g dry yellow split peas (motor dal), boiled",
          "Cucumber, diced",
          "Tomato, diced",
          "Onion, diced",
          "Juice of half a lemon",
          "Pinch of cumin"
        ],
        "steps": [
          "Soak the dal for 30 minutes, then boil in fresh water for 15 to 20 minutes until soft but not mushy.",
          "Drain well and var it cool for 5 minutes.",
          "Mix in the cucumber, tomato, and onion.",
          "Add the lemon juice and cumin, stir, and eat within 30 minutes."
        ],
        "info": {
          "prep": "30 min soak + 10 min chop",
          "cook": "20 min",
          "serves": "1",
          "kcal": 200,
          "tip": "No oil needed at all here — the lemon and cumin do all the work."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: rice with chicken or fish and vegetables",
        "items": [
          "150 g cooked rice",
          "120 g grilled chicken breast OR 150 g fish",
          "200 g mixed vegetables, cooked with 1 tsp oil"
        ],
        "steps": [
          "Season the chicken or fish with salt, turmeric, and a little chili, then grill or pan-cook until fully done.",
          "Cook the mixed vegetables in a pan with the measured 1 tsp oil until just tender, not mushy.",
          "Measure out the rice (150 g cooked, about 1 level cup) so you don't overserve yourself.",
          "Plate the rice, protein, and vegetables together."
        ],
        "info": {
          "prep": "10 min",
          "cook": "20 min",
          "serves": "1",
          "kcal": 550,
          "tip": "This is your biggest meal of the day, which makes sense — it's fueling the rest of your gym session."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Pre-workout: banana and black coffee",
        "items": [
          "1 banana (about 100 g)",
          "1 cup black coffee, no sugar"
        ],
        "steps": [
          "Eat the banana on its own about 30 minutes before training.",
          "Brew the coffee strong and drink it black in the same window."
        ],
        "info": {
          "prep": "5 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 100,
          "tip": "Simple and fast — quick energy plus a caffeine boost for focus, without weighing down your stomach before lifting."
        }
      },
      {
        "time": "6:00 PM",
        "title": "Post-workout: egg whites or soya bhuna",
        "items": [
          "Option A: egg white omelet (3 egg whites + a handful of spinach)",
          "Option B: soya bhuna (50 g dried soya chunks, cooked)"
        ],
        "steps": [
          "Option A: whisk the 3 egg whites with chopped spinach, then cook on a lightly oiled non-stick pan until just set.",
          "Option B: boil the soya chunks for 5 minutes, drain, squeeze the water out firmly, then sauté with a little onion, tomato, and spices until browned. (This is what 'soya bhuna' means — soya cooked like a light meat curry.)",
          "Eat whichever option within 30 minutes of finishing your workout — this is when your muscles absorb protein best."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 150,
          "tip": "Pick whichever is faster for you that day — both options do the same job of feeding your muscles after training."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: roti with grilled fish or chicken and salad",
        "items": [
          "2 whole-wheat roti (about 50 g each)",
          "100 to 120 g grilled fish or chicken",
          "100 g tomato-cucumber salad"
        ],
        "steps": [
          "Knead the atta into a soft dough, rest 10 minutes, then roll out and cook on a dry, hot pan, 1 to 2 minutes per side.",
          "Season the fish or chicken with salt, turmeric, and a little chili, then grill or pan-cook with minimal oil.",
          "Slice the tomato and cucumber for the salad.",
          "Plate everything together. Try to eat at least 2 hours before bed."
        ],
        "info": {
          "prep": "15 min",
          "cook": "15 min",
          "serves": "1",
          "kcal": 450,
          "tip": "Total for the whole day comes to about 1,910 kcal — right inside your 1,800 to 2,000 kcal target."
        }
      }
    ]
  },
  {
    "weekday": "Thu",
    "type": "Recovery day",
    "meals": [
      {
        "time": "7:30 AM",
        "title": "Hydration: chia lemon water",
        "items": [
          "500 ml water",
          "1 tsp chia seeds",
          "Juice of half a lemon"
        ],
        "steps": [
          "Pour the water into a glass and stir in the chia seeds right away.",
          "Squeeze in the lemon juice and stir again.",
          "Drink slowly on an empty stomach."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 60,
          "tip": "Same drink every morning, gym day or not — it's a small habit, not a big task."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: masala oats with boiled eggs (smaller portion)",
        "items": [
          "40 g rolled oats (dry)",
          "½ cup (120 ml) low-fat milk",
          "Pinch of cinnamon",
          "2 whole eggs, boiled"
        ],
        "steps": [
          "Boil the eggs for 9 minutes from a full boil, then cool in cold water for 2 minutes before peeling.",
          "Heat the milk, stir in the oats and cinnamon, and simmer 4 minutes until thick.",
          "Plate the oats with the eggs on the side."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 380,
          "tip": "Slightly smaller than your gym-day breakfast — you're not training today, so you don't need quite as much fuel this early."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: motor chaat or fresh fruit",
        "items": [
          "Option A: same motor chaat as gym days (50 g motor dal, boiled, with cucumber/tomato/onion/lemon)",
          "Option B: 1 guava or apple (about 100 g) + a small handful of almonds"
        ],
        "steps": [
          "Option A: follow the same steps as the gym-day motor chaat.",
          "Option B: wash the fruit, slice it, and eat it slowly with the almonds on the side.",
          "Either option works — pick whichever you have ready at home."
        ],
        "info": {
          "prep": "2-30 min depending on option",
          "cook": "0-20 min depending on option",
          "serves": "1",
          "kcal": 200,
          "tip": "Rotate between the two so you don't get bored eating the same snack every single day."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: light fish curry with rice and lau",
        "items": [
          "100 g fish, cut into pieces",
          "100 g cooked rice",
          "150 g bottle gourd (lau), peeled and cubed",
          "1 tsp oil",
          "Onion, turmeric, cumin to taste"
        ],
        "steps": [
          "Season the fish lightly with salt and turmeric.",
          "Heat the 1 tsp oil, fry a little onion, then add turmeric and cumin.",
          "Add a splash of water and the cubed lau, simmer until soft, then gently add the fish and cook until it flakes apart easily.",
          "Serve with the measured rice. The curry should look light and watery (this is called 'jhol') — that's correct, not a mistake."
        ],
        "info": {
          "prep": "10 min",
          "cook": "15 min",
          "serves": "1",
          "kcal": 450,
          "tip": "This is deliberately lighter than your gym-day lunch since you're not training today."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Snack: tok doi with fruit and chia",
        "items": [
          "100 g plain yogurt (tok doi)",
          "100 g chopped papaya (or any fruit you have)",
          "1 tsp chia seeds",
          "10 g almonds"
        ],
        "steps": [
          "Stir the yogurt smooth if it has separated in the fridge.",
          "Mix in the chia seeds and chopped fruit.",
          "Let it sit 5 minutes so the chia softens slightly, then scatter the almonds on top and eat."
        ],
        "info": {
          "prep": "8 min (includes 5 min rest)",
          "cook": "0 min",
          "serves": "1",
          "kcal": 200,
          "tip": "If the yogurt tastes too sour, var the fruit balance it — don't add sugar or honey."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: roti with dal and vegetable stir-fry",
        "items": [
          "2 whole-wheat roti (about 50 g each)",
          "100 g cooked dal (masoor or moong)",
          "100 g sautéed mixed vegetables"
        ],
        "steps": [
          "Boil the rinsed dal until it breaks down into a thick soup, about 20 to 25 minutes.",
          "In a separate pan, stir-fry the vegetables with a small splash of oil until just tender.",
          "Cook the roti on a dry, hot pan, 1 to 2 minutes per side.",
          "Plate everything together."
        ],
        "info": {
          "prep": "10 min",
          "cook": "25 min",
          "serves": "1",
          "kcal": 400,
          "tip": "Day total comes to about 1,790 kcal — slightly under your gym-day total, which is correct since you're resting, not training."
        }
      }
    ]
  },
  {
    "weekday": "Fri",
    "type": "Gym day — Upper Mix",
    "meals": [
      {
        "time": "7:30 AM",
        "title": "Hydration: chia lemon water",
        "items": [
          "500 ml water",
          "1 tsp chia seeds",
          "Juice of half a lemon"
        ],
        "steps": [
          "Pour the water into a glass.",
          "Stir in the chia seeds right away for about 10 seconds so they don't clump together at the bottom.",
          "Squeeze in the lemon juice and stir again.",
          "Drink slowly on an empty stomach, first thing after waking up."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 60,
          "tip": "This is mostly water — it just helps with fullness and digestion before breakfast. Nothing complicated here."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: masala oats with boiled eggs",
        "items": [
          "50 g rolled oats (dry)",
          "½ cup (120 ml) low-fat or skim milk",
          "Pinch of cinnamon or basic masala spice",
          "2 whole eggs, boiled",
          "1 cup green tea or black tea, no sugar"
        ],
        "steps": [
          "Boil the 2 eggs for 9 minutes from a full boil, then cool in cold water for 2 minutes before peeling.",
          "In a small pot, heat the milk and stir in the oats and a pinch of cinnamon or masala spice.",
          "Simmer on low for 4 to 5 minutes, stirring now and then, until thick and soft.",
          "Plate the oats with the boiled eggs on the side and brew the tea separately."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 400,
          "tip": "Roughly: oats 190 kcal, eggs 140 kcal, milk 70 kcal. This is your biggest breakfast of the week — eat it fully, you'll need the energy for training."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: motor chaat (yellow pea salad)",
        "items": [
          "50 g dry yellow split peas (motor dal), boiled",
          "Cucumber, diced",
          "Tomato, diced",
          "Onion, diced",
          "Juice of half a lemon",
          "Pinch of cumin"
        ],
        "steps": [
          "Soak the dal for 30 minutes, then boil in fresh water for 15 to 20 minutes until soft but not mushy.",
          "Drain well and var it cool for 5 minutes.",
          "Mix in the cucumber, tomato, and onion.",
          "Add the lemon juice and cumin, stir, and eat within 30 minutes."
        ],
        "info": {
          "prep": "30 min soak + 10 min chop",
          "cook": "20 min",
          "serves": "1",
          "kcal": 200,
          "tip": "No oil needed at all here — the lemon and cumin do all the work."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: rice with chicken or fish and vegetables",
        "items": [
          "150 g cooked rice",
          "120 g grilled chicken breast OR 150 g fish",
          "200 g mixed vegetables, cooked with 1 tsp oil"
        ],
        "steps": [
          "Season the chicken or fish with salt, turmeric, and a little chili, then grill or pan-cook until fully done.",
          "Cook the mixed vegetables in a pan with the measured 1 tsp oil until just tender, not mushy.",
          "Measure out the rice (150 g cooked, about 1 level cup) so you don't overserve yourself.",
          "Plate the rice, protein, and vegetables together."
        ],
        "info": {
          "prep": "10 min",
          "cook": "20 min",
          "serves": "1",
          "kcal": 550,
          "tip": "This is your biggest meal of the day, which makes sense — it's fueling the rest of your gym session."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Pre-workout: banana and black coffee",
        "items": [
          "1 banana (about 100 g)",
          "1 cup black coffee, no sugar"
        ],
        "steps": [
          "Eat the banana on its own about 30 minutes before training.",
          "Brew the coffee strong and drink it black in the same window."
        ],
        "info": {
          "prep": "5 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 100,
          "tip": "Simple and fast — quick energy plus a caffeine boost for focus, without weighing down your stomach before lifting."
        }
      },
      {
        "time": "6:00 PM",
        "title": "Post-workout: egg whites or soya bhuna",
        "items": [
          "Option A: egg white omelet (3 egg whites + a handful of spinach)",
          "Option B: soya bhuna (50 g dried soya chunks, cooked)"
        ],
        "steps": [
          "Option A: whisk the 3 egg whites with chopped spinach, then cook on a lightly oiled non-stick pan until just set.",
          "Option B: boil the soya chunks for 5 minutes, drain, squeeze the water out firmly, then sauté with a little onion, tomato, and spices until browned. (This is what 'soya bhuna' means — soya cooked like a light meat curry.)",
          "Eat whichever option within 30 minutes of finishing your workout — this is when your muscles absorb protein best."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 150,
          "tip": "Pick whichever is faster for you that day — both options do the same job of feeding your muscles after training."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: roti with grilled fish or chicken and salad",
        "items": [
          "2 whole-wheat roti (about 50 g each)",
          "100 to 120 g grilled fish or chicken",
          "100 g tomato-cucumber salad"
        ],
        "steps": [
          "Knead the atta into a soft dough, rest 10 minutes, then roll out and cook on a dry, hot pan, 1 to 2 minutes per side.",
          "Season the fish or chicken with salt, turmeric, and a little chili, then grill or pan-cook with minimal oil.",
          "Slice the tomato and cucumber for the salad.",
          "Plate everything together. Try to eat at least 2 hours before bed."
        ],
        "info": {
          "prep": "15 min",
          "cook": "15 min",
          "serves": "1",
          "kcal": 450,
          "tip": "Total for the whole day comes to about 1,910 kcal — right inside your 1,800 to 2,000 kcal target."
        }
      }
    ]
  },
  {
    "weekday": "Sat",
    "type": "Gym day — Lower + HIIT",
    "meals": [
      {
        "time": "7:30 AM",
        "title": "Hydration: chia lemon water",
        "items": [
          "500 ml water",
          "1 tsp chia seeds",
          "Juice of half a lemon"
        ],
        "steps": [
          "Pour the water into a glass.",
          "Stir in the chia seeds right away for about 10 seconds so they don't clump together at the bottom.",
          "Squeeze in the lemon juice and stir again.",
          "Drink slowly on an empty stomach, first thing after waking up."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 60,
          "tip": "This is mostly water — it just helps with fullness and digestion before breakfast. Nothing complicated here."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: masala oats with boiled eggs",
        "items": [
          "50 g rolled oats (dry)",
          "½ cup (120 ml) low-fat or skim milk",
          "Pinch of cinnamon or basic masala spice",
          "2 whole eggs, boiled",
          "1 cup green tea or black tea, no sugar"
        ],
        "steps": [
          "Boil the 2 eggs for 9 minutes from a full boil, then cool in cold water for 2 minutes before peeling.",
          "In a small pot, heat the milk and stir in the oats and a pinch of cinnamon or masala spice.",
          "Simmer on low for 4 to 5 minutes, stirring now and then, until thick and soft.",
          "Plate the oats with the boiled eggs on the side and brew the tea separately."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 400,
          "tip": "Roughly: oats 190 kcal, eggs 140 kcal, milk 70 kcal. This is your biggest breakfast of the week — eat it fully, you'll need the energy for training."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: motor chaat (yellow pea salad)",
        "items": [
          "50 g dry yellow split peas (motor dal), boiled",
          "Cucumber, diced",
          "Tomato, diced",
          "Onion, diced",
          "Juice of half a lemon",
          "Pinch of cumin"
        ],
        "steps": [
          "Soak the dal for 30 minutes, then boil in fresh water for 15 to 20 minutes until soft but not mushy.",
          "Drain well and var it cool for 5 minutes.",
          "Mix in the cucumber, tomato, and onion.",
          "Add the lemon juice and cumin, stir, and eat within 30 minutes."
        ],
        "info": {
          "prep": "30 min soak + 10 min chop",
          "cook": "20 min",
          "serves": "1",
          "kcal": 200,
          "tip": "No oil needed at all here — the lemon and cumin do all the work."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: rice with chicken or fish and vegetables",
        "items": [
          "150 g cooked rice",
          "120 g grilled chicken breast OR 150 g fish",
          "200 g mixed vegetables, cooked with 1 tsp oil"
        ],
        "steps": [
          "Season the chicken or fish with salt, turmeric, and a little chili, then grill or pan-cook until fully done.",
          "Cook the mixed vegetables in a pan with the measured 1 tsp oil until just tender, not mushy.",
          "Measure out the rice (150 g cooked, about 1 level cup) so you don't overserve yourself.",
          "Plate the rice, protein, and vegetables together."
        ],
        "info": {
          "prep": "10 min",
          "cook": "20 min",
          "serves": "1",
          "kcal": 550,
          "tip": "This is your biggest meal of the day, which makes sense — it's fueling the rest of your gym session."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Pre-workout: banana and black coffee",
        "items": [
          "1 banana (about 100 g)",
          "1 cup black coffee, no sugar"
        ],
        "steps": [
          "Eat the banana on its own about 30 minutes before training.",
          "Brew the coffee strong and drink it black in the same window."
        ],
        "info": {
          "prep": "5 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 100,
          "tip": "Simple and fast — quick energy plus a caffeine boost for focus, without weighing down your stomach before lifting."
        }
      },
      {
        "time": "6:00 PM",
        "title": "Post-workout: egg whites or soya bhuna",
        "items": [
          "Option A: egg white omelet (3 egg whites + a handful of spinach)",
          "Option B: soya bhuna (50 g dried soya chunks, cooked)"
        ],
        "steps": [
          "Option A: whisk the 3 egg whites with chopped spinach, then cook on a lightly oiled non-stick pan until just set.",
          "Option B: boil the soya chunks for 5 minutes, drain, squeeze the water out firmly, then sauté with a little onion, tomato, and spices until browned. (This is what 'soya bhuna' means — soya cooked like a light meat curry.)",
          "Eat whichever option within 30 minutes of finishing your workout — this is when your muscles absorb protein best."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 150,
          "tip": "Pick whichever is faster for you that day — both options do the same job of feeding your muscles after training."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: roti with grilled fish or chicken and salad",
        "items": [
          "2 whole-wheat roti (about 50 g each)",
          "100 to 120 g grilled fish or chicken",
          "100 g tomato-cucumber salad"
        ],
        "steps": [
          "Knead the atta into a soft dough, rest 10 minutes, then roll out and cook on a dry, hot pan, 1 to 2 minutes per side.",
          "Season the fish or chicken with salt, turmeric, and a little chili, then grill or pan-cook with minimal oil.",
          "Slice the tomato and cucumber for the salad.",
          "Plate everything together. Try to eat at least 2 hours before bed."
        ],
        "info": {
          "prep": "15 min",
          "cook": "15 min",
          "serves": "1",
          "kcal": 450,
          "tip": "Total for the whole day comes to about 1,910 kcal — right inside your 1,800 to 2,000 kcal target."
        }
      }
    ]
  },
  {
    "weekday": "Sun",
    "type": "Rest day",
    "meals": [
      {
        "time": "7:30 AM",
        "title": "Hydration: chia lemon water",
        "items": [
          "500 ml water",
          "1 tsp chia seeds",
          "Juice of half a lemon"
        ],
        "steps": [
          "Pour the water into a glass and stir in the chia seeds right away.",
          "Squeeze in the lemon juice and stir again.",
          "Drink slowly on an empty stomach."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 60,
          "tip": "Same drink every morning, gym day or not — it's a small habit, not a big task."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: masala oats with boiled eggs (smaller portion)",
        "items": [
          "40 g rolled oats (dry)",
          "½ cup (120 ml) low-fat milk",
          "Pinch of cinnamon",
          "2 whole eggs, boiled"
        ],
        "steps": [
          "Boil the eggs for 9 minutes from a full boil, then cool in cold water for 2 minutes before peeling.",
          "Heat the milk, stir in the oats and cinnamon, and simmer 4 minutes until thick.",
          "Plate the oats with the eggs on the side."
        ],
        "info": {
          "prep": "5 min",
          "cook": "8 min",
          "serves": "1",
          "kcal": 380,
          "tip": "Slightly smaller than your gym-day breakfast — you're not training today, so you don't need quite as much fuel this early."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: motor chaat or fresh fruit",
        "items": [
          "Option A: same motor chaat as gym days (50 g motor dal, boiled, with cucumber/tomato/onion/lemon)",
          "Option B: 1 guava or apple (about 100 g) + a small handful of almonds"
        ],
        "steps": [
          "Option A: follow the same steps as the gym-day motor chaat.",
          "Option B: wash the fruit, slice it, and eat it slowly with the almonds on the side.",
          "Either option works — pick whichever you have ready at home."
        ],
        "info": {
          "prep": "2-30 min depending on option",
          "cook": "0-20 min depending on option",
          "serves": "1",
          "kcal": 200,
          "tip": "Rotate between the two so you don't get bored eating the same snack every single day."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: light fish curry with rice and lau",
        "items": [
          "100 g fish, cut into pieces",
          "100 g cooked rice",
          "150 g bottle gourd (lau), peeled and cubed",
          "1 tsp oil",
          "Onion, turmeric, cumin to taste"
        ],
        "steps": [
          "Season the fish lightly with salt and turmeric.",
          "Heat the 1 tsp oil, fry a little onion, then add turmeric and cumin.",
          "Add a splash of water and the cubed lau, simmer until soft, then gently add the fish and cook until it flakes apart easily.",
          "Serve with the measured rice. The curry should look light and watery (this is called 'jhol') — that's correct, not a mistake."
        ],
        "info": {
          "prep": "10 min",
          "cook": "15 min",
          "serves": "1",
          "kcal": 450,
          "tip": "This is deliberately lighter than your gym-day lunch since you're not training today."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Snack: tok doi with fruit and chia",
        "items": [
          "100 g plain yogurt (tok doi)",
          "100 g chopped papaya (or any fruit you have)",
          "1 tsp chia seeds",
          "10 g almonds"
        ],
        "steps": [
          "Stir the yogurt smooth if it has separated in the fridge.",
          "Mix in the chia seeds and chopped fruit.",
          "Let it sit 5 minutes so the chia softens slightly, then scatter the almonds on top and eat."
        ],
        "info": {
          "prep": "8 min (includes 5 min rest)",
          "cook": "0 min",
          "serves": "1",
          "kcal": 200,
          "tip": "If the yogurt tastes too sour, var the fruit balance it — don't add sugar or honey."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: roti with dal and vegetable stir-fry",
        "items": [
          "2 whole-wheat roti (about 50 g each)",
          "100 g cooked dal (masoor or moong)",
          "100 g sautéed mixed vegetables"
        ],
        "steps": [
          "Boil the rinsed dal until it breaks down into a thick soup, about 20 to 25 minutes.",
          "In a separate pan, stir-fry the vegetables with a small splash of oil until just tender.",
          "Cook the roti on a dry, hot pan, 1 to 2 minutes per side.",
          "Plate everything together."
        ],
        "info": {
          "prep": "10 min",
          "cook": "25 min",
          "serves": "1",
          "kcal": 400,
          "tip": "Day total comes to about 1,790 kcal — slightly under your gym-day total, which is correct since you're resting, not training."
        }
      }
    ]
  }
];
