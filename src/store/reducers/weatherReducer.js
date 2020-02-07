import {
  WEATHER_RECEIVED,
  WEATHER_REQUESTED,
  WEATHER_FAILED
} from "store/actionTypes";

const INITIAL_STATE = {
  list: [],
  error: null,
  isFetchingData: false
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

    default:
      return state;
  }
}

export default weather;
