"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCalories } from "@/lib/hooks/useCalories";
import { useRecipes, type Recipe } from "@/lib/hooks/useRecipes";
import RecipeBuilder from "@/components/RecipeBuilder";
import type { RecipeIngredient } from "@/lib/hooks/useRecipes";

// ─── Nutrition goals calculator (Mifflin-St Jeor + moderate activity) ────────

interface MacroGoals {
  calories: number;
  protein: number;
  fiber: number;
  carbs: number;
  fat: number;
}

interface BodyStats {
  weightKg: number;
  heightCm: number;
  age: number;
}

function calcGoals(stats: BodyStats): MacroGoals {
  const { weightKg, heightCm, age } = stats;
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5; // Mifflin-St Jeor (male)
  const tdee = Math.round(bmr * 1.55);                         // moderate activity (gym 4-5x/week)
  const calories = Math.max(1400, tdee - 500);                 // 500 kcal deficit for fat loss
  const protein = Math.round(weightKg * 2.0);                  // 2g/kg — muscle retention
  const fat     = Math.round(calories * 0.25 / 9);
  const carbs   = Math.round((calories - protein * 4 - fat * 9) / 4);
  const fiber   = 28;
  return { calories, protein, fiber, carbs, fat };
}

interface DayMacros { protein: number; fiber: number; carbs: number; fat: number; }
const ZERO_MACROS: DayMacros = { protein: 0, fiber: 0, carbs: 0, fat: 0 };

const MACRO_META = [
  { key: "protein" as keyof DayMacros, label: "Protein", emoji: "🥩", unit: "g", color: "#f87171", step: 5  },
  { key: "carbs"   as keyof DayMacros, label: "Carbs",   emoji: "🍚", unit: "g", color: "#fcd34d", step: 10 },
  { key: "fat"     as keyof DayMacros, label: "Fat",     emoji: "🧈", unit: "g", color: "#fb923c", step: 5  },
  { key: "fiber"   as keyof DayMacros, label: "Fiber",   emoji: "🌾", unit: "g", color: "#4ade80", step: 2  },
] as const;

// ─── Macro food info ──────────────────────────────────────────────────────────

interface MacroInfo {
  why: string;
  foods: Array<{ name: string; amount: string; per: string }>;
  tips: string[];
}

const MACRO_INFO: Record<string, MacroInfo> = {
  protein: {
    why: "Protein preserves muscle while you lose fat. At 2g per kg of bodyweight, your muscles get enough amino acids to rebuild and grow even in a calorie deficit.",
    foods: [
      { name: "Chicken breast", amount: "31g protein", per: "100g cooked" },
      { name: "Eggs",           amount: "6g protein",  per: "1 egg" },
      { name: "Tuna (canned)",  amount: "25g protein", per: "100g" },
      { name: "Salmon",         amount: "22g protein", per: "100g" },
      { name: "Greek yogurt",   amount: "17g protein", per: "150g" },
      { name: "Beef (lean)",    amount: "26g protein", per: "100g" },
      { name: "Mutton (lean)",  amount: "25g protein", per: "100g" },
      { name: "Motor dal",      amount: "9g protein",  per: "100g cooked" },
      { name: "Chana (boiled)", amount: "9g protein",  per: "100g" },
      { name: "Cottage cheese", amount: "11g protein", per: "100g" },
    ],
    tips: [
      "Spread protein across every meal — your body uses roughly 30–40g per sitting.",
      "Eggs at breakfast is the fastest way to hit your morning protein target.",
      "Dal + rice together form a complete protein — good for rest days.",
    ],
  },
  carbs: {
    why: "Carbs are your primary workout fuel. Eating most of your carbs around training times gives you energy for lifting and helps muscles recover faster after sessions.",
    foods: [
      { name: "Brown rice",       amount: "45g carbs",  per: "1 cup cooked" },
      { name: "White rice",       amount: "53g carbs",  per: "1 cup cooked" },
      { name: "Oats",             amount: "27g carbs",  per: "40g dry" },
      { name: "Sweet potato",     amount: "20g carbs",  per: "100g" },
      { name: "Whole wheat roti", amount: "25g carbs",  per: "1 roti (40g)" },
      { name: "Banana",           amount: "27g carbs",  per: "1 medium" },
      { name: "Dates",            amount: "18g carbs",  per: "3 pieces" },
      { name: "Bread (whole grain)", amount: "13g carbs", per: "1 slice" },
      { name: "Potato (boiled)",  amount: "17g carbs",  per: "100g" },
      { name: "Lentils",          amount: "20g carbs",  per: "100g cooked" },
    ],
    tips: [
      "Eat your biggest carb serving 1–2 hours before gym for maximum energy.",
      "After training, fast carbs (banana, white rice) help recovery.",
      "On rest days, reduce carbs slightly and keep protein and fat the same.",
    ],
  },
  fat: {
    why: "Healthy fats support testosterone production, joint health, and fat-soluble vitamin absorption. You need fat to lose fat — just stick to unsaturated sources most of the time.",
    foods: [
      { name: "Eggs (whole)",    amount: "5g fat",   per: "1 egg" },
      { name: "Almonds",        amount: "14g fat",  per: "25g (handful)" },
      { name: "Walnuts",        amount: "18g fat",  per: "25g" },
      { name: "Olive oil",      amount: "14g fat",  per: "1 tbsp" },
      { name: "Peanut butter",  amount: "16g fat",  per: "2 tbsp" },
      { name: "Salmon",         amount: "13g fat",  per: "100g" },
      { name: "Ghee",           amount: "12g fat",  per: "1 tbsp — use sparingly" },
      { name: "Avocado",        amount: "15g fat",  per: "100g" },
      { name: "Coconut (fresh)", amount: "9g fat",  per: "30g" },
      { name: "Fatty fish (hilsa)", amount: "12g fat", per: "100g" },
    ],
    tips: [
      "Fat is 9 kcal/g — it adds up fast. Track it to avoid going over budget.",
      "A handful of almonds before bed supports overnight muscle repair.",
      "Replace saturated fats (fried food) with unsaturated fats to keep arteries clean.",
    ],
  },
  fiber: {
    why: "Fiber slows digestion, keeps you full longer, and prevents blood sugar spikes. High fiber intake while cutting is one of the best strategies to stay satisfied on fewer calories.",
    foods: [
      { name: "Spinach",         amount: "2.2g fiber", per: "100g raw" },
      { name: "Broccoli",        amount: "2.6g fiber", per: "100g" },
      { name: "Lentils (dal)",   amount: "8g fiber",   per: "100g cooked" },
      { name: "Chana (boiled)",  amount: "7.6g fiber", per: "100g" },
      { name: "Oats",            amount: "4g fiber",   per: "40g dry" },
      { name: "Apple (with skin)", amount: "4.4g fiber", per: "1 medium" },
      { name: "Banana",          amount: "3.1g fiber", per: "1 medium" },
      { name: "Papaya",          amount: "1.7g fiber", per: "100g" },
      { name: "Chia seeds",      amount: "10g fiber",  per: "2 tbsp" },
      { name: "Whole wheat roti", amount: "2g fiber",  per: "1 roti" },
    ],
    tips: [
      "Add vegetables to every meal — they fill you up with almost no calories.",
      "Start meals with a vegetable salad to naturally eat less of everything else.",
      "High fiber intake reduces hunger hormone (ghrelin) levels over the day.",
    ],
  },
};

// ─── Testosterone foods ───────────────────────────────────────────────────────

const TESTO_FOODS = [
  {
    name: "Eggs (whole egg)",
    why: "Egg yolks contain cholesterol and vitamin D — both direct precursors for testosterone synthesis. Do not discard the yolk.",
    how: "3–4 whole eggs daily. Boiled, scrambled, or omelette.",
    icon: "🥚",
  },
  {
    name: "Fatty Fish (Ilish, Pangash, Rupchanda)",
    why: "High in vitamin D (which acts like a hormone to boost T levels) and omega-3 fatty acids that reduce cortisol. Ilish is one of the most omega-3-rich fish in the world — better than salmon.",
    how: "2–3 servings per week. Best BD options: Ilish (ilish mach), Pangash, Rupchanda (pomfret), Chital, Boal. Small fish like Mola (mola mach) eaten whole are loaded with vitamin D.",
    icon: "🐟",
  },
  {
    name: "Garlic",
    why: "Allicin in garlic lowers cortisol — the hormone that directly blocks testosterone. Lower cortisol = higher T.",
    how: "2–4 raw cloves daily, crushed and added to food. Raw is more potent than cooked.",
    icon: "🧄",
  },
  {
    name: "Ginger",
    why: "Shown in research to increase luteinizing hormone (LH), which signals the testes to produce more testosterone.",
    how: "Fresh ginger in tea or cooking daily. Ginger-honey-lemon water in the morning.",
    icon: "🫚",
  },
  {
    name: "Pomegranate (Bedana / Anar)",
    why: "Strong antioxidant content reduces oxidative stress, which protects Leydig cells (the cells that produce testosterone).",
    how: "1 bedana or a glass of fresh juice, 2–3 times a week. Available in every BD bazaar. Budget swap: guava (peyara) gives similar antioxidants for a fraction of the price.",
    icon: "🍎",
  },
  {
    name: "Nuts (Chinabadam & Kath Badam)",
    why: "Rich in zinc and magnesium — both minerals are directly involved in testosterone production and are commonly deficient in men.",
    how: "A small handful (25–30g) daily. Chinabadam (peanuts) are the cheap everyday option; kath badam (almonds) and akhrot (walnuts) when the budget allows.",
    icon: "🌰",
  },
  {
    name: "Lean Beef / Mutton",
    why: "Excellent source of zinc and saturated fat — both support T levels. Red meat 2–3 times per week significantly raises zinc intake.",
    how: "100–150g lean cuts 2–3 times per week. Avoid excessive processing.",
    icon: "🥩",
  },
  {
    name: "Shak (Palong, Lal, Pui)",
    why: "Rich in magnesium, which is associated with higher free testosterone levels. Overboiling destroys magnesium — quick stir-fry (bhaji style) preserves it.",
    how: "One serving of shak bhaji with lunch or dinner daily. Palong shak (spinach) is the strongest, but lal shak and pui shak also count. Cheap and everywhere.",
    icon: "🥬",
  },
  {
    name: "Olive Oil / Mustard Oil",
    why: "Monounsaturated fats have been shown to raise testosterone by up to 17% when used regularly as the main fat source.",
    how: "2 tbsp daily in cooking or on salads. Olive oil is in all BD supermarkets now; pure sarisher tel (mustard oil) is the traditional budget option with a similar healthy-fat profile.",
    icon: "🫒",
  },
  {
    name: "Onions",
    why: "Quercetin in onions increases LH and reduces the enzyme that converts testosterone into estrogen.",
    how: "Include raw or cooked onions in every savory meal. More is better.",
    icon: "🧅",
  },
  {
    name: "Ashwagandha (Herbal Shops)",
    why: "Clinical trials show 15–17% increase in testosterone with 600mg daily. Also reduces cortisol by 25–30%.",
    how: "600mg capsule or 1 tsp powder in warm milk before bed. In BD, find it at Hamdard, ayurvedic/unani pharmacies, or online (Daraz). Buy from a reputable brand only.",
    icon: "🌿",
  },
  {
    name: "Kacha Chola (Raw Soaked Chickpeas)",
    why: "Zinc, magnesium, protein and arginine in one cheap package — the traditional Bengali strength food for a reason. Arginine improves blood flow, supporting everything downstream of testosterone.",
    how: "A small bowl (30–40g dry) soaked overnight, eaten raw in the morning with a little ginger and salt. Available in every mudi dokan.",
    icon: "🫘",
  },
];

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}

// ── Macro Info Modal ──────────────────────────────────────────────────────────
function MacroInfoModal({ macroKey, onClose }: { macroKey: keyof DayMacros; onClose: () => void }) {
  const info = MACRO_INFO[macroKey];
  const meta = MACRO_META.find(m => m.key === macroKey)!;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(0,0,0,0.75)",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        style={{
          width: "100%", maxWidth: 500,
          background: "var(--surface)", borderRadius: "20px 20px 0 0",
          padding: "20px 20px 36px", maxHeight: "80vh", overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: meta.color }}>
            {meta.emoji} {meta.label} — Food Guide
          </div>
          <button onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 20 }}>
            ×
          </button>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "10px 14px",
          fontSize: 12, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 16,
          borderLeft: `3px solid ${meta.color}`,
        }}>
          {info.why}
        </div>

        <div style={{ fontWeight: 700, fontSize: 12, color: "var(--text)", marginBottom: 8 }}>
          Best food sources
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
          {info.foods.map(f => (
            <div key={f.name} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "7px 12px", borderRadius: 8,
              background: "var(--surface2)", border: "1px solid var(--border)",
            }}>
              <span style={{ fontSize: 13, color: "var(--text)", fontWeight: 600 }}>{f.name}</span>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: meta.color }}>{f.amount}</div>
                <div style={{ fontSize: 10, color: "var(--text-muted)" }}>per {f.per}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontWeight: 700, fontSize: 12, color: "var(--text)", marginBottom: 8 }}>
          Pro tips
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {info.tips.map((t, i) => (
            <div key={i} style={{
              fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6,
              paddingLeft: 12, borderLeft: "2px solid var(--border)",
            }}>
              {t}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Nutrition Goals Card ───────────────────────────────────────────────────────
function NutritionGoals({
  stats, onStatsChange,
  macros, onMacroChange,
  autoMacros,
  calTotal,
}: {
  stats: BodyStats;
  onStatsChange: (s: BodyStats) => void;
  macros: DayMacros;          // manual adjustments (food eaten outside the app)
  onMacroChange: (key: keyof DayMacros, val: number) => void;
  autoMacros: DayMacros;      // auto-calculated from logged dishes
  calTotal: number;
}) {
  const [editingField, setEditingField] = useState<"weight" | "height" | "age" | null>(null);
  const [draft, setDraft] = useState("");
  const [infoFor, setInfoFor] = useState<keyof DayMacros | null>(null);
  const goals = calcGoals(stats);

  const startEdit = (field: "weight" | "height" | "age") => {
    setDraft(String(stats[field === "weight" ? "weightKg" : field === "height" ? "heightCm" : "age"]));
    setEditingField(field);
  };

  const commitEdit = () => {
    const val = parseFloat(draft);
    if (!isNaN(val) && val > 0) {
      if (editingField === "weight") onStatsChange({ ...stats, weightKg: val });
      if (editingField === "height") onStatsChange({ ...stats, heightCm: val });
      if (editingField === "age")    onStatsChange({ ...stats, age: val });
    }
    setEditingField(null);
  };

  const calPct = Math.min(100, (calTotal / goals.calories) * 100);

  return (
    <>
      <div style={{
        background: "var(--surface2)", borderRadius: 14,
        border: "1px solid var(--border)", overflow: "hidden",
      }}>
        {/* Header with body stats */}
        <div style={{
          padding: "12px 14px",
          background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(99,102,241,0.06))",
          borderBottom: "1px solid var(--border)",
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>
            Daily Nutrition Goals · Mifflin-St Jeor TDEE
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "Weight", value: stats.weightKg, unit: "kg",  field: "weight" as const },
              { label: "Height", value: stats.heightCm, unit: "cm",  field: "height" as const },
              { label: "Age",    value: stats.age,       unit: "yrs", field: "age"    as const },
            ].map(s => (
              <div key={s.field} style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: 8, padding: "6px 10px", display: "flex", alignItems: "center", gap: 6,
              }}>
                <span style={{ fontSize: 10, color: "var(--text-muted)" }}>{s.label}</span>
                {editingField === s.field ? (
                  <input
                    type="number"
                    value={draft}
                    onChange={e => setDraft(e.target.value)}
                    onBlur={commitEdit}
                    onKeyDown={e => e.key === "Enter" && commitEdit()}
                    autoFocus
                    style={{
                      width: 52, background: "transparent", border: "none",
                      borderBottom: "1px solid var(--purple)",
                      color: "var(--text)", fontSize: 13, fontWeight: 700, textAlign: "center",
                    }}
                  />
                ) : (
                  <button onClick={() => startEdit(s.field)} style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: 13, fontWeight: 800, color: "var(--purple)", padding: 0,
                  }}>
                    {s.value}{s.unit} ✎
                  </button>
                )}
              </div>
            ))}
            <div style={{
              fontSize: 10, color: "var(--text-muted)", padding: "6px 10px",
              background: "var(--surface)", borderRadius: 8, border: "1px solid var(--border)",
              display: "flex", alignItems: "center",
            }}>
              Goal: 70 kg
            </div>
          </div>
          <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 8 }}>
            TDEE ~{Math.round(calcGoals(stats).calories + 500)} kcal · deficit 500 kcal · goal {goals.calories} kcal/day
          </div>
        </div>

        {/* Calorie row */}
        <div style={{ padding: "12px 14px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>🔥 Calories</span>
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
              <span style={{ fontWeight: 700, color: calTotal > goals.calories ? "#ef4444" : "var(--text)" }}>{calTotal}</span>
              {" / "}{goals.calories} kcal
            </span>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: "var(--surface)", overflow: "hidden" }}>
            <motion.div
              animate={{ width: `${calPct}%` }}
              transition={{ duration: 0.5 }}
              style={{
                height: "100%", borderRadius: 4,
                background: calTotal > goals.calories ? "#ef4444" : calTotal > goals.calories * 0.9 ? "#f59e0b" : "#10b981",
              }}
            />
          </div>
          <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 4, textAlign: "right" }}>
            {calTotal > goals.calories
              ? `${calTotal - goals.calories} kcal over target`
              : `${goals.calories - calTotal} kcal remaining`}
          </div>
        </div>

        {/* Macro rows */}
        <div style={{ padding: "8px 14px 12px", display: "flex", flexDirection: "column", gap: 10 }}>
          {MACRO_META.map(m => {
            const consumed = Math.round((autoMacros[m.key] + macros[m.key]) * 10) / 10;
            const goal     = goals[m.key];
            const pct      = Math.min(100, (consumed / goal) * 100);
            return (
              <div key={m.key}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text)" }}>
                      {m.emoji} {m.label}
                    </span>
                    {/* Info button */}
                    <button
                      onClick={() => setInfoFor(m.key)}
                      style={{
                        width: 18, height: 18, borderRadius: "50%",
                        border: `1px solid ${m.color}`,
                        background: "transparent", color: m.color,
                        cursor: "pointer", fontSize: 10, fontWeight: 800,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        lineHeight: 1, padding: 0,
                      }}
                      title={`What to eat for ${m.label}`}
                    >
                      i
                    </button>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {/* +/− adjust only the manual layer; auto part comes from logged dishes */}
                    <button onClick={() => onMacroChange(m.key, Math.max(-autoMacros[m.key], macros[m.key] - m.step))}
                      style={{ width: 22, height: 22, borderRadius: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text)", cursor: "pointer", fontSize: 14, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      −
                    </button>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", minWidth: 52, textAlign: "center" }}>
                      <span style={{ color: consumed >= goal ? m.color : "var(--text)" }}>{consumed}</span>
                      <span style={{ color: "var(--text-muted)", fontWeight: 400 }}> / {goal}{m.unit}</span>
                    </span>
                    <button onClick={() => onMacroChange(m.key, macros[m.key] + m.step)}
                      style={{ width: 22, height: 22, borderRadius: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text)", cursor: "pointer", fontSize: 14, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      +
                    </button>
                  </div>
                </div>
                <div style={{ height: 6, borderRadius: 3, background: "var(--surface)", overflow: "hidden" }}>
                  <motion.div
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.4 }}
                    style={{ height: "100%", borderRadius: 3, background: m.color, opacity: 0.85 }}
                  />
                </div>
                <div style={{ fontSize: 9, color: "var(--text-muted)", marginTop: 3, textAlign: "right" }}>
                  {consumed >= goal ? "✓ Goal reached!" : `${goal - consumed}${m.unit} to go`}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          padding: "8px 14px", borderTop: "1px solid var(--border)",
          fontSize: 10, color: "var(--text-muted)", lineHeight: 1.5,
        }}>
          Macros are <strong style={{ color: "var(--text)" }}>calculated automatically</strong> from every dish you log.
          Use +/− only for food eaten outside the app. Tap <strong style={{ color: "var(--text)" }}>ⓘ</strong> to see which foods to eat.
        </div>
      </div>

      {/* Macro info modal */}
      <AnimatePresence>
        {infoFor && (
          <MacroInfoModal macroKey={infoFor} onClose={() => setInfoFor(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

// ── Testosterone Foods Section ────────────────────────────────────────────────
function TestoFoods() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      style={{ display: "flex", flexDirection: "column", gap: 0 }}
    >
      <div style={{
        padding: "12px 14px", marginBottom: 12,
        background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(234,88,12,0.06))",
        borderRadius: 12, border: "1px solid rgba(245,158,11,0.2)",
      }}>
        <div style={{ fontWeight: 800, fontSize: 13, color: "#f59e0b", marginBottom: 4 }}>
          Testosterone Nutrition Guide
        </div>
        <div style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.6 }}>
          These foods support natural testosterone production. Combine with compound lifting,
          sleep 7–8 hours, and keep cortisol low for maximum results.
        </div>
      </div>

      {TESTO_FOODS.map((food, i) => (
        <motion.div
          key={food.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          style={{
            borderRadius: 12, marginBottom: 6,
            background: "var(--surface2)", border: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            style={{
              width: "100%", display: "flex", alignItems: "center", gap: 12,
              padding: "11px 14px", background: "none", border: "none",
              cursor: "pointer", textAlign: "left",
            }}
          >
            <span style={{ fontSize: 22, flexShrink: 0 }}>{food.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{food.name}</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                {expanded === i ? "▲ hide" : "▼ why + how"}
              </div>
            </div>
            <div style={{
              fontSize: 10, fontWeight: 700, color: "#f59e0b",
              padding: "3px 8px", borderRadius: 20,
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.2)",
              flexShrink: 0,
            }}>
              T-Boost
            </div>
          </button>
          <AnimatePresence>
            {expanded === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ overflow: "hidden" }}
              >
                <div style={{ padding: "0 14px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{
                    fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6,
                    paddingLeft: 10, borderLeft: "2px solid #f59e0b",
                  }}>
                    <strong style={{ color: "var(--text)" }}>Why it works:</strong> {food.why}
                  </div>
                  <div style={{
                    fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6,
                    paddingLeft: 10, borderLeft: "2px solid #10b981",
                  }}>
                    <strong style={{ color: "var(--text)" }}>How to eat it:</strong> {food.how}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Saved recipe card ──────────────────────────────────────────────────────────
function RecipeCard({ recipe, onAdd, onDelete }: {
  recipe: Recipe;
  onAdd: () => void;
  onDelete: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{
      borderRadius: 12, background: "var(--surface2)",
      border: "1px solid var(--border)", overflow: "hidden",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px" }}>
        <button
          onClick={() => setExpanded(e => !e)}
          style={{ flex: 1, textAlign: "left", background: "none", border: "none", cursor: "pointer" }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{recipe.name}</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
            {recipe.ingredients.length} ingredient{recipe.ingredients.length !== 1 ? "s" : ""}
            {" · "}{expanded ? "▲ collapse" : "▼ show"}
          </div>
        </button>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: "var(--purple)" }}>
            {recipe.totalCalories}
          </div>
          <div style={{ fontSize: 9, color: "var(--text-muted)" }}>kcal</div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onAdd}
          style={{
            padding: "7px 12px", borderRadius: 8, cursor: "pointer",
            background: "linear-gradient(135deg, var(--purple), #4c1d95)",
            border: "none", color: "#fff", fontWeight: 700, fontSize: 11,
            flexShrink: 0,
          }}
        >
          Add
        </motion.button>
        <button
          onClick={onDelete}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 16 }}
        >
          ×
        </button>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden", borderTop: "1px solid var(--border)" }}
          >
            <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
              {recipe.ingredients.map((ing, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                  <span style={{ color: "var(--text)" }}>{ing.name}</span>
                  <span style={{ color: "var(--text-muted)" }}>
                    {ing.amount} {ing.unit} — {ing.calories} kcal
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
interface Props { uid: string | null }

type SubTab = "log" | "recipes" | "testo";

export default function CalorieTracker({ uid }: Props) {
  const {
    entries, total, viewDate, setViewDate,
    addEntry, removeEntry,
    history, loadHistory, loadingHistory,
    today, isToday,
  } = useCalories(uid);

  const {
    recipes, loading: recipesLoading,
    loadRecipes, saveRecipe, deleteRecipe,
  } = useRecipes(uid);

  const [subTab, setSubTab]       = useState<SubTab>("log");
  const [showBuilder, setShowBuilder] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [recipesLoaded, setRecipesLoaded] = useState(false);
  const [showGoals, setShowGoals] = useState(true);

  // ── Body stats (persist across sessions) ──────────────────────────────────
  const [stats, setStatsState] = useState<BodyStats>({ weightKg: 86, heightCm: 170, age: 22 });

  useEffect(() => {
    const w = localStorage.getItem("project70-weight");
    const h = localStorage.getItem("project70-height");
    const a = localStorage.getItem("project70-age");
    setStatsState({
      weightKg: w ? Number(w) || 86 : 86,
      heightCm: h ? Number(h) || 170 : 170,
      age:      a ? Number(a) || 22 : 22,
    });
  }, []);

  const handleStatsChange = (s: BodyStats) => {
    setStatsState(s);
    localStorage.setItem("project70-weight", String(s.weightKg));
    localStorage.setItem("project70-height", String(s.heightCm));
    localStorage.setItem("project70-age",    String(s.age));
  };

  // ── Daily macros (per date, manual logging) ────────────────────────────────
  const [macros, setMacros] = useState<DayMacros>(ZERO_MACROS);
  useEffect(() => {
    const raw = localStorage.getItem(`project70-macros-${viewDate}`);
    setMacros(raw ? (JSON.parse(raw) as DayMacros) : ZERO_MACROS);
  }, [viewDate]);

  const handleMacroChange = (key: keyof DayMacros, val: number) => {
    setMacros(prev => {
      const next = { ...prev, [key]: val };
      localStorage.setItem(`project70-macros-${viewDate}`, JSON.stringify(next));
      return next;
    });
  };

  const goals = calcGoals(stats);

  // Auto macros — summed live from the day's logged entries
  const autoMacros: DayMacros = {
    protein: Math.round(entries.reduce((s, e) => s + (e.protein ?? 0), 0) * 10) / 10,
    carbs:   Math.round(entries.reduce((s, e) => s + (e.carbs   ?? 0), 0) * 10) / 10,
    fat:     Math.round(entries.reduce((s, e) => s + (e.fat     ?? 0), 0) * 10) / 10,
    fiber:   Math.round(entries.reduce((s, e) => s + (e.fiber   ?? 0), 0) * 10) / 10,
  };

  useEffect(() => {
    if (subTab === "recipes" && !recipesLoaded) {
      loadRecipes();
      setRecipesLoaded(true);
    }
  }, [subTab, recipesLoaded, loadRecipes]);

  // Sum macros across a dish's ingredients (old saved recipes without macro data → 0)
  function macroTotals(ingredients: RecipeIngredient[]) {
    const r = (n: number) => Math.round(n * 10) / 10;
    return {
      protein: r(ingredients.reduce((s, i) => s + (i.protein ?? 0), 0)),
      carbs:   r(ingredients.reduce((s, i) => s + (i.carbs   ?? 0), 0)),
      fat:     r(ingredients.reduce((s, i) => s + (i.fat     ?? 0), 0)),
      fiber:   r(ingredients.reduce((s, i) => s + (i.fiber   ?? 0), 0)),
    };
  }

  function handleSaveRecipe(name: string, ingredients: RecipeIngredient[], totalCalories: number) {
    saveRecipe({ name, ingredients, totalCalories });
    addEntry({ name, amount: 1, unit: "serving", calories: totalCalories, ...macroTotals(ingredients) });
  }

  function handleAddToLog(name: string, ingredients: RecipeIngredient[], totalCalories: number) {
    addEntry({ name, amount: 1, unit: "serving", calories: totalCalories, ...macroTotals(ingredients) });
  }

  function handleAddSavedRecipe(recipe: Recipe) {
    addEntry({
      name: recipe.name, amount: 1, unit: "serving",
      calories: recipe.totalCalories,
      ...macroTotals(recipe.ingredients),
    });
    setSubTab("log");
  }

  const dotColors = ["#10b981","#f59e0b","#f97316","#22c55e","#ec4899","#60a5fa","#a78bfa","#34d399"];

  const SUB_TABS: { key: SubTab; label: string }[] = [
    { key: "log",     label: "📋 Log" },
    { key: "recipes", label: "📖 Recipes" },
    { key: "testo",   label: "⚡ Testosterone" },
  ];

  return (
    <>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        {/* Header */}
        <div style={{
          padding: "16px 20px", borderBottom: "1px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 10,
        }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>Calorie Tracker</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
              Resets at midnight · history saved to Firebase
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <motion.button whileTap={{ scale: 0.96 }} onClick={() => { setShowHistory(true); loadHistory(); }} style={outlineBtn}>
              History
            </motion.button>
            <motion.button whileTap={{ scale: 0.96 }} onClick={() => setShowBuilder(true)} style={primaryBtn}>
              + Build Recipe
            </motion.button>
          </div>
        </div>

        {/* Sub tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--border)" }}>
          {SUB_TABS.map(t => (
            <button
              key={t.key}
              onClick={() => setSubTab(t.key)}
              style={{
                flex: 1, padding: "10px 0",
                background: "none", border: "none",
                borderBottom: subTab === t.key ? "2px solid var(--purple)" : "2px solid transparent",
                color: subTab === t.key ? "var(--purple-light)" : "var(--text-muted)",
                fontWeight: subTab === t.key ? 700 : 500, fontSize: 12, cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 14 }}>
          <AnimatePresence mode="wait">

            {/* ── TODAY'S LOG TAB ── */}
            {subTab === "log" && (
              <motion.div key="log"
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {/* Date navigation */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <button onClick={() => {
                    const d = new Date(viewDate + "T00:00:00"); d.setDate(d.getDate() - 1);
                    setViewDate(d.toLocaleDateString("en-CA"));
                  }} style={navBtn}>←</button>
                  <div style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                      {isToday ? "Today" : formatDate(viewDate)}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (isToday) return;
                      const d = new Date(viewDate + "T00:00:00"); d.setDate(d.getDate() + 1);
                      setViewDate(d.toLocaleDateString("en-CA"));
                    }}
                    disabled={isToday}
                    style={{ ...navBtn, opacity: isToday ? 0.3 : 1, cursor: isToday ? "default" : "pointer" }}
                  >
                    →
                  </button>
                </div>

                {/* Nutrition Goals card (collapsible) */}
                <div>
                  <button
                    onClick={() => setShowGoals(g => !g)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                      background: "none", border: "none", cursor: "pointer",
                      padding: "0 0 8px 0",
                    }}
                  >
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>📊 Nutrition Goals</span>
                    <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{showGoals ? "▲ hide" : "▼ show"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {showGoals && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: "hidden" }}
                      >
                        <NutritionGoals
                          stats={stats}
                          onStatsChange={handleStatsChange}
                          macros={macros}
                          onMacroChange={handleMacroChange}
                          autoMacros={autoMacros}
                          calTotal={total}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Big calorie number */}
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: 52, fontWeight: 900, lineHeight: 1,
                    color: total > goals.calories ? "#ef4444" : "var(--text)",
                  }}>
                    {total}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    kcal consumed · goal {goals.calories} kcal
                  </div>
                </div>

                {entries.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "12px 0", fontSize: 13, color: "var(--text-muted)" }}>
                    {isToday
                      ? "Nothing logged yet. Tap \"+ Build Recipe\" to start."
                      : "No food logged on this day."}
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {entries.map((e, i) => (
                      <motion.div
                        key={e.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        style={{
                          display: "flex", alignItems: "center", gap: 10,
                          padding: "10px 12px", borderRadius: 10,
                          background: "var(--surface2)", border: "1px solid var(--border)",
                        }}
                      >
                        <div style={{
                          width: 8, height: 8, borderRadius: "50%",
                          background: dotColors[i % dotColors.length], flexShrink: 0,
                        }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{e.name}</div>
                          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                            {e.amount} {e.unit} ·{" "}
                            <span style={{ color: "var(--text)" }}>{e.calories} kcal</span>
                          </div>
                          {(e.protein !== undefined || e.carbs !== undefined) && (
                            <div style={{ fontSize: 10, marginTop: 2, display: "flex", gap: 8, flexWrap: "wrap" }}>
                              <span style={{ color: "#f87171" }}>P {e.protein ?? 0}g</span>
                              <span style={{ color: "#fcd34d" }}>C {e.carbs ?? 0}g</span>
                              <span style={{ color: "#fb923c" }}>F {e.fat ?? 0}g</span>
                              <span style={{ color: "#4ade80" }}>Fb {e.fiber ?? 0}g</span>
                            </div>
                          )}
                        </div>
                        {isToday && (
                          <button
                            onClick={() => removeEntry(e.id)}
                            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 16, padding: "0 4px" }}
                          >
                            ×
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* ── SAVED RECIPES TAB ── */}
            {subTab === "recipes" && (
              <motion.div key="recipes"
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                {recipesLoading ? (
                  <div style={{ textAlign: "center", padding: "16px 0", fontSize: 13, color: "var(--text-muted)" }}>
                    Loading…
                  </div>
                ) : recipes.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <div style={{ fontSize: 32, marginBottom: 8 }}>📖</div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12 }}>
                      No saved recipes yet.
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setShowBuilder(true)}
                      style={primaryBtn}
                    >
                      + Build your first recipe
                    </motion.button>
                  </div>
                ) : (
                  <>
                    <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                      Tap "Add" to log a recipe to today · tap name to expand ingredients
                    </div>
                    {recipes.map(r => (
                      <RecipeCard
                        key={r.id}
                        recipe={r}
                        onAdd={() => handleAddSavedRecipe(r)}
                        onDelete={() => deleteRecipe(r.id)}
                      />
                    ))}
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setShowBuilder(true)}
                      style={{ ...outlineBtn, width: "100%", marginTop: 4 }}
                    >
                      + Build new recipe
                    </motion.button>
                  </>
                )}
              </motion.div>
            )}

            {/* ── TESTOSTERONE FOODS TAB ── */}
            {subTab === "testo" && (
              <motion.div key="testo"
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
              >
                <TestoFoods />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* History modal */}
      <AnimatePresence>
        {showHistory && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, zIndex: 150,
              background: "rgba(0,0,0,0.7)",
              display: "flex", alignItems: "flex-end", justifyContent: "center",
            }}
            onClick={e => { if (e.target === e.currentTarget) setShowHistory(false); }}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              style={{
                width: "100%", maxWidth: 480,
                background: "var(--surface)", borderRadius: "18px 18px 0 0",
                padding: "20px 20px 32px", maxHeight: "75vh", overflowY: "auto",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>Calorie History</div>
                <button onClick={() => setShowHistory(false)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 20 }}>
                  ×
                </button>
              </div>
              {loadingHistory ? (
                <div style={{ textAlign: "center", padding: "20px 0", color: "var(--text-muted)", fontSize: 13 }}>Loading…</div>
              ) : history.length === 0 ? (
                <div style={{ textAlign: "center", padding: "20px 0", color: "var(--text-muted)", fontSize: 13 }}>No history yet.</div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {history.map(day => (
                    <motion.button
                      key={day.date}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => { setViewDate(day.date); setSubTab("log"); setShowHistory(false); }}
                      style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "12px 14px", borderRadius: 10,
                        background: "var(--surface2)", border: "1px solid var(--border)",
                        cursor: "pointer", textAlign: "left",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                          {day.date === today ? "Today" : formatDate(day.date)}
                        </div>
                        <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{day.entries.length} items</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{
                          fontSize: 18, fontWeight: 900,
                          color: day.total > goals.calories ? "#ef4444" : day.total > goals.calories * 0.9 ? "#f59e0b" : "#10b981",
                        }}>
                          {day.total}
                        </div>
                        <div style={{ fontSize: 10, color: "var(--text-muted)" }}>kcal</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recipe Builder modal */}
      <AnimatePresence>
        {showBuilder && (
          <RecipeBuilder
            onSave={handleSaveRecipe}
            onAddToLog={handleAddToLog}
            onClose={() => setShowBuilder(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

const primaryBtn: React.CSSProperties = {
  padding: "9px 16px", borderRadius: 10, cursor: "pointer",
  background: "linear-gradient(135deg, var(--purple), #4c1d95)",
  border: "1px solid rgba(167,139,250,0.3)",
  color: "#fff", fontSize: 12, fontWeight: 700,
};
const outlineBtn: React.CSSProperties = {
  padding: "9px 16px", borderRadius: 10, cursor: "pointer",
  background: "var(--surface2)", border: "1px solid var(--border)",
  color: "var(--text)", fontSize: 12, fontWeight: 600,
};
const navBtn: React.CSSProperties = {
  width: 32, height: 32, borderRadius: 8,
  background: "var(--surface2)", border: "1px solid var(--border)",
  color: "var(--text)", cursor: "pointer", fontSize: 16, fontWeight: 700,
};
