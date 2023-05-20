import React, { useState } from "react";
import styled from "styled-components";
import { GenderInputs, GenreInputs } from "./dropdown-Inputs";

// Styles
const RecommendWrapper = styled.div`
  width: 80%;
  margin-top: 1.5rem;
`;

const RecommendInputWrapper = styled.div`
  display: flex;
  background-color: white;
  height: 250px;
  border-radius: 1rem;
  padding: 70px;
`;

const InputDiv = styled.div`
  height: 250px;
  overflow: scroll;
  border-right: 0.5px solid rgba(0, 0, 0, 0.2);

  padding-right: 20px;
  input {
    border: 1px solid #dee2e6;
    border-radius: 0.5rem;
    height: 30px;
    width: 100px;
    margin: 0 10px 10px 0;
    font-size: 14px;
    font-weight: 500;
    padding-left: 10px;
  }
  button {
    background-color: #dee2e6;
    color: #868e96;
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 5px;
  }
`;

// Interfaces
interface RecBook {
  title: string;
  rating: number | null;
}

// Main Component
const RecommendInput: React.FC = () => {
  const [books, setBooks] = useState<RecBook[]>([{ title: "", rating: 0 }]);
  const [age, setAge] = useState<number | null>(null);
  const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const age = parseInt(e.target.value, 10);
    setAge(isNaN(age) ? null : age);
  };

  const handleChange = (
    index: number,
    value: string | number,
    field: "title" | "rating"
  ) => {
    setBooks(
      books.map((book, i) => (i === index ? { ...book, [field]: value } : book))
    );
  };

  const addBook = () => {
    setBooks([...books, { title: "", rating: null }]);
  };

  const BookInputs = (book: RecBook, index: number) => (
    <div key={index}>
      <input
        placeholder="책 제목"
        required
        value={book.title}
        onChange={(e) => handleChange(index, e.target.value, "title")}
      />
      <input
        type="number"
        step="0.1"
        min="0.0"
        max="5.0"
        placeholder="평점 / 5.0"
        required
        value={book.rating || ""}
        onChange={(e) => handleChange(index, Number(e.target.value), "rating")}
      />
      {index === books.length - 1 && (
        <button
          onClick={addBook}
          disabled={books[books.length - 1].title === ""}
        >
          +
        </button>
      )}
    </div>
  );

  return (
    <RecommendWrapper>
      <RecommendInputWrapper>
        <InputDiv>{books.map(BookInputs)}</InputDiv>
        <GenreInputs />
        <div>
          <input
            type="number"
            placeholder="나이"
            required
            value={age || ""}
            onChange={(e) => onAgeChange(e)}
          />
        </div>

        <GenderInputs />
      </RecommendInputWrapper>
    </RecommendWrapper>
  );
};

export default RecommendInput;
