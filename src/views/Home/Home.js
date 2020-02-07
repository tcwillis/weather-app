import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "components/Layout";
import { Button } from "@material-ui/core";
import { fetchWeatherIfNeeded } from "store/actions/weatherActions";

const Home = () => {
  const { list, isFetchingData } = useSelector(({ weather }) => weather);
  const dispatch = useDispatch();

  return (
    <Layout className="home">
      <h1>Home page</h1>

      <Button
        color={"primary"}
        variant={"contained"}
        onClick={() => dispatch(fetchWeatherIfNeeded())}
      >
        Fetch weather
      </Button>
      {isFetchingData ? <p>Fetching data...</p> : <p>{JSON.stringify(list)}</p>}
    </Layout>
  );
};

export default Home;
