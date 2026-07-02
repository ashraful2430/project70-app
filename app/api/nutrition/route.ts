import { NextRequest } from "next/server";

interface UsdaFood {
  fdcId: number;
  description: string;
  foodNutrients?: { nutrientId: number; nutrientName?: string; value?: number }[];
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
      .map((f) => {
        const energy = f.foodNutrients?.find(
          (n) => n.nutrientId === 1008 || n.nutrientName?.toLowerCase().includes("energy")
        );
        return {
          id: `usda-${f.fdcId}`,
          name: f.description,
          cal100: Math.round(energy?.value ?? 0),
          source: "USDA",
        };
      })
      .filter((f) => f.cal100 > 0)
      .slice(0, 6);

    return Response.json(results);
  } catch {
    return Response.json([]);
  }
}
