import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {

    //Sets default location, units, and always asks the api for weather information type
    const [query, setQuery] = useState({q:'New York'})
    const [units, setUnits] = useState('imperial')
    const [weather, setWeather] = useState(null)

    /** 1. The useEffect function calls the getFormattedWeatherData function built in weatherService.js
     *  that returns the current weather data, and the forecast weather data whenever a dependancy is changed.
     *  2. It's query is defaulted to New York, but is automatically changed when a new query is set.
     *  3. Every time it is called, it sets the new data, displays it in the consol, 
     *  and fetches the weather to be used in other classes to show real time changes in the front end.
     */
    useEffect(() => {
    const fetchWeather = async() =>{
      const data = await getFormattedWeatherData({...query, units}).then(data=>{
        setWeather(data)
      });
    console.log(data);
    }
    fetchWeather();
    }, [query])

  /** This function formats the background. The default is set to a blue background for all temperature between 33-75.
   *  For the cities that have temperatures of less than or equal to 32, there is a much lighter blue giving off a snowy aura.
   *  Lastly, for the cities with temperatures of 75 or greater, there is an orange background giving off a warmer aura.
   */ 
  const formatBackground = () => {
    if (!weather) return 'from-blue-600 to-cyan-400'
    const threshold1 = units === 'imperial' ? 32:32
    const threshold2 = units === 'imperial' ? 75:1000
    if (weather.temp<= threshold1) return 'from-cyan-500 to-cyan-300' 
    else if (weather.temp<= threshold2) return 'from-blue-600 to-cyan-400' 
    return 'from-orange-600 to-yellow-500 '
  }

  /** This app sets the screen to fill out maximally, and calls the formatted background depending on the temperature.
   *  It also returns all of the components in the proper layout, and passes the weather data that we get from the useEffect function.
   */
  return (
    <div className={`min-h-screen w-screen mt4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}> 
      <TopButtons setQuery = {setQuery}/>
      <Inputs setQuery = {setQuery} units={units} setUnits={setUnits}/>
      {weather && (
        <div>
          <TimeAndLocation weather = {weather}/>
          <TemperatureAndDetails weather = {weather}/>
          <Forecast title="hourly forecast" items = {weather.hourly}/>
          <Forecast title="daily forecast" items = {weather.daily}/>
        </div>
    )}
    </div>
  );
}

export default App;
