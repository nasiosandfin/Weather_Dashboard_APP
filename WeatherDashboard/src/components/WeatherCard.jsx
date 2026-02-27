import React from "react";

export default function WeatherCard({ weather, onRefresh }) {
  const { name, main, wind, weather: conditions } = weather;
  const icon = conditions?.[0]?.icon;

  return (
    <div className="bg-white shadow rounded p-4 mt-4">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <div className="flex items-center gap-4">
        {icon && (
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={conditions[0].description}
          />
        )}
        <div>
          <p className="text-lg">🌡 Temp: {main.temp} °C</p>
          <p>💧 Humidity: {main.humidity}%</p>
          <p>💨 Wind: {wind.speed} km/h</p>
        </div>
      </div>
      {onRefresh && (
        <button
          onClick={onRefresh}
          className="mt-4 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Refresh
        </button>
      )}
    </div>
  );
}
