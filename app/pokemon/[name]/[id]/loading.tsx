import BackBtn from "@/app/components/BackBtn";

const loading = () => {
  return (
    <main className="container mx-auto max-w-screen-lg px-8 sm:px-6 md:px-8">
      <BackBtn />
      <section className="py-12">
        <div className="flex items-center justify-center gap-4">Loading...</div>
      </section>
    </main>
  );
};

export default loading;
