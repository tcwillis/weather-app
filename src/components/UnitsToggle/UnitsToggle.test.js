import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import middlewares from "store/middleware";
import configureMockStore from "redux-mock-store";
import * as redux from "react-redux";
import UnitsToggle from "./UnitsToggle";

describe("UnitsToggle", () => {
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
        <UnitsToggle />
      </Provider>
    );
  });

  it("should dispatch setLocation on location change", () => {
    const wrapper = shallow(
      <Provider store={defaultStore}>
        <UnitsToggle />
      </Provider>
    )
      .dive()
      .dive();
    wrapper
      .find('[aria-label="units"]')
      .props()
      .onChange({ target: { value: "imperial" } });

    expect(dispatchMock).toHaveBeenCalled();
  });
});
