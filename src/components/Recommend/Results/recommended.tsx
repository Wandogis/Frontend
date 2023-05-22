import React, { useState } from "react";
import styled from "styled-components";
import { OnBook } from "../../../assets/main-challengeList";

const RecommendedWrapper = styled.div`
  display: flex;
  height: 300px;
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
  overflow-x: auto;
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
}
const Recommended: React.FC<RecommendedProps> = ({ RecommendBooks }) => {
  const [books, setBooks] = useState(RecommendBooks);

  const rmRecommend = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <RecommendedWrapper>
      {books.map((itm, idx) => (
        <RecedBook key={idx}>
          {itm.img}
          <button onClick={() => rmRecommend(itm.id)}>X</button>
        </RecedBook>
      ))}
    </RecommendedWrapper>
  );
};

export default Recommended;
