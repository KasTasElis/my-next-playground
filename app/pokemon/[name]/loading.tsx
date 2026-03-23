export default async function LoadingPokeDetails() {
  return (
    <div>
      <h3 className="mb-5 text-xl">
        <div className="h-6 bg-gray-200 rounded mb-3" />
      </h3>

      <ul className="mb-5">
        <li className="flex gap-3">
          Base Experience: <div className="h-6 bg-gray-200 rounded mb-3" />
        </li>
        <li className="flex gap-3">
          Height: <div className="h-6 bg-gray-200 rounded mb-3" />
        </li>
        <li className="flex gap-3">
          Weight: <div className="h-6 bg-gray-200 rounded mb-3" />
        </li>
      </ul>

      <div className="animate-pulse">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="h-6 bg-gray-200 rounded mb-3" />
        ))}
      </div>
    </div>
  );
}
