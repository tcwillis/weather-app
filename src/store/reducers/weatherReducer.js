import {
  WEATHER_RECEIVED,
  WEATHER_REQUESTED,
  WEATHER_FAILED,
  SELECT_UNITS
} from "store/actionTypes";

import { transformWeather } from "utils/transformWeather";
import { transformUnits } from "utils/transformUnits";

const INITIAL_STATE = {
  list: [],
  error: null,
  isFetchingData: false,
  units: "metric"
};

function weather(state = INITIAL_STATE, action) {
  switch (action.type) {
    case WEATHER_REQUESTED:
      return {
        ...state,
        isFetchingData: true
      };
    case WEATHER_RECEIVED:
      return {
        ...state,
        list: transformWeather(action.payload, state.units),
        isFetchingData: false
      };

    case WEATHER_FAILED:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };

    case SELECT_UNITS:
      return {
        ...state,
        units: action.payload,
        list: transformUnits(state.list, action.payload)
      };

    default:
      return state;
  }
}

export default weather;
