import styled from "styled-components";
import React from "react";
import RankingSlide from "./ranking-slide";
import { useNavigate } from "react-router-dom";

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  height: 60px;
  background-color: ${(props) => props.theme.mainGreen};
`;

const MenuBtn = styled.button`
  width: auto;
  height: 60px;
  margin-left: 30px;
  background-color: ${(props) => props.theme.mainGreen};
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 500;
  &:hover {
    color: black;
    font-weight: 600;
  }
`;

const MenuBtnMargin = styled(MenuBtn)`
  margin-left: 80px;
`;
const CHE: string = "moreChallenge";
const REC: string = "recommend";
const MainMenuBar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (Link: string) => {
    if (Link === REC) {
      navigate(`/${Link}`); // 이동하고 싶은 경로
    } else {
      navigate(`/${Link}`);
    }
  };

  return (
    <MenuBar>
      <div>
        <MenuBtnMargin onClick={() => handleClick(REC)}>추천받기</MenuBtnMargin>
        <MenuBtn onClick={() => handleClick(CHE)}>챌린지 둘러보기</MenuBtn>
      </div>
      <RankingSlide />
    </MenuBar>
  );
};

export default MainMenuBar;
