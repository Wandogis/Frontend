import React from 'react';
import MainHeader from "../components/mainComponent/main-header";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import HorizonLine from "../assets/horizonline"
import BookInfo from "../components/book-info"
import ChallengeGen from "../components/challenge-gen"
import styled from "styled-components";

const Title = styled.div`
  margin: 30px 0px 20px 80px;
  font-size: 24px;
  font-weight: 800;
`;

const Bookdetail: React.FC = () => {
  return (
    <div>
      <MainHeader />
      <MainMenuBar />
      <Title>도서 정보</Title>
      <BookInfo />
      <Title>모집중인 챌린지</Title>
      <HorizonLine width="100%"/>
      <ChallengeGen />
    </div>
  );
};
export default Bookdetail;