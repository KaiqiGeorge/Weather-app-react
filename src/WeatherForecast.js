import React, { useEffect, useState } from "react";
import axios from "axios";
import weatherForecastDay from "./weatherForecastDay";

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
    let apiKey = "d5a8e815ad3352e76fb600d6bbd808c7";
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
                <weatherForecastDay data={dailyForecast} />
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
