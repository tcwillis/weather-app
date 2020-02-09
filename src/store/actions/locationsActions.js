import { LOCATIONS_CITY, LOCATIONS_LATLON, SET_LOCATION } from "../actionTypes";
import { apiAction } from "./apiActions";

export const getLocationsByCity = city =>
  apiAction({
    type: LOCATIONS_CITY,
    endpoint: "/locations/city",
    params: {
      city
    }
  });

export const getLocationsByLatLon = (latt, long) =>
  apiAction({
    type: LOCATIONS_LATLON,
    endpoint: "/locations/latlon",
    params: {
      latt,
      long
    }
  });

export const setLocation = location => {
  return dispatch => {
    dispatch({
      type: SET_LOCATION,
      payload: location
    });
  };
};
