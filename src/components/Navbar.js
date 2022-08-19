import React, { useState } from "react";
// Styling and animation:
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import searchBtn from "../img/search-btn.svg";

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
    setTextInput("");
  };

  return (
    <NavWrapper>
      <Logo href="/" onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>RAWG+</h1>
      </Logo>
      <form className="search">
        <FormWrapper>
          <button type="submit" onClick={submitHandler}>
            <img src={searchBtn} alt="" />
          </button>
          <input type="text" onChange={inputHandler} value={textInput} />
        </FormWrapper>
      </form>
    </NavWrapper>
  );
};

const NavWrapper = styled(motion.nav)`
  font-family: "Rubik Mono One", sans-serif;
  padding: 2rem 5rem 0rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  form {
    margin-top: 1rem;
  }
  input {
    padding: 0.4rem;
    width: 300px;
    font-size: 1.1rem;
    border: none;
    transition: width 0.4s ease-in-out;
    &:focus,
    &::placeholder {
      outline: none;
    }
    &:hover {
      width: 450px;
    }
  }
  button {
    background: transparent;
    position: relative;
    padding: 0.4rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    width: 2rem;
    img {
      position: absolute;
      top: 0;
      left: 55%;
      transform: translate(-50%, -50%);
      padding: 8px;
      width: 100%;
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
    font-size: 1.8rem;
    padding: 1rem;
    margin-top: 0.2rem;
  }
  img {
    width: 1.8rem;
    height: 1.8rem;
  }
  transition: all 0.3s ease-in-out;
  &:hover {
    color: rgb(48, 136, 255);
    filter: drop-shadow(5px 5px 10px rgba(123, 177, 248, 0.1));
  }
`;

const FormWrapper = styled(motion.div)`
  overflow: hidden;
  background: black;
  border: 2px solid black;
  border-radius: 2rem;
  filter: drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.1));
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgb(48, 136, 255);
    border: 2px solid rgb(48, 136, 255);
    filter: drop-shadow(5px 5px 10px rgba(123, 177, 248, 0.2));
  }
`;

export default Navbar;
