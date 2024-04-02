import { getPokemonData } from "@/app/lib/FetchPokemonData";
import { getPokemonTypeColor } from "@/app/utils/Utils";
import Image from "next/image";
import BackBtn from "@/app/components/BackBtn";
import AudioPlayBtn from "@/app/components/AudioPlayBtn";

type AbilityType = {
  ability: {
    name: string;
  };
};

type StatType = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type MoveType = {
  move: {
    name: string;
  };
};

const PokemonIndiviualPage = async ({ params }: { params: { id: number } }) => {
  const pokemon = await getPokemonData(params.id);

  const primaryType = pokemon.types[0].type.name;
  const color = getPokemonTypeColor(primaryType);

  return (
    <main className="container mx-auto max-w-screen-lg px-8 sm:px-6 md:px-8">
      <BackBtn />
      {pokemon && (
        <section id={`_${pokemon.name}PokemonProfile`} className="relative">
          {color && (
            <div
              className="absolute left-0 top-0 -z-10 h-full max-h-[400px] w-full rounded-full blur sm:max-h-[600px] md:h-[400px] md:w-[45%]"
              style={{ backgroundColor: color }}
            ></div>
          )}

          <div className="flex flex-wrap items-start justify-between pt-6 md:py-6">
            <div className="mb-12 w-full md:w-1/2 md:px-5 md:pb-0">
              <Image
                src={pokemon.sprites.other.dream_world.front_default}
                width={400}
                height={400}
                alt={`${pokemon.name}-image`}
                className="block aspect-auto max-h-80 w-full object-contain"
              ></Image>
            </div>
            <div className="w-full space-y-5 py-5 md:w-1/2 md:px-8 md:py-0">
              <h1 className="text-2xl font-bold capitalize">
                Name:{" "}
                <span className="font-normal opacity-50">{pokemon.name}</span>
              </h1>
              <h2 className="text-2xl font-bold">
                Height:{" "}
                <span className="font-normal opacity-50">{pokemon.height}</span>
              </h2>
              <h2 className="text-2xl font-bold">
                Weight:{" "}
                <span className="font-normal opacity-50">{pokemon.weight}</span>
              </h2>
              <h2 className="text-2xl font-bold">
                Base Experience:{" "}
                <span className="font-normal opacity-50">
                  {pokemon.base_experience}
                </span>
              </h2>
              <h2 className="flex items-center text-2xl font-bold">
                Cry:
                <AudioPlayBtn pokemonCry={pokemon.cries.latest} />
              </h2>
            </div>
          </div>
          <hr className="my-2 md:hidden" />
          <div className="flex w-full flex-wrap items-start justify-between space-y-5 py-5 md:space-y-0">
            <div className="w-full md:w-1/2">
              <h3 className="flex items-center text-2xl font-bold">
                Abilities
                <span className="icon-[ic--twotone-edit-attributes] ml-1 h-12 w-12 opacity-50"></span>
              </h3>
              <ul className="space-y-3 opacity-50">
                {pokemon.abilities.map((ability: AbilityType) => (
                  <li key={pokemon.id} className="text-xl capitalize">
                    {ability.ability.name.replace("-", " ")}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="flex items-center text-2xl font-bold">
                Stats
                <span className="icon-[ic--twotone-query-stats] ml-1 h-10 w-10 opacity-50"></span>
              </h3>
              <ul className="space-y-3">
                {pokemon.stats.map((stat: StatType) => (
                  <li key={pokemon.id} className="text-xl capitalize">
                    {stat.stat.name.replace("-", " ")}:
                    <span className="ml-2 opacity-50">{stat.base_stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="my-2 md:hidden" />
          <div className="w-full py-5">
            <h4 className="flex items-center text-2xl font-bold">
              Moves
              <span className="icon-[game-icons--pointy-sword] ml-1 h-8 w-8 opacity-50"></span>
            </h4>
            <ul className="columns-2 space-y-3 sm:columns-3 md:columns-5">
              {pokemon.moves.map((move: MoveType) => {
                return (
                  <li
                    key={pokemon.id}
                    className="text-xl capitalize opacity-50"
                  >
                    {move.move.name.replace("-", " ")}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
};

export default PokemonIndiviualPage;
