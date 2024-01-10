import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import DailyForecast from './components/DailyForecast';

{/*Adjust the app color(blue gradients for clear blue skies), and then add all of the components one layer at a time.*/}
function App() {
  return (
    <div className="mx-auto max-w-screen-md mt4 py-5 px-32 bg-gradient-to-br from-blue-600 to-cyan-400 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Inputs/>
      
      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <Forecast t="hourly forecast"/>
      <DailyForecast/>
    </div>
  );
}

export default App;
