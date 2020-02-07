import React from "react";
import NotFound from "./index";
import { shallow } from "enzyme";

describe("<NotFound />", () => {
  it("should render without crashing", () => {
    shallow(<NotFound />);
  });

  it("should display a message", () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find("h1").text()).toEqual("Page not found");
  });
});
