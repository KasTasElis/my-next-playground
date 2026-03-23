import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemon List",
  description: "Check out all the Pokemon here.",
};

export default async function Pokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const { results: pokeData } = (await response.json()) as {
    results: { name: string; url: string }[];
  };

  return (
    <div>
      <h3 className="mb-5 text-xl">This is the Pokemon index:</h3>

      <ul>
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
    </div>
  );
}
