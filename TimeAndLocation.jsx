import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  {
    /*Add the date and time, including the day of the week, year, and add the location (City, State/Country). */
  }
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <div className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </div>
      </div>

      <div className="flex items-center justify-center my-6">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
