import Home from "views/Home";
import NotFound from "views/NotFound";

export default [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "*",
    exact: true,
    component: NotFound
  }
];
