import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "store";
import routes from "./routes";
import ThemeProvider from "context/ThemeProvider";

const store = configureStore();

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
