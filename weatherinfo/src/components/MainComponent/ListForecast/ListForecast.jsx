import React from "react";
import { useEffect, useState } from 'react'
import CardForecast from '../CardForecast/CardForecast'



const ListForecast = ({ city }) => {

  const [forecast, setForecast] = useState([]);

  console.log('render only when component mounts!')
  console.log(forecast);

  //PETICION A API
  useEffect(() => {

    const getForecast = async () => {
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=edcc4e9a432c54888d2969d9cfcde954`);
      const data = await resp.json();
      console.log(data);
      setForecast(data);

    }
    getForecast();
  }, []);
  return (
    forecast.length > 0 ?
    <>
    {forecast.map(item =>  (
            <section id="list">
              <CardForecast key={item} city={city} temp={forecast[i].main.temp} temp_min={forecast[i].main.temp_min} temp_max={forecast[i].main.temp_max} icon={forecast[i].weather.icon}/>
            </section>
          ))}
          </>
      : <p>No se reciben datos</p>
  );}


export default ListForecast
