export async function getPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const { results } = (await response.json()) as {
    results: { name: string; url: string }[];
  };
  return results;
}

export async function getPokemonDetails(name: string) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const data = (await response.json()) as {
    base_experience: number;
    height: number;
    weight: number;
  };
  return data;
}
