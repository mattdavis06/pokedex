import BackBtn from "@/app/components/BackBtn";
import { Flex, Spinner } from "@radix-ui/themes";

const loading = () => {
  return (
    <main className="container mx-auto max-w-screen-lg px-8 sm:px-6 md:px-8">
      <BackBtn />
      <section id={`_pokemonProfile`} className="py-12">
        <Flex align="center" justify="center" gap="4">
          <Spinner size="3" />
        </Flex>
      </section>
    </main>
  );
};

export default loading;
