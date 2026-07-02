export interface Food {
  id: string;
  name: string;
  cal: number;      // calories per 100g (or per unit if unit !== "g")
  unit: "g" | "ml" | "piece" | "tbsp" | "cup" | "slice";
  category: "protein" | "carbs" | "fat" | "vegetable" | "fruit" | "dairy" | "drink" | "snack";
  calPerUnit?: number; // if the food is counted per piece/slice etc.
}

export const FOODS: Food[] = [
  // ── PROTEIN ──────────────────────────────────────────────────────────────
  { id: "chicken-breast", name: "Chicken Breast (cooked)", cal: 165, unit: "g", category: "protein" },
  { id: "chicken-thigh", name: "Chicken Thigh (cooked)", cal: 209, unit: "g", category: "protein" },
  { id: "egg-whole", name: "Egg (whole)", cal: 155, unit: "piece", category: "protein", calPerUnit: 70 },
  { id: "egg-white", name: "Egg White", cal: 52, unit: "piece", category: "protein", calPerUnit: 17 },
  { id: "tuna-can", name: "Tuna (canned, in water)", cal: 116, unit: "g", category: "protein" },
  { id: "salmon", name: "Salmon (cooked)", cal: 208, unit: "g", category: "protein" },
  { id: "hilsha-fish", name: "Hilsha Fish (cooked)", cal: 273, unit: "g", category: "protein" },
  { id: "rohu-fish", name: "Rohu Fish (cooked)", cal: 97, unit: "g", category: "protein" },
  { id: "prawn", name: "Prawns/Shrimp (cooked)", cal: 99, unit: "g", category: "protein" },
  { id: "beef-lean", name: "Beef (lean, cooked)", cal: 215, unit: "g", category: "protein" },
  { id: "whey-protein", name: "Whey Protein Powder", cal: 385, unit: "g", category: "protein" },

  // ── CARBS ─────────────────────────────────────────────────────────────────
  { id: "rice-white-cooked", name: "White Rice (cooked)", cal: 130, unit: "g", category: "carbs" },
  { id: "rice-brown-cooked", name: "Brown Rice (cooked)", cal: 122, unit: "g", category: "carbs" },
  { id: "roti-wheat", name: "Wheat Roti / Chapati", cal: 297, unit: "piece", category: "carbs", calPerUnit: 80 },
  { id: "bread-white", name: "White Bread", cal: 265, unit: "slice", category: "carbs", calPerUnit: 79 },
  { id: "bread-whole-wheat", name: "Whole Wheat Bread", cal: 247, unit: "slice", category: "carbs", calPerUnit: 69 },
  { id: "oats-dry", name: "Oats (dry)", cal: 389, unit: "g", category: "carbs" },
  { id: "pasta-cooked", name: "Pasta (cooked)", cal: 131, unit: "g", category: "carbs" },
  { id: "potato-boiled", name: "Potato (boiled)", cal: 77, unit: "g", category: "carbs" },
  { id: "sweet-potato", name: "Sweet Potato (cooked)", cal: 86, unit: "g", category: "carbs" },
  { id: "muri", name: "Muri (Puffed Rice)", cal: 402, unit: "g", category: "carbs" },
  { id: "paratha", name: "Paratha (with oil)", cal: 300, unit: "piece", category: "carbs", calPerUnit: 148 },
  { id: "khichuri", name: "Khichuri (rice + lentil)", cal: 110, unit: "g", category: "carbs" },

  // ── DAL & LEGUMES ─────────────────────────────────────────────────────────
  { id: "dal-masoor-cooked", name: "Masoor Dal (red lentil, cooked)", cal: 116, unit: "g", category: "protein" },
  { id: "dal-mung-cooked", name: "Mung Dal (cooked)", cal: 105, unit: "g", category: "protein" },
  { id: "chana-dal-cooked", name: "Chana Dal (cooked)", cal: 164, unit: "g", category: "protein" },
  { id: "chickpea-cooked", name: "Chickpeas (cooked)", cal: 164, unit: "g", category: "protein" },

  // ── VEGETABLES ────────────────────────────────────────────────────────────
  { id: "spinach", name: "Spinach / Palak", cal: 23, unit: "g", category: "vegetable" },
  { id: "broccoli", name: "Broccoli", cal: 34, unit: "g", category: "vegetable" },
  { id: "onion", name: "Onion", cal: 40, unit: "g", category: "vegetable" },
  { id: "tomato", name: "Tomato", cal: 18, unit: "g", category: "vegetable" },
  { id: "carrot", name: "Carrot", cal: 41, unit: "g", category: "vegetable" },
  { id: "cucumber", name: "Cucumber", cal: 15, unit: "g", category: "vegetable" },
  { id: "cabbage", name: "Cabbage / Bandhakopi", cal: 25, unit: "g", category: "vegetable" },
  { id: "bitter-gourd", name: "Bitter Gourd / Karela", cal: 17, unit: "g", category: "vegetable" },
  { id: "bottle-gourd", name: "Bottle Gourd / Lau", cal: 14, unit: "g", category: "vegetable" },
  { id: "eggplant", name: "Eggplant / Begun", cal: 25, unit: "g", category: "vegetable" },

  // ── FRUIT ─────────────────────────────────────────────────────────────────
  { id: "banana", name: "Banana", cal: 89, unit: "piece", category: "fruit", calPerUnit: 89 },
  { id: "apple", name: "Apple", cal: 52, unit: "piece", category: "fruit", calPerUnit: 95 },
  { id: "orange", name: "Orange", cal: 47, unit: "piece", category: "fruit", calPerUnit: 62 },
  { id: "mango", name: "Mango", cal: 60, unit: "g", category: "fruit" },
  { id: "watermelon", name: "Watermelon", cal: 30, unit: "g", category: "fruit" },
  { id: "guava", name: "Guava / Peyara", cal: 68, unit: "g", category: "fruit" },
  { id: "papaya", name: "Papaya / Pepe", cal: 43, unit: "g", category: "fruit" },

  // ── DAIRY ─────────────────────────────────────────────────────────────────
  { id: "milk-full", name: "Full Fat Milk", cal: 61, unit: "ml", category: "dairy" },
  { id: "milk-skim", name: "Skim Milk", cal: 34, unit: "ml", category: "dairy" },
  { id: "yogurt-plain", name: "Plain Yogurt / Dahi", cal: 59, unit: "g", category: "dairy" },
  { id: "paneer", name: "Paneer / Cottage Cheese", cal: 265, unit: "g", category: "dairy" },
  { id: "cheese-slice", name: "Cheese Slice", cal: 340, unit: "slice", category: "dairy", calPerUnit: 68 },

  // ── OILS & FATS ───────────────────────────────────────────────────────────
  { id: "cooking-oil", name: "Cooking Oil (any)", cal: 884, unit: "tbsp", category: "fat", calPerUnit: 120 },
  { id: "ghee", name: "Ghee / Clarified Butter", cal: 900, unit: "tbsp", category: "fat", calPerUnit: 112 },
  { id: "butter", name: "Butter", cal: 717, unit: "tbsp", category: "fat", calPerUnit: 102 },
  { id: "peanut-butter", name: "Peanut Butter", cal: 588, unit: "tbsp", category: "fat", calPerUnit: 94 },
  { id: "almonds", name: "Almonds", cal: 579, unit: "g", category: "fat" },

  // ── DRINKS ───────────────────────────────────────────────────────────────
  { id: "water", name: "Water", cal: 0, unit: "ml", category: "drink" },
  { id: "tea-milk", name: "Tea with Milk & Sugar", cal: 35, unit: "piece", category: "drink", calPerUnit: 35 },
  { id: "black-tea", name: "Black Tea (no sugar)", cal: 2, unit: "piece", category: "drink", calPerUnit: 2 },
  { id: "coffee-black", name: "Black Coffee", cal: 5, unit: "piece", category: "drink", calPerUnit: 5 },
  { id: "lemon-water", name: "Lemon Water", cal: 11, unit: "piece", category: "drink", calPerUnit: 11 },
  { id: "coconut-water", name: "Coconut Water", cal: 19, unit: "ml", category: "drink" },
  { id: "whole-milk-glass", name: "Milk (full glass, 250ml)", cal: 153, unit: "piece", category: "drink", calPerUnit: 153 },

  // ── SNACKS & EXTRAS ───────────────────────────────────────────────────────
  { id: "biscuit-marie", name: "Marie Biscuit", cal: 410, unit: "piece", category: "snack", calPerUnit: 29 },
  { id: "peanuts-roasted", name: "Roasted Peanuts", cal: 567, unit: "g", category: "snack" },
  { id: "dates", name: "Dates (Khejur)", cal: 277, unit: "piece", category: "snack", calPerUnit: 20 },
  { id: "honey", name: "Honey", cal: 304, unit: "tbsp", category: "snack", calPerUnit: 64 },
  { id: "sugar", name: "Sugar", cal: 387, unit: "tbsp", category: "carbs", calPerUnit: 48 },

  // ── COMMON MEALS ─────────────────────────────────────────────────────────
  { id: "dal-rice-plate", name: "Dal + Rice (full plate)", cal: 118, unit: "g", category: "carbs" },
  { id: "chicken-curry", name: "Chicken Curry (with gravy)", cal: 150, unit: "g", category: "protein" },
  { id: "fish-curry", name: "Fish Curry (with gravy)", cal: 120, unit: "g", category: "protein" },
  { id: "egg-bhurji", name: "Egg Bhurji (2 eggs)", cal: 200, unit: "piece", category: "protein", calPerUnit: 200 },
  { id: "omelette", name: "Omelette (2 eggs, no oil)", cal: 180, unit: "piece", category: "protein", calPerUnit: 180 },
  { id: "boiled-eggs-2", name: "Boiled Eggs (2 pcs)", cal: 140, unit: "piece", category: "protein", calPerUnit: 140 },
];

export function searchFoods(query: string): Food[] {
  if (!query.trim()) return FOODS.slice(0, 12);
  const q = query.toLowerCase();
  return FOODS.filter(f => f.name.toLowerCase().includes(q)).slice(0, 12);
}
