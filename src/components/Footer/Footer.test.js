import React from "react";
import { shallow } from "enzyme";
import Footer from "./index";

describe("Footer", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it("should render a footer", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("[data-ref='footer']").length).toEqual(1);
  });
});
