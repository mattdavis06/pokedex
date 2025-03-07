import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  const loadPokemonSkeletonCards = () => {
    const loadingCards = [];
    const count = 20;

    for (let i = 0; i < count; i++) {
      loadingCards.push(<Skeleton key={i} className="h-72"></Skeleton>);
    }

    return loadingCards;
  };

  return (
    <section className="container mx-auto max-w-screen-lg">
      <Skeleton className="mb-8 h-10 rounded"></Skeleton>
      <div className="grid grid-cols-2 gap-4 pb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {loadPokemonSkeletonCards()}
      </div>
    </section>
  );
};

export default Loading;
