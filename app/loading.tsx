const Loading = () => {
  const loadPokemonSkeletonCards = () => {
    const loadingCards = [];
    const countString = process.env.POKEMON_CARD_COUNT as string;
    const count = parseInt(countString, 10);

    for (let i = 0; i < count; i++) {
      loadingCards.push(
        <div key={i} className="h-72 animate-pulse rounded bg-slate-300"></div>,
      );
    }

    return loadingCards;
  };

  return (
    <main className="container mx-auto max-w-screen-lg px-8 sm:px-6 md:px-8">
      <section className="mb-8 h-10 animate-pulse rounded bg-slate-300"></section>
      <section className="grid grid-cols-2 gap-4 pb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {loadPokemonSkeletonCards()}
      </section>
    </main>
  );
};

export default Loading;
