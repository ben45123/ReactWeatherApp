import React from "react";

function Forecast({ t }) {
  return (
    <div>
      <div className="flex items-center my-3">
        <p className="text-white font-medium uppercase">{t}</p>
      </div>
      <hr className="my-2"></hr>
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">4:00PM</p>
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png"
            alt=""
            className="h-8"
          />
          <p>66°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">6:00PM</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/31_Partly_Cloudy-512.png"
            alt=""
            className="h-8"
          />
          <p>65°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">7:14PM</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-free-1/32/Weather_Free_Filled_Outline_sunset-weather-evening-512.png"
            alt=""
            className="h-8"
          />
          <p>64°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">8:00PM</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/03_Overcast-512.png"
            alt="Weather Icon"
            className="h-8"
          />
          <p>64°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">10:00PM</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/03_Overcast-512.png"
            alt=""
            className="h-8"
          />
          <p>62°</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-sm">12:00AM</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-715/512/19_Night_Cloud-512.png"
            alt=""
            className="h-8"
          />
          <p>61°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
