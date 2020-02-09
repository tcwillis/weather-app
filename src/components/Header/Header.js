import React from "react";
import { AppBar, Toolbar, Container, Box, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <AppBar position={"fixed"} color="default" data-ref={"header"}>
        <Container>
          <Box py={2}>
            <Typography variant={"h5"}>Weather App</Typography>
          </Box>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
