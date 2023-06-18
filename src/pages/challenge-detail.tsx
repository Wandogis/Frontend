import React from 'react';
import styled from "styled-components";
import Book1 from "../assets/jpeg/Book1.jpeg"
import { ParticipantDataList } from "../assets/json/participant-list";
import MainHeader from "../components/mainComponent/main-header";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import ChallengeBookInfo from "../components/challengeDetail/challenge-book-info";
import ParticipantList from "../components/challengeDetail/participant-list";
import HorizonLine from "../assets/json/horizonline"

const Title = styled.div`
  margin: 30px 0px 20px 80px;
  font-size: 24px;
  font-weight: 800;
`;

const ChallengeListWrapper = styled.div`
  display: flex;
`;

interface Book {
  title: string;
  img: JSX.Element;
  genre: string;
  summary: string;
  pages: number;
}

interface ChallengeInfo {
  startDate: string;
  endDate: string;
  participant: number;
}

interface ParticipantData {
  id: number;
  profileImg: JSX.Element;
  nickname: string;
  readPage: number;
}

const ChallengeDetail: React.FC = () => {
  const [participants, setParticipants] = React.useState<ParticipantData[]>(ParticipantDataList);

  const book1:Book = {
    title: "거인의 노트",
    img: Book1,
    genre: "국내도서 > 자기계발 > 성공학/경력관리",
    summary:
      "우리는 인생을 살면서 다양한 한계에 부딪힌다. 공부라는 외롭고 힘든 길에서 앞으로 나아가지 못하고 있다면, 아직 자신이 원하는 일을 찾지 못했다면, 10년 가까이 회사를 다녔지만 더 이상 어떻게 성과를 내야 할지 모르겠다면, 또는 아이를 키우며 반복되는 일상에 지쳐버렸거나 노년에 접어들어 은퇴를 하고 더 이상의 성장을 포기하게 되었다면, 당신은 이 한계를 넘어서길 포기한 채 그저 살던 대로 살아갈 것인가, 다시 한번 인생의 변화를 꾀할 것인가?",
    pages: 292,
  }

  const challenge1: ChallengeInfo = {
    startDate: "2023-06-15",
    endDate: "2023-06-25",
    participant: 3,
  }

  return (
    <div>
      <MainHeader />
      <MainMenuBar />
      <Title>진행 중인 챌린지</Title>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ChallengeBookInfo book={book1} challenge={challenge1}/>
        <ParticipantList totalPage={book1.pages} participantDataList={participants}/>
      </div>
      <Title>챌린지 게시판</Title>
      <HorizonLine borderBottom="2px solid #575757" marginLeft="50px"/>
    </div>
  );
};
export default ChallengeDetail;