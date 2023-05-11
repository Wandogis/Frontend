import MainHeader from "../components/main-header";
import theme from "../assets/theme";
// import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import MainMenuBar from "../components/main-menu-bar";
import SlideBook from "../components/main-slide-book";

const Main: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <MainMenuBar />
      <SlideBook />
    </ThemeProvider>
  );
};
export default Main;
