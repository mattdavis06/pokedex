import type { Metadata } from "next";
import PokemonsWrapper from "./components/layout/PokemonsWrapper";

export const metadata: Metadata = {
  title: "Pokedex",
  description:
    "A Pokedex, created just for fun. With NextJS, Tailwind CSS, Shadcn, TypeScript and the PokeAPI.",
};

export default function Home() {
  return (
    <main className="container mx-auto max-w-screen-lg px-6 sm:px-8">
      <PokemonsWrapper />
    </main>
  );
}
