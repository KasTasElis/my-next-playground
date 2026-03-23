export async function getPokemonList({ pageNo = 1 }: { pageNo?: number } = {}) {
  const limit = 20;
  const offset = limit * (pageNo - 1);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);

  const { results, count } = (await response.json()) as {
    results: { name: string; url: string }[];
    count: number;
  };

  const totalPages = Math.ceil(count / limit);

  return { results, totalPages, count };
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
