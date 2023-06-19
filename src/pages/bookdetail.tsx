import React from 'react';
import MainHeader from "../components/mainComponent/main-header";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import HorizonLine from "../assets/json/horizonline"
import BookInfo from "../components/bookDetail/book-info"
import ChallengeGen from "../components/bookDetail/challenge-gen"
import ChallengeList from "../components/bookDetail/challenge-list"
import styled from "styled-components";
import Book1 from "../assets/jpeg/Book1.jpeg"
import { ingChallengeList } from "../assets/json/ing-challenge-list";

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
  img: string;
  genre: string;
  date: string;
  pages: number;
  author: string;
  publisher: string;
  summary: string;
}

interface ingChallengeData {
  id: number;
  challengeTitle: string;
  startDate: string;
  endDate: string;
  participant: number;
}

const Bookdetail: React.FC = () => {
  const book1: Book = {
    title: "거인의 노트",
    img: Book1,
    genre: "국내도서 > 자기계발 > 성공학/경력관리",
    author: "김익환",
    publisher: "다산북스",
    date: "2023년 03월 08일",
    pages: 292,
    summary:
      "우리는 인생을 살면서 다양한 한계에 부딪힌다. 공부라는 외롭고 힘든 길에서 앞으로 나아가지 못하고 있다면, 아직 자신이 원하는 일을 찾지 못했다면, 10년 가까이 회사를 다녔지만 더 이상 어떻게 성과를 내야 할지 모르겠다면, 또는 아이를 키우며 반복되는 일상에 지쳐버렸거나 노년에 접어들어 은퇴를 하고 더 이상의 성장을 포기하게 되었다면, 당신은 이 한계를 넘어서길 포기한 채 그저 살던 대로 살아갈 것인가, 다시 한번 인생의 변화를 꾀할 것인가?",
  };

  const [challenges, setChallenges] = React.useState<ingChallengeData[]>(ingChallengeList);

  return (
    <div>
      <MainHeader />
      <MainMenuBar />
      <Title>도서 정보</Title>
      <BookInfo book={book1}/>
      <Title>모집중인 챌린지</Title>
      <HorizonLine borderBottom="2px solid #575757" marginLeft="50px"/>
      <ChallengeListWrapper>
        <ChallengeList challenges={challenges} setChallenges={setChallenges}/>
        <ChallengeGen challenges={challenges} setChallenges={setChallenges}/>
      </ChallengeListWrapper>
    </div>
  );
};
export default Bookdetail;