"use client";

import Loading from "@/app/loading";
import { PokemonResult, PokemonType } from "@/app/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ErrorAlert from "./ErrorAlert";
import PokemonGrid from "./PokemonGrid";
import PokemonGridFooter from "./PokemonGridFooter";
import PokemonPagination from "./PokemonPagination";

const PokemonsWrapper = () => {
  const [pokemonData, setPokemonData] = useState<PokemonType[]>([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const limit = 20;
      const offset = (page - 1) * limit;

      // Set offset value - used for PokemonGridFooter
      setOffset(offset);

      try {
        // Fetch all Pokemon
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}?offset=${offset}&limit=${limit}`,
          {
            cache: "no-store",
          },
        );

        // Throw error is res fails
        if (!res.ok) {
          throw new Error(`Failed to fetch Pokemon data: ${res.statusText}`);
        }

        const pokemons = await res.json();

        // Set the total number of Pokémon - used for PokemonGridFooter
        setTotal(pokemons.count);

        // Fetch each Pokémon’s details
        const detailedPokemons = await Promise.all(
          pokemons.results.map(async (pokemon: PokemonResult) => {
            const details = await fetch(pokemon.url);
            return details.json();
          }),
        );

        // Set Pokemon Details into array
        setPokemonData(detailedPokemons);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [page, searchParams]);

  if (loading) return <Loading />;

  return (
    <>
      {error ? (
        <ErrorAlert error={error} />
      ) : (
        <>
          <PokemonGrid pokemon={pokemonData} />
          <PokemonPagination page={page} />
          <PokemonGridFooter offset={offset} total={total} />
        </>
      )}
    </>
  );
};

export default PokemonsWrapper;
