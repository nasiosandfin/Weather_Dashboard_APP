import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim());
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 mb-6 w-full max-w-md"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name..."
        className="flex-grow border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}
