import React from "react";

export default function WeatherData({ day, conditions, time }) {
  return (
    <div>
      <h2>{day}</h2>
      <p><span>Conditions: </span>{conditions}</p>
      <p><span>Time: </span>{time}</p>
    </div>
  );
}