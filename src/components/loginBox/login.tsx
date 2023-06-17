import React, { useState } from "react";
import { Calender } from "../bookCalendar/calendar-profile";
import { styled } from "styled-components";
import MainProfile from "../mainComponent/main-profile";
import kakaoLoginBtn from "../../assets/kakaoLoginBtn.png";
import naverLoginBtn from "../../assets/naverLoginBtn.png";

const ProfilCalWrapper = styled.div`
  width: 30%;
  margin: 1.5rem 3rem 0 1rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
`;

const NoLoginProfileWrapper = styled(ProfilCalWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginMent = styled.div`
  text-align: center;
  font-size: 24px;
  color: #4e4e4e;
  font-weight: 600;
  line-height: 35px;
`;

const DetailMent = styled.div`
  font-size: 16px;
  color: #898989;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 60px;
  text-align: center;
`;

const StartMent = styled.div`
  font-size: 18px;
  color: #4e4e4e;
  font-weight: 700;
  text-align: center;
`;
const LoginBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const LoginBtn = styled.button`
  width: 180px;
  height: 45px;
  background-color: white;
  border: none;
  margin-right: 10px;
`;

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(false);

  const onLogin = (logout: boolean) => {
    setIsLogin(logout);
  };

  return isLogin ? (
    <ProfilCalWrapper>
      <MainProfile onLogin={onLogin} />
      <Calender />
    </ProfilCalWrapper>
  ) : (
    <NoLoginProfileWrapper>
      <div>
        <LoginMent>📚독서 습관 기르기📚</LoginMent>
        <LoginMent>지금 시작하세요!</LoginMent>
        <DetailMent>도서 추천부터 챌린지까지</DetailMent>
        <StartMent>3초 만에 시작하기 🚀</StartMent>
        <LoginBtnWrapper>
          <LoginBtn onClick={() => onLogin(true)}>
            <img src={kakaoLoginBtn} alt="" />
          </LoginBtn>
          <LoginBtn
            onClick={() => {
              onLogin(true);
            }}
          >
            <img src={naverLoginBtn} alt="" />
          </LoginBtn>
        </LoginBtnWrapper>
      </div>
    </NoLoginProfileWrapper>
  );
};

export default Login;
