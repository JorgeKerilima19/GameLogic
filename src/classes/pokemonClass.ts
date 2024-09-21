import PokemonInterface from "../helpers/types/pokemonInterface";

export default class Pokemon {
  constructor(public pokemon: PokemonInterface) {}
  sayName() {
    return this.pokemon.name;
  }
  attack(target: Pokemon) {
    if (target.pokemon.stats.hp < 0) {
      return "Dead";
    }
    const damageBlocked = target.pokemon.stats.defense * 0.43;
    const totalDamage = this.pokemon.stats.attack - damageBlocked;

    target.pokemon.stats.hp = target.pokemon.stats.hp - totalDamage;
    return target.pokemon.stats.hp;
  }
  compareTypes(target: Pokemon) {
    target.pokemon.type.map((el) => {
      console.log(el.name);
    });
    console.log(this.pokemon.type);
  }
  getStats() {
    return this.pokemon.stats;
  }
}
