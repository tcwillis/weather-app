import { WEATHER } from "../actionTypes";
import { apiAction } from "./apiActions";
import lodashGet from "lodash.get";

const getWeather = id =>
  apiAction({
    type: WEATHER,
    endpoint: "/weather",
    params: {
      id
    }
  });

export const fetchWeather = id => {
  return (dispatch, getState) => {
    const weather = lodashGet(getState(), "weather.list");

    if (weather && !weather.isFetchingData && id) {
      return dispatch(getWeather(id));
    }
  };
};
