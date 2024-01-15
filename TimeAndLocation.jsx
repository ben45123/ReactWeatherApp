import React from "react";
import { formatToLocalTime } from "../services/weatherService";

/**
 * TimeAndLocation component displays date, time, and location information.
 *
 * @param {Object} weather - Object containing weather-related information.
 * @param {number} weather.dt - Date and time (Unix timestamp).
 * @param {string} weather.timezone - Timezone of the location.
 * @param {string} weather.name - City name.
 * @param {string} weather.country - Country code.
 *
 * @returns {JSX.Element} The rendered TimeAndLocation component.
 */
function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      {/* Display date and time */}
      <div className="flex items-center justify-center my-6">
        <div className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </div>
      </div>

      {/* Display city and country */}
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
