import React from 'react';
import MainHeader from "../components/mainComponent/main-header";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import ChallengeBookInfo from "../components/challengeDetail/challenge-book-info";
import ParticipantList from "../components/challengeDetail/participant-list";
import HorizonLine from "../assets/json/horizonline"
import styled from "styled-components";

const Title = styled.div`
  margin: 30px 0px 20px 80px;
  font-size: 24px;
  font-weight: 800;
`;

const ChallengeListWrapper = styled.div`
  display: flex;
`;

const ChallengeDetail: React.FC = () => {
  return (
    <div>
      <MainHeader />
      <MainMenuBar />
      <Title>진행 중인 챌린지</Title>
      <ChallengeBookInfo />
      <ParticipantList />
      <Title>챌린지 게시판</Title>
      <HorizonLine borderBottom="2px solid #575757" marginLeft="50px"/>
    </div>
  );
};
export default ChallengeDetail;