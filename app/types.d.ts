// Define pokemon result type
interface PokemonResult {
  name: string;
  url: string;
}

// Define pokemon response type
interface PokemonResponse {
  results: PokemonResult[];
}

// Define a generic NameType to avoid repetition
type NameType = {
  name: string;
  url: string;
};

// Define the ability type
type PokemonAbilityType = {
  ability: NameType;
};

// Define the move type
type PokemonMoveType = {
  move: NameType;
};

// Define the stat type
type PokemonStatType = {
  base_stat: number;
  stat: NameType;
};

// Define the Pokémon type
type PokemonType = {
  abilities: PokemonAbilityType[];
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: { front_default: string };
    };
  };
  moves: PokemonMoveType[];
  types: Array<{
    type: {
      name: string;
    };
  }>;
  stats: PokemonStatType[];
  height: number;
  weight: number;
  cries: {
    latest: string;
  };
  base_experience: number;
};

// Define the Pokémon ability details
type PokemonAbilityDetails = {
  effect_entries: {
    effect: {};
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: NameType;
  }[];
  name: string;
  url: string;
  language: NameType;
};

// Define the Pokémon species type
type PokemonSpeciesType = {
  base_happiness: number;
  capture_rate: number;
  color: NameType;
  egg_groups: NameType[];
  flavor_text_entries: {
    flavor_text: string;
    language: NameType;
  }[];
  growth_rate: NameType;
  habitat: NameType;
  hatch_counter: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  shape: NameType;
  name: string;
  language: {
    name: string;
  };
};

// Define the main Pokémon data type
type PokemonData = {
  pokemon: PokemonType;
  pokemonAbility?: PokemonAbilityDetails;
  pokemonSpecies?: PokemonSpeciesType;
};

// Define Pokémon color types
type PokemonColorTypes =
  | "fire"
  | "grass"
  | "electric"
  | "water"
  | "ground"
  | "rock"
  | "fairy"
  | "poison"
  | "bug"
  | "dragon"
  | "psychic"
  | "flying"
  | "fighting"
  | "normal";

// Export the types for use in other parts of the app
export {
  NameType,
  PokemonAbilityDetails,
  PokemonAbilityType,
  PokemonColorTypes,
  PokemonData,
  PokemonDataTypes,
  PokemonMoveType,
  PokemonResponse,
  PokemonResult,
  PokemonSpeciesType,
  PokemonStatType,
  PokemonType,
};
