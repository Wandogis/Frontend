import { profileData } from "../../assets/json/profile";
import React from "react";
import styled from "styled-components";

const MainProfileWrapper = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoutBtn = styled.button`
  border: none;
  background-color: white;
  color: ${(props) => props.theme.pointYellow};
  font-weight: 600;
  font-size: 18px;
  margin-right: 70px;
`;

const LetterWrapper = styled.div`
  padding-right: 15px;
`;
const FontWrapper = styled.div`
  text-align: right;
  font-weight: 600;
  color: #64655f;
`;
const ProfileName = styled(FontWrapper)`
  color: black;
  font-size: 18px;
`;

const ReadBookNum = styled(FontWrapper)`
  font-size: 16px;
`;
const RankNum = styled(FontWrapper)`
  font-size: 14px;
`;

interface ProfileProps {
  onLogin: (logout: boolean) => void;
}
const MainProfile: React.FC<ProfileProps> = ({ onLogin }) => {
  return (
    <MainProfileWrapper>
      <LogoutBtn onClick={() => onLogin(false)}>로그아웃</LogoutBtn>
      <LetterWrapper>
        <ProfileName>{profileData.nickname}</ProfileName>
        <ReadBookNum>{`지금까지 읽은 책 ${profileData.readnum.toLocaleString(
          "ko-KR"
        )} 권 📫`}</ReadBookNum>
        <RankNum>{`오늘의 순위 ${profileData.rank.toLocaleString(
          "ko-KR"
        )}`}</RankNum>
      </LetterWrapper>
      <div>{profileData.profileImg}</div>
    </MainProfileWrapper>
  );
};

export default MainProfile;
