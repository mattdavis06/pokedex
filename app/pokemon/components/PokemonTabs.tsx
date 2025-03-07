import { PokemonDataTypes } from "@/app/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AbilitiesTable from "./tables/AbilitiesTable";
import MovesTable from "./tables/MovesTable";
import SpeciesTable from "./tables/SpeciesTable";
import StatsTable from "./tables/StatsTable";

const PokemonTabs = ({ pokemon }: PokemonDataTypes) => {
  return (
    <Tabs defaultValue="stats" className="w-full py-6">
      <TabsList className="w-full">
        <TabsTrigger className="flex-1 text-base" value="stats">
          Stats
        </TabsTrigger>
        <TabsTrigger className="flex-1 text-base" value="abilities">
          Abilities
        </TabsTrigger>
        <TabsTrigger className="flex-1 text-base" value="moves">
          Moves
        </TabsTrigger>
        <TabsTrigger className="flex-1 text-base" value="species">
          Species
        </TabsTrigger>
      </TabsList>
      <TabsContent value="stats">
        <StatsTable pokemon={pokemon} />
      </TabsContent>
      <TabsContent value="abilities">
        <AbilitiesTable pokemon={pokemon} />
      </TabsContent>
      <TabsContent value="moves">
        <MovesTable pokemon={pokemon} />
      </TabsContent>
      <TabsContent value="species">
        <SpeciesTable pokemon={pokemon} />
      </TabsContent>
    </Tabs>
  );
};

export default PokemonTabs;
