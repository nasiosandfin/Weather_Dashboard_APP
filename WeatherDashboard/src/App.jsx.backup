import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}



import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import { fetchWeather } from "./api/weather";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setError("");
      const data = await fetchWeather(city);
      setWeather(data);
    } catch {
      setError("City not found or network error.");
      setWeather(null);
    }
  };

  // Auto-refresh every 5 minutes
  useEffect(() => {
    if (weather) {
      const interval = setInterval(() => handleSearch(weather.name), 300000);
      return () => clearInterval(interval);
    }
  }, [weather]);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
