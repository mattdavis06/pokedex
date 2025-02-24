"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useState } from "react";
import { PokemonTypes } from "../types";

type PropsTypes = {
  pokemon: PokemonTypes[];
  setPokemonData: (filteredPokemon: PokemonTypes[]) => void;
};

const PokemonFilterSelect = ({ pokemon, setPokemonData }: PropsTypes) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleTypeChange = (type: string) => {
    setSelectedType(type);

    if (type === "all") {
      setPokemonData(pokemon);
    } else {
      const filteredPokemon = pokemon.filter((p) =>
        p.types.some((t) => t.type.name === type),
      );
      setPokemonData(filteredPokemon);
    }
  };

  const uniqueTypes = [
    "all",
    ...pokemon
      .flatMap((pokemon) => pokemon.types.map((type) => type.type.name))
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((a, b) => a.localeCompare(b)),
  ];

  return (
    <Select onValueChange={handleTypeChange}>
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Pokemon Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {uniqueTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type === "all" ? "All Types" : type}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PokemonFilterSelect;
