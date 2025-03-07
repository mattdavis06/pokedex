import { getPokemonAbilityData } from "@/app/lib/FetchPokemonData";
import { PokemonAbilityDetails, PokemonData } from "@/app/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AbilitiesTable = async ({ pokemon }: PokemonData) => {
  const abilitiesData = await Promise.all(
    pokemon.abilities.map((ability) =>
      getPokemonAbilityData(ability.ability.url),
    ),
  );

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-32 text-base font-bold md:w-1/4">
            Ability Type
          </TableHead>
          <TableHead className="text-right text-base font-bold md:text-left">
            Ability Effects
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {abilitiesData.map((ability) => (
          <TableRow key={ability.name} className="text-base capitalize">
            <TableCell className="whitespace-nowrap font-bold">
              {ability.name.replace("-", " ")}
            </TableCell>
            <TableCell className="text-pretty text-right md:text-left">
              {ability.effect_entries.find(
                (entry: PokemonAbilityDetails) => entry.language.name === "en",
              )?.effect || "No effect available"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AbilitiesTable;
