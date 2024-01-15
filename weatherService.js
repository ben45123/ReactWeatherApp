import { DateTime } from "luxon";

// OpenWeatherMap API key and base URL
const API_KEY = "c08ad40210de6e2496a3595ebc370e8b";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Creates a link using the city name
const getWeatherData = (infoType, searchParams) => {
  // Construct the URL with query parameters
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  // Fetch weather data and return a promise
  return fetch(url).then((res) => res.json()).then((data) => data);
};

// Formats the current weather data
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed: windSpeed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    weather,
    windSpeed,
    details,
    icon,
  };
};

// Formats the forecast weather data
const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;

  // Extract relevant information for daily forecast
  daily = daily.slice(1, 7).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  // Extract relevant information for hourly forecast
  hourly = hourly.slice(1, 7).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

// Fetches and formats weather data using the OpenWeatherMap API
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);
  const { lat, lon } = formattedCurrentWeather;
  const formattedForecastWeather = await getWeatherData('onecall', { lat, lon, exclude: 'current,minutely,alerts' }).then(formatForecastWeather);
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

// Formats a Unix timestamp to local time in a specified format
const formatToLocalTime = (secs, zone, format = "ccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// Generates an icon URL based on the OpenWeatherMap condition code
const iconURL = (conditionCode) => {
  const baseUrl = 'https://cdn3.iconfinder.com/data/icons/weather-715/512/';

  // Switch statement to map condition codes to icon URLs
  // Found nicer icons on iconfinder than the default icons on OpenWeatherMap
  switch (conditionCode) {
    case '01d':
      return baseUrl + '01_Sun-512.png';
    case '01n':
      return baseUrl + '02_Night-128.png';
    case '02d':
      return baseUrl + '31_Partly_Cloudy-512.png';
    case '02n':
      return baseUrl + '19_Night_Cloud-512.png';
    case '03d':
      return baseUrl + '03_Overcast-512.png';
    case '03n':
      return baseUrl + '03_Overcast-512.png';
    case '04d':
      return baseUrl + '29_Pleasant-128.png';
    case '04n':
      return baseUrl + '03_Overcast-512.png';
    case '09d':
    case '10d':
    case '09n':
    case '10n':
      return baseUrl + '11_Downpour-512.png';
    case '11d':
    case '11n':
      return baseUrl + '10_Lighting_Rain-512.png';
    case '13d':
    case '13n':
      return baseUrl + '05_Snow-128.png';
    case '50d':
    case '50n':
      return baseUrl + '20_Fog-512.png';
    default:
      return '';
  }
};

// Export functions for use in other modules
export default getFormattedWeatherData;
export { formatToLocalTime, iconURL };