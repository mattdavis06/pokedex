"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export default function PokemonPagination({ page }: { page: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());

    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="grid grid-cols-1 gap-4 pb-4 sm:grid-cols-2">
      {page > 1 && (
        <Button
          variant="outline"
          className="flex-1 text-base sm:col-start-1"
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </Button>
      )}
      <Button
        variant="outline"
        className="flex-1 text-base sm:col-start-2"
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </Button>
    </section>
  );
}
