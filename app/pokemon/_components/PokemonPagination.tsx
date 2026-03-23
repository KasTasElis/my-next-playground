"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export default function PokemonPagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <ul
      className={clsx("flex gap-5 max-w-[500px] flex-wrap", {
        "opacity-50": isPending,
        "animate-pulse": isPending,
      })}
    >
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <li key={i}>
            <button
              className={clsx(
                "underline hover:text-yellow-500 p-1 bg-gray-800 rounded",
                { "text-yellow-500": currentPage === page },
              )}
              onClick={() => {
                if (isPending) return;

                startTransition(() => {
                  router.push(`/pokemon?page=${page}`, { scroll: false });
                });
              }}
            >
              {page}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
