import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <section className="container mx-auto max-w-screen-lg">
      <Skeleton className="mb-10 h-5" />
      <Skeleton className="mb-6 h-[400px]" />
      <Skeleton className="mb-6 h-9" />
      <Skeleton className="mb-6 h-[500px]" />
    </section>
  );
};

export default loading;
