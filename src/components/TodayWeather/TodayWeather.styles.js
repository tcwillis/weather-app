import React from "react";
import styled, { css } from "styled-components";
import { Grid, Typography, Box } from "@material-ui/core";

export default styled(({ ...rest }) => (
  <Grid direction={"column"} container {...rest} />
))`
  ${({ theme: { spacing, breakpoints } }) =>
    css`
      margin: ${spacing(5)}px 0 ${spacing(3)}px;
      flex-wrap: nowrap;

      ${breakpoints.up("md")} {
        padding: 0 ${spacing(4)}px;
      }

      ${breakpoints.up("lg")} {
        padding: 0 ${spacing(8)}px;
      }
    `};
`;

export const City = styled(({ ...rest }) => (
  <Typography variant={"h3"} {...rest} />
))`
  ${({ theme: { spacing } }) =>
    css`
      margin-bottom: ${spacing(1)}px;
    `};
`;

City.displayName = "City";

export const TodayDate = styled(({ ...rest }) => <Box {...rest} />)`
  ${({ theme: { spacing } }) =>
    css`
      margin-bottom: ${spacing(0)}px;
    `};
`;

TodayDate.displayName = "Date";

export const State = styled(({ ...rest }) => <Box {...rest} />)`
  ${({ theme: { spacing } }) =>
    css`
      margin-bottom: ${spacing(1)}px;
    `};
`;

State.displayName = "State";

export const ContentWrapper = styled(({ ...rest }) => (
  <Grid container direction={"row"} {...rest} />
))`
  margin: ${({ theme }) => `${theme.spacing(3)}px`} 0;
  > * {
    flex-basis: 50%;
  }
`;

export const Temperature = styled(({ ...rest }) => <Grid item {...rest} />)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}px`};
`;

export const WeatherImage = styled("img")`
  max-width: 100px;
  margin-right: ${({ theme }) => `${theme.spacing(2)}px`};
`;

export const CurrentTemp = styled(({ ...rest }) => (
  <Typography variant={"h2"} {...rest} />
))`
  line-height: 1;
`;

export const Units = styled(({ ...rest }) => (
  <Typography variant={"h5"} {...rest} />
))`
  margin-left: ${({ theme }) => `${theme.spacing(1)}px`};
  color: grey;
`;

export const Conditions = styled(({ ...rest }) => <Box {...rest} />)`
  ${({ theme: { spacing, breakpoints } }) =>
    css`
      padding: 0 ${spacing(2)}px;
      color: grey;

      ${breakpoints.up("md")} {
        padding: 0 ${spacing(4)}px;
      }
    `};
`;

Conditions.displayName = "Conditions";
