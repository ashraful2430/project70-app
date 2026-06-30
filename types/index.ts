export interface Exercise {
  name: string;
  target: string;
  sets: number;
  reps: string;
  rest: string;
  cue: string;
  steps: string[];
  difficulty: number;
  calories: number;
}

export interface WarmupItem {
  name: string;
  detail: string;
  xp: number;
  cal: number;
}

export interface Warmup {
  label: string;
  items: WarmupItem[];
}

export interface Finisher {
  name: string;
  detail: string;
  xp: number;
  cal: number;
}

export interface Day {
  id: number;
  day: string;
  abbr: string;
  type: "gym" | "home";
  focus: string;
  duration: string;
  note: string;
  finisher?: Finisher;
  exercises?: Exercise[];
}

export interface MainPhase {
  label: string;
  levelRange: string;
  mon: Exercise[];
  tue: Exercise[];
  wed: Exercise[];
  fri: Exercise[];
  sat: Exercise[];
}

export interface PelvicPhase {
  label: string;
  levelRange: string;
  thu: Exercise[];
  sun: Exercise[];
}

export interface MealInfo {
  prep: string;
  cook: string;
  serves: string;
  kcal?: number;
  tip: string;
}

export interface Meal {
  time: string;
  title: string;
  items: string[];
  steps: string[];
  info: MealInfo;
}

export interface DietDay {
  weekday: string;
  type: string;
  meals: Meal[];
}

export interface Drink {
  title: string;
  items: string[];
  steps: string[];
  info: Record<string, string>;
}

export type DayAbbr = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
