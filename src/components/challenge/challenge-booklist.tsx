import React from "react";
import styled from "styled-components";
import { challengeBook } from "../../assets/json/challenge-list";
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 0.8rem;
  background-color: #fde3af;
  border-radius: 0.5rem;
`;
const Img = styled.div`
  display: flex;
  justify-content: center;
`;

const BookList = styled.div`
  width: 80%;
  display: flex;
`;

const Book = styled.div`
  margin: 10px 20px 10px 20px;
  width: 250px;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  svg {
    width: 200px;
    height: 250px;
    border-radius: 0.5rem;
    box-shadow: 3px 3px 2px #a9aaa1;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
`;
const Date = styled(DateWrapper)`
  width: 50%;
  height: 30px;
  border-radius: 0.5rem;
`;
const ProgressBar = styled.div`
  position: relative;
  height: 25px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 0.8rem;
  .filler {
    background: ${(props) => props.theme.mainYellow};
    height: 100%;
    border-radius: inherit;
    transition: width 0.2s ease-in;
  }
  span {
    margin-left: 8px;
    margin-right: 8px;
    font-weight: 600;
  }
`;

interface ChallengeBookProps {
  challengeList: challengeBook[];
  btnSelect: string;
}

const ChallengeBookList: React.FC<ChallengeBookProps> = ({
  challengeList,
  btnSelect,
}) => {
  return (
    <BookList>
      {challengeList.map((itm, idx) => {
        return (
          <Book>
            <Img>
              <img src={itm.img} alt="" width="200px" height="250px" />
            </Img>
            <Title>{itm.title}</Title>
            <DateWrapper>
              🚩
              <Date>{itm.date}</Date>
              <div>〰️</div>
              <Date>{itm.endDate}</Date>
            </DateWrapper>
            <ProgressBar>
              <div
                className="filler"
                style={{
                  width: `${itm.progress}%`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{itm.progress + "%"}</span>
                {btnSelect !== "pre" ? <span>🔥</span> : ""}
              </div>
            </ProgressBar>
          </Book>
        );
      })}
    </BookList>
  );
};

export default ChallengeBookList;
