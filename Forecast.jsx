import React from "react";
import { iconURL } from "../services/weatherService";

/**
 * Forecast component displays weather forecast information.
 *
 * @param {string} title - The title of the forecast ("Daily" or "Hourly").
 * @param {Array} items - An array of forecast items, each containing title, icon, and temperature.
 *
 * @returns {JSX.Element} The rendered Forecast component.
 */
function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center my-4">
        <p className="text-white font-medium uppercase text-2xl">{title}</p>
      </div>
      <hr className="my-3"></hr>
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="font-light text-xl">{item.title}</p>
            <img src={iconURL(item.icon)} alt="" className="h-12" />
            <p className="text-xl">
              {kelvinToFahrenheit(item.temp).toFixed()}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Converts temperature from Kelvin to Fahrenheit.
 *
 * @param {number} kelvin - Temperature in Kelvin.
 * @returns {number} Temperature in Fahrenheit.
 */
function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

export default Forecast;
