import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState("");
  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function displayWeatherForecast(response) {
    setWeatherForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "1df421a8e92c4deb66d8ea29cac386e6";
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&&units=Imperial`;
    axios.get(apiUrl).then(displayWeatherForecast);
  }

  if (loaded) {
    return (
      <div className="row weather-forecast">
        {weatherForecast.map(function(dailyForecast, index) {
          if (index <= 5) {
            return (
              <div className="col-2" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}
