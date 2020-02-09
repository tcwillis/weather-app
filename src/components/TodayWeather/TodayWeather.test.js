import React from "react";
import { shallow } from "enzyme";
import TodayWeather from "./TodayWeather";

describe("TodayWeather", () => {
  it("renders without crashing", () => {
    shallow(<TodayWeather />);
  });
});
