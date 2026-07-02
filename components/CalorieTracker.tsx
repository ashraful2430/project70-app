"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCalories } from "@/lib/hooks/useCalories";
import { useRecipes, type Recipe } from "@/lib/hooks/useRecipes";
import RecipeBuilder from "@/components/RecipeBuilder";
import type { RecipeIngredient } from "@/lib/hooks/useRecipes";

const DAILY_GOAL = 1800;

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}

function GoalBar({ total, goal }: { total: number; goal: number }) {
  const pct = Math.min(100, (total / goal) * 100);
  const color = total > goal ? "#ef4444" : total > goal * 0.9 ? "#f59e0b" : "#10b981";
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
          style={{ height: "100%", borderRadius: 6, background: color }}
        />
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

                <GoalBar total={total} goal={DAILY_GOAL} />

                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: 52, fontWeight: 900, lineHeight: 1,
                    color: total > DAILY_GOAL ? "#ef4444" : "var(--text)",
                  }}>
                    {total}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>kcal consumed</div>
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
                          color: day.total > DAILY_GOAL ? "#ef4444" : day.total > DAILY_GOAL * 0.9 ? "#f59e0b" : "#10b981",
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
