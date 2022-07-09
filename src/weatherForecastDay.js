import React from "react";
import "./Weather.css";

export default function WeatherForecastDay(props) {
  let weatherIcon = props.data.weather[0].icon;
  let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="col-2 weather-forecast">
      <div className="weather-forecast-day">{day()}</div>
      <div className="weather-forecast-icon">
        <img src={iconUrl} alt="weather-icon" />
      </div>
      <div className="weather-forecast-tempMax">{maxTemp()}</div>
      <div className="weather-forecast-tempMin">{minTemp()}</div>
     
    </div>
  );
}
