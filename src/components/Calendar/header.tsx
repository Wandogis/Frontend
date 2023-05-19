import { format } from "date-fns";
import React from "react";
import { UilArrowLeft, UilArrowRight } from "@iconscout/react-unicons";
import { styled } from "styled-components";

interface RenderHeaderProps {
  currentMonth: Date;
  preMonth: () => void;
  nextMonth: () => void;
}
const Header = styled.div`
  display: flex;
  justify-content: center;
`;
const ArrowIconWrapper = styled.div`
  color: #ed2024;
`;

const LeftArrow = styled(ArrowIconWrapper)`
  margin-right: 40px;
`;
const RightArrow = styled(ArrowIconWrapper)`
  margin-left: 40px;
`;
const RenderHeader: React.FC<RenderHeaderProps> = ({
  currentMonth,
  preMonth,
  nextMonth,
}) => {
  return (
    <Header>
      <LeftArrow onClick={preMonth}>
        <UilArrowLeft />
      </LeftArrow>
      <div>
        <span className="text">
          {format(currentMonth, "yyyy") + " "}
          <span className="text month">{format(currentMonth, "M")}월</span>
        </span>
      </div>
      <RightArrow onClick={nextMonth}>
        <UilArrowRight />
      </RightArrow>
    </Header>
  );
};

export default RenderHeader;
