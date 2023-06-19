import React, { useState, FormEvent } from 'react';
import { styled } from 'styled-components';

type GenerateProps = {
  closeModal: () => void;
  addChallenge: (challenge: ChallengeinfoData) => void;
};

interface ChallengeinfoData {
  id: number;
  challengeTitle: string;
  startDate: string;
  endDate: string;
  participant: number;
}

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
  font-size: 17px;
  font-weight: 800;
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

const GenerateModal: React.FC<GenerateProps> = ({ closeModal, addChallenge }) => {
  const [title, setTitle] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const submitChallenge = () => {
    const newChallenge = {
      id: Math.floor(Math.random() * 1000),
      challengeTitle: title,
      startDate,
      endDate,
      participant: 0
    };
    addChallenge(newChallenge);
    closeModal();
  };

  return (
    <ModalWrap>
      <ModalBackGround />
      <ModalContainer>
        <GenerateTitle>챌린지 생성</GenerateTitle>
        <ChallengeTitle>제목</ChallengeTitle>
        <Input
          placeholder="챌린지 제목을 입력해주세요."
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <ChallengeTitle>챌린지 시작일</ChallengeTitle>
        <Input
          type="date"
          required
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <ChallengeTitle>챌린지 종료일</ChallengeTitle>
        <Input
          type="date"
          required
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
        <ButtonContainer>
          <SubmitButton onClick={submitChallenge}>등록</SubmitButton>
          <CancelButton onClick={closeModal}>취소</CancelButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalWrap>
  );
};

export default GenerateModal;