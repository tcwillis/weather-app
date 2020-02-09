import configureMockStore from "redux-mock-store";
import middlewares from "../middleware";
import { fetchWeather } from "./weatherActions";
import { WEATHER_REQUESTED } from "../actionTypes";

const mockStore = configureMockStore(middlewares);

describe("Weather actions", () => {
  it("should dispatch a REQUEST if no fetch is in progress and the city ID is passed", () => {
    const expectedActions = [{ type: WEATHER_REQUESTED }];
    const store = mockStore({ weather: { list: [], isFetchingData: false } });
    store.dispatch(fetchWeather("123456"));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should not dispatch a REQUEST if a fetch is in progress", () => {
    const store = mockStore({
      weather: { isFetchingData: true, list: [{ id: 1 }] }
    });
    store.dispatch(fetchWeather("123456"));

    expect(store.getActions()).toEqual([]);
  });

  it("should not dispatch a REQUEST if weaher ID is not passed", () => {
    const store = mockStore({
      weather: { isFetchingData: true, list: [{ id: 1 }] }
    });
    store.dispatch(fetchWeather());

    expect(store.getActions()).toEqual([]);
  });
});
