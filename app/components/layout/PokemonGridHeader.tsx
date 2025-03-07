import { PokemonDataTypes, PokemonType } from "../../types";
import PokemonFilterSelect from "./PokemonFilterSelect";
import PokemonSearchInput from "./PokemonSearchInput";

type PropsTypes = {
  pokemon: PokemonType[];
  setPokemonData: (filteredPokemon: PokemonDataTypes[]) => void;
};

const PokemonGridHeader = ({ pokemon, setPokemonData }: PropsTypes) => {
  return (
    <section className="grid grid-cols-1 gap-4 pb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <PokemonSearchInput pokemon={pokemon} setPokemonData={setPokemonData} />
      <PokemonFilterSelect pokemon={pokemon} setPokemonData={setPokemonData} />
    </section>
  );
};

export default PokemonGridHeader;
