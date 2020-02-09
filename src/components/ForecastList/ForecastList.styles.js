import React from "react";
import styled, { css } from "styled-components";
import { Grid, Typography, Box } from "@material-ui/core";

export default styled(({ ...rest }) => (
  <Grid justify={"space-between"} container {...rest} />
))`
  ${({ theme: { spacing, breakpoints } }) =>
    css`
      margin: ${spacing(2)}px 0;
      flex-wrap: nowrap;

      ${breakpoints.up("md")} {
        padding: 0 ${spacing(4)}px;
      }

      ${breakpoints.up("lg")} {
        padding: 0 ${spacing(8)}px;
      }
    `};
`;

export const ForecastTile = styled(({ ...rest }) => <Box {...rest} />)`
  ${({ theme: { spacing, breakpoints } }) =>
    css`
      padding: 0 ${spacing(2)}px;
      border: solid 1px #efefef;

      ${breakpoints.up("md")} {
        padding: 0 ${spacing(4)}px;
      }
    `};
`;

ForecastTile.displayName = "ForecastTile";

export const ContentWrapper = styled(({ ...rest }) => (
  <Grid container direction={"column"} {...rest} />
))`
  margin: ${({ theme }) => `${theme.spacing(3)}px`} 0;
`;

export const DayTitle = styled(({ ...rest }) => (
  <Typography noWrap {...rest} />
))`
  font-weight: bold;
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}px`};
  max-width: 100%;
  text-align: center;
}
`;

export const WeatherImage = styled("img")`
  display: block;
  max-width: 75%;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}px`};
`;

export const Temperature = styled(({ ...rest }) => <Grid item {...rest} />)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MinTemp = styled("span")`
  color: grey;
`;

export const MaxTemp = styled("span")`
  font-weight: bold;
`;
