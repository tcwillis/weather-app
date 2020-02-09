import React from "react";
import PropTypes from "prop-types";
import StyledTodayWeather, {
  City,
  TodayDate,
  State,
  ContentWrapper,
  Conditions,
  WeatherImage,
  Temperature,
  CurrentTemp,
  Units
} from "./TodayWeather.styles";

const ForecastList = ({
  title,
  currentTemp,
  image,
  state,
  date,
  day,
  humidity,
  windSpeed,
  windDirection,
  degreesUnits,
  speedUnits
}) => {
  return (
    <StyledTodayWeather>
      <City>{title}</City>
      <TodayDate>
        {day}, {date}
      </TodayDate>
      <State>{state}</State>
      <ContentWrapper>
        <Temperature>
          <WeatherImage src={image} alt={`${state} logo`} />
          <CurrentTemp>{currentTemp}</CurrentTemp>
          <Units>{degreesUnits}</Units>
        </Temperature>
        <Conditions>
          <div>Humidity: {humidity}%</div>
          <div>
            Wind: {windSpeed} {speedUnits} {windDirection}
          </div>
        </Conditions>
      </ContentWrapper>
    </StyledTodayWeather>
  );
};

ForecastList.defaultProps = {
  data: []
};

ForecastList.propTypes = {
  data: PropTypes.array
};

export default ForecastList;
