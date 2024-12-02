import React from "react"
import  "./WeatherForecast.css"

export default function WeatherForecast(props) {
  return (
<div className="weather">
  <h2>{props.dayName}</h2>
  <img src={props.imageName} alt={props.altPoint} />
  <p><span>conditions: </span>{props.currentCondi}</p>
  <p><span>Time: </span>{props.currentTime}</p>
</div>
  );
}
