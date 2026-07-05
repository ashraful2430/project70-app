import { NextRequest } from "next/server";

interface UsdaFood {
  fdcId: number;
  description: string;
  foodNutrients?: { nutrientId: number; nutrientName?: string; value?: number }[];
}

// USDA FoodData Central nutrient IDs
const NUTRIENT = {
  energy: 1008,
  protein: 1003,
  fat: 1004,
  carbs: 1005,
  fiber: 1079,
} as const;

function nutrient(f: UsdaFood, id: number, nameHint?: string): number {
  const hit = f.foodNutrients?.find(
    (n) => n.nutrientId === id || (nameHint && n.nutrientName?.toLowerCase().includes(nameHint))
  );
  return Math.round((hit?.value ?? 0) * 10) / 10;
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.trim() ?? "";
  if (!q) return Response.json([]);

  const apiKey = process.env.USDA_API_KEY ?? "DEMO_KEY";
  const url =
    `https://api.nal.usda.gov/fdc/v1/foods/search` +
    `?query=${encodeURIComponent(q)}` +
    `&pageSize=8&dataType=SR%20Legacy,Foundation,Survey%20(FNDDS)` +
    `&api_key=${apiKey}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return Response.json([]);
    const data = await res.json();

    const results = ((data.foods as UsdaFood[]) ?? [])
      .map((f) => ({
        id: `usda-${f.fdcId}`,
        name: f.description,
        cal100: Math.round(nutrient(f, NUTRIENT.energy, "energy")),
        protein100: nutrient(f, NUTRIENT.protein, "protein"),
        carbs100: nutrient(f, NUTRIENT.carbs, "carbohydrate"),
        fat100: nutrient(f, NUTRIENT.fat, "lipid"),
        fiber100: nutrient(f, NUTRIENT.fiber, "fiber"),
        source: "USDA",
      }))
      .filter((f) => f.cal100 > 0)
      .slice(0, 6);

    return Response.json(results);
  } catch {
    return Response.json([]);
  }
}
