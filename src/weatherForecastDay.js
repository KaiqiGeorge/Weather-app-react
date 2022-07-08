import React from "react";
import "./Weather.css"

export default function weatherForecastDay(props){
    let iconUrl= `http://openweathermap.org/img/wn/${props.data.weather.icon}@2x.png`;
    function maxTemp(){
        let temp = Math.round(props.data.temp.max);
        return `${temp}°`;
    }
    function minTemp(){
        let temp = Math.round(props.data.temp.min);
        return `${temp}°`;
    }
    function day(){
        let date = new Date(props.data.dt *1000);
        let day= date.getDay();
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        return days[day];
    }

    return(
        <div class="col-2">
        <div id="weather-forecast-day">{day()}</div>
        <div id="weather-forecast-icon"><img src={iconUrl} alt="weatherIcon" /></div>
        <div id="weather-forecast-tempMin">{minTemp}</div>
        <div id="weather-forecast-tempMax">{maxTemp}</div>
    </div>
    )
    


}