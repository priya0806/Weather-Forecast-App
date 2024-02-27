import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';


const WeatherApp = () => {

    let api_key ="320cd3e6f43791a9a64bb1de644f0067";
    const [wicon, setWicon] = useState(cloud_icon);

    const search = async() => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            return 0;
        }
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();

        const humidity= document.getElementsByClassName("humidity-percentage");
        const wind = document.getElementsByClassName("wind-speed");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        if(data.weather[0].icon==="01d"|| data.weather[0].icon==="01n"){
            setWicon(clear_icon);
        } 
        else if (data.weather[0].icon==="02d"|| data.weather[0].icon==="02n")
        {
            setWicon(cloud_icon);
        } 
        else if (data.weather[0].icon==="03d"|| data.weather[0].icon==="03n")
        {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon==="04d"|| data.weather[0].icon==="04n")
        {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon==="09d"|| data.weather[0].icon==="09n")
        {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon==="10d"|| data.weather[0].icon==="10n"){
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon==="13d"|| data.weather[0].icon==="13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp)+" °C";
        location[0].innerHTML = data.name;
    }
    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="search" />
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="" />

                </div>

            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">24°</div>
            <div className="weather-location">California</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="Icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="Icon" />
                    <div className="data">
                        <div className="wind-speed">18 Km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>


        </div>
    )
  
}

export default WeatherApp;