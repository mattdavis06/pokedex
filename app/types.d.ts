type PokemonTypes = {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: { front_default: string };
    };
  };
  types: [
    {
      type: {
        name: PokemonType;
      };
    },
  ];
};

type PokemonDataTypes = {
  pokemon: Pokemon[];
};

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

interface ThemeTogglerBtnType {
  theme: string;
  toggleTheme: () => void;
}

export {
  PokemonTypes,
  PokemonDataTypes,
  PokemonColorTypes,
  ThemeTogglerBtnType,
};
