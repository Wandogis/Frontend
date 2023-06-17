import React, { useState } from "react";
import styled from "styled-components";
import GenreInputs from "./inputs/genre-inputs";
import GenderInputs from "./inputs/gender-inputs";
import WriterInputs from "./inputs/writer-inputs";
import BookInputs from "./inputs/books-inputs";
import { UilMessage } from "@iconscout/react-unicons";
import Recommend from "./Results/recommended";
import { onGoingBook } from "../../assets/json/main-challengeList";
// Styles

export interface RecBtnProps {
  disabled: boolean;
}
const RecommendWrapper = styled.div`
  width: 80%;
  margin-top: 1.5rem;
  overflow: scroll;
`;
const RecommendContainer = styled.div`
  border-radius: 1rem;
  padding: 30px 50px 70px 50px;
  height: 250px;
  background-color: white;
`;

const InfoTxt = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #64655f;
`;
const RecommendInputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomInput = styled.input`
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  height: 30px;
  width: 100px;
  margin: 0 10px 10px 0;
  font-size: 14px;
  font-weight: 500;
  padding-left: 10px;
  color: #64655f;
`;

const AgeGenderWrapper = styled.div`
  display: flex;
`;
const RecBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 80px;
`;
const RecommendBtn = styled.button<RecBtnProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 140px;
  height: 60px;
  border: none;
  background-color: ${(props) =>
    props.disabled ? "#BCBEAF" : props.theme.pointYellow};
  padding: 10px;
  font-size: 18px;
  color: white;
  font-weight: 600;
  border-radius: 1rem;
`;
// Interfaces
interface RecBook {
  title: string;
  rating: number | null;
}

const isButtonDisabled = (books: RecBook[], genre: string[]): boolean => {
  if (!books || !genre) {
    return false;
  }
  return books.length < 3 || genre.length === 0;
};

// Main Component
const RecommendInput: React.FC = () => {
  const [books, setBooks] = useState<RecBook[]>([]);
  const [genre, setGenre] = useState<string[]>([]);
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string>("");
  const [writers, setWriters] = useState<string[]>([]);
  const [click, setClick] = useState<boolean>(false);
  const submitRecommendations = () => {
    const recommendationData = {
      books,
      genre,
      age,
      writers,
      gender,
    };
    console.log(recommendationData); // replace this with your desired operation
  };
  const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const age = parseInt(e.target.value, 10);
    setAge(isNaN(age) ? null : age);
  };
  const recommendBooks = onGoingBook;

  return (
    <RecommendWrapper>
      <RecommendContainer>
        <InfoTxt>추천에 필요한 정보를 입력해주세요. (3권 이상)</InfoTxt>
        <RecommendInputWrapper>
          <BookInputs books={books} setBooks={setBooks} />
          <GenreInputs genre={genre} setGenre={setGenre} />
          <div style={{ display: "block", paddingLeft: "30px" }}>
            <AgeGenderWrapper>
              <CustomInput
                type="number"
                placeholder="나이"
                required
                value={age || ""}
                onChange={(e) => onAgeChange(e)}
              />
              <GenderInputs gender={gender} setGender={setGender} />
            </AgeGenderWrapper>
            <WriterInputs writers={writers} setWriters={setWriters} />
            <RecBtnWrapper>
              <RecommendBtn
                onClick={() => {
                  submitRecommendations();
                  setClick((prev) => !prev);
                }}
                disabled={isButtonDisabled(books, genre)}
              >
                추천 받기
                <UilMessage />
              </RecommendBtn>
            </RecBtnWrapper>
          </div>
        </RecommendInputWrapper>
      </RecommendContainer>
      <Recommend RecommendBooks={recommendBooks} click={click}/>
    </RecommendWrapper>
  );
};

export default RecommendInput;
