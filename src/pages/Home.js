import React, { useEffect } from "react";
// REDUX
// A hook to access the redux `dispatch` function.
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
