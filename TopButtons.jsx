import React from "react";

/** TopButtons component provides quick selection buttons for predefined cities.
 *
 * @param {function} setQuery - Function to update the search query based on the selected city.
 *
 * @returns {JSX.Element} The rendered TopButtons component with quick selection buttons.
 */
function TopButtons({ setQuery }) {
  // List of predefined cities
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
      title: "Moscow",
    },
    {
      id: 4,
      title: "Sydney",
    },
    {
      id: 5,
      title: "Rome",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
