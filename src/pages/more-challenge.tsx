import React from "react";
import MainHeader from "../components/mainComponent/main-header";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import { useLocation } from "react-router-dom";
import ChallengeList from "../components/challenge/challenge-list";

const MoreChallenge: React.FC = () => {
  const location = useLocation();
  let isOngoing: boolean = location.state?.Ongoing;

  return (
    <div>
      <MainHeader />
      <MainMenuBar />
      <ChallengeList isOngoing={isOngoing} />
    </div>
  );
};

export default MoreChallenge;
