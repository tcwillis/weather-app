import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import weather from "./reducers/weatherReducer";
import locations from "./reducers/locationsReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    weather,
    locations
  });
