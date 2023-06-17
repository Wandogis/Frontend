import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import Recommend from "../pages/recommend";
import MoreChallenge from "../pages/more-challenge";
import { ThemeProvider } from "styled-components";
import Bookdetail from "../pages/bookdetail";
import theme from "../assets/json/theme";
import Mypage from "../pages/mypage";
import SearchPage from "../pages/search";

const Router: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/recommend" element={<Recommend />}></Route>
        <Route path="/moreChallenge" element={<MoreChallenge />}></Route>
        <Route path="/bookDetail" element={<Bookdetail />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
