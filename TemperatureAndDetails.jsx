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
import { formatToLocalTime, iconURL } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    windSpeed,
    humidity,
    feels_like,
    timezone,
  },
}) {
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
          {details}
        </p>
      </div>

      <div className=" flex flex-row items-center justify-center text-white">
        <img
          //src={iconURL(icon)}
          src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
          alt=""
          className="w-28"
        />
        <p className="text-8xl my-custom-margin-left my-custom-margin-right">
          {`${temp.toFixed()}°`}
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-md items-center justify-center ml-4 translate-x-2">
            <UilTemperature size={30} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-md items-center justify-center ml-4 translate-x-2">
            <UilTear size={30} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-md items-center justify-center ml-4 translate-x-2">
            <UilWind size={30} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">
              {`${windSpeed.toFixed()}`} mph
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-lg py-4">
        <UilSun />
        <p className="font-light">
          Rise:
          <span className="font medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p> | </p>
        <UilSunset />
        <p className="font-light">
          Set:
          <span className="font medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p> | </p>
        <UilArrowUp />
        <p className="font-light">
          High:
          <span className="font medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p> | </p>
        <UilArrowDown />
        <p className="font-light">
          Low:
          <span className="font medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
