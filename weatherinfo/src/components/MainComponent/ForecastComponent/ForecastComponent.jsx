import React from "react";
import CardForecast from "../CardForecast/CardForecast";

const ForecastComponent = () => {
  const [city, setCity] = useState('');

  return (
    <div>
      <FormInputCity setCity={setCity} />
      <CardForecast city={city} />
    </div>
  );
};

export default ForecastComponent;
