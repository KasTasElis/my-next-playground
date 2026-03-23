"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

function getPageWindow(current: number, total: number): (number | "...")[] {
  const delta = 2;
  const range: number[] = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  const result: (number | "...")[] = [];
  let prev: number | undefined;
  for (const page of range) {
    if (prev !== undefined && page - prev > 1) result.push("...");
    result.push(page);
    prev = page;
  }
  return result;
}

export default function PokemonPagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const pages = getPageWindow(currentPage, totalPages);

  return (
    <ul
      className={clsx("flex gap-3 flex-wrap items-center", {
        "opacity-50": isPending,
        "animate-pulse": isPending,
      })}
    >
      {pages.map((item, i) =>
        item === "..." ? (
          <li key={`ellipsis-${i}`} className="p-1">
            …
          </li>
        ) : (
          <li key={item}>
            <button
              className={clsx(
                "underline hover:text-yellow-500 p-1 bg-gray-800 rounded",
                { "text-yellow-500": currentPage === item },
              )}
              onClick={() => {
                if (isPending) return;
                startTransition(() => {
                  router.push(`/pokemon?page=${item}`, { scroll: false });
                });
              }}
            >
              {item}
            </button>
          </li>
        ),
      )}
    </ul>
  );
}
