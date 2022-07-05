import React from "react";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";



export default function Weather() {
  let weatherData = {
    city: "Beijing",
    date: "Tuesday 10:30",
    description: "Clear Sky",
    imgUrl: "http://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 30,
    humidity: 80,
    clouds: 5,
    wind: 10,
  };
  return (
    <div className="wrapper">
      <div className="container">
        <form className="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control cityInput"
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
          <li>
            Last updated: <span id="time">{weatherData.date}</span>
          </li>
          <li className="weather-description">{weatherData.description}</li>
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
            <span className="units">
              <a className="active Celsius" href="/">
                °C|
              </a>
              <a className="Fah" href="/">
                °F
              </a>
            </span>
          </div>
          <div className="col-5">
            <ul className="weather-detail">
              <li className="humidity">Humidity: {weatherData.humidity}%</li>
              <li className="clouds">Clouds: {weatherData.clouds}%</li>
              <li className="wind">Wind: {weatherData.wind}m/s</li>
            </ul>
          </div>
        </div>
        <div className="row weather-forecast">
          <div className="col-2">
            <div className="weather-forecast-day"></div>
            <div className="weather-forecast-icon"></div>
            <div class="weather-forecast-tempMin"></div>
            <div class="weather-forecast-tempMax"></div>
          </div>
        </div>
      </div>
      <footer>
        {" "}
        This project was coded by Kaiqi George and it is{" "}
        <a
          href="https://github.com/KaiqiGeorge/Weather-app-react"
          target="_blank" rel="noreferrer" 
        >
          open-sourced
        </a>{" "}
        on Github and hosted on{" "}
        <a href="https://kaiqi-weather-app-react.netlify.app/" target="_blank" rel="noreferrer" >
          Netlify
        </a>
      </footer>
    </div>
  );
}
