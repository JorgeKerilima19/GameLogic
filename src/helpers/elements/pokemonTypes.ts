import ElementType from "../types/elementType";

export const fireElement: ElementType = {
  name: "fire",
  effective: ["grass", "steel"],
  strong: ["electric", "fight"],
  weak: ["water", "ground"],
};
export const waterElement: ElementType = {
  name: "water",
  effective: ["ground", "poison"],
  strong: ["fire", "rock"],
  weak: ["electric", "plant"],
};
export const electricElement: ElementType = {
  name: "electric",
  effective: ["fire", "poison"],
  strong: ["water", "flying"],
  weak: ["ground", "rock"],
};
