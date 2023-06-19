import React from "react";
import { styled } from "styled-components";
import HorizonLine from "../../assets/json/horizonline";
import Book1 from "../../assets/jpeg/Book1.jpeg";

const BookWrapper = styled.div`
  width: 90%;
  height: 350px;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  margin-top: 1.5rem;
  margin-left: 3rem;
  padding: 2rem;
  background-color: white;
`;

const BookInfoWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const BookTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const BookSum = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: #2f2f2f;
`;

const BookDetail = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 14px;
`;

const DetailContent = styled.span<{ isGenre?: boolean }>`
  margin-left: 1rem;
  color: ${(props) => (props.isGenre ? props.theme.mainGreen : "inherit")};
`;

interface Book {
  title: string;
  img: string;
  genre: string;
  date: string;
  pages: number;
  author: string;
  publisher: string;
  summary: string;
}

const BookItem: React.FC<{ book: Book }> = ({ book }) => (
  <>
    <div>
      <img src={book.img} alt="" width="200px" />
    </div>
    <BookInfoWrapper>
      <BookTitle>{book.title}</BookTitle>
      <BookSum>{book.summary}</BookSum>
      <HorizonLine borderBottom="1px solid #aaa" />
      <BookDetail>
        분류<DetailContent isGenre>{book.genre}</DetailContent>
      </BookDetail>
      <BookDetail>
        지은이 <DetailContent>{book.author}</DetailContent>
      </BookDetail>
      <BookDetail>
        출판사 <DetailContent>{book.publisher}</DetailContent>
      </BookDetail>
      <BookDetail>
        출간일 <DetailContent>{book.date}</DetailContent>
      </BookDetail>
      <BookDetail>
        쪽수 <DetailContent>{book.pages}</DetailContent>
      </BookDetail>
    </BookInfoWrapper>
  </>
);

interface BookInfoProps {
  book: Book;
}

const BookInfo: React.FC<BookInfoProps> = ({book}) => {
  return (
    <BookWrapper>
      <BookItem book={book} />
    </BookWrapper>
  );
};
export default BookInfo;
