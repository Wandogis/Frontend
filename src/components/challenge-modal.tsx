import React from 'react';
import { styled } from 'styled-components';

type Props = {
  closeModal: () => void;
  handleSubmit: () => void;
};

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled.div`
  border-radius: 1rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 350px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const GenerateTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 0.5rem;
`;

const ChallengeTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  text-align: left;
`;

const Input = styled.input`
  width: 95%;
  padding: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ccc;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const Modal: React.FC<Props> = ({ closeModal, handleSubmit }) => {
  return (
    <ModalWrap>
      <ModalBackGround />
      <ModalContainer>
        <GenerateTitle>챌린지 생성</GenerateTitle>
        <ChallengeTitle>제목</ChallengeTitle>
        <Input placeholder="챌린지 제목을 입력해주세요." />
        <ChallengeTitle>챌린지 시작일</ChallengeTitle>
        <Input type="date" />
        <ChallengeTitle>챌린지 종료일</ChallengeTitle>
        <Input type="date" />
        <ButtonContainer>
          <Button onClick={handleSubmit}>등록</Button>
          <Button onClick={closeModal}>취소</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalWrap>
  );
};

export default Modal;