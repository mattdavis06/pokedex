import { getPokemonData } from "@/app/lib/FetchPokemonData";
import PokemonBreadcrumb from "@/app/pokemon/components/PokemonBreadcrumb";
import { getPokemonTypeColor } from "@/app/utils/Utils";
import PokemonDetailCardOverlay from "../../components/PokemonDetailCardOverlay";
import PokemonDetailCard from "../../components/PokemonDetailsCard";
import PokemonTabs from "../../components/PokemonTabs";

const PokemonIndiviualPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const pokemon = await getPokemonData(id);

  if (!pokemon?.types?.[0]) {
    return (
      <main className="container mx-auto max-w-screen-lg px-6 sm:px-8">
        <PokemonBreadcrumb />
        <p className="py-12 text-center text-lg opacity-70">
          Pokemon not found.
        </p>
      </main>
    );
  }

  const primaryType = pokemon.types[0].type.name;
  const color = getPokemonTypeColor(primaryType);

  return (
    <main className="container mx-auto max-w-screen-lg px-6 sm:px-8">
      <PokemonBreadcrumb />

      <section className="relative">
        {color && <PokemonDetailCardOverlay color={color} />}

        <PokemonDetailCard pokemon={pokemon} />
        <PokemonTabs pokemon={pokemon} />
      </section>
    </main>
  );
};

export default PokemonIndiviualPage;
