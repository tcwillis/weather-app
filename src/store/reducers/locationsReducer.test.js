import reducer from "./locationsReducer";
import {
  LOCATIONS_CITY_RECEIVED,
  LOCATIONS_CITY_FAILED,
  LOCATIONS_CITY_REQUESTED,
  SET_LOCATION
} from "../actionTypes";

import mockResponse from "../../../mocks/locationsMock.json";
import { transformLocations } from "utils/transformLocations";

describe("Locations reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      error: null,
      isFetchingData: false,
      locations: [],
      selectedLocation: null
    });
  });

  it("should handle LOCATIONS_CITY_RECEIVED", () => {
    expect(
      reducer(undefined, {
        type: LOCATIONS_CITY_RECEIVED,
        payload: mockResponse
      })
    ).toEqual({
      locations: transformLocations(mockResponse, "metric"),
      error: null,
      isFetchingData: false,
      selectedLocation: null
    });
  });

  it("should handle LOCATIONS_CITY_FAILED", () => {
    expect(
      reducer(undefined, {
        type: LOCATIONS_CITY_FAILED,
        payload: "Failed to fetch"
      })
    ).toEqual({
      isFetchingData: false,
      error: "Failed to fetch",

      locations: [],
      selectedLocation: null
    });
  });
  it("should handle LOCATIONS_CITY_REQUESTED", () => {
    expect(
      reducer(undefined, {
        type: LOCATIONS_CITY_REQUESTED
      })
    ).toEqual({
      isFetchingData: true,
      error: null,
      locations: [],
      selectedLocation: null
    });
  });

  it("should handle SET_LOCATION", () => {
    expect(
      reducer(undefined, {
        type: SET_LOCATION,
        payload: { id: 123, title: "City" }
      })
    ).toEqual({
      error: null,
      isFetchingData: false,
      locations: [],
      selectedLocation: { id: 123, title: "City" }
    });
  });
});
