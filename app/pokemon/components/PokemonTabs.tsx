import { PokemonData } from "@/app/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AbilitiesTable from "./tables/AbilitiesTable";
import SpeciesTable from "./tables/SpeciesTable";
import StatsTable from "./tables/StatsTable";

const PokemonTabs = ({ pokemon }: PokemonData) => {
  return (
    <Tabs defaultValue="species" className="w-full flex-wrap py-6">
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
      <TabsContent value="moves">Moves</TabsContent>
      <TabsContent value="species">
        <SpeciesTable pokemon={pokemon} />
      </TabsContent>
    </Tabs>
  );
};

export default PokemonTabs;
