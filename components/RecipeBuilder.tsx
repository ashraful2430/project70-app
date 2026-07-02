"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  INGREDIENTS, searchIngredients, calcIngredientCal,
  CATEGORY_COLOR, type Ingredient, type UnitKey,
} from "@/lib/data/ingredients";
import type { RecipeIngredient } from "@/lib/hooks/useRecipes";

interface OnlineResult {
  id: string;
  name: string;
  cal100: number;
  source: "USDA";
}

interface Props {
  onSave: (name: string, ingredients: RecipeIngredient[], total: number) => void;
  onAddToLog: (name: string, ingredients: RecipeIngredient[], total: number) => void;
  onClose: () => void;
}

const UNIT_LABELS: Record<UnitKey, string> = {
  g: "grams (g)", ml: "ml", tbsp: "tbsp", tsp: "tsp", piece: "piece(s)", cup: "cup(s)",
};

export default function RecipeBuilder({ onSave, onAddToLog, onClose }: Props) {
  const [recipeName, setRecipeName]       = useState("");
  const [search, setSearch]               = useState("");
  const [localResults, setLocalResults]   = useState<Ingredient[]>(INGREDIENTS.slice(0, 10));
  const [onlineResults, setOnlineResults] = useState<OnlineResult[]>([]);
  const [onlineLoading, setOnlineLoading] = useState(false);
  const [selectedIng, setSelectedIng]     = useState<Ingredient | null>(null);
  const [selectedOnline, setSelectedOnline] = useState<OnlineResult | null>(null);
  const [selUnit, setSelUnit]             = useState<UnitKey>("g");
  const [selAmount, setSelAmount]         = useState<number>(100);
  const [addedItems, setAddedItems]       = useState<RecipeIngredient[]>([]);

  const searchRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { searchRef.current?.focus(); }, []);

  const doOnlineSearch = useCallback(async (q: string) => {
    if (!q.trim() || q.length < 3) { setOnlineResults([]); return; }
    setOnlineLoading(true);
    try {
      const res = await fetch(`/api/nutrition?q=${encodeURIComponent(q)}`);
      const data: OnlineResult[] = await res.json();
      setOnlineResults(data);
    } catch { setOnlineResults([]); }
    finally { setOnlineLoading(false); }
  }, []);

  function handleSearch(q: string) {
    setSearch(q);
    setSelectedIng(null);
    setSelectedOnline(null);
    setLocalResults(searchIngredients(q));
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => doOnlineSearch(q), 600);
  }

  function selectLocal(ing: Ingredient) {
    setSelectedIng(ing);
    setSelectedOnline(null);
    setSelUnit(ing.defaultUnit);
    setSelAmount(ing.defaultAmount);
  }

  function selectOnline(o: OnlineResult) {
    setSelectedOnline(o);
    setSelectedIng(null);
    setSelUnit("g");
    setSelAmount(100);
  }

  function calForSelection(): number {
    if (selectedIng) {
      return calcIngredientCal(selectedIng, selAmount, selUnit);
    }
    if (selectedOnline) {
      return Math.round((selectedOnline.cal100 / 100) * selAmount);
    }
    return 0;
  }

  function addToRecipe() {
    const cal = calForSelection();
    if (selectedIng) {
      setAddedItems(prev => [...prev, {
        id: selectedIng.id,
        name: selectedIng.name,
        amount: selAmount,
        unit: selUnit,
        cal100: selectedIng.cal100,
        calories: cal,
      }]);
    } else if (selectedOnline) {
      setAddedItems(prev => [...prev, {
        id: selectedOnline.id,
        name: selectedOnline.name,
        amount: selAmount,
        unit: "g",
        cal100: selectedOnline.cal100,
        calories: cal,
      }]);
    }
    setSelectedIng(null);
    setSelectedOnline(null);
    setSearch("");
    setLocalResults(INGREDIENTS.slice(0, 10));
    setOnlineResults([]);
    searchRef.current?.focus();
  }

  function removeItem(idx: number) {
    setAddedItems(prev => prev.filter((_, i) => i !== idx));
  }

  const totalCal = addedItems.reduce((s, i) => s + i.calories, 0);
  const hasSelection = selectedIng !== null || selectedOnline !== null;
  const showOnline = onlineResults.length > 0 || onlineLoading;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 250,
      background: "rgba(0,0,0,0.75)",
      display: "flex", alignItems: "flex-end", justifyContent: "center",
    }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        style={{
          width: "100%", maxWidth: 560,
          background: "var(--surface)",
          borderRadius: "20px 20px 0 0",
          display: "flex", flexDirection: "column",
          maxHeight: "94vh",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "18px 20px 14px",
          borderBottom: "1px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text)" }}>Recipe Builder</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
              Add ingredients and portions — calories calculated automatically
            </div>
          </div>
          <button onClick={onClose} style={iconXBtn}>×</button>
        </div>

        {/* Recipe name */}
        <div style={{ padding: "12px 20px 0", flexShrink: 0 }}>
          <input
            value={recipeName}
            onChange={e => setRecipeName(e.target.value)}
            placeholder="Recipe / Dish name (e.g. Fish Curry with Tilapia)"
            style={textInput}
          />
        </div>

        {/* Scrollable area */}
        <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px" }}>

          {/* Ingredient search */}
          <div style={{ marginBottom: 10 }}>
            <input
              ref={searchRef}
              value={search}
              onChange={e => handleSearch(e.target.value)}
              placeholder="Search ingredient (e.g. soyabean oil, onion, tilapia, ময়দা...)"
              style={textInput}
            />
          </div>

          {/* Selected ingredient — amount input */}
          <AnimatePresence>
            {hasSelection && (
              <motion.div
                initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                style={{
                  padding: "12px 14px", borderRadius: 12,
                  background: "var(--surface2)", border: "1px solid var(--border)",
                  marginBottom: 10,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 13, color: "var(--text)", marginBottom: 10 }}>
                  {selectedIng?.name ?? selectedOnline?.name}
                  {selectedOnline && (
                    <span style={{ fontSize: 10, color: "var(--text-muted)", marginLeft: 6 }}>
                      · via USDA
                    </span>
                  )}
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 10 }}>
                  {/* Unit selector */}
                  {selectedIng && selectedIng.units.length > 1 && (
                    <select
                      value={selUnit}
                      onChange={e => {
                        setSelUnit(e.target.value as UnitKey);
                        // reset amount to a sensible default for that unit
                        const newUnit = e.target.value as UnitKey;
                        if (newUnit === "g" || newUnit === "ml") setSelAmount(100);
                        else setSelAmount(selectedIng.defaultUnit === newUnit ? selectedIng.defaultAmount : 1);
                      }}
                      style={{
                        padding: "8px 10px", borderRadius: 8,
                        background: "var(--surface)", border: "1px solid var(--border)",
                        color: "var(--text)", fontSize: 12, outline: "none", cursor: "pointer",
                      }}
                    >
                      {(selectedIng?.units ?? (["g"] as UnitKey[])).map(u => (
                        <option key={u} value={u}>{UNIT_LABELS[u]}</option>
                      ))}
                    </select>
                  )}
                  {!selectedIng && (
                    <span style={{ fontSize: 12, color: "var(--text-muted)", padding: "8px 0" }}>
                      unit: grams (g)
                    </span>
                  )}

                  {/* Amount input */}
                  <input
                    type="number"
                    min={0.1}
                    step={selUnit === "g" || selUnit === "ml" ? 10 : 0.5}
                    value={selAmount}
                    onChange={e => setSelAmount(Math.max(0.1, Number(e.target.value)))}
                    style={{
                      width: 80, padding: "8px 10px", borderRadius: 8,
                      background: "var(--surface)", border: "1px solid var(--border)",
                      color: "var(--text)", fontSize: 13, textAlign: "center", outline: "none",
                    }}
                  />

                  {/* Cal preview */}
                  <div style={{ fontSize: 22, fontWeight: 900, color: "var(--purple)", marginLeft: "auto" }}>
                    {calForSelection()} kcal
                  </div>
                </div>

                {/* Cal/100g info */}
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 10 }}>
                  {(selectedIng?.cal100 ?? selectedOnline?.cal100 ?? 0)} kcal per 100g
                  {selectedIng && selUnit !== "g" && selUnit !== "ml" && selectedIng.gramsPerUnit[selUnit] && (
                    <span> · 1 {selUnit} = {selectedIng.gramsPerUnit[selUnit]}g</span>
                  )}
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={addToRecipe}
                    style={primaryBtn}
                  >
                    + Add to Recipe
                  </motion.button>
                  <button
                    onClick={() => { setSelectedIng(null); setSelectedOnline(null); }}
                    style={outlineBtn}
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Local results */}
          {!hasSelection && localResults.length > 0 && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 }}>
                {search.trim() ? "Matching ingredients" : "Common ingredients — tap to add"}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {localResults.map(ing => (
                  <motion.button
                    key={ing.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => selectLocal(ing)}
                    style={ingRow}
                  >
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{ing.name}</div>
                      <div style={{ fontSize: 10, color: "var(--text-muted)" }}>
                        {ing.cal100} kcal/100g
                      </div>
                    </div>
                    <span style={{
                      fontSize: 10, padding: "3px 7px", borderRadius: 6,
                      background: CATEGORY_COLOR[ing.category] + "20",
                      color: CATEGORY_COLOR[ing.category], fontWeight: 600, flexShrink: 0,
                    }}>
                      {ing.category}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Online results */}
          {!hasSelection && showOnline && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 }}>
                Online search (USDA database)
              </div>
              {onlineLoading && (
                <div style={{ fontSize: 12, color: "var(--text-muted)", padding: "8px 0" }}>Searching…</div>
              )}
              {!onlineLoading && onlineResults.map(o => (
                <motion.button
                  key={o.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selectOnline(o)}
                  style={{ ...ingRow, marginBottom: 4 }}
                >
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text)" }}>{o.name}</div>
                    <div style={{ fontSize: 10, color: "var(--text-muted)" }}>
                      {o.cal100} kcal/100g · USDA
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          )}

          {/* Added ingredients list */}
          {addedItems.length > 0 && (
            <div style={{ marginTop: 4 }}>
              <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>
                Recipe so far ({addedItems.length} ingredient{addedItems.length !== 1 ? "s" : ""})
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
                {addedItems.map((item, i) => (
                  <div key={`${item.id}-${i}`} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "9px 12px", borderRadius: 10,
                    background: "var(--surface2)", border: "1px solid var(--border)",
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text)" }}>{item.name}</div>
                      <div style={{ fontSize: 10, color: "var(--text-muted)" }}>
                        {item.amount} {item.unit} · <span style={{ color: "var(--text)" }}>{item.calories} kcal</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(i)}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 16, padding: "0 4px" }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "12px 14px", borderRadius: 12,
                background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)",
                marginBottom: 12,
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>Total Calories</div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "var(--purple)" }}>{totalCal} kcal</div>
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div style={{
          padding: "12px 20px 28px",
          borderTop: "1px solid var(--border)",
          display: "flex", gap: 8, flexShrink: 0,
        }}>
          <motion.button
            whileTap={{ scale: 0.96 }}
            disabled={addedItems.length === 0 || !recipeName.trim()}
            onClick={() => {
              if (addedItems.length === 0 || !recipeName.trim()) return;
              onSave(recipeName.trim(), addedItems, totalCal);
              onClose();
            }}
            style={{
              ...primaryBtn,
              flex: 1,
              opacity: (addedItems.length === 0 || !recipeName.trim()) ? 0.4 : 1,
            }}
          >
            Save Recipe
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            disabled={addedItems.length === 0}
            onClick={() => {
              if (addedItems.length === 0) return;
              const name = recipeName.trim() || `Meal (${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })})`;
              onAddToLog(name, addedItems, totalCal);
              onClose();
            }}
            style={{
              ...outlineBtn,
              flex: 1,
              opacity: addedItems.length === 0 ? 0.4 : 1,
            }}
          >
            Add to Today Only
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

const textInput: React.CSSProperties = {
  width: "100%", padding: "11px 14px", borderRadius: 10,
  background: "var(--surface2)", border: "1px solid var(--border)",
  color: "var(--text)", fontSize: 13, outline: "none", boxSizing: "border-box",
};
const ingRow: React.CSSProperties = {
  display: "flex", justifyContent: "space-between", alignItems: "center",
  padding: "9px 12px", borderRadius: 10,
  background: "var(--surface2)", border: "1px solid var(--border)",
  cursor: "pointer", textAlign: "left", gap: 8, width: "100%",
};
const primaryBtn: React.CSSProperties = {
  padding: "11px 18px", borderRadius: 10, cursor: "pointer",
  background: "linear-gradient(135deg, var(--purple), #4c1d95)",
  border: "1px solid rgba(167,139,250,0.3)",
  color: "#fff", fontWeight: 700, fontSize: 13,
};
const outlineBtn: React.CSSProperties = {
  padding: "11px 18px", borderRadius: 10, cursor: "pointer",
  background: "var(--surface2)", border: "1px solid var(--border)",
  color: "var(--text)", fontWeight: 600, fontSize: 13,
};
const iconXBtn: React.CSSProperties = {
  width: 32, height: 32, borderRadius: 8,
  background: "var(--surface2)", border: "1px solid var(--border)",
  color: "var(--text-muted)", cursor: "pointer",
  fontSize: 20, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center",
};
