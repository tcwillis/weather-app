export const abbreviationsMap = {
  imperial: {
    speed: "mph",
    degrees: `${"\u00b0"}F`
  },
  metric: {
    speed: "kph",
    degrees: `${"\u00b0"}C`
  }
};

export const convertTemp = (temp, convertTo) => {
  if (convertTo === "imperial") {
    console.log("converting to imperial temp");
    return Math.round((temp * 9) / 5 + 32);
  }
  console.log("converting to metric temp");
  return Math.round(((temp - 32) * 5) / 9);
};

export const convertSpeed = (speed, convertTo) => {
  if (convertTo === "imperial") {
    return Math.round(speed / 1.609);
  }
  return Math.round(speed * 1.609);
};

export const transformUnits = (data, units) => {
  console.log("data", data);
  console.log("units", units);
  return data.map((forecast, index) => {
    return Object.assign({}, forecast, {
      windSpeed: convertSpeed(forecast.windSpeed, units),
      minTemp: convertTemp(forecast.minTemp, units),
      maxTemp: convertTemp(forecast.maxTemp, units),
      currentTemp: convertTemp(forecast.currentTemp, units),
      speedUnits: abbreviationsMap[units].speed,
      degreesUnits: abbreviationsMap[units].degrees
    });
  });
};
