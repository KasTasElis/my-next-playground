"use client";

import { useRouter } from "next/navigation";

export default function PokemonError() {
  const router = useRouter();

  return (
    <div>
      <h3 className="mb-5 text-xl text-red-500">
        ❓❓❓ Something went wrong here.
      </h3>
      <p>Try again later...</p>

      <button onClick={() => router.back()} className="underline p-5">
        Go Back
      </button>
    </div>
  );
}
