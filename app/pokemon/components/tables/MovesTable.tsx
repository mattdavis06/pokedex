import { getPokemonMoveData } from "@/app/lib/FetchPokemonData";
import { PokemonData } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MovesTable = async ({ pokemon }: PokemonData) => {
  const moveData = await Promise.all(
    pokemon.moves.map((move) => getPokemonMoveData(move.move.url)),
  );

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-32 text-base font-bold md:w-1/4">
            Move Type
          </TableHead>
          <TableHead className="w-16 text-right text-base font-bold md:text-left">
            Accuracy
          </TableHead>
          <TableHead className="w-16 text-right text-base font-bold md:text-left">
            Power
          </TableHead>
          <TableHead className="w-16 text-right text-base font-bold md:text-left">
            PP
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {moveData.map((move, index) => (
          <TableRow key={move.name} className="text-base capitalize">
            <TableCell className="whitespace-nowrap font-bold">
              {move.name.replace("-", " ")}
            </TableCell>
            <TableCell className="whitespace-nowrap text-right md:text-left">
              {move.accuracy ? (
                <Badge
                  className={`text-base
                     ${move.accuracy >= 50 ? "bg-green-600" : "bg-red-600"}
                   `}
                >
                  {move.accuracy}
                </Badge>
              ) : (
                <Badge className="bg-gray-400 text-base">N/A</Badge>
              )}
            </TableCell>
            <TableCell className="whitespace-nowrap text-right md:text-left">
              {move.power ? (
                <Badge
                  className={`text-base
                     ${move.power >= 50 ? "bg-green-600" : "bg-red-600"}
                   `}
                >
                  {move.power}
                </Badge>
              ) : (
                <Badge className="bg-gray-400 text-base">N/A</Badge>
              )}
            </TableCell>
            <TableCell className="whitespace-nowrap text-right md:text-left">
              {move.pp ? (
                <Badge
                  className={`text-base
                     ${move.pp >= 50 ? "bg-green-600" : "bg-red-600"}
                   `}
                >
                  {move.pp}
                </Badge>
              ) : (
                <Badge className="bg-gray-400 text-base">N/A</Badge>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MovesTable;
