import MainHeader from "../components/main-header";
import theme from "../assets/theme";
// import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import MainMenuBar from "../components/main-menu-bar";

const Main: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <MainMenuBar />
    </ThemeProvider>
  );
};
export default Main;
