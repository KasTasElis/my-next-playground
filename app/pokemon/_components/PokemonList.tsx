import Link from "next/link";
import { getPokemonList } from "../data";
import clsx from "clsx";

export default async function PokemonList({
  page,
}: {
  page: number | undefined;
}) {
  const { results: pokeData, totalPages } = await getPokemonList({
    pageNo: page,
  });

  return (
    <div>
      <ul className="mb-7">
        {pokeData.map((poke) => (
          <li key={poke.name}>
            <Link
              className="underline hover:text-yellow-600"
              href={`/pokemon/${poke.name}`}
            >
              {poke.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* <p>COUNT: {count}</p>
      <p>Total Pages: {totalPages}</p>
      <p>Current Page: {page}</p> */}

      <ul className="flex gap-5 max-w-[500px] flex-wrap">
        {Array.from({ length: totalPages }).map((_, i) => (
          <li key={i}>
            <Link
              className={clsx(
                "underline hover:text-yellow-500 p-1 bg-gray-800 rounded",
                {
                  "text-yellow-500": Number(page) === i + 1,
                },
              )}
              href={`/pokemon?page=${i + 1}`}
            >
              {i + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
