import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';

type ApplyProps = {
  id: number;
  closeModal: () => void;
  submitApply: (id: number) => void;
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
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const ApplyTitle = styled.div`
  font-size: 17px;
  font-weight: 800;
  text-align: center;
  margin-top: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.mainYellow};
  border: 2px solid ${(props) => props.theme.mainYellow};
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: white;
`;

const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  border: 2px solid ${(props) => props.theme.mainYellow};
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.mainYellow};
`;

const ApplyModal: React.FC<ApplyProps> = ({ id, closeModal, submitApply }) => {

  const handleSubmit = () => {
    submitApply(id);
  };


  return (
    <ModalWrap>
      <ModalBackGround />
      <ModalContainer>
        <ApplyTitle>해당 독서 챌린지에 참여하시겠습니까?</ApplyTitle>
        <ButtonContainer>
          <SubmitButton onClick={handleSubmit}>확인</SubmitButton>
          <CancelButton onClick={closeModal}>취소</CancelButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalWrap>
  );
};

export default ApplyModal;