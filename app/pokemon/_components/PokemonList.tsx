import Link from "next/link";
import { getPokemonList } from "../data";
import PokemonPagination from "./PokemonPagination";

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

      <PokemonPagination totalPages={totalPages} currentPage={page ?? 1} />
    </div>
  );
}
