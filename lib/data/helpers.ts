import type { Exercise, Meal, Drink, DietDay } from "@/types";

export function ex(
  name: string, target: string, sets: number, reps: string,
  rest: string, cue: string, steps: string[], difficulty: number, calories: number,
): Exercise {
  return { name, target, sets, reps, rest, cue, steps: steps || [], difficulty: difficulty || 1, calories: calories || 0 };
}

export function meal(time: string, title: string, items: string[], steps: string[], info: Meal["info"]): Meal {
  return { time, title, items, steps, info: info || {} as Meal["info"] };
}

export function drink(title: string, items: string[], steps: string[], info: Record<string, string>): Drink {
  return { title, items, steps, info: info || {} };
}

export function diet(weekday: string, type: string, meals: Meal[]): DietDay {
  return { weekday, type, meals };
}
