import {
  WEATHER_RECEIVED,
  WEATHER_REQUESTED,
  WEATHER_FAILED,
  LOCATIONS_RECEIVED,
  LOCATIONS_REQUESTED,
  LOCATIONS_FAILED
} from "store/actionTypes";

const INITIAL_STATE = {
  list: [],
  error: null,
  isFetchingData: false,
  locations: []
};

function weather(state = INITIAL_STATE, action) {
  switch (action.type) {
    case WEATHER_RECEIVED:
      return {
        ...state,
        list: action.payload,
        isFetchingData: false
      };
    case WEATHER_REQUESTED:
      return {
        ...state,
        isFetchingData: true
      };
    case WEATHER_FAILED:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };

    case LOCATIONS_RECEIVED:
      return {
        ...state,
        locations: action.payload,
        isFetchingData: false
      };
    case LOCATIONS_REQUESTED:
      return {
        ...state,
        isFetchingData: true
      };
    case LOCATIONS_FAILED:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default weather;
