import React from "react";
import { styled } from "styled-components";

const DaysWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const DayWrapper = styled.div`
  width: 25px;
`;
const RenderDays: React.FC = () => {
  const days: JSX.Element[] = [];
  const date = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  for (let i = 0; i < 7; i++) {
    days.push(<DayWrapper key={i}>{date[i]}</DayWrapper>);
  }
  return <DaysWrapper>{days}</DaysWrapper>;
};

export default RenderDays;
