const getPokemonData = async (id: number) => {
  try {
    const res = await fetch(`${process.env.API_URL}${id}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return;
  }
};

const getPokemonSpeciesData = async (id: number) => {
  try {
    const res = await fetch(`${process.env.API_SPECIES_URL}${id}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return;
  }
};

const getPokemonAbilityData = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log("Error fetching data:", err);
    return;
  }
};

const getPokemonMoveData = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log("Error fetching data:", err);
    return;
  }
};

export {
  getPokemonAbilityData,
  getPokemonData,
  getPokemonMoveData,
  getPokemonSpeciesData,
};
