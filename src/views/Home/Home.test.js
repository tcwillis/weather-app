import React from "react";
import Home from "./Home";
import { shallow } from "enzyme";

describe("<Home />", () => {
  it("should render without crashing", () => {
    shallow(<Home />);
  });

  it("should display a message", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("h1").text()).toEqual("Home page");
  });
});
