import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PageLayout from "components/PageLayout";
import { Button, TextField } from "@material-ui/core";
import {
  fetchWeatherIfNeeded,
  getLocations
} from "store/actions/weatherActions";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Home = () => {
  const { list, isFetchingData, locations } = useSelector(
    ({ weather }) => weather
  );
  const dispatch = useDispatch();

  return (
    <PageLayout className="home">
      <Autocomplete
        id="combo-box-demo"
        options={locations}
        getOptionLabel={option => option.title}
        freeSolo
        renderInput={params => (
          <TextField
            {...params}
            label="City"
            variant="outlined"
            fullWidth
            InputProps={{ ...params.InputProps, type: "search" }}
            onChange={evt => dispatch(getLocations(evt.currentTarget.value))}
          />
        )}
      />
      {isFetchingData ? (
        <p>Fetching data...</p>
      ) : (
        <p>{JSON.stringify(locations)}</p>
      )}

      <Button
        color={"primary"}
        variant={"contained"}
        onClick={() => dispatch(fetchWeatherIfNeeded())}
        mt={5}
      >
        Fetch weather
      </Button>
      {isFetchingData ? <p>Fetching data...</p> : <p>{JSON.stringify(list)}</p>}
    </PageLayout>
  );
};

export default Home;
