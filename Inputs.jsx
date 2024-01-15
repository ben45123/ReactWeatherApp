import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

/**
 * Inputs component provides search and location input functionality.
 *
 * @param {function} setQuery - Function to update the search query based on user input.
 * @param {string} units - The current unit system ("metric", "imperial").
 * @param {function} setUnits - Function to update the unit system based on user preference.
 *
 * @returns {JSX.Element} The rendered Inputs component with search and location input fields.
 */
function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  //Handles the search button click, updating the query if a city is provided.
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  //Handles the location button click, fetching the user's current location and updating the query.
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      // Use Geolocation API to get the current position
      navigator.geolocation.getCurrentPosition((position) => {
        // Extract latitude and longitude from the position object
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        // Update the query with the user's current location
        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-3">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        {/* Input field for the user to type the city */}
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city..."
          className="h-12 text-3xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={35}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={35}
          className=" text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
    </div>
  );
}

export default Inputs;
