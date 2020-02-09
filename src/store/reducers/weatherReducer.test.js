import reducer from "./weatherReducer";
import {
  WEATHER_RECEIVED,
  WEATHER_FAILED,
  WEATHER_REQUESTED,
  SELECT_UNITS
} from "../actionTypes";

import mockResponse from "../../../mocks/weatherMock.json";
import { transformWeather } from "utils/transformWeather";

describe("Weather reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      list: [],
      error: null,
      isFetchingData: false,
      units: "metric"
    });
  });

  it("should handle WEATHER_RECEIVED", () => {
    expect(
      reducer(undefined, {
        type: WEATHER_RECEIVED,
        payload: mockResponse
      })
    ).toEqual({
      list: transformWeather(mockResponse, "metric"),
      error: null,
      isFetchingData: false,
      units: "metric"
    });
  });

  it("should handle WEATHER_FAILED", () => {
    expect(
      reducer(undefined, {
        type: WEATHER_FAILED,
        payload: "Failed to fetch"
      })
    ).toEqual({
      isFetchingData: false,
      error: "Failed to fetch",
      list: [],
      units: "metric"
    });
  });
  it("should handle WEATHER_REQUESTED", () => {
    expect(
      reducer(undefined, {
        type: WEATHER_REQUESTED
      })
    ).toEqual({
      isFetchingData: true,
      error: null,
      list: [],
      units: "metric"
    });
  });

  it("should handle SELECT_UNITS", () => {
    expect(
      reducer(undefined, {
        type: SELECT_UNITS,
        payload: "imperial"
      })
    ).toEqual({
      list: [],
      error: null,
      isFetchingData: false,
      units: "imperial"
    });
  });
});
