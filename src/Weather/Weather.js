import React, { useState, useEffect } from "react";
import "./weather.css";
import CurrentWeather from "./CurrentWeather";
import { getWeather } from "../api/weather/requests";

const cities = [
  { key: "Stockholm", value: "Stockholm 🇸🇪" },
  { key: "London", value: "London 🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { key: "Berlin", value: "Berlin 🇩🇪" },
  { key: "Delhi", value: "Delhi 🇮🇳" },
  { key: "Rio de Janeiro", value: "Rio de Janeiro 🇧🇷" },
];

function Weather({ initialCity }) {
  const [city, setCity] = useState(initialCity);
  const [weather, setWeather] = useState();

  useEffect(() => {
    if (city !== undefined) {
      getWeather(city.split(" ")[0], setWeather);
    }
  }, [city]);

  return (
    <div className="container">
      <div>
        <label htmlFor="cities">City</label>
        <select
          id="cities"
          defaultValue="default"
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="default" disabled>
            Pick a city
          </option>

          {cities.map(({ key, value }) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {weather !== undefined && (
        <CurrentWeather
          city={city}
          temperature={Math.round(weather.main.temp)}
          feelsLike={Math.round(weather.main.feels_like)}
          wind={Math.round(weather.wind.speed)}
          description={weather.weather[0].description}
          icon={weather.weather[0].icon}
        />
      )}
    </div>
  );
}
export default Weather;
