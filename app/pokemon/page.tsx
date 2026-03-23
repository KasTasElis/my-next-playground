import type { Metadata } from "next";
import PokemonList from "./_components/PokemonList";
import { Suspense } from "react";
import PokemonListSkeleton from "./_components/PokemonListSkeleton";

export const metadata: Metadata = {
  title: "Pokemon List",
  description: "Check out all the Pokemon here.",
};

export default async function Pokemon() {
  return (
    <div>
      <h3 className="mb-5 text-xl">This is the Pokemon index:</h3>

      <Suspense fallback={<PokemonListSkeleton />}>
        <PokemonList />
      </Suspense>
    </div>
  );
}
