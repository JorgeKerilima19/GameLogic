import Pokemon from "./classes/pokemonClass";
import TypeClass from "./classes/typeClass";
import StatType from "./helpers/types/statsType";
import { fireElement } from "./helpers/elements/pokemonTypes";

const hero1Stats: StatType = { hp: 10, attack: 5, defense: 2 };
const hero1 = new Pokemon("Aura", 26, hero1Stats);

const hero2Stats: StatType = { hp: 8, attack: 3, defense: 12 };
const hero2 = new Pokemon("Lera", 26, hero2Stats);

const FireClass = new TypeClass(fireElement);

console.log(FireClass.getElementType());
