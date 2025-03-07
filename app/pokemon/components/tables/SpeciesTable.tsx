import { getPokemonSpeciesData } from "@/app/lib/FetchPokemonData";
import { PokemonData, PokemonSpeciesType } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SpeciesTable = async ({ pokemon }: PokemonData) => {
  const pokemonSpecies = await getPokemonSpeciesData(pokemon.id);

  const {
    base_happiness,
    capture_rate,
    egg_groups,
    flavor_text_entries,
    growth_rate,
    habitat,
    hatch_counter,
    is_baby,
    is_legendary,
    is_mythical,
    shape,
  } = pokemonSpecies;

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-32 text-base font-bold md:w-1/4">
            Species Type
          </TableHead>
          <TableHead className="text-right text-base font-bold md:text-left">
            Species Value
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Base Happiness
          </TableCell>
          <TableCell className="text-right md:text-left">
            <Badge
              className={`text-base
              ${base_happiness >= 50 ? "bg-green-600" : "bg-red-600"}
            `}
            >
              {base_happiness}
            </Badge>
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Capture Rate
          </TableCell>
          <TableCell className="text-right capitalize md:text-left">
            <Badge
              className={`text-base
              ${capture_rate >= 50 ? "bg-green-600" : "bg-red-600"}
            `}
            >
              {capture_rate}
            </Badge>
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Egg Groups
          </TableCell>
          <TableCell
            className={`${egg_groups.length > 0 ? "align-top" : "align-middle"} text-right capitalize md:text-left`}
          >
            {egg_groups.map((egg: PokemonSpeciesType) => (
              <p key={egg.name}>{egg.name}</p>
            ))}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">Flavor</TableCell>
          <TableCell className="text-balance text-right capitalize md:text-left">
            {flavor_text_entries.find(
              (flavor: PokemonSpeciesType) => flavor.language.name === "en",
            )?.flavor_text || "No description available"}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Growth Rate
          </TableCell>
          <TableCell className="text-right capitalize md:text-left">
            {growth_rate.name}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">Habitat</TableCell>
          <TableCell className="text-right capitalize md:text-left">
            {habitat.name}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Hatch Counter
          </TableCell>
          <TableCell className="text-right capitalize md:text-left">
            <Badge
              className={`text-base
              ${hatch_counter >= 50 ? "bg-green-600" : "bg-red-600"}
            `}
            >
              {hatch_counter}
            </Badge>
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">Baby</TableCell>
          <TableCell className="text-right capitalize md:text-left">
            {is_baby ? "Yes" : "No"}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Legendary
          </TableCell>
          <TableCell className="text-right capitalize md:text-left">
            {is_legendary ? "Yes" : "No"}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Mythical
          </TableCell>
          <TableCell className="text-right capitalize md:text-left">
            {is_mythical ? "Yes" : "No"}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">Shape</TableCell>
          <TableCell className="text-right capitalize md:text-left">
            {shape.name}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SpeciesTable;
