import React from "react";
// Styling and animation:
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

import { Link } from "react-router-dom";

const Game = ({ id, name, released, image }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <GameWrapper onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </GameWrapper>
  );
};

const GameWrapper = styled(motion.div)`
  min-height: 30vh;
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2); */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
  border-radius: 1rem;
  /* border-radius: 0.5rem; */
  cursor: pointer;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    /* height: 40vh; */
    height: 35vh;
    object-fit: cover;
  }
`;

export default Game;
