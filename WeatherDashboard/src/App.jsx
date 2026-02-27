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

// src/App.jsx
import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const AUTO_REFRESH_MS = 5 * 60 * 1000; // 5 minutes

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const intervalRef = useRef(null);

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setError("");
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather`;
      const { data } = await axios.get(url, {
        params: { q: cityName, appid: API_KEY, units: "metric" },
      });
      setWeather(data);
    } catch (err) {
      setWeather(null);
      if (err.response && err.response.status === 404) {
        setError("City not found. Please check the spelling.");
      } else {
        setError("Unable to fetch weather. Check your network or API key.");
      }
    }
  };

  const handleSearch = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => fetchWeather(cityName), AUTO_REFRESH_MS);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="w-full max-w-md">
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherCard weather={weather} onRefresh={() => fetchWeather(city)} />}
      </div>
    </div>
  );
}



