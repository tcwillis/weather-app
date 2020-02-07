import Config from "../../app/config";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { API_ACTION } from "../actionTypes";

export const history = createBrowserHistory();

export const apiMiddleware = store => next => action => {
  if (action[API_ACTION]) {
    const actionInfo = action[API_ACTION];
    const fetchOptions = {
      method: actionInfo.verb || "GET",
      headers: actionInfo.headers,
      body: actionInfo.payload || null
    };

    next({
      type: actionInfo.type + "_REQUESTED"
    });

    return fetch(Config.baseApiUrl + actionInfo.endpoint, fetchOptions)
      .then(response => response.json())
      .then(data => {
        next({
          type: actionInfo.type + "_RECEIVED",
          payload: data
        });
      })
      .catch(error =>
        next({
          type: actionInfo.type + "_FAILED",
          payload: error
        })
      );
  } else {
    return next(action);
  }
};

export default [thunk, routerMiddleware(history), apiMiddleware];
