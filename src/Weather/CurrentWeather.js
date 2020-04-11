import React from "react";
import "./weather.css";

function CurrentWeather({
  city,
  temperature,
  feelsLike,
  wind,
  description,
  icon,
}) {
  return (
    <div data-testid="current-weather" className="container">
      <div>
        <img
          alt="weather icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      </div>
      <p>
        Currently in {city} it is {description} with {temperature} degrees. It
        feels like {feelsLike} degrees with a wind speed of {wind} m/s.
      </p>
    </div>
  );
}
export default CurrentWeather;
