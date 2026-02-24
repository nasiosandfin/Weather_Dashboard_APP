export default function WeatherCard({ weather }) {
  if (!weather) return null;
  const icon = weather.weather?.[0]?.icon;
  const desc = weather.weather?.[0]?.description || "";
  return (
    <div className="bg-white shadow rounded p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <div className="flex items-center gap-4">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={desc}
          className="w-20 h-20"
        />
        <div>
          <p className="text-xl">Temp: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
          <p className="capitalize">{desc}</p>
        </div>
      </div>
    </div>
  );
}
