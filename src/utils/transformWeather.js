import lodashGet from "lodash.get";
import { abbreviationsMap } from "./transformUnits";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const nth = d => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const calculateTemp = (temp, defaultUnits) => {
  if (defaultUnits === "imperial") {
    return Math.round((temp * 9) / 5 + 32);
  }
  return Math.round(temp);
};

export const calculateSpeed = (speed, defaultUnits) => {
  if (defaultUnits === "metric") {
    return Math.round(speed * 1.609);
  }
  return Math.round(speed);
};

export const transformWeather = (data, units) => {
  const weather = lodashGet(data, "consolidated_weather");
  const title = data.title;
  const mappedLocations = weather =>
    weather.map((forecast, index) => {
      const dateObj = new Date(forecast.applicable_date);
      const dayOfMonth = dateObj.getDate();
      return {
        title,
        code: forecast.weather_state_abbr,
        state: forecast.weather_state_name,
        windDirection: forecast.wind_direction_compass,
        windSpeed: calculateSpeed(forecast.wind_speed, units),
        image: `https://www.metaweather.com/static/img/weather/${forecast.weather_state_abbr}.svg`,
        precipitation: "prce",
        humidity: forecast.humidity,
        minTemp: calculateTemp(forecast.min_temp, units),
        maxTemp: calculateTemp(forecast.max_temp, units),
        currentTemp: calculateTemp(forecast.the_temp, units),
        day: days[dateObj.getDay()],
        date: `${months[dateObj.getMonth()]} ${dayOfMonth}${nth(dayOfMonth)}`,
        speedUnits: abbreviationsMap[units].speed,
        degreesUnits: abbreviationsMap[units].degrees
      };
    });
  if (weather && weather.length > 0) {
    return mappedLocations(weather);
  }
  return [];
};
