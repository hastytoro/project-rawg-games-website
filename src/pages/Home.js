import React, { useEffect } from "react";
// REDUX
// A hook to access the redux `dispatch` function.
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

// Styling and animation:
// We transition between components and each of them have motion on them.
// All styled components have `motion` included already.
// `AnimatePresence` enables animation of components removed from the tree.
// Below we wrap the component we transition towards being the individual card.
// Important we apply/wrap `AnimatePresence` where we toggle between components.

// Then with `AnimateSharedLayout` we wrap all components we wish to transition.
// The component enables you to perform layout animations:
// Across a set of components that don't otherwise share state.
// Between different components that share a layoutId as they're added/removed.
// For components to transition between each other they must share a identifier.
// In the case below our <Game /> component already has an `game.id` prop.
// Too enable shared layout transitions between different components, open Game,
// and from the main `motion.div` likely, use the same `layoutId`.
// Additionally our <GameDetail /> component makes use of the `pathId` prop.
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation(); // get current location
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch(); // fetch games
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]); // Remember the dependency array for mount-only

  // Get state data back from redux state
  const { popular, released, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {/* if pathId is true we render/run the right of the expression */}
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                />
              ))}
            </Games>
          </div>
        ) : null}

        <h2>New & Upcoming</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>Just Released</h2>
        <Games>
          {released.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>Popular & Trending</h2>
        <Games>
          {popular.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
    /* temp style to see redux state we destructure */
    /* background: #00000012;  */
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
