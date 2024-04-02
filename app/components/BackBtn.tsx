"use client";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  return (
    <section
      id="_backBtn"
      className="flex cursor-pointer items-center justify-start pb-6"
      onClick={() => router.back()}
    >
      <span className="icon-[ic--twotone-arrow-back] h-6 w-6"></span>
      <p className="text-md pl-1 opacity-50 transition-opacity duration-200 hover:opacity-100">
        Back
      </p>
    </section>
  );
};

export default BackBtn;
