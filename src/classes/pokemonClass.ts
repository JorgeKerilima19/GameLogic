import { StatType } from "../helpers/types/statsType";

export default class Pokemon {
  name: string;
  age: number;
  stats: StatType;
  constructor(name: string, age: number, stat: StatType) {
    this.name = name;
    this.age = age;
    this.stats = stat;
  }
  sayName() {
    return this.name;
  }
  attack(target: Pokemon) {
    if (target.stats.hp < 0) {
      return "Dead";
    }
    const damageBlocked = target.stats.defense * 0.43;
    const totalDamage = this.stats.attack - damageBlocked;

    target.stats.hp = target.stats.hp - totalDamage;
    return target.stats.hp;
  }
  getStats() {
    return this.stats;
  }
}
