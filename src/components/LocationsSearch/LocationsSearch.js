import React, { useEffect } from "react";
import { TextField, CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  getLocationsByCity,
  getLocationsByLatLon,
  setLocation
} from "store/actions/locationsActions";
import { usePosition } from "hooks/usePosition";

const LocationsSearch = () => {
  const { isFetchingData, locations } = useSelector(
    ({ locations }) => locations
  );
  const dispatch = useDispatch();
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(getLocationsByLatLon(latitude, longitude));
    }
  }, [latitude, longitude, dispatch]);

  const onLocationChange = location => {
    dispatch(setLocation(location));
  };

  return (
    <>
      <Autocomplete
        options={locations}
        getOptionLabel={option => option.title || ""}
        freeSolo
        onChange={(evt, value) => onLocationChange(value)}
        renderInput={params => (
          <TextField
            {...params}
            label="Enter a city name"
            variant="outlined"
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isFetchingData ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
              "aria-label": "find weather forcecast by city location"
            }}
            onChange={evt =>
              dispatch(getLocationsByCity(evt.currentTarget.value))
            }
          />
        )}
      />
    </>
  );
};

export default LocationsSearch;
