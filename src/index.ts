import Pokemon from "./classes/pokemonClass";
import {
  fireElement,
  waterElement,
  electricElement,
} from "./helpers/elements/pokemonTypes";
import PokemonInterface from "./helpers/types/pokemonInterface";

const fire = fireElement;

const Pokemon1: PokemonInterface = {
  name: "Charmandaer",
  stats: { attack: 10, defense: 10, hp: 20 },
  type: [fire],
};
const Pokemon2: PokemonInterface = {
  name: "Squirtle",
  stats: { attack: 2, defense: 20, hp: 8 },
  type: [fire, electricElement],
};
const pokemon1 = new Pokemon(Pokemon1);
const pokemon2 = new Pokemon(Pokemon2);

pokemon1.compareTypes(pokemon2);
