import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  challengeBook,
  preBooks,
  ingBook,
  edBook,
} from "../../assets/json/challenge-list";
import DropdownFilter from "./dropdown-filter";
import ChallengeBookList from "./challenge-booklist";

interface WrapperProps {
  selected?: boolean;
}

const CallengeListWrapper = styled.div`
  display: flex;
  padding: 1rem 3rem 1rem 2rem;
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

interface CLProps {
  isOngoing: boolean;
}

const ChallengeList: React.FC<CLProps> = ({ isOngoing }) => {
  const [btnSelect, setBtnSelect] = useState<string>("ing");
  const [challengeList, setChallengeList] = useState<challengeBook[]>(preBooks);
  // const [filter, setFilter] = useState<string>("인기순");

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

  const ProgressBtn: React.FC = () => {
    return (
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
    );
  };

  return (
    <CallengeListWrapper>
      <ProgressBtn />
      <ChallengeBookList challengeList={challengeList} btnSelect={btnSelect} />
      <DropdownFilter />
    </CallengeListWrapper>
  );
};

export default ChallengeList;
