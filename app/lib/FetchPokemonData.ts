const POKEMON_API_URL =
  process.env.API_URL ?? "https://pokeapi.co/api/v2/pokemon/";
const POKEMON_SPECIES_API_URL =
  process.env.API_SPECIES_URL ??
  "https://pokeapi.co/api/v2/pokemon-species/";

const getPokemonData = async (id: number | string) => {
  try {
    const res = await fetch(`${POKEMON_API_URL}${id}`);

    if (!res.ok) {
      console.error("Error fetching pokemon data:", res.statusText);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
};

const getPokemonSpeciesData = async (id: number | string) => {
  try {
    const res = await fetch(`${POKEMON_SPECIES_API_URL}${id}`);

    if (!res.ok) {
      console.error("Error fetching species data:", res.statusText);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
};

const getPokemonAbilityData = async (url: string) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Error fetching ability data:", res.statusText);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
};

const getPokemonMoveData = async (url: string) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Error fetching move data:", res.statusText);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
};

export {
  getPokemonAbilityData,
  getPokemonData,
  getPokemonMoveData,
  getPokemonSpeciesData,
};
