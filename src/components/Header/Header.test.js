import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("should render a header", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("[data-ref='header']").length).toEqual(1);
  });
});
