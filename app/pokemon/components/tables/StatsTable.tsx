import { PokemonStatType } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const StatsTable = ({ pokemon }) => {
  return (
    <Table className="w-full">
      <TableBody>
        {pokemon.stats.map((stat: PokemonStatType) => (
          <TableRow key={stat.stat.name} className="text-base capitalize">
            <TableCell className="whitespace-nowrap font-bold">
              {stat.stat.name}
            </TableCell>
            <TableCell className="text-right">
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
