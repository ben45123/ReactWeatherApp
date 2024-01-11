import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

{
  /*Create an input box, and inside have a placeholder that tells the user to search for a city. */
}
function Inputs() {
  return (
    <div className="flex flex-row justify-center my-3">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for city..."
          className="h-12 text-3xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={35}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={35}
          className=" text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
    </div>
  );
}

export default Inputs;
