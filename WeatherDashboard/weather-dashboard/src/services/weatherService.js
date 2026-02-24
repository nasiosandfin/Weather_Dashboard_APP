import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city) {
  if (!city) throw new Error("City is required");
  try {
    const res = await axios.get(BASE_URL, {
      params: { q: city, appid: API_KEY, units: "metric" },
    });
    return res.data;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      throw new Error("City not found");
    }
    throw new Error("Network or API error");
  }
}
