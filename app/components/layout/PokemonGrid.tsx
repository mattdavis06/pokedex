"use client";
// @ts-ignore
import { useState, unstable_ViewTransition as ViewTransition } from "react";
import PokemonCard from "../../pokemon/components/PokemonCard";
import { PokemonColorTypes, PokemonDataTypes, PokemonType } from "../../types";
import { getPokemonTypeColor } from "../../utils/Utils";
import PokemonGridHeader from "./PokemonGridHeader";

const PokemonGrid = ({ pokemon }: PokemonDataTypes) => {
  const [pokemonData, setPokemonData] = useState(pokemon);

  return (
    <>
      <PokemonGridHeader pokemon={pokemon} setPokemonData={setPokemonData} />

      <section className="grid grid-cols-2 gap-4 pb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {pokemonData &&
          pokemonData.map((pokemon: PokemonType) => {
            const primaryType = pokemon.types[0].type.name;
            const color = getPokemonTypeColor(
              primaryType as unknown as PokemonColorTypes,
            );

            return (
              <ViewTransition key={pokemon.id} name={pokemon.name}>
                <PokemonCard pokemon={pokemon} pokemonColor={color} />
              </ViewTransition>
            );
          })}
      </section>
    </>
  );
};

export default PokemonGrid;
