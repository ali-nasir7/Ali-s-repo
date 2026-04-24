import { ALL_PRODUCTS } from "./services";

/**
 * Simple intelligent recommendation engine — pure if/else / switch logic.
 *
 * Inputs:
 *  - goal: "longevity" | "energy" | "immunity" | "skin" | "performance" | "recovery"
 *  - frequency: "rarely" | "monthly" | "weekly"
 *  - sleep: "great" | "ok" | "poor"
 *  - stress: "low" | "moderate" | "high"
 *  - format: "iv" | "shot" | "either"
 *
 * Output: a single product id from services.js
 */
export function recommend({ goal, frequency, sleep, stress, format }) {
  // Hard rules first
  switch (goal) {
    case "longevity":
      return format === "shot" ? "nad" : "elite-longevity";
    case "skin":
      return format === "iv" ? "elite-longevity" : "glutathione-push";
    case "energy":
      if (sleep === "poor" || frequency === "weekly") return "nad";
      return format === "iv" ? "myers-cocktail" : "b12";
    case "immunity":
      return format === "shot" ? "tri-immune" : "myers-cocktail";
    case "performance":
      if (stress === "high") return "elite-longevity";
      return format === "shot" ? "nad" : "elite-longevity";
    case "recovery":
    default:
      if (sleep === "poor" && stress === "high") return "elite-longevity";
      return "basic-recovery";
  }
}

export function getProduct(id) {
  return ALL_PRODUCTS.find((p) => p.id === id);
}
