import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";

function App() {
  const dispatch = useDispatch(); // A hook to access redux dispatch function.
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <div>First Baby Steps</div>
    </div>
  );
}

export default App;
