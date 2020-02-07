import configureMockStore from "redux-mock-store";
import middlewares from "../middleware";
import { fetchWeatherIfNeeded } from "./weatherActions";
import { WEATHER_REQUESTED } from "../actionTypes";

const mockStore = configureMockStore(middlewares);

describe("Weather actions", () => {
  it("should dispatch a REQUEST if there is no weather data in the store", () => {
    const expectedActions = [{ type: WEATHER_REQUESTED }];
    const store = mockStore({ weather: { list: [] } });
    store.dispatch(fetchWeatherIfNeeded());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should not dispatch a REQUEST if a fetch is in progress", () => {
    const store = mockStore({
      weather: { isFetchingData: true, list: [{ id: 1 }] }
    });
    store.dispatch(fetchWeatherIfNeeded());

    expect(store.getActions()).toEqual([]);
  });

  it("should not dispatch a REQUEST if weather data is in the store", () => {
    const store = mockStore({
      weather: { isFetchingData: false, list: [{ id: 1 }] }
    });
    store.dispatch(fetchWeatherIfNeeded());

    expect(store.getActions()).toEqual([]);
  });
});
