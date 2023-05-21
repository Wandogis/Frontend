import React from "react";
import styled from "styled-components";

interface DropDownProps {
  value: string;
  setIsOpen: (isOpen: boolean) => void;
  setValue: (value: string) => void;
}

const Genreli = styled.li`
  width: 100%;
  background-color: white;
  padding: 0.8rem 0.5rem 0.8rem 0.5rem;
  color: #868e96;
  font-weight: 500;
  font-size: 14px;
  box-sizing: border-box;
`;

export const MenuDropDown: React.FC<DropDownProps> = ({
  value,
  setIsOpen,
  setValue,
}) => {
  const onClick = (event: React.MouseEvent, value: string) => {
    event.stopPropagation(); // stop the event from bubbling up to the parent
    setValue(value);
    setIsOpen(false);
  };
  return <Genreli onClick={(event) => onClick(event, value)}>{value}</Genreli>;
};
