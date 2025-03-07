import { PokemonData, PokemonStatType } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StatsTable = ({ pokemon }: PokemonData) => {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-32 text-base font-bold md:w-1/4">
            Stat Type
          </TableHead>
          <TableHead className="text-right text-base font-bold md:text-left">
            Stat Value
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pokemon.stats.map((stat: PokemonStatType) => (
          <TableRow key={stat.stat.name} className="text-base capitalize">
            <TableCell className="whitespace-nowrap font-bold">
              {stat.stat.name}
            </TableCell>
            <TableCell className="text-pretty text-right md:text-left">
              <Badge
                className={`text-base
                     ${stat.base_stat >= 50 ? "bg-green-600" : "bg-red-600"}
                   `}
              >
                {stat.base_stat}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StatsTable;
