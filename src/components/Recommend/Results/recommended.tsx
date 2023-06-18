import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { OnBook } from "../../../assets/json/main-challengeList";
import { RecBtnProps } from "../recommend-input";
const RecommendedWrapper = styled.div``;
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "#FBC252",
    border: "none",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "1rem",
    transform: "translate(-50%, -50%)",
    width: "300px",
    textAlign: "center",
  },
};
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
  const [modalIsOpen, setIsOpen] = useState(false);

  const rmRecommend = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false); // close the modal after 2 seconds
    }, 500);
  };

  return click && books.length > 0 ? (
    <RecommendedWrapper>
      <RecommendList>
        {books.map((itm, idx) => (
          <RecedBook key={idx}>
            <img src={itm.img} alt="" width="200px" height="250px" />
            <button onClick={() => rmRecommend(itm.id)}>X</button>
          </RecedBook>
        ))}
      </RecommendList>
      <SaveBtnWrapper>
        <SaveBtn disabled={books.length <= 0} onClick={openModal}>
          저장하기
        </SaveBtn>
      </SaveBtnWrapper>
      <Modal
        isOpen={modalIsOpen}
        style={modalStyles}
        contentLabel="Save Confirmation Modal"
      >
        <p>저장되었습니다</p>
      </Modal>
    </RecommendedWrapper>
  ) : (
    <NoRecommend>추천 책 목록이 없습니다.</NoRecommend>
  );
};

export default Recommended;
