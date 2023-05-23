import React from 'react';
import HorizonLine from "../assets/horizonline"
import BookInfo from "../components/book-info"
import ChallengeGen from "../components/challenge-gen"

//메인 테마 설정
//HorizonLine 위에 메인 헤더 들어가야 함
const Bookdetail: React.FC = () => {
  return (
    <div>
      <HorizonLine width="100%" />
      <h2>도서 정보</h2>
      <BookInfo />
      <h2>모집중인 챌린지</h2>
      <HorizonLine width="100%" />
      <ChallengeGen />
    </div>
  );
};
export default Bookdetail;