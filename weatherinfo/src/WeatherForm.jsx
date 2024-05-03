import React from 'react'
import { useState } from 'react'

function WeatherForm(){
 

    const [inputCity, setCity] = useState('');
  
    const handleInputChange = (event) => {
      event.preventDefault();
      setCity(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label><input type="text" value={inputCity} onChange={handleInputChange} /></label>
        <button type="submit">Consultar</button>
      </form>
    );
  }

export default WeatherForm