import lodashGet from "lodash.get";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const calculateTemp = (temp, units) => {
  if (units === "imperial") {
    return `${Math.round((temp * 9) / 5 + 32)}${"\u00b0"}F`;
  }
  return `${Math.round(temp)}${"\u00b0"}C`;
};

export const transformWeather = (data, units) => {
  const weather = lodashGet(data, "consolidated_weather");
  const title = data.title;
  const mappedLocations = weather =>
    weather.map((forecast, index) => {
      const dateObj = new Date(forecast.applicable_date);
      return {
        title,
        code: forecast.weather_state_abbr,
        state: forecast.weather_state_name,
        windDirection: forecast.wind_direction_compass,
        windSpeed: forecast.wind_speed,
        image: `https://www.metaweather.com/static/img/weather/${forecast.weather_state_abbr}.svg`,
        precipitation: "prce",
        humidity: forecast.humidity,
        date: forecast.applicable_date,
        minTemp: calculateTemp(forecast.min_temp, units),
        maxTemp: calculateTemp(forecast.max_temp, units),
        day: index === 0 ? "Today" : days[dateObj.getDay()]
      };
    });
  if (weather && weather.length > 0) {
    return mappedLocations(weather);
  }
  return [];
};
