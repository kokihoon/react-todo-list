import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./modules/reducers";
import rootSaga from "./modules/sagas";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { initialState } from "./modules/reducers/users";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
const isDevelopment = process.env.NODE_ENV === "development";

const devTools = isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const configure = initialState => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleWares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

ReactDOM.render(
  <Provider store={configure(initialState)}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
