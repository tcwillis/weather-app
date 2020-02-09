import React from "react";
import { shallow } from "enzyme";
import LocationsSearch from "./LocationsSearch";
import { Provider } from "react-redux";
import middlewares from "store/middleware";
import configureMockStore from "redux-mock-store";
import * as redux from "react-redux";

describe("LocationsSearch", () => {
  let useSelectorSpy, dispatchSpy, dispatchMock;

  const mockStore = configureMockStore(middlewares);
  const defaultStore = mockStore({
    weather: { list: [] }
  });

  beforeEach(() => {
    useSelectorSpy = jest.spyOn(redux, "useSelector");
    dispatchSpy = jest.spyOn(redux, "useDispatch");
    dispatchMock = jest.fn();
    useSelectorSpy.mockReturnValue({});
    dispatchSpy.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders without crashing", () => {
    shallow(
      <Provider store={defaultStore}>
        <LocationsSearch />
      </Provider>
    );
  });

  it("should render an Autocomplete component", () => {
    const wrapper = shallow(
      <Provider store={defaultStore}>
        <LocationsSearch />
      </Provider>
    )
      .dive()
      .dive();
    expect(wrapper.find("WithStyles(ForwardRef(Autocomplete))").length).toEqual(
      1
    );
  });

  it("should dispatch setLocation on location change", () => {
    const wrapper = shallow(
      <Provider store={defaultStore}>
        <LocationsSearch />
      </Provider>
    )
      .dive()
      .dive();
    wrapper
      .find("WithStyles(ForwardRef(Autocomplete))")
      .props()
      .onChange();

    expect(dispatchMock).toHaveBeenCalled();
  });
});
