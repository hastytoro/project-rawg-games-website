import React from "react";
import Home from "./pages/Home";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavTemp>
        <a href="/">RAWG+</a>
      </NavTemp>

      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/game/:id"} element={<Home />} />
      </Routes>
    </div>
  );
}

const NavTemp = styled.div`
  font-family: "Rubik Mono One", sans-serif;
  position: sticky;
  top: 0;
  left: 0;
  min-height: 10vh;
  padding: 0rem 5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  a {
    color: black;
  }
`;

export default App;
