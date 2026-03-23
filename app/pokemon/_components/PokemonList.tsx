import Link from "next/link";
import { getPokemonList } from "../data";

export default async function PokemonList() {
  const pokeData = await getPokemonList();

  return (
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
  );
}
