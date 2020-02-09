import configureMockStore from "redux-mock-store";
import middlewares from "../middleware";
import { fetchLocationByCity, fetchLocationByLatLon } from "./locationsActions";
import {
  LOCATIONS_CITY_REQUESTED,
  LOCATIONS_LATLON_REQUESTED
} from "../actionTypes";

const mockStore = configureMockStore(middlewares);

describe("Locations actions", () => {
  it("should dispatch a REQUEST for locations by city if there is no fetch in progress and a query is passed", () => {
    const expectedActions = [{ type: LOCATIONS_CITY_REQUESTED }];
    const store = mockStore({ locations: { isFetchingData: false } });
    store.dispatch(fetchLocationByCity("City"));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch a REQUEST for locations by latlon if there is no fetch in progress and a lat an lon are passed", () => {
    const expectedActions = [{ type: LOCATIONS_LATLON_REQUESTED }];
    const store = mockStore({ locations: { isFetchingData: false } });
    store.dispatch(fetchLocationByLatLon("123", "456"));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should not dispatch a REQUEST for locations by city if city ID is not passed", () => {
    const store = mockStore({ locations: { isFetchingData: false } });
    store.dispatch(fetchLocationByCity());

    expect(store.getActions()).toEqual([]);
  });

  it("should not dispatch a REQUEST for locations by lat lon if lat and lon are not passed", () => {
    const store = mockStore({ locations: { isFetchingData: false } });
    store.dispatch(fetchLocationByLatLon());

    expect(store.getActions()).toEqual([]);
  });
});
