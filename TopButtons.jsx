import React from "react";

{
  /*Create a list of all the cities that I want to be quick selected at the top*/
}
function TopButtons() {
  const cities = [
    {
      id: 1,
      title: "New York City",
    },
    {
      id: 2,
      title: "Miami",
    },
    {
      id: 3,
      title: "Los Angeles",
    },
    {
      id: 4,
      title: "Boston",
    },
    {
      id: 5,
      title: "Chicago",
    },
  ];

  {
    /*Edit them so that they are centered, at a particular size, white, and get bigger when hovered over.
     Also map the city to the city ID.*/
  }
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-2xl font-medium transition ease-out hover:scale-125"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
