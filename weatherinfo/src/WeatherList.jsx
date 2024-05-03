import React from 'react'
import { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'
import WeatherForm from './WeatherForm';





function WeatherList() {
   
    const [forecast, setForecast] = useState([]);
    

    console.log('render only when component mounts!')
    //PETICION A API

        useEffect(() => {
            
            const getForecast = async () =>{
                const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=edcc4e9a432c54888d2969d9cfcde954`);
                const data = await resp.json();
                setForecast(data.list[0].main);
                
            }
            getForecast([]);    
        }, []);

    
        return (
                forecast.length>0?
                <>
                    <WeatherCard data={forecast[0]} city={"Madrid"}/>
                    <WeatherCard data={forecast[1]} city={"Madrid"}/>
                    <WeatherCard data={forecast[2]} city={"Madrid"}/>
                    <WeatherCard data={forecast[3]} city={"Madrid"}/>
                    <WeatherCard data={forecast[4]} city={"Madrid"}/>
                </>
                :<></>
        );

}

/* function WeatherList() {

    const [nombre, setNombre] = useState("Vane");

    useEffect(() => {
        console.log('render only when component mounts!')
        //PETICION A API
    }, [nombre])


    const handleButton = () => {
        setNombre("Guille");
    }

    return <article>
        <span>{nombre}</span>
        <button onClick={handleButton}>Cambiar</button>

    </article>

} */


export default WeatherList;
