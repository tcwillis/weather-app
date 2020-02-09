import WeatherSearch from "views/WeatherSearch";
import NotFound from "views/NotFound";

export default [
  {
    path: "/",
    exact: true,
    component: WeatherSearch
  },
  {
    path: "*",
    exact: true,
    component: NotFound
  }
];
