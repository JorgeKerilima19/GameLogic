import ElementType from "./elementType";
import StatType from "./statsType";

interface PokemonInterface {
  name: string;
  stats: StatType;
  type: ElementType[];
}

export default PokemonInterface;
