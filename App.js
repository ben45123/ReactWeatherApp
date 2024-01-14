import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import DailyForecast from './components/DailyForecast';
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

{/*Adjust the app color(blue gradients for clear blue skies), and then add all of the components one layer at a time.*/}
function App() {

    const [query, setQuery] = useState({q:'New York City'})
    const [units, setUnits] = useState('imperial')
    const [weather, setWeather] = useState(null)

    useEffect(() => {

    const fetchWeather = async() =>{
    const data = await getFormattedWeatherData({...query, units}).then(data=>{
      setWeather(data)
    });
    console.log(data);
    }

  fetchWeather();
    }, [query])

  return (
    <div className="min-h-screen w-screen mt4 py-5 px-32 bg-gradient-to-br from-blue-600 to-cyan-400 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Inputs/>
      {weather && (
        <div>
          <TimeAndLocation weather = {weather}/>
          <TemperatureAndDetails weather = {weather}/>
          <Forecast t="hourly forecast"/>
          <DailyForecast/>
        </div>
    )}
    </div>
  );
}

export default App;
