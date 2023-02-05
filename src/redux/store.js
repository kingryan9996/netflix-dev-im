// import { createReducer } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
