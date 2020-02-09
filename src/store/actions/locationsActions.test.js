import configureMockStore from "redux-mock-store";
import middlewares from "../middleware";
import { getLocationsByCity } from "./locationsActions";
import { LOCATIONS_CITY_REQUESTED } from "../actionTypes";

const mockStore = configureMockStore(middlewares);

describe("Locations actions", () => {
  it("should dispatch a REQUEST for locations by city if there is no fetch in progress", () => {
    const expectedActions = [{ type: LOCATIONS_CITY_REQUESTED }];
    const store = mockStore({ locations: [] });
    store.dispatch(getLocationsByCity());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
