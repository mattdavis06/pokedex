import { getPokemonData } from "@/app/lib/FetchPokemonData";
import PokemonBreadcrumb from "@/app/pokemon/components/PokemonBreadcrumb";
import { getPokemonTypeColor } from "@/app/utils/Utils";
import PokemonDetailCardOverlay from "../../components/PokemonDetailCardOverlay";
import PokemonDetailCard from "../../components/PokemonDetailsCard";
import PokemonTabs from "../../components/PokemonTabs";

const PokemonIndiviualPage = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;
  const pokemon = await getPokemonData(id);

  const primaryType = pokemon.types[0].type.name;
  const color = getPokemonTypeColor(primaryType);

  return (
    <main className="container mx-auto max-w-screen-lg px-6 sm:px-8">
      <PokemonBreadcrumb />

      {pokemon && (
        <section className="relative">
          {color && <PokemonDetailCardOverlay color={color} />}

          <PokemonDetailCard pokemon={pokemon} />
          <PokemonTabs pokemon={pokemon} />
        </section>
      )}
    </main>
  );
};

export default PokemonIndiviualPage;
