import React from 'react';
import { styled } from "styled-components";
import Book1 from "../../assets/jpeg/Book1.jpeg"
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

interface ChallengeInfo {
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

const ChallengeInfoItem: React.FC<{ info: ChallengeInfo }> = ({info}) => (
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

const ChallengeProgress: React.FC<{info: ChallengeInfo}> = ({info}) => {
  /*const challengeStartDate = new Date(info.startDate);
  const challengeEndDate = new Date(info.endDate);
  challengeEndDate.setDate(challengeEndDate.getDate() + 1);
  
  const currentDate = new Date();
  currentDate.setHours(0,0,0,0);
  
  const totalDays = Math.floor((challengeEndDate.getTime() - challengeStartDate.getTime()) / (1000 * 60 * 60 * 24))+1;
  const elapsedDays = Math.floor((currentDate.getTime() - challengeStartDate.getTime()) / (1000 * 60 * 60 * 24))+1;
  
  const progress = (elapsedDays / totalDays) * 100;*/

  const challengeStartDate = new Date(info.startDate);
  const challengeEndDate = new Date(info.endDate);
  const currentDate = new Date();

  const totalDays = ((challengeEndDate.getTime() - challengeStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  let elapsedDays;

  if (currentDate < challengeStartDate) {
    elapsedDays = 0;
  } else if (currentDate > challengeEndDate) {
    elapsedDays = totalDays;
  } else {
    elapsedDays = ((currentDate.getTime() - challengeStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  }

  const progress = (elapsedDays / totalDays) * 100;
  
  return (
    <ProgressWrapper>
      <ProgressBar percentage={progress} />
      <ProgressText>{Math.round(progress)}%</ProgressText>
    </ProgressWrapper>
  );
};

interface ChallengeBookInfoProps {
  book: Book;
  challenge: ChallengeInfo;
}

const ChallengeBookInfo: React.FC<ChallengeBookInfoProps> = ({book, challenge}) => {
  return (
    <ChallengeBookWrapper>
      <BookImageWrapper>
        <img src={Book1} alt="" width="200px"/>
      </BookImageWrapper>
      <BookInfoChallengeWrapper>
        <BookItem book={book} />
        <ChallengeInfoItem info={challenge} />
        <ChallengeProgress info={challenge} />
      </BookInfoChallengeWrapper>
    </ChallengeBookWrapper>
  );
};
export default ChallengeBookInfo;