import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import { Container } from "@material-ui/core";

const PageLayout = ({ children }) => {
  return (
    <div className={"main"}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default PageLayout;