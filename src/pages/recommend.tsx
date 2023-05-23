import React from "react";
import MainHeader from "../components/mainComponent/main-header";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import RecommendInput from "../components/Recommend/recommend-input";
const Recommend: React.FC = () => {
  return (
    <>
      <MainHeader />
      <MainMenuBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RecommendInput />
      </div>
    </>
  );
};

export default Recommend;
