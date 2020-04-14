import React, { useMemo } from "react";
import "./weather.css";

function CurrentWeather({
  city,
  temperature,
  feelsLike,
  wind,
  description,
  icon,
}) {
  const getEmoji = useMemo(() => {
    if (feelsLike < 5) {
      return "🥶";
    } else if (feelsLike >= 5 && feelsLike < 15) {
      return "🙂";
    } else if (feelsLike >= 15 && feelsLike < 26) {
      return "😎";
    }
    return "🥵";
  }, [feelsLike]);

  return (
    <div data-testid="current-weather" className="container">
      <div>
        <img
          alt="weather icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      </div>
      <p>
        Currently in {city} it is {description} with {temperature} degrees.{" "}
        <br /> It feels like {feelsLike} degrees {getEmoji} with a wind speed of{" "}
        {wind} m/s.
      </p>
    </div>
  );
}

export default CurrentWeather;
