import { Input } from "@/app/components/ui/input";
import { PokemonType } from "@/app/types";
import { startTransition, useState } from "react";

type PropsTypes = {
  pokemon: PokemonType[];
  setPokemonData: (filteredPokemon: PokemonType[]) => void;
};

const PokemonSearchInput = ({ pokemon, setPokemonData }: PropsTypes) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    startTransition(() => {
      const filteredPokemon = pokemon.filter((p) =>
        p.name.toLowerCase().includes(query),
      );
      setPokemonData(filteredPokemon);
    });
  };

  return (
    <Input
      className="col-span-1 text-base sm:col-span-2 md:col-span-3 md:text-base lg:col-span-4"
      type="search"
      placeholder="Search pokemon..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default PokemonSearchInput;
