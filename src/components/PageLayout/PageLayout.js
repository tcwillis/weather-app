import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import { Container, Box } from "@material-ui/core";

const PageLayout = ({ children }) => {
  return (
    <div className={"main"}>
      <Header />
      <Container>
        <Box my={5}>{children}</Box>
      </Container>
      <Footer />
    </div>
  );
};

export default PageLayout;
