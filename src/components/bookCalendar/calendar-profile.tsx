import React, { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import RenderHeader from "./header";
import { styled } from "styled-components";
import RenderDays from "./days";
import RenderCells from "./cells";

const CalendarWrapper = styled.div`
  width: 100%;
`;

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
    <CalendarWrapper onClick={onWrapperClick}>
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
  );
};
