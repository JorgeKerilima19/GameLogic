import { StatType } from "../types/statsType";

export class HeroStats {
  hp: number;
  attack: number;
  defense: number;

  constructor(stats: StatType) {
    this.hp = stats.hp;
    this.attack = stats.attack;
    this.defense = stats.defense;
  }
}
