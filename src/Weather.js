import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import DisplayDate from "./DisplayDate";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      clouds: response.data.clouds.all,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "1df421a8e92c4deb66d8ea29cac386e6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=Imperial`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSumbit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="wrapper">
        <div className="container">
          <form className="search-form" onSubmit={handleSumbit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control cityInput"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary search"
                />
              </div>
            </div>
          </form>

          <h1 className="cityName">{weatherData.city}</h1>
          <ul className="time-weather">
            <li className="time">
            <DisplayDate date={weatherData.date} />
            
            </li>
            <li className="weather-description text-capitalize">
              {weatherData.description}
            </li>
          </ul>
          <div className="row">
            <div className="col-7">
              <img
                className="float-left icon"
                src={weatherData.imgUrl}
                alt={weatherData.description}
              />
              <span className="temperature-number">
                {weatherData.temperature}
              </span>
              <span className="units">??</span>
            </div>
            <div className="col-5">
              <ul className="weather-detail">
                <li className="humidity">Humidity: {weatherData.humidity}%</li>
                <li className="clouds">Clouds: {weatherData.clouds}%</li>
                <li className="wind">Wind: {weatherData.wind}mi/h</li>
              </ul>
            </div>
            <WeatherForecast coord={weatherData.coord} />
          </div>

         
          </div>
         
        
        <footer>
          {" "}
          This project was coded by Kaiqi George and it is{" "}
          <a
            href="https://github.com/KaiqiGeorge/Weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          on Github and hosted on{" "}
          <a
            href="https://kaiqi-weather-app-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
       
      
      </div>
    )
  } else {
    search();
    return "Loading...";
  }
}
