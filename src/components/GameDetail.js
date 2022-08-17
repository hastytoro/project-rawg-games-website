import React from "react";
// Styling and animation:
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useSelector } from "react-redux";

const GameDetail = () => {
  const { screen, game } = useSelector((state) => state.detail);
  return (
    // general card modal (popup)
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>

          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>

        <div className="media">
          <img src={game.background_image} alt="" />
        </div>

        <div className="description">
          <p>{game.description}</p>
        </div>

        <div className="gallery">
          {screen.results.map((item) => (
            <img src={item.image} key={item.id} alt="" />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll; /* we have fixed position */
  background: rgba(0, 0, 0, 0.5);
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  position: absolute;
  left: 10%;
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: white;
  color: black;
  img {
    width: 100%;
    border: none;
    border-radius: 2px;
  }
`;

export default GameDetail;
