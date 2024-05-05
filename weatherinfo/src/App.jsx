import React from 'react';
import Header from './components/Header/Header';
import ListForecast from './components/MainComponent/ListForecast/ListForecast';
import ForecastMain from './components/MainComponent/ForecastMain/ForecastMain';
import Footer from './components/Footer/Footer'
import CardForecast from './components/MainComponent/CardForecast/CardForecast';


function App() {
  

  return (
    <>
      <Header/>
      <ForecastMain/>
      <ListForecast/>
      <Footer/>
    </>
  )
}

export default App
