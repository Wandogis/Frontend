import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import Recommend from "../pages/recommend";
import MoreChallenge from "../pages/more-challenge";
import { ThemeProvider } from "styled-components";
import Bookdetail from "../pages/bookdetail";
import ChallengeDetail from "../pages/challenge-detail";
import theme from "../assets/json/theme";
import Mypage from "../pages/mypage";

const Router: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/recommend" element={<Recommend />}></Route>
        <Route path="/moreChallenge" element={<MoreChallenge />}></Route>
        <Route path="/bookDetail" element={<Bookdetail />}></Route>
<<<<<<< HEAD
        <Route path="/challengeDetail" element={<ChallengeDetail />}></Route>
=======
        <Route path="/mypage" element={<Mypage />}></Route>
>>>>>>> a9b5827523e1055c27dc5a1ee9bbd8f550701223
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
