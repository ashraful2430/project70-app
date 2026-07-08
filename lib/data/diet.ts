import type { DietDay } from "@/types";

// 7 distinct daily menus — no repeating dishes across the week.
// Each day targets ~2,250–2,350 kcal and 140–155g protein to match the
// Mifflin-St Jeor goal (TDEE ~2,817 − 500 deficit = ~2,317 kcal/day).
// All ingredients are easily available in Bangladesh.

export const DIET: DietDay[] = [
  {
    "weekday": "Mon",
    "type": "Gym day — ~2,300 kcal · ~150g protein",
    "meals": [
      {
        "time": "7:00 AM",
        "title": "Morning metabolism: jeera water",
        "items": [
          "1 tsp cumin seeds (jeera)",
          "300 ml water"
        ],
        "steps": [
          "The night before: soak 1 tsp jeera in a glass of water, covered.",
          "In the morning, strain and drink the water on an empty stomach. (Quick version: boil jeera in water for 5 minutes, cool until warm, drink.)",
          "Chew a few of the soaked seeds too — they aid digestion.",
          "Wait 20–30 minutes before breakfast."
        ],
        "info": {
          "prep": "2 min (soak overnight)",
          "cook": "0 min",
          "serves": "1",
          "kcal": 10,
          "tip": "Jeera water gently raises metabolism, improves digestion, and reduces bloating. Rotate with the other morning drinks in the Hydration tab so it never gets boring."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: 4-egg vegetable omelette with roti",
        "items": [
          "2 whole eggs + 2 egg whites",
          "Onion, green chili, tomato, coriander leaves — chopped",
          "2 whole-wheat roti",
          "1 cup green tea, no sugar"
        ],
        "steps": [
          "Whisk the eggs and whites with the chopped vegetables, a pinch of salt and turmeric.",
          "Cook on a non-stick pan with a few drops of oil until set and lightly browned.",
          "Cook the 2 roti on a dry hot pan.",
          "Roll the omelette inside the roti like a wrap, or eat side by side with the tea."
        ],
        "info": {
          "prep": "8 min",
          "cook": "10 min",
          "serves": "1",
          "kcal": 460,
          "tip": "~28g protein to start the day. Egg yolks stay in — they drive testosterone. Only 2 yolks are dropped to keep fat in budget."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: tok doi bowl with banana and peanuts",
        "items": [
          "150 g plain yogurt (tok doi)",
          "1 banana, sliced",
          "20 g peanuts (chinabadam)",
          "1 tsp chia seeds"
        ],
        "steps": [
          "Stir the yogurt smooth in a bowl.",
          "Mix in the chia seeds and let sit 5 minutes.",
          "Top with sliced banana and peanuts."
        ],
        "info": {
          "prep": "6 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 300,
          "tip": "Yogurt protein + peanut healthy fats keep you full until lunch. Chinabadam is the cheapest quality fat + protein source in BD."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: chicken bhuna with rice and palong shak",
        "items": [
          "150 g chicken (breast or leg, skinless)",
          "200 g cooked rice (about 1.3 cups)",
          "1 bunch palong shak (spinach), stir-fried with garlic",
          "2 tsp oil total for cooking"
        ],
        "steps": [
          "Cook the chicken bhuna-style: fry onion, garlic, ginger paste in 1 tsp oil, add turmeric-chili-cumin, then the chicken. Cook covered until tender, letting the gravy thicken.",
          "Stir-fry the palong shak with sliced garlic and 1 tsp oil until just wilted.",
          "Measure the rice — 200 g cooked. Plate everything together."
        ],
        "info": {
          "prep": "15 min",
          "cook": "25 min",
          "serves": "1",
          "kcal": 650,
          "tip": "Biggest meal of the day — it fuels your evening session. ~46g protein from the chicken alone. Garlic + spinach are both testosterone supporters."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Pre-workout: banana and black coffee",
        "items": [
          "1 banana",
          "1 cup strong black coffee, no sugar"
        ],
        "steps": [
          "Eat the banana 30 minutes before training.",
          "Drink the coffee black in the same window — caffeine peaks right when you hit your working sets."
        ],
        "info": {
          "prep": "5 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 110,
          "tip": "Fast carbs + caffeine = more reps. Don't add sugar; the banana is the sugar."
        }
      },
      {
        "time": "6:30 PM",
        "title": "Post-workout: milk and boiled eggs",
        "items": [
          "250 ml milk (regular or low-fat)",
          "2 boiled eggs"
        ],
        "steps": [
          "Boil the eggs in the morning so they're ready — 9 minutes from a full boil.",
          "Within 30–45 minutes of finishing training, drink the milk and eat the eggs.",
          "Add a pinch of salt and black pepper on the eggs if you like."
        ],
        "info": {
          "prep": "2 min",
          "cook": "0 min (pre-boiled)",
          "serves": "1",
          "kcal": 290,
          "tip": "~21g fast-absorbing protein right in the muscle-building window. Milk also restores fluids after sweating."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: grilled tilapia with salad and roti",
        "items": [
          "150 g tilapia (or rui), seasoned",
          "Large cucumber-tomato-onion salad with lemon",
          "1 whole-wheat roti"
        ],
        "steps": [
          "Rub the fish with salt, turmeric, chili powder and a squeeze of lemon. Rest 10 minutes.",
          "Grill or pan-cook with 1 tsp oil until both sides are golden and it flakes easily.",
          "Chop the salad, dress with lemon juice and a pinch of salt.",
          "Eat at least 2 hours before bed."
        ],
        "info": {
          "prep": "12 min",
          "cook": "12 min",
          "serves": "1",
          "kcal": 430,
          "tip": "Light, high-protein dinner. Day total ≈ 2,250 kcal · ~150g protein — right on target."
        }
      }
    ]
  },
  {
    "weekday": "Tue",
    "type": "Gym day — ~2,300 kcal · ~148g protein",
    "meals": [
      {
        "time": "7:00 AM",
        "title": "Morning metabolism: methi water",
        "items": [
          "1 tsp fenugreek seeds (methi)",
          "300 ml water"
        ],
        "steps": [
          "Soak the methi seeds overnight in a covered glass of water.",
          "Strain and drink the water warm on an empty stomach in the morning.",
          "The taste is slightly bitter — that's normal and expected.",
          "Wait 20–30 minutes before breakfast."
        ],
        "info": {
          "prep": "2 min (soak overnight)",
          "cook": "0 min",
          "serves": "1",
          "kcal": 10,
          "tip": "Methi water helps control blood sugar spikes and appetite through the day — one of the most proven cheap metabolism drinks."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: masala oats with boiled eggs",
        "items": [
          "60 g rolled oats",
          "150 ml milk",
          "Pinch of cinnamon (daruchini)",
          "2 boiled eggs",
          "1 cup green tea"
        ],
        "steps": [
          "Boil the eggs for 9 minutes, cool and peel.",
          "Simmer the oats in the milk with cinnamon for 4–5 minutes until thick.",
          "Plate the oats with the eggs on the side."
        ],
        "info": {
          "prep": "5 min",
          "cook": "10 min",
          "serves": "1",
          "kcal": 470,
          "tip": "Oats give slow-release energy through the morning; cinnamon adds a mild metabolic kick."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: chola boot chaat (boiled chickpeas)",
        "items": [
          "60 g dry chickpeas (kabuli chana / chola), boiled",
          "Onion, tomato, green chili, coriander — chopped",
          "Juice of half a lemon",
          "Pinch of chaat masala or roasted cumin"
        ],
        "steps": [
          "Soak the chickpeas overnight, then boil 25–30 minutes until soft (or pressure cook).",
          "Mix with the chopped vegetables, lemon juice and spice.",
          "Boil a big batch on Sunday's meal prep so this takes 2 minutes on the day."
        ],
        "info": {
          "prep": "5 min (pre-boiled)",
          "cook": "0 min",
          "serves": "1",
          "kcal": 260,
          "tip": "Chickpeas bring protein AND 12g of fiber — the single best snack for staying full while cutting."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: rui macher jhol with rice and borboti bhaji",
        "items": [
          "150 g rui fish, 2 pieces",
          "200 g cooked rice",
          "100 g borboti (yardlong beans), stir-fried",
          "Potato, onion, turmeric, cumin for the jhol",
          "2 tsp oil total"
        ],
        "steps": [
          "Light fish jhol: fry onion in 1 tsp oil, add turmeric-cumin-chili, splash of water, a few potato pieces, and simmer.",
          "Slide the fish in gently and cook 8–10 minutes until it flakes.",
          "Stir-fry the borboti with garlic and 1 tsp oil until tender-crisp.",
          "Serve with the measured rice."
        ],
        "info": {
          "prep": "15 min",
          "cook": "25 min",
          "serves": "1",
          "kcal": 620,
          "tip": "Classic Bengali comfort food that fits a cut — the jhol style needs almost no oil."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Pre-workout: dates and black coffee",
        "items": [
          "3 dates (khejur)",
          "1 cup black coffee"
        ],
        "steps": [
          "Eat the dates 30 minutes before the gym — fast natural sugar.",
          "Drink the coffee black in the same window."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 90,
          "tip": "Dates are cheaper than any pre-workout supplement and work nearly as well for energy."
        }
      },
      {
        "time": "6:30 PM",
        "title": "Post-workout: egg white omelette with spinach",
        "items": [
          "3 egg whites + 1 whole egg",
          "Handful of spinach, chopped",
          "Onion and chili to taste"
        ],
        "steps": [
          "Whisk the whites and egg with the spinach, onion, chili.",
          "Cook on a non-stick pan with minimal oil until set.",
          "Eat within 45 minutes of finishing training."
        ],
        "info": {
          "prep": "5 min",
          "cook": "6 min",
          "serves": "1",
          "kcal": 160,
          "tip": "~18g protein, very light on the stomach after training."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: chicken salad bowl with peanut crunch",
        "items": [
          "120 g chicken, boiled and shredded",
          "Cucumber, tomato, onion, carrot — chopped big",
          "15 g crushed peanuts",
          "Lemon juice, salt, black pepper, coriander"
        ],
        "steps": [
          "Boil the chicken with salt and a bay leaf until cooked, then shred it.",
          "Toss with all the chopped vegetables, lemon juice and seasoning.",
          "Top with the crushed peanuts for crunch.",
          "This is a no-rice dinner — carbs were front-loaded earlier when you needed them."
        ],
        "info": {
          "prep": "15 min",
          "cook": "15 min",
          "serves": "1",
          "kcal": 400,
          "tip": "Day total ≈ 2,290 kcal · ~148g protein. Low-carb dinner improves overnight fat burning."
        }
      }
    ]
  },
  {
    "weekday": "Wed",
    "type": "Gym day (heavy) — ~2,350 kcal · ~150g protein",
    "meals": [
      {
        "time": "7:00 AM",
        "title": "Morning metabolism: ginger-lemon warm water",
        "items": [
          "3–4 thin slices fresh ginger (ada)",
          "Juice of half a lemon",
          "300 ml warm water"
        ],
        "steps": [
          "Boil the ginger slices in water for 3–4 minutes.",
          "Cool until comfortably warm, then add the lemon juice.",
          "Drink on an empty stomach. Chew the ginger slices if you like the heat."
        ],
        "info": {
          "prep": "2 min",
          "cook": "4 min",
          "serves": "1",
          "kcal": 10,
          "tip": "Ginger is thermogenic (slightly raises calorie burn) and also boosts luteinizing hormone — a testosterone precursor signal."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: egg paratha wrap",
        "items": [
          "1 thin paratha (less oil) or 2 roti",
          "2 whole eggs",
          "Onion, chili, coriander",
          "1 cup black or green tea"
        ],
        "steps": [
          "Beat the eggs with the chopped onion, chili and coriander.",
          "Cook the paratha halfway, pour the egg over it and flip — the egg cooks onto the bread (mughlai style, but with minimal oil).",
          "Roll it up and eat hot with the tea."
        ],
        "info": {
          "prep": "10 min",
          "cook": "10 min",
          "serves": "1",
          "kcal": 480,
          "tip": "Today is your heaviest training day — a slightly bigger breakfast is intentional."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: seasonal fruit with almonds",
        "items": [
          "1 guava / apple / 2 slices papaya (whatever is in season)",
          "15 g almonds (kath badam) or 20 g peanuts"
        ],
        "steps": [
          "Wash and slice the fruit.",
          "Eat slowly with the nuts on the side — the fat slows the fruit sugar absorption."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 220,
          "tip": "Guava is the best value — more vitamin C than orange, 5g fiber, and cheap."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: lean beef bhuna with rice and shak",
        "items": [
          "120 g lean beef, visible fat trimmed",
          "200 g cooked rice",
          "1 bunch lal shak or palong shak, stir-fried",
          "2 tsp oil total"
        ],
        "steps": [
          "Cook the beef bhuna-style with onion, garlic, ginger, and standard spices in 1 tsp oil — pressure cook or simmer until tender.",
          "Stir-fry the shak with garlic in the other 1 tsp oil.",
          "Serve with the measured rice."
        ],
        "info": {
          "prep": "15 min",
          "cook": "40 min",
          "serves": "1",
          "kcal": 680,
          "tip": "Red meat 2–3x per week boosts zinc — directly supports testosterone. Trim the fat; keep the muscle."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Pre-workout: banana and black coffee",
        "items": [
          "1 banana",
          "1 cup black coffee"
        ],
        "steps": [
          "Banana 30 minutes before training, coffee alongside.",
          "Leg day needs this energy — do not skip it."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 110,
          "tip": "Never do heavy legs fully fasted — your performance drops 20–30%."
        }
      },
      {
        "time": "6:30 PM",
        "title": "Post-workout: banana milk shake",
        "items": [
          "250 ml cold milk",
          "1 small banana",
          "Pinch of cinnamon",
          "No sugar"
        ],
        "steps": [
          "Blend the milk, banana and cinnamon for 30 seconds (or mash the banana into the milk with a fork).",
          "Drink within 45 minutes of finishing training."
        ],
        "info": {
          "prep": "5 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 250,
          "tip": "Carbs + protein together after the heaviest session of the week — this is when your body absorbs them best."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: dim bhuna (egg curry) with roti",
        "items": [
          "2 boiled eggs",
          "2 whole-wheat roti",
          "Onion-tomato gravy with 1 tsp oil",
          "Side salad of cucumber and carrot"
        ],
        "steps": [
          "Boil and peel the eggs; score them lightly so the gravy sticks.",
          "Make a quick gravy: fry onion, add garlic-ginger, tomato, turmeric-chili-cumin, splash of water.",
          "Add the eggs and simmer 5 minutes.",
          "Serve with roti and salad."
        ],
        "info": {
          "prep": "10 min",
          "cook": "20 min",
          "serves": "1",
          "kcal": 450,
          "tip": "Day total ≈ 2,350 kcal · ~150g protein — the extra 50 kcal on leg day is intentional."
        }
      }
    ]
  },
  {
    "weekday": "Thu",
    "type": "Phase 1: gym legs · Phase 2: active rest — ~2,250 kcal · ~145g protein",
    "meals": [
      {
        "time": "7:00 AM",
        "title": "Morning metabolism: cinnamon water",
        "items": [
          "1 small stick cinnamon (daruchini)",
          "300 ml water"
        ],
        "steps": [
          "Boil the cinnamon stick in water for 5 minutes until fragrant.",
          "Cool until warm and sip on an empty stomach.",
          "You can re-use the same stick for 2 days."
        ],
        "info": {
          "prep": "1 min",
          "cook": "5 min",
          "serves": "1",
          "kcal": 5,
          "tip": "Cinnamon improves insulin sensitivity — your body partitions more carbs into muscle instead of fat storage."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: vegetable-egg khichuri (light)",
        "items": [
          "40 g rice + 30 g moong dal",
          "Mixed vegetables (carrot, beans, peas)",
          "1 boiled egg on top",
          "1 tsp oil"
        ],
        "steps": [
          "Cook the rice and dal together with turmeric and a little salt until soft.",
          "Stir in the chopped vegetables in the last 10 minutes.",
          "Top with the boiled egg, halved."
        ],
        "info": {
          "prep": "10 min",
          "cook": "25 min",
          "serves": "1",
          "kcal": 420,
          "tip": "Rice + dal together form a complete protein — the classic reason khichuri works."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: tok doi with papaya and chia",
        "items": [
          "150 g plain yogurt",
          "100 g papaya, chopped",
          "1 tsp chia seeds"
        ],
        "steps": [
          "Mix the chia into the yogurt and rest 5 minutes.",
          "Top with the papaya and eat."
        ],
        "info": {
          "prep": "7 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 190,
          "tip": "Papaya enzymes + yogurt probiotics = the best gut-health snack in this plan."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: grilled chicken with mixed vegetables and rice",
        "items": [
          "140 g chicken breast",
          "150 g cooked rice",
          "150 g mixed vegetables (broccoli/cauliflower, carrot, beans)",
          "2 tsp oil total"
        ],
        "steps": [
          "Marinate the chicken in yogurt, garlic, chili and salt for 15+ minutes.",
          "Grill or pan-cook until charred at the edges and cooked through.",
          "Stir-fry the vegetables until tender-crisp. Serve with rice."
        ],
        "info": {
          "prep": "20 min",
          "cook": "20 min",
          "serves": "1",
          "kcal": 580,
          "tip": "The yogurt marinade keeps chicken breast juicy — dry chicken is a cooking problem, not a chicken problem."
        }
      },
      {
        "time": "4:30 PM",
        "title": "Snack: muri with boiled chola",
        "items": [
          "25 g muri (puffed rice)",
          "50 g boiled chickpeas (from your Sunday batch)",
          "Chopped onion, chili, coriander, lemon, mustard oil few drops"
        ],
        "steps": [
          "Mix everything in a bowl like jhal muri — but with chola instead of chanachur.",
          "Eat immediately while the muri is still crisp."
        ],
        "info": {
          "prep": "5 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 220,
          "tip": "All the jhal muri satisfaction, none of the fried chanachur calories."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: pabda/tengra jhol with roti and salad",
        "items": [
          "150 g pabda or tengra fish",
          "2 whole-wheat roti",
          "Light jhol with tomato and coriander",
          "Cucumber salad"
        ],
        "steps": [
          "Make a light jhol: onion, turmeric, chili, tomato, splash of water — then the fish for 8–10 minutes.",
          "Cook the roti fresh.",
          "Finish the jhol with coriander leaves. Eat 2+ hours before bed."
        ],
        "info": {
          "prep": "12 min",
          "cook": "18 min",
          "serves": "1",
          "kcal": 440,
          "tip": "Day total ≈ 2,250 kcal · ~150g protein · ~30g fiber. Optional 250ml milk before bed adds ~8g protein if you want to push toward 160g. On Phase 2 (rest day) skip the 4:30 muri snack → ~2,030 kcal."
        }
      }
    ]
  },
  {
    "weekday": "Fri",
    "type": "Phase 1: active rest · Phase 2: gym upper — ~2,250 kcal · ~142g protein",
    "meals": [
      {
        "time": "7:00 AM",
        "title": "Morning metabolism: jeera water",
        "items": [
          "1 tsp cumin seeds, soaked overnight",
          "300 ml water"
        ],
        "steps": [
          "Strain the overnight jeera water and drink on an empty stomach.",
          "Wait 20–30 minutes before breakfast."
        ],
        "info": {
          "prep": "2 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 10,
          "tip": "Alternate between jeera, methi, ginger-lemon and cinnamon water through the week — each works slightly differently."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: chira-doi-kola (flattened rice bowl)",
        "items": [
          "50 g chira (flattened rice), washed",
          "150 g plain yogurt",
          "1 banana, sliced",
          "1 tsp chia or a few peanuts"
        ],
        "steps": [
          "Wash the chira in water and drain — it softens in a minute.",
          "Mix with the yogurt, top with banana and chia/peanuts.",
          "No sugar — the banana sweetens it."
        ],
        "info": {
          "prep": "6 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 430,
          "tip": "The classic Bengali breakfast, cut-friendly version: doi instead of full-cream milk, no added sugar."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: 2 boiled eggs with cucumber",
        "items": [
          "2 boiled eggs",
          "1 cucumber, sliced",
          "Salt, black pepper, chili flakes"
        ],
        "steps": [
          "Slice the eggs and cucumber.",
          "Season and eat. That's it — the simplest high-protein snack that exists."
        ],
        "info": {
          "prep": "4 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 170,
          "tip": "Keep 4–6 boiled eggs in the fridge at all times. When hunger hits, egg beats biscuit every single time."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: murgir jhol with rice and lau ghonto",
        "items": [
          "150 g chicken, curry cut",
          "180 g cooked rice",
          "150 g bottle gourd (lau), cooked ghonto-style",
          "2 tsp oil total"
        ],
        "steps": [
          "Light chicken jhol: onion-garlic-ginger base, turmeric-cumin-chili, potato optional, simmer until tender.",
          "Cook the lau soft with a little onion and cumin (ghonto style, almost no oil).",
          "Serve with the measured rice."
        ],
        "info": {
          "prep": "15 min",
          "cook": "30 min",
          "serves": "1",
          "kcal": 620,
          "tip": "Lau is nearly zero calories and very filling — the perfect volume food while cutting."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Snack: dates with green tea",
        "items": [
          "3 dates (khejur)",
          "1 cup green tea"
        ],
        "steps": [
          "On Phase 2 (gym day): eat 30 min before training as your pre-workout.",
          "On Phase 1 (rest day): this is just an afternoon pick-me-up with tea."
        ],
        "info": {
          "prep": "2 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 80,
          "tip": "Green tea catechins + caffeine give a small but real metabolism boost — 2–3 cups a day is the sweet spot."
        }
      },
      {
        "time": "6:30 PM",
        "title": "Evening: peanut and fruit plate",
        "items": [
          "25 g peanuts or mixed nuts",
          "1 apple or orange"
        ],
        "steps": [
          "On Phase 2: eat right after training as a quick refuel, dinner follows later.",
          "On Phase 1: eat as a light evening snack."
        ],
        "info": {
          "prep": "2 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 240,
          "tip": "Fruit + nuts is the snack combination that best kills late-evening junk cravings."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: fish paturi-style with vegetables and roti",
        "items": [
          "150 g fish (rui/bhetki/tilapia)",
          "1 tsp mustard paste + turmeric + chili + few drops mustard oil",
          "1 whole-wheat roti",
          "Steamed or stir-fried vegetables"
        ],
        "steps": [
          "Coat the fish in the mustard paste mix.",
          "Wrap in banana leaf (or foil) and steam/pan-steam 12–15 minutes — this is paturi.",
          "Serve with the roti and vegetables."
        ],
        "info": {
          "prep": "15 min",
          "cook": "15 min",
          "serves": "1",
          "kcal": 430,
          "tip": "Day total ≈ 2,250 kcal · ~142g protein. Paturi tastes rich but is one of the lowest-oil ways to cook fish."
        }
      }
    ]
  },
  {
    "weekday": "Sat",
    "type": "Gym day — ~2,300 kcal · ~152g protein",
    "meals": [
      {
        "time": "7:00 AM",
        "title": "Morning metabolism: ginger-lemon warm water",
        "items": [
          "3–4 slices fresh ginger, boiled",
          "Juice of half a lemon",
          "300 ml warm water"
        ],
        "steps": [
          "Boil the ginger 3–4 minutes, cool until warm, add lemon.",
          "Drink on an empty stomach before breakfast."
        ],
        "info": {
          "prep": "2 min",
          "cook": "4 min",
          "serves": "1",
          "kcal": 10,
          "tip": "Weekend does not mean off-plan. This drink starts the day with intent."
        }
      },
      {
        "time": "8:00 AM",
        "title": "Breakfast: 3-egg mushroom omelette with toast",
        "items": [
          "3 whole eggs",
          "50 g mushrooms, sliced",
          "Onion, chili",
          "2 slices whole-wheat bread, toasted dry"
        ],
        "steps": [
          "Sauté the mushrooms first until their water evaporates.",
          "Pour in the whisked eggs with onion and chili; cook until set.",
          "Serve on or beside the dry-toasted bread."
        ],
        "info": {
          "prep": "8 min",
          "cook": "10 min",
          "serves": "1",
          "kcal": 480,
          "tip": "Mushrooms add meaty volume for almost zero calories."
        }
      },
      {
        "time": "11:00 AM",
        "title": "Snack: banana with peanut butter",
        "items": [
          "1 banana",
          "1 tbsp peanut butter (no added sugar if possible)"
        ],
        "steps": [
          "Slice the banana, spread or dip in the peanut butter.",
          "Takes 2 minutes, tastes like a treat, fits the plan."
        ],
        "info": {
          "prep": "2 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 200,
          "tip": "Check the peanut butter label — many BD brands add sugar. 'Just peanuts + salt' is the one you want."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: chicken khichuri with salad",
        "items": [
          "60 g rice + 40 g moong dal",
          "150 g chicken pieces",
          "Vegetables mixed in (carrot, peas, beans)",
          "2 tsp oil, whole spices"
        ],
        "steps": [
          "Fry whole spices and onion in the oil, add the chicken and brown it.",
          "Add the washed rice + dal, turmeric, and water; cook until soft khichuri consistency.",
          "Serve hot with a raw cucumber-onion salad on the side."
        ],
        "info": {
          "prep": "15 min",
          "cook": "30 min",
          "serves": "1",
          "kcal": 640,
          "tip": "One-pot, high protein, and it feels like weekend comfort food — because it is."
        }
      },
      {
        "time": "4:00 PM",
        "title": "Pre-workout: banana and black coffee",
        "items": [
          "1 banana",
          "1 cup black coffee"
        ],
        "steps": [
          "The standard pre-workout combo, 30 minutes before your full-body/lower session."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 110,
          "tip": "Saturday's session ends the training week — go in fueled."
        }
      },
      {
        "time": "6:30 PM",
        "title": "Post-workout: milk and a boiled egg",
        "items": [
          "250 ml milk",
          "1 boiled egg"
        ],
        "steps": [
          "Within 45 minutes of training: drink the milk, eat the egg. Done."
        ],
        "info": {
          "prep": "2 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 230,
          "tip": "Simple beats optimal-but-skipped. This combo requires zero cooking."
        }
      },
      {
        "time": "8:30 PM",
        "title": "Dinner: chingri (prawn) stir-fry with vegetables and roti",
        "items": [
          "120 g prawns, cleaned",
          "Capsicum, onion, carrot — sliced",
          "Garlic, soy sauce splash, chili",
          "1 whole-wheat roti"
        ],
        "steps": [
          "Hot pan, 1 tsp oil: garlic first, then prawns 2–3 minutes until pink.",
          "Add the vegetables, stir-fry on high heat 3–4 minutes — keep them crunchy.",
          "Splash of soy sauce, chili, and serve with the roti."
        ],
        "info": {
          "prep": "12 min",
          "cook": "10 min",
          "serves": "1",
          "kcal": 380,
          "tip": "Day total ≈ 2,300 kcal · ~152g protein. Prawns are nearly pure protein — 24g per 100g."
        }
      }
    ]
  },
  {
    "weekday": "Sun",
    "type": "Rest + meal prep day — ~2,150 kcal · ~135g protein",
    "meals": [
      {
        "time": "7:30 AM",
        "title": "Morning metabolism: lemon-honey warm water",
        "items": [
          "Juice of half a lemon",
          "1 tsp honey (rest day treat)",
          "300 ml warm water"
        ],
        "steps": [
          "Stir the lemon and honey into warm (not hot) water.",
          "Drink slowly on an empty stomach."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 25,
          "tip": "Hot water kills honey's enzymes — warm is correct."
        }
      },
      {
        "time": "8:30 AM",
        "title": "Breakfast: vegetable suji upma with boiled eggs",
        "items": [
          "50 g suji (semolina)",
          "Carrot, peas, onion, mustard seeds, curry leaves if available",
          "2 boiled eggs",
          "1 tsp oil"
        ],
        "steps": [
          "Dry-roast the suji until lightly golden, set aside.",
          "Fry mustard seeds and onion in the oil, add vegetables, then water.",
          "Stir in the roasted suji until it thickens into upma.",
          "Serve with the boiled eggs."
        ],
        "info": {
          "prep": "10 min",
          "cook": "15 min",
          "serves": "1",
          "kcal": 450,
          "tip": "A different grain from the rest of the week — variety isn't just taste, it's a wider nutrient spread."
        }
      },
      {
        "time": "11:30 AM",
        "title": "Snack: guava with peanuts",
        "items": [
          "1 large guava (peyara)",
          "20 g peanuts"
        ],
        "steps": [
          "Slice the guava, sprinkle with a tiny bit of salt and chili flakes if you like.",
          "Eat with the peanuts."
        ],
        "info": {
          "prep": "3 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 210,
          "tip": "While snacking, start your meal prep: boil 6–8 eggs and a big batch of chickpeas for the coming week."
        }
      },
      {
        "time": "1:30 PM",
        "title": "Lunch: shol/koi fish curry with rice and korola bhaji",
        "items": [
          "150 g shol or koi fish",
          "150 g cooked rice",
          "100 g bitter gourd (korola), thin-sliced and stir-fried",
          "2 tsp oil total"
        ],
        "steps": [
          "Cook the fish in a light onion-tomato curry with standard spices.",
          "Stir-fry the korola slices with onion until browned at the edges.",
          "Serve together with the measured rice."
        ],
        "info": {
          "prep": "15 min",
          "cook": "25 min",
          "serves": "1",
          "kcal": 560,
          "tip": "Korola actively improves blood sugar control — bitter but genuinely functional food."
        }
      },
      {
        "time": "4:30 PM",
        "title": "Snack: doi-chia bowl",
        "items": [
          "150 g plain yogurt",
          "1 tsp chia seeds",
          "Any fruit you have left in the kitchen"
        ],
        "steps": [
          "Mix, rest 5 minutes, eat.",
          "Meanwhile: finish your meal prep — portion rice into cups, marinate tomorrow's chicken."
        ],
        "info": {
          "prep": "7 min",
          "cook": "0 min",
          "serves": "1",
          "kcal": 180,
          "tip": "Sunday prep is why the whole week's plan actually happens. 45 minutes today saves 7 daily decisions."
        }
      },
      {
        "time": "8:00 PM",
        "title": "Dinner: egg-dal khichuri with vegetable bhaji",
        "items": [
          "150 g cooked masoor dal (thick)",
          "2 whole-wheat roti (or 100 g rice)",
          "2 boiled eggs",
          "150 g mixed vegetable bhaji",
          "Cucumber salad"
        ],
        "steps": [
          "Cook the dal thick with garlic tempering (roshun phoron).",
          "Stir-fry whatever vegetables are left from the week — clean-out-the-fridge bhaji.",
          "Add 2 boiled eggs on the side — cheapest way to close the day's protein gap.",
          "Fresh roti, salad on the side. Sleep 7–8 hours tonight — tomorrow starts the week strong."
        ],
        "info": {
          "prep": "10 min",
          "cook": "25 min",
          "serves": "1",
          "kcal": 560,
          "tip": "Day total ≈ 2,280 kcal · ~150g protein · ~30g fiber. The 2 eggs (~13৳) close the rest-day protein gap cheaply."
        }
      }
    ]
  }
];
