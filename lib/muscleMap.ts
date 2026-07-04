import type { Muscle } from "react-body-highlighter";

export type BodyView = "anterior" | "posterior";

export interface MuscleData {
  muscles: Muscle[];
  view: BodyView;
}

interface MuscleRule {
  keywords: string[];
  muscles: Muscle[];
  view: BodyView;
}

// Rules are checked in order against the exercise's `target` text.
// All matching rules contribute muscles; the FIRST match decides the view,
// so put the primary muscle group's rule before secondary ones.
const RULES: MuscleRule[] = [
  { keywords: ["upper chest"],                 muscles: ["chest", "front-deltoids"],            view: "anterior"  },
  { keywords: ["lower chest"],                 muscles: ["chest"],                              view: "anterior"  },
  { keywords: ["chest"],                       muscles: ["chest"],                              view: "anterior"  },
  { keywords: ["rear delt"],                   muscles: ["back-deltoids", "trapezius"],         view: "posterior" },
  { keywords: ["side delt", "front delt", "shoulder"], muscles: ["front-deltoids"],             view: "anterior"  },
  { keywords: ["triceps"],                     muscles: ["triceps"],                            view: "posterior" },
  { keywords: ["biceps"],                      muscles: ["biceps"],                             view: "anterior"  },
  { keywords: ["forearm", "grip", "wrist"],    muscles: ["forearm"],                            view: "anterior"  },
  { keywords: ["lats"],                        muscles: ["upper-back"],                         view: "posterior" },
  { keywords: ["back"],                        muscles: ["upper-back", "lower-back"],           view: "posterior" },
  { keywords: ["trap"],                        muscles: ["trapezius"],                          view: "posterior" },
  { keywords: ["hamstring"],                   muscles: ["hamstring"],                          view: "posterior" },
  { keywords: ["glute"],                       muscles: ["gluteal"],                            view: "posterior" },
  { keywords: ["quad"],                        muscles: ["quadriceps"],                         view: "anterior"  },
  { keywords: ["calf", "calves"],              muscles: ["calves"],                             view: "posterior" },
  { keywords: ["inner thigh"],                 muscles: ["adductor"],                           view: "anterior"  },
  { keywords: ["outer thigh"],                 muscles: ["abductors"],                          view: "anterior"  },
  { keywords: ["oblique"],                     muscles: ["obliques"],                           view: "anterior"  },
  { keywords: ["abs", "core"],                 muscles: ["abs"],                                view: "anterior"  },
  { keywords: ["pelvic"],                      muscles: ["adductor", "abs"],                    view: "anterior"  },
  { keywords: ["hip"],                         muscles: ["abductors", "gluteal"],               view: "posterior" },
  { keywords: ["spine", "spinal", "decompression", "posture", "thoracic", "mobility"],
                                               muscles: ["trapezius", "upper-back", "lower-back"], view: "posterior" },
  { keywords: ["elongation", "full body"],     muscles: ["chest", "abs", "quadriceps"],         view: "anterior"  },
  { keywords: ["leg"],                         muscles: ["quadriceps", "hamstring"],            view: "anterior"  },
  { keywords: ["cardio", "fat burn"],          muscles: ["quadriceps", "calves", "gluteal"],    view: "anterior"  },
  { keywords: ["power"],                       muscles: ["quadriceps", "gluteal", "calves"],    view: "anterior"  },
  { keywords: ["balance", "coordination"],     muscles: ["abs", "quadriceps"],                  view: "anterior"  },
];

// Maps an exercise target string (e.g. "Hamstrings & glutes") to the muscles
// to highlight and which side of the body to show. Returns null when the
// target has no mappable muscles (e.g. "Recovery", "Nutrition").
export function getMuscleData(target: string): MuscleData | null {
  const t = target.toLowerCase();
  const muscles = new Set<Muscle>();
  let view: BodyView | null = null;

  for (const rule of RULES) {
    if (rule.keywords.some((k) => t.includes(k))) {
      rule.muscles.forEach((m) => muscles.add(m));
      if (view === null) view = rule.view;
    }
  }

  if (muscles.size === 0 || view === null) return null;
  return { muscles: [...muscles], view };
}
