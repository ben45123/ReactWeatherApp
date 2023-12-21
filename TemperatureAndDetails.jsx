import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-2xl text-orange-300">
        <p>Sunny</p>
      </div>

      <div className=" flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl ml-12">67°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center ml-4">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">74°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center ml-4">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">8%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center ml-4">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">2 mph</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
