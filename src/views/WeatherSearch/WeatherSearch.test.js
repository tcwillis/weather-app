import React from "react";
import WeatherSearch from "./WeatherSearch";
import { shallow } from "enzyme";

describe("<Home />", () => {
  it("should render without crashing", () => {
    shallow(<WeatherSearch />);
  });

  it("should display a message", () => {
    const wrapper = shallow(<WeatherSearch />);
    expect(wrapper.find("h1").text()).toEqual("Home page");
  });
});
