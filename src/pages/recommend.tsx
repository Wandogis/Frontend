import React from "react";
import { ThemeProvider } from "styled-components";
import MainHeader from "../components/mainComponent/main-header";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import theme from "../assets/theme";

const Recommend: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <MainMenuBar />
    </ThemeProvider>
  );
};

export default Recommend;
