import AudioPlayBtn from "@/app/components/layout/AudioPlayBtn";
import PokemonBreadcrumb from "@/app/components/layout/PokemonBreadcrumb";
import { getPokemonData } from "@/app/lib/FetchPokemonData";
import { PokemonAbilityType, PokemonMoveType } from "@/app/types";
import { getPokemonTypeColor } from "@/app/utils/Utils";
import Image from "next/image";
import PokemonTabs from "../../components/PokemonTabs";

const PokemonIndiviualPage = async ({ params }: { params: { id: number } }) => {
  const pokemon = await getPokemonData(params.id);
  // const pokemonSpecies = await getPokemonSpeciesData(params.id);

  // const pokemonAbilities = await Promise.all(
  //   pokemon.abilities.map((ability) => getPokemonAbilityData(ability.ability.name))
  // );

  // for (const ability of pokemon.abilities) {
  //   const pokemonAbility = await getPokemonAbilityData(ability.ability.name);
  // }

  const primaryType = pokemon.types[0].type.name;
  const color = getPokemonTypeColor(primaryType);

  return (
    <main className="container mx-auto max-w-screen-lg px-8 sm:px-6 md:px-8">
      <PokemonBreadcrumb />

      {pokemon && (
        <section className="relative">
          {color && (
            <div className="absolute left-0 top-0 -z-10 h-full max-h-[400px] w-full overflow-hidden sm:max-h-[600px] md:h-[400px] md:w-[45%]">
              <div
                className="h-full rounded-full backdrop-blur-sm"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          )}

          <div className="flex w-full flex-wrap items-center justify-between rounded-lg border pt-6 shadow-lg backdrop-blur-sm md:py-6">
            <div className="mb-12 w-full md:w-1/2 md:px-5 md:pb-0">
              <Image
                src={pokemon.sprites.other.dream_world.front_default}
                width={400}
                height={400}
                alt={`${pokemon.name}-image`}
                className="block aspect-auto max-h-80 w-full object-contain"
              ></Image>
            </div>
            <div className="w-full space-y-2 px-5 py-5 md:w-1/2 md:px-8 md:py-0">
              <h1 className="text-2xl font-bold capitalize">
                Name:
                <span className="ml-2 font-normal opacity-50">
                  {pokemon.name}
                </span>
              </h1>
              <h2 className="text-2xl font-bold">
                Height:
                <span className="ml-2 font-normal opacity-50">
                  {pokemon.height}
                </span>
              </h2>
              <h2 className="text-2xl font-bold">
                Weight:
                <span className="ml-2 font-normal opacity-50">
                  {pokemon.weight}
                </span>
              </h2>
              <h2 className="text-2xl font-bold">
                Base Experience:
                <span className="ml-2 font-normal opacity-50">
                  {pokemon.base_experience}
                </span>
              </h2>
              <h2 className="flex items-center text-2xl font-bold">
                Cry:
                <AudioPlayBtn pokemonCry={pokemon.cries.latest} />
              </h2>
            </div>
          </div>

          <PokemonTabs pokemon={pokemon} />

          <div className="flex w-full flex-wrap items-start justify-between space-y-5 py-5 md:space-y-0">
            <div className="w-full md:w-1/2">
              <h3 className="flex items-center text-2xl font-bold">
                Abilities
                <span className="icon-[ic--twotone-edit-attributes] ml-1 h-12 w-12 opacity-50"></span>
              </h3>
              <ul className="space-y-3 opacity-50">
                {pokemon.abilities.map((ability: PokemonAbilityType) => (
                  <li key={ability.ability.name} className="text-xl capitalize">
                    {ability.ability.name.replace("-", " ")}
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
              {pokemon.moves.map((move: PokemonMoveType) => {
                return (
                  <li
                    key={move.move.name}
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
