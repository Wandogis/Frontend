import React from 'react';
import styled from 'styled-components';

const ChallengeBookWrapper = styled.div`
  width: 22%;
  height: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin-top: 1.5rem;
  margin-left: 3rem;
  padding: 2rem;
  background-color: white;
`;

const ParticipantItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

const ParticipantInfoWrapper = styled.div`
  margin-left: 0.5rem;
`;

const ParticipantNickname = styled.div`
  font-weight: bold;
`;

const ParticipantPage = styled.div`
  color: gray;
`;

interface ParticipantProps {
  totalPage: number;
  participantDataList: ParticipantData[];
}

interface ParticipantData {
  id: number;
  profileImg: JSX.Element;
  nickname: string;
  readPage: number;
}

const ParticipantList: React.FC<ParticipantProps> = ({ totalPage, participantDataList }) => {
  return (
    <ChallengeBookWrapper>
      {participantDataList.map((participant) => {
        const achievementRate = (participant.readPage / totalPage) * 100;

        return (
          <ParticipantItemWrapper key={participant.id}>
            {participant.profileImg}
            <ParticipantInfoWrapper>
              <ParticipantNickname>{participant.nickname} 님</ParticipantNickname>
              <ParticipantPage>
                {achievementRate.toFixed(0)}%
              </ParticipantPage>
            </ParticipantInfoWrapper>
          </ParticipantItemWrapper>
        );
      })}
    </ChallengeBookWrapper>
  );
}

export default ParticipantList;
