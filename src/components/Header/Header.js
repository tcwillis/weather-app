import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position={"fixed"} color="default" data-ref={"header"}>
        <Toolbar p={2}>
          <Link to="/">
            <img width="130" alt="logo" src={logo} />
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
