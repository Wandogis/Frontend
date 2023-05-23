import React from 'react';
import { styled } from "styled-components";
import { ReactComponent as Book1 } from "../assets/book1.svg";
import HorizonLine from "../assets/horizonline"

const BookWrapper = styled.div`
  width: 90%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin-top: 1.5rem;
  margin-left: 3rem;
  padding: 2rem;
`;

const BookInfoWrapper = styled.div`
  margin-left: 50px;
  margin-top: 20px;
`;

const BookTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const BookSum = styled.div`
  font-weight: 600;
  font-size: 12px;
`;

const BookDetail = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 14px;
`;

interface Book {
  title: string;
  img: JSX.Element;
  genre: string;
  date: string;
  pages: number;
  author: string;
  publisher: string;
  summary: string;
}

const BookItem: React.FC<{ book: Book }> = ({book}) => (
  <>
    <div>{book.img}</div>
    <BookInfoWrapper>
      <BookTitle>{book.title}</BookTitle>
      <BookSum>{book.summary}</BookSum>
      <HorizonLine width="70%" />
      <BookDetail>분류 {book.genre}</BookDetail>
      <BookDetail>지은이 {book.author}</BookDetail>
      <BookDetail>출판사 {book.publisher}</BookDetail>
      <BookDetail>출간일 {book.date}</BookDetail>
      <BookDetail>페이지수 {book.pages}</BookDetail>
    </BookInfoWrapper>
  </>
);

const BookInfo: React.FC = () => {
  const book1:Book = {
    title: "거인의 노트",
    img: <Book1 />,
    genre: "국내도서 > 자기계발 > 성공학/경력관리",
    author: "김익환",
    publisher: "다산북스",
    date: "2023년 03월 08일",
    pages: 292,
    summary:
      "우리는 인생을 살면서 다양한 한계에 부딪힌다. 공부라는 외롭고 힘든 길에서 앞으로 나아가지 못하고 있다면, 아직 자신이 원하는 일을 찾지 못했다면, 10년 가까이 회사를 다녔지만 더 이상 어떻게 성과를 내야 할지 모르겠다면, 또는 아이를 키우며 반복되는 일상에 지쳐버렸거나 노년에 접어들어 은퇴를 하고 더 이상의 성장을 포기하게 되었다면, 당신은 이 한계를 넘어서길 포기한 채 그저 살던 대로 살아갈 것인가, 다시 한번 인생의 변화를 꾀할 것인가?",
  }

  return (
    <BookWrapper>
      <BookItem book={book1} />
    </BookWrapper>
  );
};
export default BookInfo;