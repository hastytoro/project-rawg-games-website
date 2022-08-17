import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";
// Turns an object whose values are different reducer functions, into a single
// reducer function. It calls every child reducer, gathers results into a single
// state object, whose keys correspond to keys passed to reducer functions.
const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
