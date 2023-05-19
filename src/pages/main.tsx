import MainHeader from "../components/main-header";
import theme from "../assets/theme";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import MainMenuBar from "../components/main-menu-bar";
import SlideBook from "../components/main-slide-book";
import OnChallenge from "../components/ongoing-challenge";
import { Calender } from "../components/Calendar/calendar-profile";

const SlideCalWrapper = styled.div`
  display: flex;
`;
const Main: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />

      <MainMenuBar />
      <SlideCalWrapper>
        <SlideBook />
        <Calender />
      </SlideCalWrapper>
      <OnChallenge />
    </ThemeProvider>
  );
};
export default Main;
