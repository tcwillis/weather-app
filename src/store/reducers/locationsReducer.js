import {
  LOCATIONS_CITY_REQUESTED,
  LOCATIONS_CITY_RECEIVED,
  LOCATIONS_CITY_FAILED,
  LOCATIONS_LATLON_REQUESTED,
  LOCATIONS_LATLON_RECEIVED,
  LOCATIONS_LATLON_FAILED,
  SET_LOCATION
} from "store/actionTypes";
import {
  transformLocations,
  transformGeoLocations
} from "utils/transformLocations";

const INITIAL_STATE = {
  error: null,
  isFetchingData: false,
  locations: [],
  selectedLocation: null
};

function locations(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOCATIONS_CITY_REQUESTED:
      return {
        ...state,
        isFetchingData: true
      };
    case LOCATIONS_CITY_RECEIVED:
      return {
        ...state,
        locations: transformLocations(action.payload),
        isFetchingData: false
      };

    case LOCATIONS_CITY_FAILED:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };

    case LOCATIONS_LATLON_REQUESTED:
      return {
        ...state,
        isFetchingData: true
      };
    case LOCATIONS_LATLON_RECEIVED:
      return {
        ...state,
        selectedLocation: transformGeoLocations(action.payload),
        isFetchingData: false
      };

    case LOCATIONS_LATLON_FAILED:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };

    case SET_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload
      };

    default:
      return state;
  }
}

export default locations;
