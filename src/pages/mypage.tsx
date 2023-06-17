import React from "react";
import MainHeader from "../components/mainComponent/main-header";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import { Calender } from "../components/bookCalendar/calendar-profile";
import { styled } from "styled-components";
import MypageProfile from "../components/myPageComponent/profileInfo";
import Mydata from "../components/myPageComponent/myData";
const MypageInfoWrapper = styled.div``;
const CalenderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 350px;
  background-color: white;
  border-radius: 1rem;
`;
const Mypage: React.FC = () => {
  return (
    <MypageInfoWrapper>
      <MainHeader />
      <MainMenuBar />
      <div
        style={{
          display: "flex",
          margin: "1.5rem 3rem 2rem 3rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MypageProfile />
        <CalenderWrapper>
          <Calender />
        </CalenderWrapper>
      </div>
      <Mydata />
    </MypageInfoWrapper>
  );
};

export default Mypage;
