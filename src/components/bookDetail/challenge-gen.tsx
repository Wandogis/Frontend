import React, { useState } from 'react';
import { styled } from "styled-components";
import GenerateModal from "./challenge-gen-modal";

const ChallengeGen: React.FC = () => {
  const ChallengeWrapper = styled.div`
  width: 250px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-left: 2rem;
  padding: 2rem;
`;

const GenerateButton = styled.button`
  width: 150px;
  height: 40px;
  color: white;
  font-weight: 600;
  background-color: ${(props) => props.theme.mainYellow};
  border: none;
  border-radius: 0.7rem;
  cursor: pointer;
`;

const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

const openModal = () => {
  setIsOpenModal(true);
};

const closeModal = () => {
  setIsOpenModal(false);
};

  return (
    <ChallengeWrapper>
      <GenerateButton onClick={openModal}>
        챌린지 생성하기
      </GenerateButton>
      {isOpenModal && (
        <GenerateModal
          closeModal={closeModal}
        />
      )}
    </ChallengeWrapper>
  );
};
export default ChallengeGen;