"use client";
import { useState } from "react";
import { PokemonDataTypes, PokemonTypes } from "../types";
import { getPokemonTypeColor } from "../utils/Utils";
import PokemonCard from "./PokemonCard";
import PokemonGridHeader from "./PokemonGridHeader";

const PokemonGrid = ({ pokemon }: PokemonDataTypes) => {
  const [pokemonData, setPokemonData] = useState(pokemon);

  return (
    <>
      <PokemonGridHeader pokemon={pokemon} setPokemonData={setPokemonData} />

      <section
        id="_pokemonCardsGrid"
        className="grid grid-cols-2 gap-4 pb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        {pokemonData &&
          pokemonData.map((pokemon: PokemonTypes) => {
            const primaryType = pokemon.types[0].type.name;
            const color = getPokemonTypeColor(primaryType);

            return (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                pokemonColor={color}
              />
            );
          })}
      </section>
    </>
  );
};

export default PokemonGrid;
