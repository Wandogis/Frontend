import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import Challenge from "../pages/challenge";
import Recommend from "../pages/recommend";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/challenge" element={<Challenge />}></Route>
      <Route path="/recommend" element={<Recommend />}></Route>
    </Routes>
  );
};

export default Router;
