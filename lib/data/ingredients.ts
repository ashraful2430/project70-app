export type UnitKey = "g" | "ml" | "tbsp" | "tsp" | "piece" | "cup";

export type IngCategory =
  | "flour" | "oil" | "protein" | "vegetable" | "spice"
  | "dairy" | "grain" | "seed" | "sweetener" | "fruit"
  | "nut" | "beverage" | "prepared" | "other";

export interface Ingredient {
  id: string;
  name: string;
  aliases: string[];
  cal100: number;          // kcal per 100g (always the base)
  units: UnitKey[];
  gramsPerUnit: Partial<Record<UnitKey, number>>;
  defaultUnit: UnitKey;
  defaultAmount: number;
  category: IngCategory;
}

export function calcIngredientCal(ing: Ingredient, amount: number, unit: UnitKey): number {
  const grams = (unit === "g" || unit === "ml") ? amount : (ing.gramsPerUnit[unit] ?? 0) * amount;
  return Math.round((ing.cal100 / 100) * grams);
}

export const INGREDIENTS: Ingredient[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // FLOURS & STARCHES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "maida", name: "Maida / All-Purpose Flour",
    aliases: ["moida", "maida", "all purpose flour", "white flour", "ময়দা"],
    cal100: 364, category: "flour",
    units: ["g", "cup", "tbsp"], gramsPerUnit: { cup: 120, tbsp: 8 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "atta", name: "Atta / Whole Wheat Flour",
    aliases: ["brown moida", "atta", "whole wheat flour", "আটা", "brown flour", "wholemeal"],
    cal100: 340, category: "flour",
    units: ["g", "cup", "tbsp"], gramsPerUnit: { cup: 120, tbsp: 8 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "rice-flour", name: "Rice Flour (Chaler Guro)",
    aliases: ["rice flour", "chaler guro", "চালের গুড়া", "rice powder"],
    cal100: 366, category: "flour",
    units: ["g", "cup", "tbsp"], gramsPerUnit: { cup: 158, tbsp: 10 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "suji", name: "Suji / Semolina (Rawa)",
    aliases: ["suji", "sooji", "semolina", "সুজি", "rava", "rawa"],
    cal100: 360, category: "flour",
    units: ["g", "cup", "tbsp"], gramsPerUnit: { cup: 167, tbsp: 11 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "besan", name: "Besan / Chickpea Flour",
    aliases: ["besan", "gram flour", "chickpea flour", "বেসন", "cholar guro"],
    cal100: 387, category: "flour",
    units: ["g", "cup", "tbsp"], gramsPerUnit: { cup: 92, tbsp: 6 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "cornflour", name: "Corn Flour / Corn Starch",
    aliases: ["corn flour", "cornflour", "cornstarch", "কর্ন ফ্লাওয়ার", "corn starch"],
    cal100: 381, category: "flour",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 8, tsp: 2.7 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "arrowroot-flour", name: "Arrowroot Flour (Arrowroot Guro)",
    aliases: ["arrowroot", "arrowroot flour", "অ্যারোরুট"],
    cal100: 357, category: "flour",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 8, tsp: 2.7 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "barley-flour", name: "Barley Flour",
    aliases: ["barley flour", "jow guro", "যব", "jab"],
    cal100: 345, category: "flour",
    units: ["g", "cup"], gramsPerUnit: { cup: 120 },
    defaultUnit: "g", defaultAmount: 100,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OILS & FATS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "soyabean-oil", name: "Soyabean Oil",
    aliases: ["soyabean oil", "soybean oil", "vegetable oil", "সয়াবিন তেল", "cooking oil"],
    cal100: 884, category: "oil",
    units: ["g", "ml", "tbsp", "tsp"], gramsPerUnit: { tbsp: 14, tsp: 4.7 },
    defaultUnit: "tbsp", defaultAmount: 2,
  },
  {
    id: "mustard-oil", name: "Mustard Oil (Sarisher Tel)",
    aliases: ["mustard oil", "sarisher tel", "সরিষার তেল", "sorisa tel"],
    cal100: 884, category: "oil",
    units: ["g", "ml", "tbsp", "tsp"], gramsPerUnit: { tbsp: 14, tsp: 4.7 },
    defaultUnit: "tbsp", defaultAmount: 2,
  },
  {
    id: "coconut-oil", name: "Coconut Oil (Narkel Tel)",
    aliases: ["coconut oil", "narkel tel", "নারকেল তেল"],
    cal100: 862, category: "oil",
    units: ["g", "ml", "tbsp", "tsp"], gramsPerUnit: { tbsp: 14, tsp: 4.7 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "palm-oil", name: "Palm Oil (Palm Tel)",
    aliases: ["palm oil", "palm tel", "পাম তেল"],
    cal100: 884, category: "oil",
    units: ["g", "ml", "tbsp", "tsp"], gramsPerUnit: { tbsp: 14, tsp: 4.7 },
    defaultUnit: "tbsp", defaultAmount: 2,
  },
  {
    id: "sunflower-oil", name: "Sunflower Oil",
    aliases: ["sunflower oil", "সূর্যমুখী তেল"],
    cal100: 884, category: "oil",
    units: ["g", "ml", "tbsp", "tsp"], gramsPerUnit: { tbsp: 14, tsp: 4.7 },
    defaultUnit: "tbsp", defaultAmount: 2,
  },
  {
    id: "olive-oil", name: "Olive Oil",
    aliases: ["olive oil", "জলপাই তেল"],
    cal100: 884, category: "oil",
    units: ["g", "ml", "tbsp", "tsp"], gramsPerUnit: { tbsp: 14, tsp: 4.7 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "rice-bran-oil", name: "Rice Bran Oil",
    aliases: ["rice bran oil", "রাইস ব্র্যান অয়েল"],
    cal100: 884, category: "oil",
    units: ["g", "ml", "tbsp", "tsp"], gramsPerUnit: { tbsp: 14, tsp: 4.7 },
    defaultUnit: "tbsp", defaultAmount: 2,
  },
  {
    id: "ghee", name: "Ghee / Clarified Butter (Gi)",
    aliases: ["ghee", "gi", "clarified butter", "ঘি"],
    cal100: 900, category: "oil",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 13, tsp: 4.3 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "butter", name: "Butter (Makhan)",
    aliases: ["butter", "মাখন", "makhan"],
    cal100: 717, category: "oil",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 14, tsp: 4.7 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "margarine", name: "Margarine / Dalda",
    aliases: ["margarine", "dalda", "ডালডা", "vanaspati"],
    cal100: 717, category: "oil",
    units: ["g", "tbsp"], gramsPerUnit: { tbsp: 14 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SEEDS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "chia-seeds", name: "Chia Seeds",
    aliases: ["chia seed", "chia seeds", "চিয়া সিড"],
    cal100: 486, category: "seed",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 12, tsp: 4 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "flax-seeds", name: "Flax Seeds / Linseed (Tisi)",
    aliases: ["flax seed", "linseed", "তিসি বীজ", "alsi", "tisi"],
    cal100: 534, category: "seed",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 10, tsp: 3.3 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "sesame-seeds", name: "Sesame Seeds / Til",
    aliases: ["sesame", "til", "teel", "তিল"],
    cal100: 573, category: "seed",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 9, tsp: 3 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "sunflower-seeds", name: "Sunflower Seeds",
    aliases: ["sunflower seed", "sunflower seeds", "সূর্যমুখী বীজ"],
    cal100: 584, category: "seed",
    units: ["g", "tbsp"], gramsPerUnit: { tbsp: 9 },
    defaultUnit: "g", defaultAmount: 30,
  },
  {
    id: "pumpkin-seeds", name: "Pumpkin Seeds (Kumrar Bij)",
    aliases: ["pumpkin seeds", "kumrar bij", "কুমড়ার বীজ", "pepitas"],
    cal100: 559, category: "seed",
    units: ["g", "tbsp"], gramsPerUnit: { tbsp: 10 },
    defaultUnit: "g", defaultAmount: 30,
  },
  {
    id: "poppy-seeds", name: "Poppy Seeds / Posto",
    aliases: ["poppy seeds", "posto", "পোস্ত", "khus khus"],
    cal100: 525, category: "seed",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 9, tsp: 3 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "isabgul", name: "Isabgul / Psyllium Husk",
    aliases: ["isabgul", "psyllium husk", "ইসবগুল", "isapgol"],
    cal100: 20, category: "seed",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 6, tsp: 2 },
    defaultUnit: "tsp", defaultAmount: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EGGS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "egg-whole", name: "Egg (whole)",
    aliases: ["egg", "dim", "ডিম", "whole egg", "hen egg"],
    cal100: 155, category: "protein",
    units: ["piece", "g"], gramsPerUnit: { piece: 50 },
    defaultUnit: "piece", defaultAmount: 2,
  },
  {
    id: "egg-white", name: "Egg White",
    aliases: ["egg white", "dimer safed", "ডিমের সাদা অংশ", "egg albumen"],
    cal100: 52, category: "protein",
    units: ["piece", "g"], gramsPerUnit: { piece: 33 },
    defaultUnit: "piece", defaultAmount: 2,
  },
  {
    id: "egg-yolk", name: "Egg Yolk",
    aliases: ["egg yolk", "dimer kushi", "ডিমের কুসুম"],
    cal100: 322, category: "protein",
    units: ["piece", "g"], gramsPerUnit: { piece: 17 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "duck-egg", name: "Duck Egg (Hasir Dim)",
    aliases: ["duck egg", "hasir dim", "হাঁসের ডিম"],
    cal100: 185, category: "protein",
    units: ["piece", "g"], gramsPerUnit: { piece: 70 },
    defaultUnit: "piece", defaultAmount: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // POULTRY & MEAT
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "chicken-breast", name: "Chicken Breast (Murgi Buk)",
    aliases: ["chicken breast", "murgi", "মুরগির বুক", "chicken"],
    cal100: 165, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "chicken-thigh", name: "Chicken Thigh / Leg (Murgi Raan)",
    aliases: ["chicken thigh", "chicken leg", "মুরগির রান", "chicken raan"],
    cal100: 209, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "chicken-wing", name: "Chicken Wing",
    aliases: ["chicken wing", "murgi shapta", "মুরগির শাপটা"],
    cal100: 203, category: "protein",
    units: ["g", "piece"], gramsPerUnit: { piece: 49 },
    defaultUnit: "piece", defaultAmount: 4,
  },
  {
    id: "chicken-liver", name: "Chicken Liver (Murgi Koleji)",
    aliases: ["chicken liver", "koleji", "কলিজা", "murgi koleji"],
    cal100: 119, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "duck-meat", name: "Duck Meat (Haas)",
    aliases: ["duck", "duck meat", "হাঁস", "haas er mangsho"],
    cal100: 337, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "beef-lean", name: "Beef / Lean (Gorur Mangsho)",
    aliases: ["beef", "gorur mangsho", "গরুর মাংস", "cow meat"],
    cal100: 215, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "beef-liver", name: "Beef Liver (Gorur Koleji)",
    aliases: ["beef liver", "gorur koleji", "গরুর কলিজা"],
    cal100: 135, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "mutton-goat", name: "Mutton / Goat Meat (Khashir Mangsho)",
    aliases: ["mutton", "goat meat", "khashi", "khasir mangsho", "খাসির মাংস"],
    cal100: 294, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FISH & SEAFOOD
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "tilapia", name: "Tilapia Fish (Telapia)",
    aliases: ["tilapia", "তেলাপিয়া", "telapia"],
    cal100: 128, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "rohu", name: "Rohu Fish (Rui Mach)",
    aliases: ["rohu", "rui", "রুই মাছ", "rui mach"],
    cal100: 97, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "catla", name: "Catla Fish (Katla Mach)",
    aliases: ["catla", "katla", "কাতলা মাছ", "katla mach"],
    cal100: 111, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "hilsha", name: "Hilsha Fish (Ilish Mach)",
    aliases: ["hilsha", "ilish", "ইলিশ মাছ", "ilish mach", "hilsa"],
    cal100: 273, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "pangash", name: "Pangash Fish (Pangasius)",
    aliases: ["pangash", "pangasius", "পাঙাশ মাছ"],
    cal100: 131, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "bhetki", name: "Bhetki / Barramundi",
    aliases: ["bhetki", "barramundi", "ভেটকি মাছ"],
    cal100: 97, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "rupchanda", name: "Rupchanda / Pomfret",
    aliases: ["rupchanda", "pomfret", "রূপচাঁদা মাছ"],
    cal100: 96, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "koi-fish", name: "Koi Fish (Climbing Perch)",
    aliases: ["koi", "koi fish", "কই মাছ", "koi mach"],
    cal100: 97, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "pabda", name: "Pabda Fish (Butter Catfish)",
    aliases: ["pabda", "পাবদা মাছ", "pabda mach"],
    cal100: 135, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "magur", name: "Magur / Catfish",
    aliases: ["magur", "catfish", "মাগুর মাছ", "magur mach"],
    cal100: 116, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "shol-fish", name: "Shol Fish (Snakehead)",
    aliases: ["shol", "shol fish", "শোল মাছ", "snakehead"],
    cal100: 103, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "puti-mach", name: "Puti Mach (Silver Barb)",
    aliases: ["puti", "puti mach", "পুঁটি মাছ"],
    cal100: 100, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "tengra", name: "Tengra Fish (Stinging Catfish)",
    aliases: ["tengra", "তেংরা মাছ", "tengra mach"],
    cal100: 110, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "baim-fish", name: "Baim / Spiny Eel",
    aliases: ["baim", "baim mach", "বাইম মাছ"],
    cal100: 126, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "chital-fish", name: "Chital Fish (Chitol Mach)",
    aliases: ["chital", "chitol", "চিতল মাছ", "chitol mach"],
    cal100: 108, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "prawn", name: "Prawn / Shrimp (Chingri)",
    aliases: ["prawn", "shrimp", "chingri", "চিংড়ি মাছ"],
    cal100: 99, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "crab", name: "Crab (Kakra / Kankra)",
    aliases: ["crab", "kakra", "কাঁকড়া", "kankra"],
    cal100: 97, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "shutki", name: "Dried Fish / Shutki Mach",
    aliases: ["shutki", "shutki mach", "শুটকি মাছ", "dried fish"],
    cal100: 290, category: "protein",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 50,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DAL & LEGUMES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "masoor-dal", name: "Masoor Dal / Red Lentil (raw)",
    aliases: ["masoor dal", "masur dal", "red lentil", "মসুর ডাল"],
    cal100: 353, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 192 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "mung-dal", name: "Mung Dal / Moong (raw)",
    aliases: ["mung dal", "moong dal", "মুগ ডাল", "green lentil"],
    cal100: 347, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 207 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "chana-dal", name: "Chana Dal / Cholar Dal (raw)",
    aliases: ["chana dal", "cholar dal", "ছোলার ডাল", "split chickpea"],
    cal100: 378, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 200 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "motor-dal", name: "Motor Dal / Yellow Split Pea",
    aliases: ["motor dal", "yellow split pea", "মটর ডাল"],
    cal100: 348, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 200 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "biuli-dal", name: "Biulir Dal / Urad Dal (Black Gram)",
    aliases: ["biuli dal", "biulir dal", "urad dal", "বিউলির ডাল", "black gram"],
    cal100: 341, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 200 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "khesari-dal", name: "Khesari Dal / Grass Pea",
    aliases: ["khesari dal", "খেসারির ডাল", "grass pea"],
    cal100: 345, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 200 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "chickpeas-whole", name: "Chickpeas / Kabuli Chana (raw)",
    aliases: ["chickpeas", "kabuli chana", "boot", "বুট", "kabuli chola"],
    cal100: 364, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 200 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "kidney-beans", name: "Kidney Beans / Rajma (raw)",
    aliases: ["kidney beans", "rajma", "রাজমা", "red beans"],
    cal100: 333, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 185 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "soyabean-grain", name: "Soyabean / Soy (raw)",
    aliases: ["soyabean", "soybean", "soy", "সয়াবিন বীজ"],
    cal100: 446, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 186 },
    defaultUnit: "g", defaultAmount: 50,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEGETABLES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "onion", name: "Onion (Piyaj)",
    aliases: ["onion", "pyaz", "piyaj", "পেঁয়াজ"],
    cal100: 40, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 110 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "garlic", name: "Garlic (Roshun)",
    aliases: ["garlic", "roshun", "রসুন", "lasun"],
    cal100: 149, category: "vegetable",
    units: ["g", "piece", "tsp"], gramsPerUnit: { piece: 3, tsp: 5 },
    defaultUnit: "piece", defaultAmount: 4,
  },
  {
    id: "ginger", name: "Ginger (Ada)",
    aliases: ["ginger", "ada", "আদা"],
    cal100: 80, category: "vegetable",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 6, tsp: 2 },
    defaultUnit: "tsp", defaultAmount: 1,
  },
  {
    id: "green-chili", name: "Green Chili (Kacha Morich)",
    aliases: ["green chili", "kacha morich", "কাঁচা মরিচ", "green pepper"],
    cal100: 40, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 5 },
    defaultUnit: "piece", defaultAmount: 3,
  },
  {
    id: "tomato", name: "Tomato",
    aliases: ["tomato", "tamato", "টমেটো"],
    cal100: 18, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 120 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "potato", name: "Potato (Alu)",
    aliases: ["potato", "alu", "আলু"],
    cal100: 77, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 150 },
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "sweet-potato", name: "Sweet Potato (Misty Alu)",
    aliases: ["sweet potato", "misty alu", "মিষ্টি আলু", "ranga alu"],
    cal100: 86, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 130 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "spinach", name: "Spinach / Palak Shak",
    aliases: ["spinach", "palak", "পালং শাক", "palak shak"],
    cal100: 23, category: "vegetable",
    units: ["g", "cup"], gramsPerUnit: { cup: 30 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "red-amaranth", name: "Red Amaranth / Lal Shak",
    aliases: ["lal shak", "red amaranth", "লাল শাক", "red spinach"],
    cal100: 23, category: "vegetable",
    units: ["g", "cup"], gramsPerUnit: { cup: 30 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "water-spinach", name: "Water Spinach / Kalmishak (Kolmi Shak)",
    aliases: ["kalmishak", "kolmi shak", "water spinach", "কলমি শাক", "morning glory"],
    cal100: 19, category: "vegetable",
    units: ["g", "cup"], gramsPerUnit: { cup: 30 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "mustard-greens", name: "Mustard Greens / Shorshe Shak",
    aliases: ["shorshe shak", "mustard greens", "সর্ষে শাক", "mustard leaves"],
    cal100: 27, category: "vegetable",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "cabbage", name: "Cabbage (Bandhakopi)",
    aliases: ["cabbage", "bandhakopi", "বাঁধাকপি"],
    cal100: 25, category: "vegetable",
    units: ["g", "cup"], gramsPerUnit: { cup: 89 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "cauliflower", name: "Cauliflower (Phulkopi)",
    aliases: ["cauliflower", "phulkopi", "ফুলকপি"],
    cal100: 25, category: "vegetable",
    units: ["g", "cup"], gramsPerUnit: { cup: 107 },
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "broccoli", name: "Broccoli",
    aliases: ["broccoli", "ব্রকলি"],
    cal100: 34, category: "vegetable",
    units: ["g", "cup"], gramsPerUnit: { cup: 91 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "eggplant", name: "Eggplant / Brinjal (Begun)",
    aliases: ["eggplant", "brinjal", "begun", "বেগুন"],
    cal100: 25, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 130 },
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "okra", name: "Okra / Lady's Finger (Dherosh)",
    aliases: ["okra", "lady's finger", "ladies finger", "dherosh", "ঢেঁড়শ", "bhindi"],
    cal100: 33, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 15 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "bitter-gourd", name: "Bitter Gourd / Korola (Karela)",
    aliases: ["bitter gourd", "korola", "karela", "করলা", "bittermelon"],
    cal100: 17, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 90 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "bottle-gourd", name: "Bottle Gourd (Lau)",
    aliases: ["bottle gourd", "lau", "লাউ", "calabash"],
    cal100: 14, category: "vegetable",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "pointed-gourd", name: "Pointed Gourd (Potol / Parwal)",
    aliases: ["potol", "pointed gourd", "পটোল", "parwal"],
    cal100: 20, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 40 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "ash-gourd", name: "Ash Gourd (Chalkumra)",
    aliases: ["ash gourd", "chalkumra", "চালকুমড়া", "winter melon"],
    cal100: 13, category: "vegetable",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "ridge-gourd", name: "Ridge Gourd (Jhinge)",
    aliases: ["ridge gourd", "jhinge", "ঝিঙে", "luffa"],
    cal100: 17, category: "vegetable",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "snake-gourd", name: "Snake Gourd (Chichinga)",
    aliases: ["snake gourd", "chichinga", "চিচিঙ্গা"],
    cal100: 18, category: "vegetable",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "pumpkin", name: "Pumpkin (Kumra / Mishti Kumra)",
    aliases: ["pumpkin", "kumra", "mishti kumra", "কুমড়া"],
    cal100: 26, category: "vegetable",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "raw-banana", name: "Raw Banana / Green Banana (Kacha Kola)",
    aliases: ["raw banana", "kacha kola", "green banana", "কাঁচা কলা"],
    cal100: 109, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 100 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "jackfruit-raw", name: "Raw Jackfruit (Kacha Kathal / Echore)",
    aliases: ["raw jackfruit", "kacha kathal", "echore", "কাঁচা কাঁঠাল", "echor"],
    cal100: 95, category: "vegetable",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "drumstick", name: "Drumstick / Moringa (Sajina)",
    aliases: ["drumstick", "sajina", "সজনে", "moringa", "sajne"],
    cal100: 37, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 40 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "taro", name: "Taro Root / Kochu",
    aliases: ["taro", "kochu", "কচু", "arbi"],
    cal100: 112, category: "vegetable",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "radish", name: "Radish (Mula)",
    aliases: ["radish", "mula", "মুলা", "daikon"],
    cal100: 16, category: "vegetable",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "beetroot", name: "Beetroot (Beet)",
    aliases: ["beetroot", "beet", "বিট", "chukandar"],
    cal100: 43, category: "vegetable",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "carrot", name: "Carrot (Gajar)",
    aliases: ["carrot", "gajar", "গাজর"],
    cal100: 41, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 60 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "cucumber", name: "Cucumber (Shasha)",
    aliases: ["cucumber", "shasha", "শশা", "kakri"],
    cal100: 15, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 200 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "bell-pepper", name: "Bell Pepper / Capsicum (Capsicum)",
    aliases: ["bell pepper", "capsicum", "ক্যাপসিকাম", "sweet pepper"],
    cal100: 31, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 120 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "green-peas", name: "Green Peas (Motor Shim)",
    aliases: ["green peas", "motor shim", "মটরশুঁটি", "shim"],
    cal100: 81, category: "vegetable",
    units: ["g", "cup"], gramsPerUnit: { cup: 145 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "mushroom", name: "Mushroom (Mushroom)",
    aliases: ["mushroom", "মাশরুম", "fungi"],
    cal100: 22, category: "vegetable",
    units: ["g", "cup"], gramsPerUnit: { cup: 70 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "corn-sweet", name: "Sweet Corn / Corn (Bhutta)",
    aliases: ["corn", "sweet corn", "bhutta", "ভুট্টা"],
    cal100: 86, category: "vegetable",
    units: ["g", "piece"], gramsPerUnit: { piece: 90 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "green-papaya", name: "Green Papaya (Kacha Pepe)",
    aliases: ["green papaya", "kacha pepe", "কাঁচা পেঁপে"],
    cal100: 32, category: "vegetable",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPICES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "turmeric", name: "Turmeric Powder (Holud)",
    aliases: ["turmeric", "holud", "হলুদ", "haldi"],
    cal100: 312, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 3 },
    defaultUnit: "tsp", defaultAmount: 1,
  },
  {
    id: "red-chili-powder", name: "Red Chili Powder (Morich Guro)",
    aliases: ["red chili powder", "morich guro", "মরিচ গুড়া", "chili powder"],
    cal100: 282, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 2.7 },
    defaultUnit: "tsp", defaultAmount: 1,
  },
  {
    id: "dried-red-chili", name: "Dried Red Chili (Shukno Morich)",
    aliases: ["dried red chili", "shukno morich", "শুকনো মরিচ", "whole red chili"],
    cal100: 282, category: "spice",
    units: ["g", "piece"], gramsPerUnit: { piece: 2 },
    defaultUnit: "piece", defaultAmount: 3,
  },
  {
    id: "cumin-powder", name: "Cumin Powder (Jeera Guro)",
    aliases: ["cumin powder", "jeera", "জিরা গুড়া", "zeera powder"],
    cal100: 375, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 2.6 },
    defaultUnit: "tsp", defaultAmount: 1,
  },
  {
    id: "cumin-seeds", name: "Cumin Seeds (Jeera Dana)",
    aliases: ["cumin seeds", "jeera dana", "জিরা", "whole cumin"],
    cal100: 375, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 2.1 },
    defaultUnit: "tsp", defaultAmount: 1,
  },
  {
    id: "coriander-powder", name: "Coriander Powder (Dhania Guro)",
    aliases: ["coriander powder", "dhania", "ধনিয়া গুড়া", "dhoniya"],
    cal100: 298, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 2.5 },
    defaultUnit: "tsp", defaultAmount: 1,
  },
  {
    id: "coriander-leaves", name: "Coriander Leaves / Dhoniya Pata",
    aliases: ["coriander leaves", "dhoniya pata", "ধনিয়া পাতা", "cilantro"],
    cal100: 23, category: "spice",
    units: ["g", "tbsp"], gramsPerUnit: { tbsp: 4 },
    defaultUnit: "g", defaultAmount: 10,
  },
  {
    id: "garam-masala", name: "Garam Masala",
    aliases: ["garam masala", "গরম মশলা"],
    cal100: 379, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 3 },
    defaultUnit: "tsp", defaultAmount: 0.5,
  },
  {
    id: "mustard-seeds", name: "Mustard Seeds (Sarisha Dana)",
    aliases: ["mustard seeds", "sarisha", "সরিষা", "rai seeds"],
    cal100: 508, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 3 },
    defaultUnit: "tsp", defaultAmount: 1,
  },
  {
    id: "fenugreek-seeds", name: "Fenugreek Seeds (Methi Dana)",
    aliases: ["fenugreek", "methi", "মেথি", "fenugreek seeds"],
    cal100: 323, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 3.7 },
    defaultUnit: "tsp", defaultAmount: 0.5,
  },
  {
    id: "nigella-seeds", name: "Nigella / Black Cumin (Kalonji)",
    aliases: ["nigella", "kalonji", "কালোজিরা", "black cumin", "kalo jira"],
    cal100: 345, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 3 },
    defaultUnit: "tsp", defaultAmount: 0.5,
  },
  {
    id: "panch-phoron", name: "Panch Phoron (Bengali Five Spice)",
    aliases: ["panch phoron", "panchforon", "পাঁচ ফোড়ন", "five spice"],
    cal100: 370, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 3 },
    defaultUnit: "tsp", defaultAmount: 1,
  },
  {
    id: "bay-leaf", name: "Bay Leaf (Tejpata)",
    aliases: ["bay leaf", "tejpata", "তেজপাতা"],
    cal100: 313, category: "spice",
    units: ["piece"], gramsPerUnit: { piece: 0.6 },
    defaultUnit: "piece", defaultAmount: 2,
  },
  {
    id: "cardamom", name: "Cardamom (Elach)",
    aliases: ["cardamom", "elach", "এলাচ"],
    cal100: 311, category: "spice",
    units: ["piece"], gramsPerUnit: { piece: 2 },
    defaultUnit: "piece", defaultAmount: 3,
  },
  {
    id: "cinnamon", name: "Cinnamon (Daruchini)",
    aliases: ["cinnamon", "daruchini", "দারুচিনি"],
    cal100: 247, category: "spice",
    units: ["g", "piece"], gramsPerUnit: { piece: 4 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "cloves", name: "Cloves (Loong / Labongo)",
    aliases: ["cloves", "loong", "লবঙ্গ", "lavang", "labongo"],
    cal100: 274, category: "spice",
    units: ["piece"], gramsPerUnit: { piece: 0.3 },
    defaultUnit: "piece", defaultAmount: 4,
  },
  {
    id: "black-pepper", name: "Black Pepper (Gol Morich)",
    aliases: ["black pepper", "gol morich", "গোল মরিচ"],
    cal100: 251, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 2.3 },
    defaultUnit: "tsp", defaultAmount: 0.5,
  },
  {
    id: "star-anise", name: "Star Anise (Chakra Phool)",
    aliases: ["star anise", "chakra phool", "চক্রফুল"],
    cal100: 337, category: "spice",
    units: ["piece"], gramsPerUnit: { piece: 2 },
    defaultUnit: "piece", defaultAmount: 2,
  },
  {
    id: "asafoetida", name: "Asafoetida (Hing / Heeng)",
    aliases: ["asafoetida", "hing", "heeng", "হিং"],
    cal100: 297, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 2 },
    defaultUnit: "tsp", defaultAmount: 0.25,
  },
  {
    id: "salt", name: "Salt (Laban / Noon)",
    aliases: ["salt", "laban", "লবণ", "noon"],
    cal100: 0, category: "spice",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 6 },
    defaultUnit: "tsp", defaultAmount: 1,
  },
  {
    id: "tamarind", name: "Tamarind (Tetul)",
    aliases: ["tamarind", "tetul", "তেঁতুল", "imli"],
    cal100: 239, category: "spice",
    units: ["g", "tbsp"], gramsPerUnit: { tbsp: 18 },
    defaultUnit: "g", defaultAmount: 20,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DAIRY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "milk-full", name: "Full Fat Milk (Dudh)",
    aliases: ["milk", "dudh", "দুধ", "full fat milk", "whole milk"],
    cal100: 61, category: "dairy",
    units: ["ml", "cup"], gramsPerUnit: { cup: 240 },
    defaultUnit: "ml", defaultAmount: 250,
  },
  {
    id: "milk-skim", name: "Skim Milk / Low Fat Milk",
    aliases: ["skim milk", "low fat milk", "fat free milk", "স্কিম মিল্ক"],
    cal100: 34, category: "dairy",
    units: ["ml", "cup"], gramsPerUnit: { cup: 240 },
    defaultUnit: "ml", defaultAmount: 250,
  },
  {
    id: "yogurt", name: "Plain Yogurt / Dahi (Tok Doi)",
    aliases: ["yogurt", "dahi", "doi", "দই", "tok doi"],
    cal100: 59, category: "dairy",
    units: ["g", "cup"], gramsPerUnit: { cup: 245 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "greek-yogurt", name: "Greek Yogurt (High Protein)",
    aliases: ["greek yogurt", "greek dahi", "high protein yogurt", "গ্রীক ইয়োগার্ট"],
    cal100: 97, category: "dairy",
    units: ["g", "cup"], gramsPerUnit: { cup: 245 },
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "mishti-doi", name: "Mishti Doi (Sweet Yogurt)",
    aliases: ["mishti doi", "sweet yogurt", "মিষ্টি দই"],
    cal100: 149, category: "dairy",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "condensed-milk", name: "Condensed Milk (Mithai Dudh)",
    aliases: ["condensed milk", "mithai dudh", "মিষ্টি দুধ"],
    cal100: 321, category: "dairy",
    units: ["g", "tbsp"], gramsPerUnit: { tbsp: 20 },
    defaultUnit: "tbsp", defaultAmount: 2,
  },
  {
    id: "cream", name: "Fresh Cream / Whipping Cream",
    aliases: ["cream", "fresh cream", "ক্রিম", "whipping cream"],
    cal100: 340, category: "dairy",
    units: ["ml", "tbsp"], gramsPerUnit: { tbsp: 15 },
    defaultUnit: "tbsp", defaultAmount: 2,
  },
  {
    id: "chhana", name: "Chhana / Paneer (Cottage Cheese)",
    aliases: ["chhana", "chena", "paneer", "ছানা", "cottage cheese"],
    cal100: 265, category: "dairy",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "khoa", name: "Khoa / Mawa (Dried Milk Solid)",
    aliases: ["khoa", "mawa", "খোয়া", "khoya", "dried milk"],
    cal100: 421, category: "dairy",
    units: ["g", "tbsp"], gramsPerUnit: { tbsp: 18 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "whey-protein", name: "Whey Protein Powder",
    aliases: ["whey protein", "protein powder", "হোয়ে প্রোটিন", "whey"],
    cal100: 385, category: "dairy",
    units: ["g", "piece"], gramsPerUnit: { piece: 30 },
    defaultUnit: "piece", defaultAmount: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GRAINS, RICE & CEREALS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "white-rice-raw", name: "White Rice (uncooked)",
    aliases: ["white rice", "rice", "chal", "চাল", "ভাত"],
    cal100: 365, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 185 },
    defaultUnit: "g", defaultAmount: 80,
  },
  {
    id: "white-rice-cooked", name: "White Rice (cooked / Bhat)",
    aliases: ["cooked rice", "bhat", "ভাত", "cooked white rice"],
    cal100: 130, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 186 },
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "brown-rice-raw", name: "Brown Rice (uncooked)",
    aliases: ["brown rice", "brown chal", "ব্রাউন রাইস"],
    cal100: 356, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 185 },
    defaultUnit: "g", defaultAmount: 80,
  },
  {
    id: "oats-rolled", name: "Rolled Oats (Fat Loss Friendly)",
    aliases: ["oats", "rolled oats", "oatmeal", "ওটস", "oat"],
    cal100: 389, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 81 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "oats-instant", name: "Instant Oats",
    aliases: ["instant oats", "quick oats", "ইন্সট্যান্ট ওটস"],
    cal100: 380, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 81 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "muri", name: "Muri (Puffed Rice)",
    aliases: ["muri", "মুড়ি", "puffed rice", "murmura"],
    cal100: 402, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 14 },
    defaultUnit: "g", defaultAmount: 30,
  },
  {
    id: "chira", name: "Chira (Flattened Rice / Poha)",
    aliases: ["chira", "চিড়া", "poha", "flattened rice", "beaten rice"],
    cal100: 350, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 245 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "shemai", name: "Shemai (Vermicelli)",
    aliases: ["shemai", "vermicelli", "শেমাই", "sevai"],
    cal100: 352, category: "grain",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "noodles-instant", name: "Instant Noodles (uncooked)",
    aliases: ["noodles", "instant noodles", "নুডলস", "maggi"],
    cal100: 420, category: "grain",
    units: ["g", "piece"], gramsPerUnit: { piece: 80 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "pasta-dry", name: "Pasta (dry / uncooked)",
    aliases: ["pasta", "পাস্তা"],
    cal100: 371, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 107 },
    defaultUnit: "g", defaultAmount: 80,
  },
  {
    id: "quinoa", name: "Quinoa (High Protein Grain)",
    aliases: ["quinoa", "কিনোয়া"],
    cal100: 368, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 170 },
    defaultUnit: "g", defaultAmount: 60,
  },
  {
    id: "barley-grain", name: "Barley (Jow)",
    aliases: ["barley", "jow", "যব", "jab"],
    cal100: 352, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 184 },
    defaultUnit: "g", defaultAmount: 60,
  },
  {
    id: "bread-white", name: "White Bread (pao ruti)",
    aliases: ["white bread", "pao ruti", "bread", "রুটি", "পাও রুটি"],
    cal100: 265, category: "grain",
    units: ["g", "piece"], gramsPerUnit: { piece: 30 },
    defaultUnit: "piece", defaultAmount: 2,
  },
  {
    id: "bread-wheat", name: "Whole Wheat Bread",
    aliases: ["wheat bread", "brown bread", "whole wheat bread", "ব্রাউন ব্রেড"],
    cal100: 247, category: "grain",
    units: ["g", "piece"], gramsPerUnit: { piece: 30 },
    defaultUnit: "piece", defaultAmount: 2,
  },
  {
    id: "roti-wheat", name: "Wheat Roti / Chapati",
    aliases: ["roti", "chapati", "রুটি", "chapatti", "phulka"],
    cal100: 297, category: "grain",
    units: ["g", "piece"], gramsPerUnit: { piece: 27 },
    defaultUnit: "piece", defaultAmount: 2,
  },
  {
    id: "paratha", name: "Paratha (with oil)",
    aliases: ["paratha", "porota", "পরোটা", "layered bread"],
    cal100: 326, category: "grain",
    units: ["g", "piece"], gramsPerUnit: { piece: 65 },
    defaultUnit: "piece", defaultAmount: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FRUITS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "banana", name: "Banana (Kola)",
    aliases: ["banana", "kola", "কলা"],
    cal100: 89, category: "fruit",
    units: ["piece", "g"], gramsPerUnit: { piece: 100 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "mango", name: "Mango (Aam)",
    aliases: ["mango", "aam", "আম"],
    cal100: 60, category: "fruit",
    units: ["g", "cup"], gramsPerUnit: { cup: 165 },
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "jackfruit-ripe", name: "Ripe Jackfruit (Kathal)",
    aliases: ["jackfruit", "kathal", "কাঁঠাল", "ripe jackfruit"],
    cal100: 95, category: "fruit",
    units: ["g", "piece"], gramsPerUnit: { piece: 30 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "papaya", name: "Papaya (Pepe)",
    aliases: ["papaya", "pepe", "পেঁপে"],
    cal100: 43, category: "fruit",
    units: ["g", "cup"], gramsPerUnit: { cup: 145 },
    defaultUnit: "g", defaultAmount: 150,
  },
  {
    id: "guava", name: "Guava (Peyara)",
    aliases: ["guava", "peyara", "পেয়ারা"],
    cal100: 68, category: "fruit",
    units: ["g", "piece"], gramsPerUnit: { piece: 100 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "pineapple", name: "Pineapple (Anarosh)",
    aliases: ["pineapple", "anarosh", "আনারস"],
    cal100: 50, category: "fruit",
    units: ["g", "cup"], gramsPerUnit: { cup: 165 },
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "watermelon", name: "Watermelon (Tarbuj)",
    aliases: ["watermelon", "tarbuj", "তরমুজ"],
    cal100: 30, category: "fruit",
    units: ["g", "cup"], gramsPerUnit: { cup: 152 },
    defaultUnit: "g", defaultAmount: 200,
  },
  {
    id: "lychee", name: "Lychee (Lichu)",
    aliases: ["lychee", "lichu", "লিচু", "litchi"],
    cal100: 66, category: "fruit",
    units: ["g", "piece"], gramsPerUnit: { piece: 20 },
    defaultUnit: "piece", defaultAmount: 10,
  },
  {
    id: "apple", name: "Apple",
    aliases: ["apple", "আপেল"],
    cal100: 52, category: "fruit",
    units: ["piece", "g"], gramsPerUnit: { piece: 182 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "orange", name: "Orange (Komla / Malta)",
    aliases: ["orange", "komla", "malta", "কমলা", "narangi"],
    cal100: 47, category: "fruit",
    units: ["piece", "g"], gramsPerUnit: { piece: 130 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "lemon", name: "Lemon / Lime (Lebu)",
    aliases: ["lemon", "lime", "lebu", "লেবু"],
    cal100: 29, category: "fruit",
    units: ["piece", "g"], gramsPerUnit: { piece: 58 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "dates", name: "Dates (Khejur)",
    aliases: ["dates", "khejur", "খেজুর"],
    cal100: 277, category: "fruit",
    units: ["piece", "g"], gramsPerUnit: { piece: 24 },
    defaultUnit: "piece", defaultAmount: 3,
  },
  {
    id: "coconut-fresh", name: "Fresh Coconut (Narikel / Daab Flesh)",
    aliases: ["coconut", "narikel", "নারকেল", "fresh coconut"],
    cal100: 354, category: "fruit",
    units: ["g", "tbsp"], gramsPerUnit: { tbsp: 7 },
    defaultUnit: "g", defaultAmount: 30,
  },
  {
    id: "wood-apple", name: "Wood Apple (Bel)",
    aliases: ["wood apple", "bel", "বেল"],
    cal100: 137, category: "fruit",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 100,
  },
  {
    id: "jujube", name: "Jujube / Indian Plum (Boroi / Kul)",
    aliases: ["jujube", "boroi", "kul", "বরই", "ber"],
    cal100: 79, category: "fruit",
    units: ["g", "piece"], gramsPerUnit: { piece: 10 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "star-fruit", name: "Star Fruit (Kamranga)",
    aliases: ["star fruit", "kamranga", "কামরাঙা", "carambola"],
    cal100: 31, category: "fruit",
    units: ["g", "piece"], gramsPerUnit: { piece: 91 },
    defaultUnit: "piece", defaultAmount: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NUTS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "almonds", name: "Almonds (Badam)",
    aliases: ["almonds", "badam", "বাদাম", "almond"],
    cal100: 579, category: "nut",
    units: ["g", "piece"], gramsPerUnit: { piece: 1.2 },
    defaultUnit: "g", defaultAmount: 30,
  },
  {
    id: "cashews", name: "Cashews (Kaju Badam)",
    aliases: ["cashew", "kaju", "kaju badam", "কাজু", "কাজু বাদাম"],
    cal100: 553, category: "nut",
    units: ["g", "piece"], gramsPerUnit: { piece: 3 },
    defaultUnit: "g", defaultAmount: 30,
  },
  {
    id: "walnuts", name: "Walnuts (Akhrot)",
    aliases: ["walnut", "akhrot", "আখরোট", "walnuts"],
    cal100: 654, category: "nut",
    units: ["g", "piece"], gramsPerUnit: { piece: 14 },
    defaultUnit: "g", defaultAmount: 30,
  },
  {
    id: "peanuts", name: "Peanuts / Groundnuts (Chingri Badam / Bhadam)",
    aliases: ["peanuts", "groundnuts", "bhadam", "chingri badam", "চিনাবাদাম"],
    cal100: 567, category: "nut",
    units: ["g", "cup", "tbsp"], gramsPerUnit: { cup: 146, tbsp: 9 },
    defaultUnit: "g", defaultAmount: 30,
  },
  {
    id: "pistachios", name: "Pistachios (Pesta Badam)",
    aliases: ["pistachio", "pesta", "pesta badam", "পেস্তা"],
    cal100: 562, category: "nut",
    units: ["g", "piece"], gramsPerUnit: { piece: 1.5 },
    defaultUnit: "g", defaultAmount: 30,
  },
  {
    id: "peanut-butter", name: "Peanut Butter",
    aliases: ["peanut butter", "চিনাবাদামের মাখন"],
    cal100: 588, category: "nut",
    units: ["g", "tbsp"], gramsPerUnit: { tbsp: 16 },
    defaultUnit: "tbsp", defaultAmount: 2,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SWEETENERS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "sugar", name: "Sugar (Chini)",
    aliases: ["sugar", "chini", "চিনি"],
    cal100: 387, category: "sweetener",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 12, tsp: 4 },
    defaultUnit: "tsp", defaultAmount: 1,
  },
  {
    id: "jaggery", name: "Jaggery / Gur (Khejur Gur)",
    aliases: ["jaggery", "gur", "খেজুর গুড়", "khejur gur", "molasses", "khejurgur"],
    cal100: 383, category: "sweetener",
    units: ["g", "tbsp"], gramsPerUnit: { tbsp: 20 },
    defaultUnit: "g", defaultAmount: 30,
  },
  {
    id: "honey", name: "Honey (Modhu)",
    aliases: ["honey", "modhu", "মধু"],
    cal100: 304, category: "sweetener",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 21, tsp: 7 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BEVERAGES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "water", name: "Water (Pani)",
    aliases: ["water", "pani", "পানি"],
    cal100: 0, category: "beverage",
    units: ["ml", "cup"], gramsPerUnit: { cup: 240 },
    defaultUnit: "ml", defaultAmount: 250,
  },
  {
    id: "green-tea", name: "Green Tea (unsweetened)",
    aliases: ["green tea", "সবুজ চা", "green cha"],
    cal100: 1, category: "beverage",
    units: ["ml", "cup", "piece"], gramsPerUnit: { cup: 240, piece: 240 },
    defaultUnit: "cup", defaultAmount: 1,
  },
  {
    id: "black-tea", name: "Black Tea / Rong Cha (no sugar)",
    aliases: ["black tea", "rong cha", "চা", "tea no sugar"],
    cal100: 1, category: "beverage",
    units: ["ml", "cup", "piece"], gramsPerUnit: { cup: 240, piece: 240 },
    defaultUnit: "cup", defaultAmount: 1,
  },
  {
    id: "tea-milk-sugar", name: "Milk Tea with Sugar (Dudh Cha)",
    aliases: ["milk tea", "dudh cha", "দুধ চা", "tea with milk"],
    cal100: 35, category: "beverage",
    units: ["ml", "cup", "piece"], gramsPerUnit: { cup: 200, piece: 200 },
    defaultUnit: "cup", defaultAmount: 1,
  },
  {
    id: "coffee-black", name: "Black Coffee (no sugar)",
    aliases: ["coffee", "black coffee", "কফি"],
    cal100: 2, category: "beverage",
    units: ["ml", "cup", "piece"], gramsPerUnit: { cup: 240, piece: 240 },
    defaultUnit: "cup", defaultAmount: 1,
  },
  {
    id: "coconut-water", name: "Coconut Water (Daaber Pani)",
    aliases: ["coconut water", "daaber pani", "ডাবের পানি", "tender coconut"],
    cal100: 19, category: "beverage",
    units: ["ml", "cup"], gramsPerUnit: { cup: 240 },
    defaultUnit: "ml", defaultAmount: 250,
  },
  {
    id: "lemon-water", name: "Lemon Water / Limon Pani",
    aliases: ["lemon water", "limon pani", "লেবু পানি"],
    cal100: 4, category: "beverage",
    units: ["ml", "cup"], gramsPerUnit: { cup: 240 },
    defaultUnit: "cup", defaultAmount: 1,
  },
  {
    id: "lassi", name: "Lassi (Sweet / Plain)",
    aliases: ["lassi", "লাস্যি"],
    cal100: 70, category: "beverage",
    units: ["ml", "cup"], gramsPerUnit: { cup: 240 },
    defaultUnit: "ml", defaultAmount: 250,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FAT LOSS & HEALTH FOODS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "oats-rolled-fl", name: "Rolled Oats (weight loss staple)",
    aliases: ["oats weight loss", "fat loss oats", "সিনিয়র ওটস"],
    cal100: 389, category: "grain",
    units: ["g", "cup"], gramsPerUnit: { cup: 81 },
    defaultUnit: "g", defaultAmount: 50,
  },
  {
    id: "apple-cider-vinegar", name: "Apple Cider Vinegar",
    aliases: ["apple cider vinegar", "acv", "আপেল সিডার ভিনেগার"],
    cal100: 22, category: "other",
    units: ["ml", "tbsp", "tsp"], gramsPerUnit: { tbsp: 15, tsp: 5 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "turmeric-milk", name: "Turmeric Milk / Golden Milk (Holud Dudh)",
    aliases: ["turmeric milk", "golden milk", "holud dudh", "হলুদ দুধ"],
    cal100: 70, category: "beverage",
    units: ["ml", "cup"], gramsPerUnit: { cup: 240 },
    defaultUnit: "cup", defaultAmount: 1,
  },
  {
    id: "protein-bar", name: "Protein Bar (generic)",
    aliases: ["protein bar", "প্রোটিন বার"],
    cal100: 375, category: "other",
    units: ["g", "piece"], gramsPerUnit: { piece: 60 },
    defaultUnit: "piece", defaultAmount: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMMON PREPARED DISHES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "khichuri-cooked", name: "Khichuri (Rice + Dal, cooked)",
    aliases: ["khichuri", "খিচুড়ি", "khichdi"],
    cal100: 110, category: "prepared",
    units: ["g", "cup"], gramsPerUnit: { cup: 200 },
    defaultUnit: "g", defaultAmount: 300,
  },
  {
    id: "biryani-rice", name: "Biryani (cooked rice)",
    aliases: ["biryani", "biriyani", "বিরিয়ানি"],
    cal100: 198, category: "prepared",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 300,
  },
  {
    id: "halim", name: "Halim (Wheat + Meat)",
    aliases: ["halim", "হালিম", "haleem"],
    cal100: 120, category: "prepared",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 250,
  },
  {
    id: "samosa", name: "Samosa / Shingara (fried)",
    aliases: ["samosa", "shingara", "সিঙ্গারা", "samucha"],
    cal100: 262, category: "prepared",
    units: ["piece", "g"], gramsPerUnit: { piece: 50 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "puri-fried", name: "Puri (fried bread)",
    aliases: ["puri", "পুরি", "poori"],
    cal100: 328, category: "prepared",
    units: ["piece", "g"], gramsPerUnit: { piece: 35 },
    defaultUnit: "piece", defaultAmount: 2,
  },
  {
    id: "rasgolla", name: "Rosogolla / Rasgulla",
    aliases: ["rasgolla", "rosogolla", "রসগোল্লা", "rasgulla"],
    cal100: 186, category: "prepared",
    units: ["piece", "g"], gramsPerUnit: { piece: 55 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "jilapi", name: "Jilapi / Jalebi",
    aliases: ["jilapi", "jalebi", "জিলাপি"],
    cal100: 360, category: "prepared",
    units: ["g", "piece"], gramsPerUnit: { piece: 60 },
    defaultUnit: "piece", defaultAmount: 1,
  },
  {
    id: "halwa-suji", name: "Suji Halwa",
    aliases: ["halwa", "suji halwa", "সুজির হালুয়া"],
    cal100: 250, category: "prepared",
    units: ["g"], gramsPerUnit: {},
    defaultUnit: "g", defaultAmount: 150,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OTHER / CONDIMENTS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "ketchup", name: "Tomato Ketchup / Sauce",
    aliases: ["ketchup", "tomato sauce", "টমেটো সস"],
    cal100: 104, category: "other",
    units: ["g", "tbsp", "tsp"], gramsPerUnit: { tbsp: 17, tsp: 6 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "soy-sauce", name: "Soy Sauce",
    aliases: ["soy sauce", "সয়া সস"],
    cal100: 60, category: "other",
    units: ["ml", "tbsp", "tsp"], gramsPerUnit: { tbsp: 18, tsp: 6 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "vinegar", name: "Vinegar (Sirka)",
    aliases: ["vinegar", "sirka", "সিরকা"],
    cal100: 18, category: "other",
    units: ["ml", "tbsp"], gramsPerUnit: { tbsp: 15 },
    defaultUnit: "tbsp", defaultAmount: 1,
  },
  {
    id: "baking-powder", name: "Baking Powder",
    aliases: ["baking powder", "বেকিং পাউডার"],
    cal100: 53, category: "other",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 4 },
    defaultUnit: "tsp", defaultAmount: 1,
  },
  {
    id: "baking-soda", name: "Baking Soda (Soda Bicarbonate)",
    aliases: ["baking soda", "soda", "বেকিং সোডা"],
    cal100: 0, category: "other",
    units: ["g", "tsp"], gramsPerUnit: { tsp: 5.7 },
    defaultUnit: "tsp", defaultAmount: 0.5,
  },
];

export function searchIngredients(query: string): Ingredient[] {
  if (!query.trim()) return INGREDIENTS.slice(0, 14);
  const q = query.toLowerCase();
  return INGREDIENTS.filter(i =>
    i.name.toLowerCase().includes(q) ||
    i.aliases.some(a => a.toLowerCase().includes(q))
  ).slice(0, 16);
}

export const CATEGORY_LABEL: Record<IngCategory, string> = {
  flour:     "Flour",
  oil:       "Oil & Fat",
  protein:   "Protein",
  vegetable: "Vegetable",
  spice:     "Spice",
  dairy:     "Dairy",
  grain:     "Grain & Dal",
  seed:      "Seed",
  sweetener: "Sweetener",
  fruit:     "Fruit",
  nut:       "Nut",
  beverage:  "Beverage",
  prepared:  "Prepared Dish",
  other:     "Other",
};

export const CATEGORY_COLOR: Record<IngCategory, string> = {
  flour:     "#f59e0b",
  oil:       "#f97316",
  protein:   "#10b981",
  vegetable: "#22c55e",
  spice:     "#a78bfa",
  dairy:     "#60a5fa",
  grain:     "#fbbf24",
  seed:      "#34d399",
  sweetener: "#f472b6",
  fruit:     "#fb7185",
  nut:       "#d97706",
  beverage:  "#38bdf8",
  prepared:  "#818cf8",
  other:     "#94a3b8",
};
