import reducer from "./weatherReducer";
import {
  WEATHER_RECEIVED,
  WEATHER_FAILED,
  WEATHER_REQUESTED
} from "../actionTypes";

describe("Weather reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      list: [],
      error: null,
      isFetchingData: false
    });
  });

  it("should handle WEATHER_RECEIVED", () => {
    const mockResponse = {
      contents: [{ contentId: 123, title: "An article" }]
    };
    expect(
      reducer(undefined, {
        type: WEATHER_RECEIVED,
        payload: mockResponse
      })
    ).toEqual({
      list: mockResponse,
      error: null,
      isFetchingData: false
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
      list: []
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
      list: []
    });
  });
});
