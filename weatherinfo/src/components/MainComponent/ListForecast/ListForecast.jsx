import React from "react";
import { useEffect, useState } from 'react'
import CardForecast from './CardForecast'



const ListForecast = ({ city }) => {

  const [forecast, setForecast] = useState([]);

  console.log('render only when component mounts!')

  //PETICION A API
  useEffect(() => {

    const getForecast = async () => {
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=edcc4e9a432c54888d2969d9cfcde954`);
      const data = await resp.json();
      setForecast(data.list[0]);

    }
    getForecast([city]);
  }, [forecast]);
  return (
    forecast.length > 0 ?
      <><CardForecast data={forecast[0]} city={city} />
        <CardForecast data={forecast[1]} city={"Madrid"} />
        <CardForecast data={forecast[2]} city={"Madrid"} />
        <CardForecast data={forecast[3]} city={"Madrid"} />
        <CardForecast data={forecast[4]} city={"Madrid"} />
      </>
      : <></>
  );
};

export default ListForecast;
