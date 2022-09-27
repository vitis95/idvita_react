import React from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Header/Nav/Nav";

export const App = () => {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<div>landing</div>} />
        <Route path="/home" element={<div>home</div>} />
        <Route path="/page/new" element={<div>page news</div>} />
      </Routes>
    </>
  );
};
