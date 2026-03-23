export default async function LoadingPokemon() {
  return (
    <div>
      <h3 className="mb-5 text-xl">This is the Pokemon index:</h3>

      <div className="animate-pulse">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="h-6 bg-gray-200 rounded mb-3" />
        ))}
      </div>
    </div>
  );
}
