"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCalories } from "@/lib/hooks/useCalories";
import { useRecipes, type Recipe } from "@/lib/hooks/useRecipes";
import RecipeBuilder from "@/components/RecipeBuilder";
import type { RecipeIngredient } from "@/lib/hooks/useRecipes";

// ─── Nutrition goals calculator ───────────────────────────────────────────────

interface MacroGoals {
  calories: number; // kcal/day
  protein: number;  // grams
  fiber: number;    // grams
  carbs: number;    // grams
  fat: number;      // grams
}

// Uses Mifflin-St Jeor with moderate-activity TDEE and a 500 kcal deficit for fat loss.
// Protein high (2g/kg) to preserve muscle while losing fat.
function calcGoals(weightKg: number): MacroGoals {
  // Simple weight-only estimate: ~28 kcal/kg for moderate activity, minus 500 deficit
  const tdee = Math.round(weightKg * 28);
  const calories = Math.max(1200, tdee - 500);
  const protein = Math.round(weightKg * 2.0);     // 2g/kg — muscle retention during cut
  const fat     = Math.round(calories * 0.25 / 9); // 25% of calories from fat
  const carbs   = Math.round((calories - protein * 4 - fat * 9) / 4);
  const fiber   = 28;                              // WHO recommendation
  return { calories, protein, fiber, carbs, fat };
}

interface DayMacros { protein: number; fiber: number; carbs: number; fat: number; }
const ZERO_MACROS: DayMacros = { protein: 0, fiber: 0, carbs: 0, fat: 0 };

const MACRO_META = [
  { key: "protein" as keyof DayMacros, label: "Protein",  emoji: "🥩", unit: "g",   color: "#f87171", step: 5  },
  { key: "carbs"   as keyof DayMacros, label: "Carbs",    emoji: "🍚", unit: "g",   color: "#fcd34d", step: 10 },
  { key: "fat"     as keyof DayMacros, label: "Fat",      emoji: "🧈", unit: "g",   color: "#fb923c", step: 5  },
  { key: "fiber"   as keyof DayMacros, label: "Fiber",    emoji: "🌾", unit: "g",   color: "#4ade80", step: 2  },
] as const;

const DAILY_GOAL = 1800;

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}

function GoalBar({ total, goal, color = "" }: { total: number; goal: number; color?: string }) {
  const pct = Math.min(100, (total / goal) * 100);
  const barColor = color || (total > goal ? "#ef4444" : total > goal * 0.9 ? "#f59e0b" : "#10b981");
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>
          {total}{" "}
          <span style={{ fontSize: 10, fontWeight: 400, color: "var(--text-muted)" }}>/ {goal} kcal goal</span>
        </span>
        <span style={{ fontSize: 11, color: total > goal ? "#ef4444" : "var(--text-muted)" }}>
          {total > goal ? `+${total - goal} over` : `${goal - total} remaining`}
        </span>
      </div>
      <div style={{ height: 10, borderRadius: 6, background: "var(--surface2)", overflow: "hidden" }}>
        <motion.div
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ height: "100%", borderRadius: 6, background: barColor }}
        />
      </div>
    </div>
  );
}

// ── Nutrition Goals Card ───────────────────────────────────────────────────────
function NutritionGoals({
  weight, onWeightChange,
  macros, onMacroChange,
  calTotal, calGoal,
}: {
  weight: number;
  onWeightChange: (w: number) => void;
  macros: DayMacros;
  onMacroChange: (key: keyof DayMacros, val: number) => void;
  calTotal: number;
  calGoal: number;
}) {
  const [editWeight, setEditWeight] = useState(false);
  const [draftW, setDraftW]         = useState(String(weight));
  const goals = calcGoals(weight);

  const commitWeight = () => {
    const parsed = parseFloat(draftW);
    if (!isNaN(parsed) && parsed > 0) onWeightChange(parsed);
    setEditWeight(false);
  };

  return (
    <div style={{
      background: "var(--surface2)", borderRadius: 14,
      border: "1px solid var(--border)", overflow: "hidden",
    }}>
      {/* Weight header */}
      <div style={{
        padding: "12px 14px",
        background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(99,102,241,0.06))",
        borderBottom: "1px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Daily Nutrition Goals
          </div>
          <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>
            Based on your weight · auto-calculated
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 9, color: "var(--text-muted)", textTransform: "uppercase" }}>Current</div>
            {editWeight ? (
              <input
                type="number"
                value={draftW}
                onChange={e => setDraftW(e.target.value)}
                onBlur={commitWeight}
                onKeyDown={e => e.key === "Enter" && commitWeight()}
                autoFocus
                style={{
                  width: 56, background: "var(--surface)", border: "1px solid var(--purple)",
                  borderRadius: 6, color: "var(--text)", fontSize: 13, fontWeight: 700,
                  padding: "2px 6px", textAlign: "center",
                }}
              />
            ) : (
              <button onClick={() => { setDraftW(String(weight)); setEditWeight(true); }} style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: 800, color: "var(--purple)",
                padding: 0,
              }}>
                {weight} kg ✎
              </button>
            )}
          </div>
          <div style={{
            fontSize: 10, color: "var(--text-muted)", padding: "3px 8px",
            background: "var(--surface)", borderRadius: 20, border: "1px solid var(--border)",
          }}>
            Goal: 70 kg
          </div>
        </div>
      </div>

      {/* Calorie row */}
      <div style={{ padding: "12px 14px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>
            🔥 Calories
          </span>
          <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
            <span style={{ fontWeight: 700, color: calTotal > goals.calories ? "#ef4444" : "var(--text)" }}>{calTotal}</span>
            {" / "}{goals.calories} kcal
          </span>
        </div>
        <div style={{ height: 8, borderRadius: 4, background: "var(--surface)", overflow: "hidden" }}>
          <motion.div
            animate={{ width: `${Math.min(100, (calTotal / goals.calories) * 100)}%` }}
            transition={{ duration: 0.5 }}
            style={{
              height: "100%", borderRadius: 4,
              background: calTotal > goals.calories ? "#ef4444" : calTotal > goals.calories * 0.9 ? "#f59e0b" : "#10b981",
            }}
          />
        </div>
        <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 4, textAlign: "right" }}>
          {calTotal > goals.calories
            ? `${calTotal - goals.calories} kcal over`
            : `${goals.calories - calTotal} kcal remaining`}
        </div>
      </div>

      {/* Macro rows */}
      <div style={{ padding: "8px 14px 12px", display: "flex", flexDirection: "column", gap: 10 }}>
        {MACRO_META.map(m => {
          const consumed = macros[m.key];
          const goal     = goals[m.key];
          const pct      = Math.min(100, (consumed / goal) * 100);
          return (
            <div key={m.key}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text)" }}>
                  {m.emoji} {m.label}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {/* decrement */}
                  <button onClick={() => onMacroChange(m.key, Math.max(0, consumed - m.step))}
                    style={{ width: 22, height: 22, borderRadius: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text)", cursor: "pointer", fontSize: 14, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    −
                  </button>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", minWidth: 52, textAlign: "center" }}>
                    <span style={{ color: consumed >= goal ? m.color : "var(--text)" }}>{consumed}</span>
                    <span style={{ color: "var(--text-muted)", fontWeight: 400 }}> / {goal}{m.unit}</span>
                  </span>
                  {/* increment */}
                  <button onClick={() => onMacroChange(m.key, consumed + m.step)}
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
                {consumed >= goal
                  ? `✓ Goal reached!`
                  : `${goal - consumed}${m.unit} to go`}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info footer */}
      <div style={{
        padding: "8px 14px", borderTop: "1px solid var(--border)",
        fontSize: 10, color: "var(--text-muted)", lineHeight: 1.5,
      }}>
        <strong style={{ color: "var(--text)" }}>Tip:</strong> Use +/− to manually log each macro after eating.
        Protein goal = {calcGoals(weight).protein}g · keeps muscle while losing fat.
      </div>
    </div>
  );
}

// ── Saved recipe card ──────────────────────────────────────────────────────
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

// ── Main component ─────────────────────────────────────────────────────────
interface Props { uid: string | null }

type SubTab = "log" | "recipes";

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

  // ── Weight (persists across sessions) ──────────────────────────────────────
  const [weight, setWeightState] = useState<number>(86);
  useEffect(() => {
    const stored = localStorage.getItem("project70-weight");
    if (stored) setWeightState(Number(stored) || 86);
  }, []);
  const handleWeightChange = (w: number) => {
    setWeightState(w);
    localStorage.setItem("project70-weight", String(w));
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

  const goals = calcGoals(weight);

  useEffect(() => {
    if (subTab === "recipes" && !recipesLoaded) {
      loadRecipes();
      setRecipesLoaded(true);
    }
  }, [subTab, recipesLoaded, loadRecipes]);

  function handleSaveRecipe(name: string, ingredients: RecipeIngredient[], totalCalories: number) {
    saveRecipe({ name, ingredients, totalCalories });
    addEntry({ name, amount: 1, unit: "serving", calories: totalCalories });
  }

  function handleAddToLog(name: string, _ingredients: RecipeIngredient[], totalCalories: number) {
    addEntry({ name, amount: 1, unit: "serving", calories: totalCalories });
  }

  function handleAddSavedRecipe(recipe: Recipe) {
    addEntry({ name: recipe.name, amount: 1, unit: "serving", calories: recipe.totalCalories });
    setSubTab("log");
  }

  const dotColors = ["#10b981","#f59e0b","#f97316","#22c55e","#ec4899","#60a5fa","#a78bfa","#34d399"];

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
        <div style={{
          display: "flex", borderBottom: "1px solid var(--border)",
        }}>
          {(["log", "recipes"] as SubTab[]).map(t => (
            <button
              key={t}
              onClick={() => setSubTab(t)}
              style={{
                flex: 1, padding: "10px 0",
                background: "none", border: "none",
                borderBottom: subTab === t ? "2px solid var(--purple)" : "2px solid transparent",
                color: subTab === t ? "var(--purple-light)" : "var(--text-muted)",
                fontWeight: subTab === t ? 700 : 500, fontSize: 13, cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {t === "log" ? "📋 Today's Log" : "📖 Saved Recipes"}
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
                          weight={weight}
                          onWeightChange={handleWeightChange}
                          macros={macros}
                          onMacroChange={handleMacroChange}
                          calTotal={total}
                          calGoal={goals.calories}
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
