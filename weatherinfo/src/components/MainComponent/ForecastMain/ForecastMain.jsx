import React, { useState } from "react";
import ListForecast from "../ListForecast/ListForecast";
import FormInputCity from "../FormInputCity/FormInputCity";

const ForecastMain = () => {
  const [city, setCity] = useState('');

  return (
    <section id="forecastMain">
      <FormInputCity setCity={setCity} />
      <ListForecast city={city} />
    </section>
  );
};

export default ForecastMain;
