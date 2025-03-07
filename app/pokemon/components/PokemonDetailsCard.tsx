import AudioPlayBtn from "@/app/components/layout/AudioPlayBtn";
import { PokemonData } from "@/app/types";
import Image from "next/image";

const PokemonDetailCard = ({ pokemon }: PokemonData) => {
  return (
    <div className="flex h-[400px] w-full flex-wrap items-center justify-between rounded-lg border pt-6 shadow-lg backdrop-blur-sm sm:max-h-[600px] md:py-6">
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
          <span className="ml-2 font-normal opacity-50">{pokemon.name}</span>
        </h1>
        <h2 className="text-2xl font-bold">
          Height:
          <span className="ml-2 font-normal opacity-50">{pokemon.height}</span>
        </h2>
        <h2 className="text-2xl font-bold">
          Weight:
          <span className="ml-2 font-normal opacity-50">{pokemon.weight}</span>
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
  );
};

export default PokemonDetailCard;
