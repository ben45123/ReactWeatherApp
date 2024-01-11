import React from "react";

function DailyForecast() {
  return (
    <div>
      <div className="flex items-center my-4">
        <p className="text-white font-medium uppercase text-2xl">
          Daily Forecast
        </p>
      </div>
      <hr className="my-3"></hr>
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center">
          <p className="font-light text-xl">Today</p>
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png"
            alt=""
            className="h-12"
          />
          <p className="text-xl">66°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-xl">Sun</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/03_Overcast-512.png"
            alt=""
            className="h-12"
          />
          <p className="text-xl">61°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-xl">Mon</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/11_Downpour-512.png"
            alt=""
            className="h-12"
          />
          <p className="text-xl">63°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-xl">Tues</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/10_Lighting_Rain-512.png"
            alt=""
            className="h-12"
          />
          <p className="text-xl">64°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-xl">Weds</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/31_Partly_Cloudy-512.png"
            alt=""
            className="h-12"
          />
          <p className="text-xl">71°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-xl">Thurs</p>
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png"
            alt=""
            className="h-12"
          />
          <p className="text-xl">74°</p>
        </div>
      </div>
      <div className="my-5"></div>
    </div>
  );
}

export default DailyForecast;
