import React from "react";
import { Toolbar, AppBar } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar
      position={"fixed"}
      style={{ bottom: 0, top: "auto" }}
      color={"default"}
      data-ref={"footer"}
    >
      <Toolbar>
        <small>Copyright &copy; 2019 Tim Willis</small>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
