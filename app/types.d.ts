// Define a generic NameType to avoid repetition
type NameType = {
  name: string;
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
};

// Define the Pokémon ability details
type PokemonAbilityDetails = {
  effect_entries: {
    effect: string;
    language: NameType;
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: NameType;
  }[];
  name: string;
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
};

// Define the main Pokémon data type
type PokemonData = {
  pokemon: PokemonType;
  pokemonAbility: PokemonAbilityDetails;
  pokemonSpecies: PokemonSpeciesType;
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
  PokemonSpeciesType,
  PokemonStatType,
  PokemonType,
};
