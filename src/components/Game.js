import React from "react";
// Styling and animation:
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ id, name, released, image }) => {
  return (
    <GameWrapper>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </GameWrapper>
  );
};

const GameWrapper = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.5rem;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    /* height: 40vh; */
    height: 35vh;
    border: none;
    border-radius: 2px;
    object-fit: cover;
  }
`;

export default Game;
