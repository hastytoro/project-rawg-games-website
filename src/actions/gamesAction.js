// We fetch with axios for our action type 'FETCH_GAMES' and payload.
import axios from "axios";
import { popularGamesURL, upcomingGamesURL, releasedGamesURL } from "../api";

// Thunk action creators and thunk functions
// https://redux.js.org/usage/writing-logic-thunks
// A "thunk" is a programming term "a piece of code that does delayed work"
// Rather than execute some logic now, we can write a function body or code,
// that can be used to perform the work later.

// For Redux, "thunks" are a pattern of writing functions with logic inside,
// that can interact with a redux store's dispatch and getState methods.
// Thunks requires `redux-thunk` middleware added to the store configuration.
// Thunks are the standard approach for writing async logic in Redux apps.
// They commonly used for data fetching but can contain both sync/async logic.

// A thunk function is a function that accepts two arguments:
// the Redux store `dispatch` method, and the Redux store `getState` method.
// Thunk functions are not directly called by React application code.
// Instead, they are passed to `store.dispatch()`:

// The same way Redux normally uses action creators to generate action objects
// for dispatching instead of writing action objects by hand, we normally use a
// thunk action creator "below" to generate the thunk functions to dispatched.

// A thunk action creator is a function that may have arguments, and returns
// a function value, a thunk function. It closes over any arguments passed to
// the action creator, so they can be used in the logic:
export function loadGames() {
  return async function loadGamesThunk(dispatch) {
    const popular = await axios.get(popularGamesURL());
    const upcoming = await axios.get(upcomingGamesURL());
    const released = await axios.get(releasedGamesURL());
    dispatch({
      type: "FETCH_GAMES",
      payload: {
        popular: popular.data.results,
        released: released.data.results,
        upcoming: upcoming.data.results,
      },
    });
  };
}
