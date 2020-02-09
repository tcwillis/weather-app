import { WEATHER, SELECT_UNITS } from "../actionTypes";
import { apiAction } from "./apiActions";

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
    const weather = getState().weather;

    if (weather && !weather.isFetchingData && id) {
      return dispatch(getWeather(id));
    }
  };
};

export const selectUnits = units => {
  return dispatch => {
    return dispatch({ type: SELECT_UNITS, payload: units });
  };
};
