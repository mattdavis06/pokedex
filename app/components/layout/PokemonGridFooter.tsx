type PokemonGridFooterTypes = {
  offset: number;
  total: number;
};

const PokemonGridfooter = ({ offset, total }: PokemonGridFooterTypes) => {
  return (
    <section className="grid grid-cols-1 pb-4 sm:grid-cols-2">
      <div>
        <p className="text-center text-base sm:text-left">
          <span className="opacity-50">Showing&nbsp;</span>
          <span className="font-bold">{offset + 1}&nbsp;</span>
          <span className="opacity-50">to&nbsp;</span>
          <span className="font-bold">{offset + 20}&nbsp;</span>
        </p>
      </div>
      <hr className="my-2 sm:hidden" />
      <div>
        <p className="text-center text-base sm:text-right">
          <span className="opacity-50">Total Pokemons:&nbsp;</span>
          <span className="font-bold">{total}&nbsp;</span>
        </p>
      </div>
    </section>
  );
};

export default PokemonGridfooter;
