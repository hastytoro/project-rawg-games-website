import React from "react";
// Styling and animation:
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useSelector } from "react-redux";

// This hook allows you to manipulate the browser url "path".
import { useNavigate } from "react-router-dom";

import { resizeImage } from "../utils";

const GameDetail = ({ pathId }) => {
  // Exit handling logic back to '/' home page path.
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    if (e.target.classList.contains("wrapper")) {
      /* switches the body's overflow back to defaults */
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  // What is needed for components sharing the `layoutId`.
  // Ensure that identifier is the same type.
  console.log(" GameDetail: pathId", typeof pathId, pathId);

  // Get redux data:
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        // general card modal (popup)
        <CardWrapper onClick={exitDetailHandler} className="wrapper">
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>

              <Info className="info">
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>

            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={resizeImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>

            <Description>
              <p>{game.description_raw}</p>
            </Description>

            <div className="gallery">
              {screen.results.map((item) => (
                <img
                  src={resizeImage(item.image, 1280)}
                  key={item.id}
                  alt={item.image}
                />
              ))}
            </div>
          </Detail>
        </CardWrapper>
      )}
    </>
  );
};

const CardWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  min-height: 100vh;
  overflow-y: scroll; /* we have fixed position */
  background: rgba(0, 0, 0, 0.5);
  /* backdrop-filter: blur(2px); */
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
  padding: 2rem 5rem;
  background: white;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    /* temp property */
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    /* height: 60vh; */
    /* object-fit: cover; */
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
