import { getPokemonSpeciesData } from "@/app/lib/FetchPokemonData";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const SpeciesTable = async ({ pokemon }) => {
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
      <TableBody>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Base Happiness
          </TableCell>
          <TableCell className="text-right">
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
          <TableCell className="text-right capitalize">
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
            className={`${egg_groups.length > 0 ? "align-top" : "align-middle"} text-right capitalize`}
          >
            {egg_groups.map((egg) => (
              <p key={egg.name}>{egg.name}</p>
            ))}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">Flavor</TableCell>
          <TableCell className="text-balance text-right capitalize">
            {flavor_text_entries.find((flavor) => flavor.language.name === "en")
              ?.flavor_text || "No description available"}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Growth Rate
          </TableCell>
          <TableCell className="text-right capitalize">
            {growth_rate.name}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">Habitat</TableCell>
          <TableCell className="text-right capitalize">
            {habitat.name}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Hatch Counter
          </TableCell>
          <TableCell className="text-right capitalize">
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
          <TableCell className="text-right capitalize">
            {is_baby ? "Yes" : "No"}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Legendary
          </TableCell>
          <TableCell className="text-right capitalize">
            {is_legendary ? "Yes" : "No"}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">
            Mythical
          </TableCell>
          <TableCell className="text-right capitalize">
            {is_mythical ? "Yes" : "No"}
          </TableCell>
        </TableRow>
        <TableRow className="text-base">
          <TableCell className="whitespace-nowrap font-bold">Shape</TableCell>
          <TableCell className="text-right capitalize">{shape.name}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SpeciesTable;
