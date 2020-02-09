import React from "react";
import { Radio, FormControlLabel } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectUnits } from "store/actions/weatherActions";

import StyledUnitsToggle from "./UnitsToggle.styles";

const UnitsToggle = ({
  title,
  currentTemp,
  image,
  state,
  date,
  day,
  humidity,
  windSpeed,
  windDirection
}) => {
  const { units } = useSelector(({ weather }) => weather);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(selectUnits(event.target.value));
  };

  return (
    <StyledUnitsToggle
      aria-label="units"
      name="units"
      value={units}
      onChange={handleChange}
    >
      <FormControlLabel value="metric" control={<Radio />} label="Celsius" />
      <FormControlLabel
        value="imperial"
        control={<Radio />}
        label="Fahrenheit"
      />
    </StyledUnitsToggle>
  );
};

export default UnitsToggle;
