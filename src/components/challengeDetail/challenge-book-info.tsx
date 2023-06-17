import React from 'react';
import { styled } from "styled-components";
import { ReactComponent as Book1 } from "../../assets/svg/book1.svg";
import HorizonLine from "../../assets/json/horizonline"

const ChallengeBookWrapper = styled.div`
  width: 60%;
  height: 350px;
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  margin-top: 1.5rem;
  margin-left: 3rem;
  padding: 2rem;
  background-color: white;
`;

const BookImageWrapper = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
`;

const BookInfoChallengeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookInfoWrapper = styled.div`
  margin-top: 1rem;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ChallengeInfoWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 40%;
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

const ChallengeListDetail = styled.div`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
`;

const RightAlignText = styled.span`
  text-align: right;
  font-weight: 600;
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
  <BookInfoWrapper>
    <BookGenre>{book.genre}</BookGenre>
    <BookTitle>{book.title}</BookTitle>
    <BookSum>{book.summary}</BookSum>
    <HorizonLine borderBottom="1px solid #aaa"/>
  </BookInfoWrapper>
);

const ChallengeInfoItem: React.FC<{ info: CahllengeInfo }> = ({info}) => (
  <ChallengeInfoWrapper>
    <ChallengeListDetail>
      기간 
      <RightAlignText>{info.startDate}-{info.endDate}</RightAlignText>
    </ChallengeListDetail>
    <ChallengeListDetail>
      참여
      <RightAlignText>{info.participant}명</RightAlignText>
    </ChallengeListDetail>
  </ChallengeInfoWrapper>
);

const ProgressWrapper = styled.div`
  width: 90%;
  height: 25px;
  background: #e0e0e0;
  border-radius: 15px;
  margin-left: 50px;
  margin-top: 1rem;
  position: relative;
  display: flex;
`;

const ProgressBar = styled.div<{percentage: number}>`
  width: ${props => props.percentage}%;
  height: 100%;
  background: ${(props) => props.theme.mainYellow};
  border-radius: 15px;
  position: absolute;
`;

const ProgressText = styled.span`
  font-size: 17px;
  font-weight: 600;
  z-index: 1;
  margin-left: 10px;
`;

const ChallengeProgress: React.FC<{info: CahllengeInfo}> = ({info}) => {
  const challengeStartDate = new Date(info.startDate);
  const challengeEndDate = new Date(info.endDate);
  const currentDate = new Date();
  
  const totalDays = Math.floor((challengeEndDate.getTime() - challengeStartDate.getTime()) / (1000 * 60 * 60 * 24));
  const elapsedDays = Math.floor((currentDate.getTime() - challengeStartDate.getTime()) / (1000 * 60 * 60 * 24));
  
  const progress = (elapsedDays / totalDays) * 100;
  
  return (
    <ProgressWrapper>
      <ProgressBar percentage={progress} />
      <ProgressText>{Math.round(progress)}%</ProgressText>
    </ProgressWrapper>
  );
};

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
    participant: 3,
  }

  return (
    <ChallengeBookWrapper>
      <BookImageWrapper>
        <Book1 />
      </BookImageWrapper>
      <BookInfoChallengeWrapper>
        <BookItem book={book1} />
        <ChallengeInfoItem info={challenge1} />
        <ChallengeProgress info={challenge1} />
      </BookInfoChallengeWrapper>
    </ChallengeBookWrapper>
  );
};
export default ChallengeBookInfo;