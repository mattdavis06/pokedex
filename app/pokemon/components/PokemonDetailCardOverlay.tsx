type PokemonDetailCardOverlayTypes = {
  color: string;
};

const PokemonDetailCardOverlay = ({ color }: PokemonDetailCardOverlayTypes) => {
  return (
    <div className="absolute left-0 top-0 -z-10 h-full max-h-[400px] w-full overflow-hidden sm:max-h-[600px] md:h-[400px] md:w-[45%]">
      <div
        className="h-full rounded-full backdrop-blur-sm"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default PokemonDetailCardOverlay;
