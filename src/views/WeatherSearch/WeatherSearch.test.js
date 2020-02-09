import React from "react";
import configureMockStore from "redux-mock-store";
import middlewares from "store/middleware";
import WeatherSearch from "./WeatherSearch";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import * as redux from "react-redux";

describe("<WeatherSearch />", () => {
  let useSelectorSpy, dispatchSpy;

  const mockStore = configureMockStore(middlewares);
  const defaultStore = mockStore({
    weather: { list: [] }
  });

  beforeEach(() => {
    useSelectorSpy = jest.spyOn(redux, "useSelector");
    dispatchSpy = jest.spyOn(redux, "useDispatch");
    useSelectorSpy.mockReturnValue({});
    dispatchSpy.mockReturnValue({});
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render without crashing", () => {
    shallow(
      <Provider store={defaultStore}>
        <WeatherSearch />
      </Provider>
    );
  });

  it("should display a UnitsToggle component", () => {
    const wrapper = shallow(
      <Provider store={defaultStore}>
        <WeatherSearch />
      </Provider>
    )
      .dive()
      .dive();
    expect(wrapper.find("UnitsToggle").length).toEqual(1);
  });

  it("should display a LocationsSearch component", () => {
    const wrapper = shallow(
      <Provider store={defaultStore}>
        <WeatherSearch />
      </Provider>
    )
      .dive()
      .dive();
    expect(wrapper.find("LocationsSearch").length).toEqual(1);
  });

  it("should display a LinearProgress component if data is being fetched", () => {
    useSelectorSpy.mockReturnValue({ isFetchingData: true });
    const wrapper = shallow(
      <Provider store={defaultStore}>
        <WeatherSearch />
      </Provider>
    )
      .dive()
      .dive();
    expect(wrapper.find("LocationsSearch").length).toEqual(1);
  });

  it("should display a TodayWeather component if weather data is available", () => {
    useSelectorSpy.mockReturnValue({
      list: [{ title: "city1", id: 123 }],
      isFetchingData: false
    });
    const wrapper = shallow(
      <Provider store={defaultStore}>
        <WeatherSearch />
      </Provider>
    )
      .dive()
      .dive();
    expect(wrapper.find("TodayWeather").length).toEqual(1);
  });

  it("should display a ForecastList component if weather data is available", () => {
    useSelectorSpy.mockReturnValue({
      list: [
        { title: "city1", id: 123 },
        { title: "city2", id: 456 }
      ],
      isFetchingData: false
    });
    const wrapper = shallow(
      <Provider store={defaultStore}>
        <WeatherSearch />
      </Provider>
    )
      .dive()
      .dive();
    expect(wrapper.find("ForecastList").length).toEqual(1);
  });
});
