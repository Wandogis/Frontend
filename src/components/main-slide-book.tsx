import React, { useMemo, useState, memo } from "react";
import { ReactComponent as Book1 } from "../assets/book1.svg";
import { ReactComponent as Book2 } from "../assets/book2.svg";
import { ReactComponent as Book3 } from "../assets/book3.svg";
import { styled } from "styled-components";
import { UilAngleRightB, UilAngleLeftB } from "@iconscout/react-unicons";
// import { UilEllipsisH } from '@iconscout/react-unicons'
const BookWrapper = styled.div`
  width: 60%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
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
const BookDetail = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 14px;
`;
const BookSum = styled.div`
  font-weight: 600;
  font-size: 12px;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const BookBtn = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${(props) => props.theme.pointYellow};
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 0.5rem;
`;
const LeftRightBtn = styled.button`
  height: 100px;
  background-color: white;
  color: #7c7c7c;
  border: none;
`;
interface Books {
  id: number;
  title: string;
  img: JSX.Element;
  genre: string;
  date: string;
  pages: number;
  weight: number;
  size: string;
  summary: string;
}

const BookItem: React.FC<{ book: Books }> = memo(({ book }) => (
  <>
    <div>{book.img}</div>
    <BookInfoWrapper>
      <BookTitle>{book.title}</BookTitle>
      <BookDetail>{book.genre}</BookDetail>
      <BookDetail>{book.date}</BookDetail>
      <BookDetail>{book.pages}</BookDetail>
      <BookDetail>{book.weight}</BookDetail>
      <BookDetail>{book.size}</BookDetail>
      <BookSum>{book.summary}</BookSum>
      <BtnWrapper>
        <BookBtn>더 알아보기</BookBtn>
      </BtnWrapper>
    </BookInfoWrapper>
  </>
));

const SlideBook: React.FC = () => {
  const [currentBooksIndex, setcurrentBooksIndex] = useState<number>(0);

  const books: Books[] = useMemo(
    () => [
      {
        id: 1,
        title: "거인의 노트",
        img: <Book1 />,
        genre: "국내도서 > 자기계발 > 성공학/경력관리",
        date: "2023년 03월 08일",
        pages: 292,
        weight: 796,
        size: "145*210*26",
        summary:
          "우리는 인생을 살면서 다양한 한계에 부딪힌다. 공부라는 외롭고 힘든 길에서 앞으로 나아가지 못하고 있다면, 아직 자신이 원하는 일을 찾지 못했다면, 10년 가까이 회사를 다녔지만 더 이상 어떻게 성과를 내야 할지 모르겠다면, 또는 아이를 키우며 반복되는 일상에 지쳐버렸거나 노년에 접어들어 은퇴를 하고 더 이상의 성장을 포기하게 되었다면, 당신은 이 한계를 넘어서길 포기한 채 그저 살던 대로 살아갈 것인가, 다시 한번 인생의 변화를 꾀할 것인가?",
      },
      {
        id: 2,
        title: "거인의 노트",
        img: <Book2 />,
        genre: "국내도서 > 자기계발 > 성공학/경력관리",
        date: "2023년 03월 08일",
        pages: 292,
        weight: 796,
        size: "145*210*26",
        summary:
          "우리는 인생을 살면서 다양한 한계에 부딪힌다. 공부라는 외롭고 힘든 길에서 앞으로 나아가지 못하고 있다면, 아직 자신이 원하는 일을 찾지 못했다면, 10년 가까이 회사를 다녔지만 더 이상 어떻게 성과를 내야 할지 모르겠다면, 또는 아이를 키우며 반복되는 일상에 지쳐버렸거나 노년에 접어들어 은퇴를 하고 더 이상의 성장을 포기하게 되었다면, 당신은 이 한계를 넘어서길 포기한 채 그저 살던 대로 살아갈 것인가, 다시 한번 인생의 변화를 꾀할 것인가?",
      },
      {
        id: 3,
        title: "거인의 노트",
        img: <Book3 />,
        genre: "국내도서 > 자기계발 > 성공학/경력관리",
        date: "2023년 03월 08일",
        pages: 292,
        weight: 796,
        size: "145*210*26",
        summary:
          "우리는 인생을 살면서 다양한 한계에 부딪힌다. 공부라는 외롭고 힘든 길에서 앞으로 나아가지 못하고 있다면, 아직 자신이 원하는 일을 찾지 못했다면, 10년 가까이 회사를 다녔지만 더 이상 어떻게 성과를 내야 할지 모르겠다면, 또는 아이를 키우며 반복되는 일상에 지쳐버렸거나 노년에 접어들어 은퇴를 하고 더 이상의 성장을 포기하게 되었다면, 당신은 이 한계를 넘어서길 포기한 채 그저 살던 대로 살아갈 것인가, 다시 한번 인생의 변화를 꾀할 것인가?",
      },
    ],
    []
  );

  const onNextClick = (num: number) => {
    if (num === 1) {
      setcurrentBooksIndex((prevIndex) => (prevIndex + 1) % books.length);
    } else {
      if (currentBooksIndex === 0) {
        setcurrentBooksIndex(2);
      } else {
        setcurrentBooksIndex((prevIndex) => prevIndex - 1);
      }
    }
  };

  return (
    <BookWrapper>
      <LeftRightBtn onClick={() => onNextClick(-1)}>
        <UilAngleLeftB />
      </LeftRightBtn>
      <BookItem book={books[currentBooksIndex]} />
      <LeftRightBtn onClick={() => onNextClick(1)}>
        <UilAngleRightB />
      </LeftRightBtn>
    </BookWrapper>
  );
};

export default SlideBook;
