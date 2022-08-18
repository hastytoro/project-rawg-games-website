import React from "react";
// Styling and animation:
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useSelector } from "react-redux";
// This hook allows you to manipulate the browser url "path".
import { useNavigate } from "react-router-dom";

import { resizeImage } from "../utils"; // converts images from API

//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

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

  // Get star images:
  const getRating = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={starFull} />);
      } else {
        stars.push(<img key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  // Get platform images:
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

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
                {getRating()}
              </div>

              <Info className="info">
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    />
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
    background-color: #3088ff;
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
  img {
    display: inline;
    width: 2rem;
    height: 2rem;
    /* testing */
    margin-right: 0.2rem;
  }
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
    /* width: 2rem; */
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
