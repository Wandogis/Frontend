import React, { useState } from "react";
import styled from "styled-components";
import { genreList } from "../../../assets/json/book-genre";
import { MenuDropDown } from "../dropdown-li";
import { UilAngleDown, UilMultiply } from "@iconscout/react-unicons";
import { ReactComponent as Necessary } from "../../../assets/svg/necessary.svg";

export const MenuInputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const DropDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 24px;
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  padding: 3px 10px 3px 10px;
  font-size: 14px;
  font-weight: 500;
  color: #64655f;
`;

export const UIMenuWrapper = styled.div`
  padding-left: 30px;
  width: 350px;
  height: 250px;
  border-right: 0.5px solid rgba(0, 0, 0, 0.2);
`;
export const Ul = styled.ul`
  margin: 0;
  position: absolute;
  padding: 0;
  top: 31.5px;
  left: 10px;
  width: 120px;
  z-index: 99;
  max-height: 100px;
  overflow-y: auto;
  list-style-type: none;
  box-sizing: border-box;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  :hover {
    background-color: ${(props) => props.theme.mainYellow};
    color: white;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 3px;
  margin-top: 10px;
  max-width: 400px;
  overflow-y: auto;
`;

export const ItmBtn = styled.div`
  display: flex;
  width: auto;
  border-radius: 0.6rem;
  height: 20px;
  margin-right: 10px;
  margin-top: 10px;
  padding: 2px;
  padding-left: 8px;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  background-color: ${(props) => props.theme.mainGreen};
  svg {
    width: 12px;
    color: white;
  }
  button {
    width: auto;
    height: 20px;
    border: none;
    display: flex;
    margin-left: 10px;
    align-items: center;
    background-color: transparent;
  }
`;

interface GenreProps {
  genre: string[];
  setGenre: React.Dispatch<React.SetStateAction<string[]>>;
}

const GenreInputs: React.FC<GenreProps> = ({ genre, setGenre }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleGenre = () => {
    setIsOpen((prev) => !prev);
  };

  const addGenre = (value: string) => {
    if (genre.includes(value)) {
      return;
    }
    setGenre([...genre, value]);
  };

  const removeGenre = (value: string) => {
    setGenre(genre.filter((item) => item !== value));
  };
  return (
    <UIMenuWrapper>
      <MenuInputWrapper>
        <Necessary style={{ marginRight: "3px" }} />
        <DropDiv onClick={toggleGenre}>
          장르
          <UilAngleDown />
        </DropDiv>
        {isOpen && (
          <Ul>
            {genreList.map((itm, idx) => (
              <MenuDropDown
                key={idx}
                value={itm}
                setIsOpen={setIsOpen}
                setValue={addGenre}
              />
            ))}
          </Ul>
        )}
      </MenuInputWrapper>
      <MenuList>
        {genre.map((itm, idx) => (
          <ItmBtn key={idx}>
            {itm}
            <button onClick={() => removeGenre(itm)}>
              <UilMultiply />
            </button>
          </ItmBtn>
        ))}
      </MenuList>
    </UIMenuWrapper>
  );
};

export default GenreInputs;
