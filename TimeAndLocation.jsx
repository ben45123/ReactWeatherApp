import React from "react";

function TimeAndLocation() {
  {
    /*Add the date and time, including the day of the week, year, and add the location (City, State/Country). */
  }
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <div className="text-white text-xl font-extralight">
          Saturday, 17 June 2023 | Local time: 9:01 PM
        </div>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">Albertson, NY</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
