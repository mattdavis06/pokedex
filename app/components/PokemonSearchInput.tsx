import { useState } from "react";
import { PokemonTypes } from "../types";
import { TextField } from "@radix-ui/themes";

type PropsTypes = {
  pokemon: PokemonTypes[];
  setPokemonData: (filteredPokemon: PokemonTypes[]) => void;
};

const PokemonSearchInput = ({ pokemon, setPokemonData }: PropsTypes) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredPokemon = pokemon.filter((p) =>
      p.name.toLowerCase().includes(query),
    );
    setPokemonData(filteredPokemon);
  };

  return (
    <section id="_searchPokemonFilter" className="pb-8">
      <TextField.Root
        size="3"
        placeholder="Search pokemon..."
        value={searchQuery}
        onChange={handleSearchChange}
      >
        <TextField.Slot side="right">
          <span className="icon-[ic--twotone-filter-alt] h-6 w-6"></span>
        </TextField.Slot>
      </TextField.Root>
    </section>
  );
};

export default PokemonSearchInput;
