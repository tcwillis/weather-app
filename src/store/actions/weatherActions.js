import { WEATHER } from "../actionTypes";
import { apiAction } from "./apiActions";
import lodashGet from "lodash.get";

const getWeather = () =>
  apiAction({
    type: WEATHER,
    endpoint: "/weather"
  });

const shouldFetchWeather = state => {
  const weather = lodashGet(state, "weather.list");
  if (weather && weather.isFetchingData) {
    return false;
  } else if (!weather || weather.length === 0) {
    return true;
  } else {
    return false;
  }
};

export const fetchWeatherIfNeeded = () => {
  console.log("sdefsdfsdf");
  return (dispatch, getState) => {
    if (shouldFetchWeather(getState())) {
      return dispatch(getWeather());
    }
  };
};
