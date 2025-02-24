import { PokemonTypes } from "../types";
import PokemonFilterSelect from "./PokemonFilterSelect";
import PokemonSearchInput from "./PokemonSearchInput";

type PropsTypes = {
  pokemon: PokemonTypes[];
  setPokemonData: (filteredPokemon: PokemonTypes[]) => void;
};

const PokemonGridHeader = ({ pokemon, setPokemonData }: PropsTypes) => {
  return (
    <section className="flex flex-wrap items-center gap-2 pb-4">
      <PokemonSearchInput pokemon={pokemon} setPokemonData={setPokemonData} />
      <PokemonFilterSelect pokemon={pokemon} setPokemonData={setPokemonData} />
    </section>
  );
};

export default PokemonGridHeader;
