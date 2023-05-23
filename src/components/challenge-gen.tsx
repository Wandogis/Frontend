import React, { useState, useCallback } from 'react';
import { styled } from "styled-components";
//import Modal from "./challenge-modal";

const ChallengeGen: React.FC = () => {
  const ChallengeWrapper = styled.div`
  width: 15%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  border-radius: 1rem;
  margin-top: 1.5rem;
  margin-left: 3rem;
  padding: 2rem;
`;

const GenerateButton = styled.button`
  width: 60%;
  height: 45px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

const openModal = () => {
  setIsOpenModal(true);
};

const closeModal = () => {
  setIsOpenModal(false);
};

//modal 사이 컴포넌트 하나 더 추가
  return (
    <ChallengeWrapper>
      <GenerateButton type="submit" onClick={openModal}>
        챌린지 생성하기
      </GenerateButton>
    </ChallengeWrapper>
  );
};
export default ChallengeGen;

/*
{isOpenModal && (
        <Modal onClose={closeModal}>
        </Modal>)}
    */