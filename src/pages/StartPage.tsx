import React, { FC, useState } from "react";
import styled, { keyframes } from "styled-components";
import Start from "../assets/start.png";
import { useNavigate } from "react-router-dom";

// Define our keyframes
const floatUp = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Create a styled component
const FloatingElement = styled.div<{ start: boolean }>`
  width: 500px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainGreen};
  border-radius: 1rem;
  font-weight: 700;
  color: white;
  font-size: 30px;
  animation: ${floatUp} 2s ease-in-out forwards;
`;

const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${Start}) no-repeat center center/cover;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const StBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  border: none;
  color: white;
  width: 120px;
  height: 50px;
  border-radius: 0.6rem;
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => props.theme.pointYellow};
`;

const StartPage: FC = () => {
  const [startFloat, setStartFloat] = useState(true);
  const navigate = useNavigate(); // Instantiate navigate from react-router-dom

  const handleButtonClick = () => {
    setStartFloat(false);
    setTimeout(() => {
      navigate("/main"); // Navigate to '/main' after 2 seconds
    }, 2000);
  };

  return (
    <BackgroundImage
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FloatingElement start={startFloat}>
        <div>
          <Text>완독이에 오신 것을 환영합니다.</Text>
          <Text>책 추천과 챌린지를 한번에</Text>
          <Text>
            <StBtn onClick={handleButtonClick}>GO</StBtn>
          </Text>
        </div>
      </FloatingElement>
    </BackgroundImage>
  );
};

export default StartPage;
