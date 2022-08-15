import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// REDUX SETUP
import rootReducer from "./reducers/index";
// Apply middleware is able to apply logic/functionality between each dispatch.
// And compose allows as to apply multiple arguments as one.
// https://stackoverflow.com/questions/69502147/changing-from-redux-to-redux-toolkit
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
// CONFIGURE STORE
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
