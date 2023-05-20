import React from "react";
import { ThemeProvider } from "styled-components";
import MainHeader from "../components/mainComponent/main-header";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import theme from "../assets/theme";
import RecommendInput from "../components/Recommend/recommend-input";

const Recommend: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <MainMenuBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RecommendInput />
      </div>
    </ThemeProvider>
  );
};

export default Recommend;
