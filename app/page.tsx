import type { Metadata } from "next";

import PokemonGrid from "./components/layout/PokemonGrid";
import { fetchPokemon } from "./lib/FetchPokemonData";

export const metadata: Metadata = {
  title: "Pokedex",
  description:
    "A Pokedex, created just for fun. With NextJS, Tailwind CSS, Shadcn, TypeScript and the PokeAPI.",
};

export default async function Home() {
  const pokemonData = await fetchPokemon();

  return (
    <main className="container mx-auto max-w-screen-lg px-8 sm:px-6 md:px-8">
      <PokemonGrid pokemon={pokemonData} />
    </main>
  );
}
