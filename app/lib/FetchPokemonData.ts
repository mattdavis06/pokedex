// Get Pokemon Data from API
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

// Loop through the POKEMON_CARD_COUNT and pass in the id,
// calling the getPokemonData FUNC, then push to an array
const fetchPokemon = async () => {
  const pokemonData = [];

  // Parse process.env.POKEMON_CARD_COUNT to ensure it's a number
  const pokemonCardCount = parseInt(process.env.POKEMON_CARD_COUNT || "", 10);

  if (!isNaN(pokemonCardCount)) {
    for (let i = 1; i <= pokemonCardCount; i++) {
      const pokemon = await getPokemonData(i);
      pokemonData.push(pokemon);
    }
  } else {
    console.error(
      "Invalid value for POKEMON_CARD_COUNT:",
      process.env.POKEMON_CARD_COUNT,
    );
  }

  return pokemonData;
};
export { fetchPokemon, getPokemonData };
