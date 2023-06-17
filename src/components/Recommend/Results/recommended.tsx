import React, { useState } from "react";
import styled from "styled-components";
import { OnBook } from "../../../assets/json/main-challengeList";
import { RecBtnProps } from "../recommend-input";
const RecommendedWrapper = styled.div``;
const NoRecommend = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #222222;
  font-weight: 600;
`;
const RecommendList = styled.div`
  display: flex;
  height: 300px;
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
  overflow-x: auto;
`;
const SaveBtnWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
`;
const SaveBtn = styled.button<RecBtnProps>`
  margin-bottom: 3rem;
  position: absolute;
  top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
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
const RecedBook = styled.div`
  display: flex;
  margin-right: 30px;
  svg {
    width: 200px;
    height: 250px;
  }
  button {
    position: relative;
    right: 10px;
    bottom: 5px;
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    color: white;
    z-index: 5;
    background-color: ${(props) => props.theme.pointYellow};
  }
`;
interface RecommendedProps {
  RecommendBooks: OnBook[];
  click: boolean;
}
const Recommended: React.FC<RecommendedProps> = ({ RecommendBooks, click }) => {
  const [books, setBooks] = useState(RecommendBooks);
  const rmRecommend = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return click && books.length > 0 ? (
    <RecommendedWrapper>
      <RecommendList>
        {books.map((itm, idx) => (
          <RecedBook key={idx}>
            {itm.img}
            <button onClick={() => rmRecommend(itm.id)}>X</button>
          </RecedBook>
        ))}
      </RecommendList>
      <SaveBtnWrapper>
        <SaveBtn disabled={books.length <= 0}>저장하기</SaveBtn>
      </SaveBtnWrapper>
    </RecommendedWrapper>
  ) : (
    <NoRecommend>추천 책 목록이 없습니다.</NoRecommend>
  );
};

export default Recommended;
