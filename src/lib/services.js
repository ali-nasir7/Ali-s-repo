// IV Therapy service catalog used by the questionnaire and Services page.

export const SERVICES = [
  {
    id: "signature",
    number: "01",
    title: "Signature Hydration & Recovery",
    summary:
      "The foundation of cellular health. Each IV includes 1000ml of electrolytes.",
    children: [
      {
        id: "basic-recovery",
        title: "The Basic Recovery",
        description:
          "A gentle restorative IV designed to rehydrate, replenish electrolytes, and ease the body back to balance.",
        good_for: ["dehydration", "fatigue", "travel"],
      },
      {
        id: "myers-cocktail",
        title: "The Myers' Cocktail",
        description:
          "The classic blend of B-vitamins, Vitamin C, and minerals — a tried-and-true protocol for vitality and immune resilience.",
        good_for: ["immunity", "energy", "stress"],
      },
      {
        id: "elite-longevity",
        title: "The Elite Longevity Drip",
        description:
          "Our signature protocol. Advanced antioxidants, cellular co-factors, and rejuvenating compounds for those who optimize for healthspan.",
        good_for: ["longevity", "performance", "cognition", "skin"],
      },
    ],
  },
  {
    id: "addons",
    number: "02",
    title: "Retail Vitamin Add-Ons",
    summary: "Customize your drip. Curated micronutrient enhancements.",
    children: [
      { id: "vitamin-c", title: "Vitamin C", description: "Antioxidant + immune support." },
      { id: "vitamin-b", title: "Vitamin B-Complex", description: "Cellular energy + metabolic balance." },
      { id: "glutathione", title: "Glutathione", description: "The master antioxidant — skin, detox, longevity." },
      { id: "zinc", title: "Zinc", description: "Immune + skin co-factor." },
      { id: "magnesium", title: "Magnesium", description: "Sleep, calm, muscular recovery." },
      { id: "arginine", title: "Arginine", description: "Vascular flow + performance." },
      { id: "toradol", title: "Toradol", description: "Anti-inflammatory for pain relief." },
      { id: "zofran", title: "Zofran", description: "Anti-nausea support." },
      { id: "benadryl", title: "Benadryl", description: "Allergy + comfort support." },
    ],
  },
  {
    id: "shots",
    number: "03",
    title: "Quick-Stop Booster Shots",
    summary: "Concentrated single-shot protocols for the optimized life.",
    children: [
      {
        id: "b12",
        title: "B12 Energy Shot",
        description: "Sustained, clean energy without the crash.",
        good_for: ["energy", "fatigue"],
      },
      {
        id: "nad",
        title: "NAD+ Booster",
        description:
          "Cellular regeneration and mitochondrial repair — the cornerstone of longevity.",
        good_for: ["longevity", "cognition", "performance"],
      },
      {
        id: "glutathione-push",
        title: "Glutathione Glow Push",
        description: "Radiant skin, deep detoxification, antioxidant elevation.",
        good_for: ["skin", "detox"],
      },
      {
        id: "skinny",
        title: "The Skinny Shot",
        description:
          "Lipotropic compounds supporting metabolism and body composition.",
        good_for: ["metabolism", "weight"],
      },
      {
        id: "tri-immune",
        title: "Tri-Immune Booster",
        description: "Vitamin C, Zinc, and Glutathione — fortified immune defense.",
        good_for: ["immunity"],
      },
    ],
  },
];

// Flatten for easy lookup
export const ALL_PRODUCTS = SERVICES.flatMap((s) =>
  s.children.map((c) => ({ ...c, parentId: s.id, parentTitle: s.title }))
);
