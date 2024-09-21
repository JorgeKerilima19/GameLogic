import { StatType } from "../types/statsType";

export class Hero {
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
  attack(target: Hero) {
    if (target.stats.hp < 0) {
      return "Dead";
    }
    const damageBlocked = target.stats.defense * 0.43;
    const totalDamage = this.stats.attack - damageBlocked;

    target.stats.hp = target.stats.hp - totalDamage;
    console.log("blocked", damageBlocked);
    console.log("Total dealed", totalDamage);
    return target.stats.hp;
  }
  getStats() {
    return this.stats;
  }
}
