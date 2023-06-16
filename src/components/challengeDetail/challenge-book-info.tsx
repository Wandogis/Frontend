import React from 'react';
import { styled } from "styled-components";
import { ReactComponent as Book1 } from "../../assets/svg/book1.svg";
import HorizonLine from "../../assets/json/horizonline"

const ChallengeBookWrapper = styled.div`
  width: 60%;
  height: 350px;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  margin-top: 1.5rem;
  margin-left: 3rem;
  padding: 2rem;
  background-color: white;
`;

const BookInfoWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ChallengeInfoWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
`;

const BookTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const BookSum = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: #2F2F2F;
`;

const BookGenre = styled.div`
  color: ${(props) => props.theme.mainGreen};
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 14px;
`;

interface Book {
  title: string;
  img: JSX.Element;
  genre: string;
  summary: string;
}

interface CahllengeInfo {
  startDate: string;
  endDate: string;
  participant: number;
}

const BookItem: React.FC<{ book: Book }> = ({book}) => (
  <>
    <div>{book.img}</div>
    <BookInfoWrapper>
      <BookGenre>{book.genre}</BookGenre>
      <BookTitle>{book.title}</BookTitle>
      <BookSum>{book.summary}</BookSum>
      <HorizonLine borderBottom="1px solid #aaa"/>
    </BookInfoWrapper>
  </>
);

const ChallengeInfoItem: React.FC<{ info: CahllengeInfo }> = ({info}) => (
  <>
    <ChallengeInfoWrapper>
      <BookGenre>{info.startDate}</BookGenre>
      <BookGenre>{info.endDate}</BookGenre>
      <BookGenre>{info.participant}명</BookGenre>
    </ChallengeInfoWrapper>
  </>
);

const ChallengeBookInfo: React.FC = () => {
  const book1:Book = {
    title: "거인의 노트",
    img: <Book1 />,
    genre: "국내도서 > 자기계발 > 성공학/경력관리",
    summary:
      "우리는 인생을 살면서 다양한 한계에 부딪힌다. 공부라는 외롭고 힘든 길에서 앞으로 나아가지 못하고 있다면, 아직 자신이 원하는 일을 찾지 못했다면, 10년 가까이 회사를 다녔지만 더 이상 어떻게 성과를 내야 할지 모르겠다면, 또는 아이를 키우며 반복되는 일상에 지쳐버렸거나 노년에 접어들어 은퇴를 하고 더 이상의 성장을 포기하게 되었다면, 당신은 이 한계를 넘어서길 포기한 채 그저 살던 대로 살아갈 것인가, 다시 한번 인생의 변화를 꾀할 것인가?",
  }

  const challenge1: CahllengeInfo = {
    startDate: "2023-06-15",
    endDate: "2023-06-29",
    participant: 5,
  }

  return (
    <ChallengeBookWrapper>
      <BookItem book={book1} />
    </ChallengeBookWrapper>
  );
};
export default ChallengeBookInfo;
//      <ChallengeInfoItem info={challenge1} />