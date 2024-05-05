import React, { useState } from 'react';

const FormInputCity = ({ setCity }) => {

    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleClick = () => {
      setCity(inputValue); // Pasamos el mensaje al componente hermano a través de la función setCity
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleClick}>Look up your city:</button>
      </div>
    );
  };



export default FormInputCity;
