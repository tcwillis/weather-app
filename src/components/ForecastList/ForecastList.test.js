import React from "react";
import { shallow } from "enzyme";
import ForecastList from "./ForecastList";

describe("ForecastList", () => {
  it("renders without crashing", () => {
    shallow(<ForecastList />);
  });

  it("should render a list of weather data", () => {
    const wrapper = shallow(
      <ForecastList
        data={[
          {
            title: "Melbourne",
            code: "lc",
            state: "Light Cloud",
            windDirection: "E",
            windSpeed: 9,
            image: "https://www.metaweather.com/static/img/weather/lc.svg",
            precipitation: "prce",
            humidity: 58,
            minTemp: 66,
            maxTemp: 75,
            currentTemp: 77,
            day: "Sunday",
            date: "February 9th",
            speedUnits: "mph",
            degreesUnits: "°F"
          },
          {
            title: "Melbourne",
            code: "s",
            state: "Showers",
            windDirection: "ESE",
            windSpeed: 8,
            image: "https://www.metaweather.com/static/img/weather/s.svg",
            precipitation: "prce",
            humidity: 66,
            minTemp: 68,
            maxTemp: 77,
            currentTemp: 77,
            day: "Monday",
            date: "February 10th",
            speedUnits: "mph",
            degreesUnits: "°F"
          }
        ]}
      />
    );
    expect(wrapper.find("ForecastTile").length).toEqual(2);
  });
});
