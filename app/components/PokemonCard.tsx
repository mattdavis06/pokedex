import { Card, Heading } from "@radix-ui/themes";
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
      className="rounded"
    >
      <Card
        size="1"
        variant="classic"
        className="relative h-72 w-full items-end rounded-lg backdrop-blur-sm hover:border"
      >
        <div
          style={{ backgroundColor: pokemonColor }}
          className="absolute -right-[50px] -top-[20px] -z-10 h-[220px] w-[220px] rounded-full blur-sm"
        ></div>
        <div className="flex h-full flex-col items-center justify-between">
          <Image
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`${pokemon.name}-img`}
            width={200}
            height={200}
            className="mx-auto block aspect-auto max-h-48 object-contain"
          />
          <Heading
            as="h2"
            size="5"
            wrap="pretty"
            align="center"
            className="py-2 capitalize"
          >
            {pokemon.name}
          </Heading>
        </div>
      </Card>
    </Link>
  );
};

export default PokemonCard;
