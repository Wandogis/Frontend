import React, { useState } from "react";
import styled from "styled-components";
interface BtnProps {
  selected: boolean;
}
const MydataWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const SelectMenu = styled.button<BtnProps>`
  width: 200px;
  height: 50px;
  background-color: ${(props) =>
    props.selected ? props.theme.pointYellow : "white"};
  border-radius: 1rem;
  border: none;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.selected ? "white" : "#222222")};
`;
const Mydata: React.FC = () => {
  const [select, setSelect] = useState(0);
  const menuList: string[] = [
    "진행 중인 챌린지",
    "완료한 챌린지",
    "추천 책 관리",
  ];
  const btnOnClick = (idx: number) => {
    setSelect(idx);
  };
  return (
    <MydataWrapper>
      {menuList.map((itm, idx) => {
        return (
          <SelectMenu
            onClick={() => btnOnClick(idx)}
            selected={select === idx}
            key={idx}
          >
            {itm}
          </SelectMenu>
        );
      })}
    </MydataWrapper>
  );
};

export default Mydata;
