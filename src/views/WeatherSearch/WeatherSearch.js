import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinearProgress, Box } from "@material-ui/core";
import PageLayout from "components/PageLayout";
import { fetchWeather } from "store/actions/weatherActions";
import UnitsToggle from "components/UnitsToggle";
import LocationsSearch from "components/LocationsSearch";
import TodayWeather from "components/TodayWeather";
import ForecastList from "components/ForecastList";

const WeatherSearch = () => {
  const { list, isFetchingData } = useSelector(({ weather }) => weather);
  const { selectedLocation } = useSelector(({ locations }) => locations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedLocation && selectedLocation.id) {
      dispatch(fetchWeather(selectedLocation.id));
    }
  }, [selectedLocation, dispatch]);

  return (
    <PageLayout className="weather-forceast">
      <UnitsToggle />
      <LocationsSearch />
      {list && list.length > 0 && !isFetchingData && (
        <>
          <TodayWeather {...list[0]} {...selectedLocation} />
          <ForecastList data={list} />
        </>
      )}
      {isFetchingData && (
        <Box py={4}>
          <LinearProgress variant="query" />
        </Box>
      )}
    </PageLayout>
  );
};

export default WeatherSearch;
