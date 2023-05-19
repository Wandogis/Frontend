import React, { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import RenderHeader from "./header";
import { styled } from "styled-components";
import RenderDays from "./days";
import RenderCells from "./cells";

const ProfilCalWrapper = styled.div`
  width: 30%;
  margin: 1.5rem 3rem 0 1rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
`;

const ProfileWrapper = styled.div`
  height: 30%;
`;
const CalendarWrapper = styled.div``;

export const Calender: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const preMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day: Date, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedDate(day);
  };

  const onWrapperClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedDate(null);
  };

  return (
    <ProfilCalWrapper onClick={onWrapperClick}>
      <ProfileWrapper>프로필</ProfileWrapper>
      <CalendarWrapper>
        <RenderHeader
          currentMonth={currentMonth}
          preMonth={preMonth}
          nextMonth={nextMonth}
        />
        <RenderDays />
        <RenderCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
        />
      </CalendarWrapper>
    </ProfilCalWrapper>
  );
};
