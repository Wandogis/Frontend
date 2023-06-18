import React from 'react';
import styled from 'styled-components';

const ChallengeParticipantWrapper = styled.div`
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
  flex: 1;
`;

const ParticipantNickname = styled.div`
  font-weight: bold;
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

const ProgressWrapper = styled.div`
  width: 100%;
  height: 25px;
  background: #e0e0e0;
  border-radius: 15px;
  margin-left: 10px;
  margin-top: 1rem;
  position: relative;
  display: flex;
`;

const ProgressBar = styled.div<{percentage: number}>`
  width: ${props => props.percentage}%;
  height: 100%;
  background: ${(props) => props.theme.mainYellow};
  border-radius: 15px;
  position: absolute;
`;

const ProgressText = styled.span`
  font-size: 17px;
  font-weight: 600;
  z-index: 1;
  margin-left: 10px;
`;

const ParticipantList: React.FC<ParticipantProps> = ({ totalPage, participantDataList }) => {
  return (
    <ChallengeParticipantWrapper>
      {participantDataList.map((participant) => {
        const achievementRate = (participant.readPage / totalPage) * 100;

        return (
          <ParticipantItemWrapper key={participant.id}>
            {participant.profileImg}
            <ParticipantInfoWrapper>
              <ParticipantNickname>{participant.nickname} 님</ParticipantNickname>
              <ProgressWrapper>
                <ProgressBar percentage={achievementRate} />
                <ProgressText>{Math.round(achievementRate)}%</ProgressText>
              </ProgressWrapper>
            </ParticipantInfoWrapper>
          </ParticipantItemWrapper>
        );
      })}
    </ChallengeParticipantWrapper>
  );
}

export default ParticipantList;
