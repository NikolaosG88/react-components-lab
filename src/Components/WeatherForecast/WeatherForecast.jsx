import React from "react"
import  "./WeatherForecast.css"
import WeatherIcon from "../WeatherIcon/WeatherIcon"
import WeatherData from "../WeatherData/WeatherData"

export default function WeatherForecast({ imageName, altPoint, dayName, currentCondi, currentTime }) {
  return (
    <div className="weather">
      <WeatherIcon img={imageName} alt={altPoint} />
      <WeatherData day={dayName} conditions={currentCondi} time={currentTime} />
    </div>
  );
}