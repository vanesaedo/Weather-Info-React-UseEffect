import React from 'react'



function WeatherCard(props) {
    
    return <section>
       <h1>{props.data}</h1>
       <p>{props.city}</p>
       <p></p>
    </section>
}

export default WeatherCard