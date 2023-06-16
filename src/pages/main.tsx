import MainHeader from "../components/mainComponent/main-header";
import styled from "styled-components";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import SlideBook from "../components/mainComponent/main-slide-book";
import OnChallenge from "../components/mainComponent/ongoing-challenge";
import { Calender } from "../components/bookCalendar/calendar-profile";
import { onGoingBook, ExpectBook } from "../assets/json/main-challengeList";

const SlideCalWrapper = styled.div`
  display: flex;
`;
const Main: React.FC = () => {
  return (
    <>
      <MainHeader />
      <MainMenuBar />
      <SlideCalWrapper>
        <SlideBook />
        <Calender />
      </SlideCalWrapper>
      <OnChallenge Booklist={onGoingBook} Ongoing={true} />
      <OnChallenge Booklist={ExpectBook} Ongoing={false} />
    </>
  );
};
export default Main;
