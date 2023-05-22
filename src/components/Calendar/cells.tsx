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
  isWithinInterval,
} from "date-fns";
import React from "react";
import styled from "styled-components";
import { BookCalData } from "../../assets/json/calbook";
interface RenderCellsProps {
  currentMonth: Date;
  selectedDate: Date | null;
  onDateClick: (day: Date, event: React.MouseEvent) => void;
}
interface DayWrapperProps {
  selected?: boolean;
  valid?: boolean;
  isDate?: boolean;
}

const DaysWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`;

const DayWrapper = styled.div<DayWrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  width: 25px;
  height: 25px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) =>
    props.selected ? "#F0ECCF" : props.isDate ? "#ffb100" : "white"};
  color: ${(props) => (props.valid ? "black" : "#b1b1b2")};
`;
const DetailCalData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0eccf;
  border-radius: 1rem;
  width: 100px;
  height: 50px;
  text-align: center;
  padding: 10px;

  position: absolute;
  bottom: 110%;
  z-index: 4;
  pointer-events: none;
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
      const cloneDay = new Date(day);
      let isDate = false;
      let bookTitle = "";
      for (let book of BookCalData) {
        let startDate = parse(book.startDate, "yyyy-MM-dd", new Date());
        let endDate = parse(book.endDate, "yyyy-MM-dd", new Date());
        if (isWithinInterval(cloneDay, { start: startDate, end: endDate })) {
          isDate = true;
          bookTitle = book.bookTitle;
          break;
        }
      }
      days.push(
        <DayWrapper
          selected={!!(selectedDate && isSameDay(day, selectedDate))}
          valid={isSameMonth(day, monthStart)}
          isDate={isDate}
          key={day.toDateString()}
          onClick={(event) => onDateClick(cloneDay, event)}
        >
          <span>{formattedDate}</span>
          {!!(selectedDate && isSameDay(day, selectedDate)) && isDate ? (
            <DetailCalData>{bookTitle}</DetailCalData>
          ) : (
            ""
          )}
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
