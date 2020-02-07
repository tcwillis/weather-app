import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducers";
import middleware from "./middleware";

export const history = createBrowserHistory();
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composedEnhancers
  );

  return store;
}
