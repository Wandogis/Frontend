import React from "react";
import { profileData } from "../../assets/json/profile";
import styled from "styled-components";
import Female from "../../assets/Female.png";
import rankImg from "../../assets/rankImg.png";
const ProfileWrapper = styled.div`
  width: 60%;
  background-color: white;
  height: 350px;
  margin-right: 1rem;
  border-radius: 1rem;
`;

const FontWrapper = styled.div`
  font-weight: 600;
  color: #64655f;
`;
const ProfileName = styled(FontWrapper)`
  color: black;
  font-size: 28px;
  margin-bottom: 3px;
`;

const ReadBookNum = styled(FontWrapper)`
  font-size: 18px;
`;
const RankNum = styled(FontWrapper)`
  font-size: 16px;
`;
const ProfileDetail = styled.div`
  margin-top: 15px;
`;
const Info = styled.div`
  margin: 35px;
`;
const AwardWrapper = styled.div`
  background-color: #fcf9e5;
  width: 90%;
  height: 120px;
  border-radius: 1rem;
  padding: 20px 10px 0 20px;
  color: #4f4f4f;
  font-weight: 600;

  p {
    margin-left: 20px;
  }
  .userrank {
    font-size: 14px;
    margin-left: 8px;
  }
`;
const Image = styled.div`
  margin-right: 25px;
  img {
    border-radius: 50%;
  }
`;

const MypageProfile: React.FC = () => {
  return (
    <ProfileWrapper>
      <Info style={{ display: "flex" }}>
        <Image>
          <img src={Female} alt="" />
        </Image>
        <ProfileDetail>
          <ProfileName>{profileData.nickname + " 님"}</ProfileName>
          <ReadBookNum>{`지금까지 읽은 책 ${profileData.readnum.toLocaleString(
            "ko-KR"
          )} 권 📫`}</ReadBookNum>
          <RankNum>{`오늘의 순위 ${profileData.rank.toLocaleString(
            "ko-KR"
          )}`}</RankNum>
        </ProfileDetail>
      </Info>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AwardWrapper>
          <div className="userrank">회원 등급 안내</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <img src={rankImg} alt="" />
            <p>1년동안 15개 이상의 챌린지를 완료하셨습니다.</p>
          </div>
        </AwardWrapper>
      </div>
    </ProfileWrapper>
  );
};

export default MypageProfile;
