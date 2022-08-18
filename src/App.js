import React from "react";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import GlobalStyle from "./components/GlobalStyle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/game/:id"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
