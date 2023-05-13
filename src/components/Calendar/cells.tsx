import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  parse,
} from "date-fns";
import React from "react";
import styled from "styled-components";

interface RenderCellsProps {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (date: Date) => void;
}

const DaysWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`;

interface DayWrapperProps {
  selected?: boolean;
  valid?: boolean;
}

const DayWrapper = styled.div<DayWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  width: 25px;
  height: 25px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => (props.selected ? "#ffb100" : "white")};
  color: ${(props) => (props.valid ? "black" : "#b1b1b2")};
`;

const RenderCells: React.FC<RenderCellsProps> = ({
  currentMonth,
  selectedDate,
  onDateClick,
}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <DayWrapper
          selected={isSameDay(day, selectedDate)}
          valid={isSameMonth(day, monthStart)}
          key={day.toDateString()}
          onClick={() => onDateClick(cloneDay)}
        >
          <span>{formattedDate}</span>
        </DayWrapper>
      );
      day = addDays(day, 1);
    }
    rows.push(<DaysWrapper key={day.toDateString()}>{days}</DaysWrapper>);
    days = [];
  }
  return <div>{rows}</div>;
};

export default RenderCells;
