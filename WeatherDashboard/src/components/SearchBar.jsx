export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="w-full max-w-xl flex gap-2">
      <input
        className="flex-1 p-2 rounded border"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}
