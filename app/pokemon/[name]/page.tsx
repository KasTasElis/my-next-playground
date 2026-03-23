import { getPokemonDetails } from "../data";

export default async function PokeDetails(props: PageProps<"/pokemon/[name]">) {
  const { name: pokeName } = await props.params;
  const pokeData = await getPokemonDetails(pokeName);

  return (
    <div>
      <h3 className="mb-5 text-xl">{pokeName.toUpperCase()}</h3>

      <ul className="mb-5">
        <li>Base Experience: {pokeData.base_experience}</li>
        <li>Height: {pokeData.height}</li>
        <li>Weight: {pokeData.weight}</li>
      </ul>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        perspiciatis voluptatum reprehenderit suscipit temporibus sed pariatur
        omnis minima quos sapiente, alias odit. Assumenda debitis nisi eaque
        quod ab ipsa eius.
      </p>
    </div>
  );
}
