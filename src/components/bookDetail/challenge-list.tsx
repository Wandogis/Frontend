import React, { useState } from "react";
import styled from "styled-components";
import HorizonLine from "../../assets/json/horizonline";
import { ingChallengeList } from "../../assets/json/ing-challenge-list";
import ApplyModal from "./challenge-apply-modal";

interface ChallengeData {
  id: number;
  challengeTitle: string;
  startDate: string;
  endDate: string;
  participant: number;
}

const ChallengeList: React.FC = () => {
  const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const ChallengeListWrapper = styled.div`
    width: 250px;
    height: 170px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 1rem;
    margin-top: 1rem;
    margin-left: 2rem;
    padding: 2rem;
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  `;

  const ApplyButton = styled.button`
    width: 150px;
    height: 40px;
    color: white;
    font-weight: 600;
    background-color: ${(props) => props.theme.mainYellow};
    border: none;
    border-radius: 0.7rem;
    cursor: pointer;
  `;

  const ChallengeTitle = styled.div`
    font-size: 20px;
    font-weight: 800;
  `;

  const ChallengeListDetail = styled.div`
    font-weight: 500;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
  `;

  const RightAlignText = styled.span`
    text-align: right;
    font-weight: 600;
  `;

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedChallengeId, setSelectedChallengeId] = useState<number | null>(
    null
  );
  const [challenges, setChallenges] =
    useState<ChallengeData[]>(ingChallengeList);

  const openModal = (id: number) => {
    setIsOpenModal(true);
    setSelectedChallengeId(id);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectedChallengeId(null);
  };

  const submitApply = (id: number) => {
    setChallenges(
      challenges.map((challenge) =>
        challenge.id === id
          ? { ...challenge, participant: challenge.participant + 1 }
          : challenge
      )
    );
    closeModal();
  };

  return (
    <ListContainer>
      {challenges.map((challenge: ChallengeData) => (
        <ChallengeListWrapper key={challenge.id}>
          <ChallengeTitle>{challenge.challengeTitle}</ChallengeTitle>
          <HorizonLine borderBottom="1px solid #575757" />
          <ChallengeListDetail>
            진행 기간{" "}
            <RightAlignText>
              {challenge.startDate}-{challenge.endDate}
            </RightAlignText>
          </ChallengeListDetail>
          <ChallengeListDetail>
            신청 인원 <RightAlignText>{challenge.participant}명</RightAlignText>
          </ChallengeListDetail>
          <ButtonWrapper>
            <ApplyButton onClick={() => openModal(challenge.id)}>
              챌린지 신청하기
            </ApplyButton>
            {isOpenModal && selectedChallengeId === challenge.id && (
              <ApplyModal
                id={challenge.id}
                closeModal={closeModal}
                submitApply={submitApply}
              />
            )}
          </ButtonWrapper>
        </ChallengeListWrapper>
      ))}
    </ListContainer>
  );
};
export default ChallengeList;
