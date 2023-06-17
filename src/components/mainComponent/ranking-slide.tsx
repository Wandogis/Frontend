import React, { useState, useEffect, memo, useMemo } from "react";
import styled from "styled-components";
import { ReactComponent as Fire } from "../../assets/svg/fire.svg";
import { UilAngleDown } from "@iconscout/react-unicons";
import UserImg from "../../assets/user.png";
const RankingBoxWrapper = styled.div`
  position: relative;
  width: 30%;
`;

const RankingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 40px;
  background-color: white;
  margin-right: 20px;
  border-radius: 0.8rem;
`;

const RankingP = styled.div`
  display: flex;
  align-items: center;
`;

const RankingText = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const RankingNum = styled(RankingText)`
  width: 25px;
  font-size: 18px;
  margin-right: 15px;
  margin-left: 10px;
`;

const RankingName = styled(RankingText)`
  width: 60px;
  font-size: 16px;
  margin-right: 10px;
  margin-left: 30px;
`;
const RankingFire = styled(RankingText)``;
const RankingChallenge = styled(RankingText)`
  margin-left: 10px;
  font-size: 12px;
  color: #7c7c7c;
`;

const MoreRankingBtn = styled.button`
  background-color: #11ffee00;
  border: none;
  margin-right: 10px;
`;

const MoreRanking = styled.ul`
  position: absolute;
  align-items: center;
  top: 110%;
  width: 350px;
  right: 5%;
  height: 300px;
  background-color: white;
  z-index: 99;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 1rem;
  overflow: scroll;
  padding: 5px;
  li {
    display: flex;
    padding: 8px;
    border-bottom: 0.5px solid #cfcfcf;
  }
  li: last-child {
    border: none;
  }
`;

interface Ranking {
  id: number;
  name: string;
  img: string;
  fire: boolean;
  challenge: number;
}

const RankingItem: React.FC<{ ranking: Ranking }> = memo(({ ranking }) => (
  <>
    <RankingNum>{ranking.id}.</RankingNum>
    <img src={ranking.img} alt="" width="24px" height="24px" />
    <RankingName>{ranking.name}</RankingName>
    <RankingFire>{ranking.fire && <Fire />}</RankingFire>
    <RankingChallenge>{ranking.challenge}개의 챌린지 완료</RankingChallenge>
  </>
));

const RankingSlide: React.FC = () => {
  const [rankingOpen, setRankingOpen] = useState<boolean>(false);
  const onRankingClick = () => {
    setRankingOpen((prev) => !prev);
  };
  const [currentRankingIndex, setCurrentRankingIndex] = useState<number>(0);
  const rankings: Ranking[] = useMemo(
    () => [
      {
        id: 1,
        name: "짱구1등",
        img: UserImg,
        fire: true,
        challenge: 20,
      },
      {
        id: 2,
        name: "짱구2등",
        img: UserImg,
        fire: true,
        challenge: 19,
      },
      {
        id: 3,
        name: "짱구3등",
        img: UserImg,
        fire: true,
        challenge: 18,
      },
      {
        id: 4,
        name: "짱구4등",
        img: UserImg,
        fire: true,
        challenge: 17,
      },
      {
        id: 5,
        name: "짱구5등",
        img: UserImg,
        fire: true,
        challenge: 12,
      },
      {
        id: 6,
        name: "짱구6등",
        img: UserImg,
        fire: true,
        challenge: 15,
      },
      {
        id: 7,
        name: "짱구7등",
        img: UserImg,
        fire: true,
        challenge: 12,
      },
      {
        id: 8,
        name: "짱구8등",
        img: UserImg,
        fire: true,
        challenge: 11,
      },
      {
        id: 9,
        name: "짱구9등",
        img: UserImg,
        fire: true,
        challenge: 5,
      },
      {
        id: 10,
        name: "짱구10등",
        img: UserImg,
        fire: true,
        challenge: 2,
      },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRankingIndex((prevIndex) => (prevIndex + 1) % rankings.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [rankings]);

  return (
    <RankingBoxWrapper>
      <RankingBox>
        <RankingP>
          <RankingItem ranking={rankings[currentRankingIndex]} />
        </RankingP>
        <div>
          <MoreRankingBtn onClick={onRankingClick}>
            <UilAngleDown />
          </MoreRankingBtn>
        </div>
      </RankingBox>
      {rankingOpen && (
        <MoreRanking>
          {rankings.map((itm) => (
            <li key={itm.id}>
              <RankingItem ranking={itm} />
            </li>
          ))}
        </MoreRanking>
      )}
    </RankingBoxWrapper>
  );
};

export default RankingSlide;
