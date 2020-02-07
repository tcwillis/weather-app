import { WEATHER, LOCATIONS } from "../actionTypes";
import { apiAction } from "./apiActions";
import lodashGet from "lodash.get";

const getWeather = () =>
  apiAction({
    type: WEATHER,
    endpoint: "/weather"
  });

export const getLocations = query =>
  apiAction({
    type: LOCATIONS,
    endpoint: "/location",
    params: {
      city: query
    }
  });

const shouldFetchWeather = state => {
  const weather = lodashGet(state, "weather.list");
  if (weather && weather.isFetchingData) {
    return false;
  }
  return true;
};

export const fetchWeatherIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchWeather(getState())) {
      return dispatch(getWeather());
    }
  };
};
