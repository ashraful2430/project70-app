"use client";
import { useState, useCallback } from "react";

export interface RecipeIngredient {
  id: string;         // ingredient id or "online-{name}"
  name: string;
  amount: number;
  unit: string;
  cal100: number;     // for recalculation
  calories: number;
  // macros in grams for this amount (auto-calculated; absent on old saved recipes)
  protein?: number;
  carbs?: number;
  fat?: number;
  fiber?: number;
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: RecipeIngredient[];
  totalCalories: number;
  createdAt: string;
}

const LS_RECIPES = "project70-recipes";

function loadLS(): Recipe[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(LS_RECIPES) ?? "[]"); } catch { return []; }
}
function saveLS(list: Recipe[]) {
  try { localStorage.setItem(LS_RECIPES, JSON.stringify(list)); } catch {}
}

export function useRecipes(uid: string | null) {
  const [recipes, setRecipes]   = useState<Recipe[]>([]);
  const [loading, setLoading]   = useState(false);

  const loadRecipes = useCallback(async () => {
    setLoading(true);
    const local = loadLS();
    try {
      if (uid) {
        const res = await fetch(`/api/data/recipes?uid=${encodeURIComponent(uid)}`);
        if (res.ok) {
          const list = (await res.json()) as Recipe[];
          setRecipes(list.length ? list : local);
          setLoading(false);
          return;
        }
      }
      setRecipes(local);
    } catch {
      setRecipes(local);
    } finally {
      setLoading(false);
    }
  }, [uid]);

  const saveRecipe = useCallback(async (recipe: Omit<Recipe, "id" | "createdAt">) => {
    const id = Date.now().toString(36);
    const full: Recipe = { ...recipe, id, createdAt: new Date().toISOString() };
    // local mirror
    saveLS([full, ...loadLS()]);
    if (uid) {
      fetch("/api/data/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, recipe: full }),
      }).catch(() => {});
    }
    setRecipes(prev => [full, ...prev]);
    return full;
  }, [uid]);

  const deleteRecipe = useCallback(async (id: string) => {
    saveLS(loadLS().filter(r => r.id !== id));
    if (uid) {
      fetch(`/api/data/recipes?uid=${encodeURIComponent(uid)}&id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      }).catch(() => {});
    }
    setRecipes(prev => prev.filter(r => r.id !== id));
  }, [uid]);

  return { recipes, loading, loadRecipes, saveRecipe, deleteRecipe };
}
