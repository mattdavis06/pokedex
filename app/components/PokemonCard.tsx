import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Pokemon = {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: { front_default: string };
    };
  };
};

type PokemonTypes = {
  pokemon: Pokemon;
  pokemonColor: string;
};

const PokemonCard = ({ pokemon, pokemonColor }: PokemonTypes) => {
  return (
    <Link
      key={pokemon.id}
      href={`pokemon/${pokemon.name}/${pokemon.id}`}
      className="overflow-hidden rounded"
    >
      <Card className="relative h-60 w-full items-end rounded-lg backdrop-blur-sm hover:border md:h-72">
        <div
          style={{ backgroundColor: pokemonColor }}
          className="absolute -right-[50px] -top-[20px] -z-10 h-[220px] w-[220px] rounded-full blur-sm"
        ></div>
        <CardContent className="flex h-full flex-col items-center justify-between p-6">
          <Image
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`${pokemon.name}-img`}
            width={200}
            height={200}
            className="mx-auto block aspect-auto max-h-40 object-contain md:max-h-48"
          />
          <h2 className="py-2 capitalize">{pokemon.name}</h2>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PokemonCard;
