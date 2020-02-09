import React from "react";
import PropTypes from "prop-types";
import StyledForecastList, {
  ForecastTile,
  ContentWrapper,
  DayTitle,
  WeatherImage,
  Temperature,
  MinTemp,
  MaxTemp
} from "./ForecastList.styles";

const ForecastList = ({ data }) => {
  return (
    <StyledForecastList>
      {data &&
        data.map((day, index) => (
          <ForecastTile width={1 / 6} key={index}>
            <ContentWrapper>
              <DayTitle>{day.day}</DayTitle>
              <WeatherImage src={day.image} alt={`${day.state} logo`} />
              <Temperature>
                <MaxTemp>
                  {day.maxTemp}
                  {"\u00b0"}
                </MaxTemp>
                <MinTemp>
                  {day.minTemp}
                  {"\u00b0"}
                </MinTemp>
              </Temperature>
            </ContentWrapper>
          </ForecastTile>
        ))}
    </StyledForecastList>
  );
};

ForecastList.defaultProps = {
  data: []
};

ForecastList.propTypes = {
  data: PropTypes.array
};

export default ForecastList;
