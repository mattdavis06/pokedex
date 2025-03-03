import { getPokemonAbilityData } from "@/app/lib/FetchPokemonData";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const AbilitiesTable = async ({ pokemon }) => {
  // Fetch all abilities in parallel
  const abilitiesData = await Promise.all(
    pokemon.abilities.map((ability) =>
      getPokemonAbilityData(ability.ability.url),
    ),
  );

  return (
    <Table className="w-full">
      <TableBody>
        {abilitiesData.map((ability, index) => (
          <TableRow key={ability.name} className="text-base capitalize">
            <TableCell className="whitespace-nowrap font-bold">
              {ability.name.replace("-", " ")}
            </TableCell>
            <TableCell className="text-right">
              {ability.effect_entries.find(
                (entry) => entry.language.name === "en",
              )?.effect || "No effect available"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AbilitiesTable;
