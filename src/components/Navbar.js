import React, { useState } from "react";
// Styling and animation:
import styled from "styled-components";
import { motion } from "framer-motion";

import logo from "../img/logo.svg";

// REDUX AND ROUTES
import { searchGames } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchGames(textInput));
  };
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <NavWrapper>
      <Logo href="/" onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>RAWG+</h1>
      </Logo>
      <form className="search">
        <input type="text" onChange={inputHandler} value={textInput} />
        <button type="submit" onClick={submitHandler}>
          Search
        </button>
      </form>
    </NavWrapper>
  );
};

// const NavWrapper = styled(motion.nav)`
//   font-family: "Rubik Mono One", sans-serif;
//   position: sticky;
//   top: 0;
//   left: 0;
//   min-height: 10vh;
//   padding: 0rem 5rem;
//   font-size: 1rem;
//   display: flex;
//   align-items: center;
//   background: rgba(255, 255, 255, 0.6);
//   backdrop-filter: blur(8px);
//   a {
//     color: black;
//   }
// `;

const NavWrapper = styled(motion.nav)`
  font-family: "Rubik Mono One", sans-serif;
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    /* border-radius: 10rem 0rem 0rem 10rem; */
    border-radius: 10rem;
    margin-top: 1rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 30px;
    font-weight: bold;
    font-family: "Rubik", sans-serif;
  }
  button {
    margin-left: 1rem;
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    background: darkgray;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 30px;
    &:hover {
      background: rgb(48, 136, 255);
      box-shadow: rgba(48, 136, 255, 0.2) 0px 0px 30px;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  h1 {
    padding: 1rem;
    margin-top: 0.2rem;
  }
  img {
    width: 1.4rem;
    height: 1.4rem;
    /* padding: 1rem; */
  }
`;

export default Navbar;
