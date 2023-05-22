import React, { useState } from "react";
import { MenuDropDown } from "../dropdown-li";
import { UilAngleDown } from "@iconscout/react-unicons";
import { MenuInputWrapper, DropDiv, Ul } from "./genre-inputs";

interface GenderProps {
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}

const GenderInputs: React.FC<GenderProps> = ({ gender, setGender }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const genderList: string[] = ["여성", "남성"];
  const toggleGenre = () => {
    setIsOpen((prev) => !prev);
  };
  const OnSelectGender = (value: string) => {
    setGender(value);
  };

  return (
    <>
      <MenuInputWrapper>
        <DropDiv onClick={toggleGenre}>
          {gender === "" ? "성별" : gender}
          <UilAngleDown />
        </DropDiv>
        {isOpen && (
          <Ul>
            {genderList.map((itm, idx) => (
              <MenuDropDown
                key={idx}
                value={itm}
                setIsOpen={setIsOpen}
                setValue={OnSelectGender}
              />
            ))}
          </Ul>
        )}
      </MenuInputWrapper>
    </>
  );
};

export default GenderInputs;
