import React from "react";

function DailyForecast() {
  return (
    <div>
      <div className="flex items-center my-3">
        <p className="text-white font-medium uppercase">Daily Forecast</p>
      </div>
      <hr className="my-2"></hr>
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">Today</p>
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png"
            alt=""
            className="h-8"
          />
          <p>66°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">Sun</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/03_Overcast-512.png"
            alt=""
            className="h-8"
          />
          <p>61°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">Mon</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/11_Downpour-512.png"
            alt=""
            className="h-8"
          />
          <p>63°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">Tues</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/10_Lighting_Rain-512.png"
            alt=""
            className="h-8"
          />
          <p>64°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">Weds</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/31_Partly_Cloudy-512.png"
            alt=""
            className="h-8"
          />
          <p>71°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">Thurs</p>
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png"
            alt=""
            className="h-8"
          />
          <p>74°</p>
        </div>
      </div>
    </div>
  );
}

export default DailyForecast;
