import type { Metadata } from "next";
import { fetchPokemon } from "./lib/FetchPokemonData";
import PokemonGrid from "./components/PokemonGrid";

export const metadata: Metadata = {
  title: "Pokedex",
  description:
    "A Pokedex, created just for fun. With NextJS, Tailwind CSS, Radix-UI, TypeScript and the PokeAPI.",
};

export default async function Home() {
  const pokemonData = await fetchPokemon();

  return (
    <main className="container mx-auto max-w-screen-lg px-8 sm:px-6 md:px-8">
      <PokemonGrid pokemon={pokemonData} />
    </main>
  );
}
