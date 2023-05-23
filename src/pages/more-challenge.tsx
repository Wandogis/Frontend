import React, { useState, useEffect } from "react";
import MainHeader from "../components/mainComponent/main-header";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  OnBook,
  preBooks,
  ingBook,
  edBook,
} from "../assets/json/challenge-list";
interface WrapperProps {
  selected?: boolean;
}

const CallengeListWrapper = styled.div`
  display: flex;
  padding: 1rem 3rem 1rem 2rem;
`;
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

const SelectBtnWrapper = styled.div`
  width: 10%;
  margin-right: 1rem;
`;

const SelectBtn = styled.div<WrapperProps>`
  width: 140px;
  height: 40px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-bottom: 10px;
  border-radius: 0.8rem;
  background-color: ${(props) =>
    props.selected ? props.theme.pointYellow : "transparent"};
  color: ${(props) => (props.selected ? "white" : "#64655F")};
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

const MoreChallenge: React.FC = () => {
  const location = useLocation();
  const [btnSelect, setBtnSelect] = useState<string>("ing");
  const [challengeList, setChallengeList] = useState<OnBook[]>(preBooks);

  let isOngoing: boolean = location.state?.Ongoing;

  useEffect(() => {
    if (!isOngoing) {
      setBtnSelect("pre");
    }
  }, [isOngoing]);

  useEffect(() => {
    if (btnSelect === "pre") {
      setChallengeList(preBooks);
    } else if (btnSelect === "ing") {
      setChallengeList(ingBook);
    } else {
      setChallengeList(edBook);
    }
  }, [btnSelect]);
  const handleBtnClick = (value: string) => {
    setBtnSelect(value);
  };

  return (
    <div>
      <MainHeader />
      <MainMenuBar />
      <CallengeListWrapper>
        <SelectBtnWrapper>
          <SelectBtn
            selected={btnSelect === "pre"}
            onClick={() => handleBtnClick("pre")}
          >
            {btnSelect === "pre" ? "✔️ " : ""}진행예정 챌린지
          </SelectBtn>
          <SelectBtn
            selected={btnSelect === "ing"}
            onClick={() => handleBtnClick("ing")}
          >
            {btnSelect === "ing" ? "✔️ " : ""}진행 중인 챌린지
          </SelectBtn>
          <SelectBtn
            selected={btnSelect === "ed"}
            onClick={() => handleBtnClick("ed")}
          >
            {btnSelect === "ed" ? "✔️ " : ""}종료된 챌린지
          </SelectBtn>
        </SelectBtnWrapper>
        <BookList>
          {challengeList.map((itm, idx) => {
            return (
              <Book>
                <Img>{itm.img}</Img>
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
        <div>sortBy</div>
      </CallengeListWrapper>
    </div>
  );
};

export default MoreChallenge;
