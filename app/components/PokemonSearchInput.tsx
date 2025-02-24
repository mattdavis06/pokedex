import { Input } from "@/app/components/ui/input";
import { useState } from "react";
import { PokemonTypes } from "../types";

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
    <Input
      className="flex-1 text-base md:text-base"
      type="search"
      placeholder="Search pokemon..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default PokemonSearchInput;
