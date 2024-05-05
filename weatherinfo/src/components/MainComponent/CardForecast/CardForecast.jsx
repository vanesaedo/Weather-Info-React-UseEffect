import React from "react";

const CardForecast = (props) => {
  return <section id="card">
    <h4>{props.city}</h4>
    <ul>
      <li> {props.temp}</li>
      <li> {props.temp_min}</li>
      <li> {props.temp_max}</li>
      <li> {props.icon}</li>
    </ul>
  </section>
};

export default CardForecast;
