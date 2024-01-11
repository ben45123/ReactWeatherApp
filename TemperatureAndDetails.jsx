import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center text-2xl font-medium text-orange-300 py-3">
        <p
          style={{
            backgroundClip: "text",
            color: "transparent",
            backgroundImage: "linear-gradient(to bottom, #FF8C00, #FFD700)",
          }}
        >
          Sunny
        </p>
      </div>

      <div className=" flex flex-row items-center justify-center text-white">
        <img
          src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
          alt=""
          className="w-28"
        />
        <p className="text-8xl my-custom-margin-left my-custom-margin-right">
          67°
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-md items-center justify-center ml-4 translate-x-2">
            <UilTemperature size={30} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">74°</span>
          </div>
          <div className="flex font-light text-md items-center justify-center ml-4 translate-x-2">
            <UilTear size={30} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">8%</span>
          </div>
          <div className="flex font-light text-md items-center justify-center ml-4 translate-x-2">
            <UilWind size={30} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">2 mph</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-lg py-4">
        <UilSun />
        <p className="font-light">
          Rise:
          <span className="font medium ml-1">06:40 AM</span>
        </p>
        <p> | </p>
        <UilSunset />
        <p className="font-light">
          Set:
          <span className="font medium ml-1">07:14 PM</span>
        </p>
        <p> | </p>
        <UilArrowUp />
        <p className="font-light">
          High:
          <span className="font medium ml-1">76°</span>
        </p>
        <p> | </p>
        <UilArrowDown />
        <p className="font-light">
          Low:
          <span className="font medium ml-1">62°</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
