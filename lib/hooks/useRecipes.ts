"use client";
import { useState, useCallback } from "react";
import {
  collection, doc, getDocs, setDoc, deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

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

export function useRecipes(uid: string | null) {
  const [recipes, setRecipes]   = useState<Recipe[]>([]);
  const [loading, setLoading]   = useState(false);

  const loadRecipes = useCallback(async () => {
    setLoading(true);
    try {
      if (uid) {
        const snap = await getDocs(collection(db, "users", uid, "recipes"));
        const list: Recipe[] = [];
        snap.forEach(d => list.push({ id: d.id, ...(d.data() as Omit<Recipe, "id">) }));
        list.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        setRecipes(list);
      } else {
        // localStorage fallback
        const raw = localStorage.getItem("project70-recipes") ?? "[]";
        setRecipes(JSON.parse(raw));
      }
    } catch {
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }, [uid]);

  const saveRecipe = useCallback(async (recipe: Omit<Recipe, "id" | "createdAt">) => {
    const id = Date.now().toString(36);
    const full: Recipe = { ...recipe, id, createdAt: new Date().toISOString() };
    if (uid) {
      await setDoc(doc(db, "users", uid, "recipes", id), full);
    } else {
      const list: Recipe[] = JSON.parse(localStorage.getItem("project70-recipes") ?? "[]");
      list.unshift(full);
      localStorage.setItem("project70-recipes", JSON.stringify(list));
    }
    setRecipes(prev => [full, ...prev]);
    return full;
  }, [uid]);

  const deleteRecipe = useCallback(async (id: string) => {
    if (uid) {
      await deleteDoc(doc(db, "users", uid, "recipes", id));
    } else {
      const list: Recipe[] = JSON.parse(localStorage.getItem("project70-recipes") ?? "[]");
      localStorage.setItem("project70-recipes", JSON.stringify(list.filter(r => r.id !== id)));
    }
    setRecipes(prev => prev.filter(r => r.id !== id));
  }, [uid]);

  return { recipes, loading, loadRecipes, saveRecipe, deleteRecipe };
}
