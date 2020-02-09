import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  MuiThemeProvider,
  StylesProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const ThemeProvider = ({ children }) => {
  const themeValues = createMuiTheme();
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <StyledThemeProvider theme={themeValues}>
        <MuiThemeProvider theme={themeValues}>{children}</MuiThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node
};

export default ThemeProvider;
