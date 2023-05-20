import React, { useState } from "react";
import styled from "styled-components";
import { genreList } from "../../assets/book-genre";
import { MenuDropDown } from "./menu-dropdown";
import { UilAngleDown, UilTrashAlt } from "@iconscout/react-unicons";
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

const BookInputDiv = styled.div`
  height: 80%;
  overflow: scroll;
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
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 5px;
  }
`;

const GenreInputWrapper = styled.div`
  position: relative;
  margin-left: 30px;
`;
const GenreDropDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 24px;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  padding: 3px 10px 3px 10px;
`;
const MoreDetailInputDiv = styled.div``;

const GenreUl = styled.ul`
  margin: 0;
  position: absolute;
  padding: 0;
  width: 110px;
  z-index: 99;
  height: 100px;
  overflow-y: scroll;
  list-style-type: none;
`;
const SelectedGenre = styled.div`
  display: flex;
`;
interface RecBookList {
  title: string;
  rating: number | null;
}

const RecommendInput: React.FC = () => {
  const [books, setBooks] = useState<RecBookList[]>([{ title: "", rating: 0 }]);
  const [genre, setGenre] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleTitleChange = (index: number, newTitle: string) => {
    setBooks(
      books.map((book, bookIndex) =>
        bookIndex === index ? { ...book, title: newTitle } : book
      )
    );
  };

  const handleRatingChange = (index: number, newRating: number) => {
    setBooks(
      books.map((book, bookIndex) =>
        bookIndex === index ? { ...book, rating: newRating } : book
      )
    );
  };

  const moreBookClick = () => {
    setBooks([...books, { title: "", rating: null }]);
  };

  const setValue = (value: string) => {
    setGenre([...genre, value]);
  };
  const removeGenre = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <RecommendWrapper>
      <RecommendInputWrapper>
        <BookInputDiv>
          {books.map((book, index) => (
            <div key={index}>
              <input
                placeholder="책 제목"
                required
                value={book.title}
                onChange={(e) => handleTitleChange(index, e.target.value)}
              />
              <input
                type="number"
                step="0.1"
                min="0.0"
                max="5.0"
                placeholder="평점 / 5.0"
                required
                value={book.rating || ""}
                onChange={(e) =>
                  handleRatingChange(index, Number(e.target.value))
                }
              />
              {index === books.length - 1 ? (
                <button
                  onClick={moreBookClick}
                  disabled={books[books.length - 1].title === ""}
                >
                  +
                </button>
              ) : (
                ""
              )}
            </div>
          ))}
        </BookInputDiv>
        <div>
          <GenreInputWrapper>
            <GenreDropDiv onClick={() => setIsOpen((prev) => !prev)}>
              장르
              <UilAngleDown />
            </GenreDropDiv>
            {isOpen && (
              <GenreUl>
                {genreList.map((itm, idx) => (
                  <MenuDropDown
                    key={idx}
                    value={itm}
                    setIsOpen={setIsOpen}
                    setValue={setValue}
                  />
                ))}
              </GenreUl>
            )}
          </GenreInputWrapper>
          <SelectedGenre>
            {genre.map((itm, idx) => (
              <div
                style={{
                  display: "flex",
                }}
              >
                <div>{itm}</div>
                <button onClick={(event) => removeGenre(event)}>
                  <UilTrashAlt />
                </button>
              </div>
            ))}
          </SelectedGenre>
        </div>
        <MoreDetailInputDiv></MoreDetailInputDiv>
      </RecommendInputWrapper>
    </RecommendWrapper>
  );
};

export default RecommendInput;
