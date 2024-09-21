import { Hero } from "./classes/heroClass";
import { HeroStats } from "./classes/heroStats";

const hero1Stats = new HeroStats({ hp: 10, attack: 5, defense: 2 });
const hero1 = new Hero("Aura", 26, hero1Stats);

const hero2Stats = new HeroStats({ hp: 8, attack: 2, defense: 10 });
const hero2 = new Hero("Lera", 26, hero2Stats);

console.log(hero1.attack(hero2));
console.log(hero1.attack(hero2));
console.log(hero1.attack(hero2));
console.log(hero1.attack(hero2));