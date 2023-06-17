import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { OnBook } from "../../assets/json/main-challengeList";

interface OnchallengProps {
  Booklist: OnBook[];
  Ongoing: boolean;
}
const OnChallengeWrapper = styled.div`
  margin: 2rem 3rem 0 3rem;
`;

const OnHeader = styled.div`
  display: flex;
  height: 30px;
  align-items: end;
  div {
    font-size: 18px;
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;

const Onbtn = styled.button`
  border: none;
  font-size: 14px;
  font-weight: 600;
  background-color: #11ffee00;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  p {
    margin: 0;
    padding-bottom: 3px;
  }
`;

const BookListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 0 1rem;
`;
const BookImgBtn = styled(Onbtn)`
  svg {
    width: 200px;
    height: 250px;
  }
`;

const OnChallenge: React.FC<OnchallengProps> = ({ Booklist, Ongoing }) => {
  const [sorting, setSorting] = useState<boolean>(true);
  const [booklist, setBooklist] = useState<OnBook[]>(Booklist);

  const navigate = useNavigate();

  const Link = "moreChallenge";

  const handleMoreBtn = () => {
    navigate(`/${Link}`, { state: { Ongoing } }); // passing data as state
  };

  const onClick = (Sortby: boolean) => {
    setSorting(Sortby);
  };

  useEffect(() => {
    let sortedBooklist: OnBook[];
    if (sorting) {
      sortedBooklist = [...Booklist].sort((a, b) => b.view - a.view);
    } else {
      sortedBooklist = [...Booklist].sort(
        (a, b) => b.date.getTime() - a.date.getTime()
      );
    }
    setBooklist(sortedBooklist);
  }, [sorting, Booklist]);

  return (
    <OnChallengeWrapper>
      <OnHeader>
        <div>{Ongoing ? "진행 중인 챌린지" : "진행 예정 챌린지"}</div>
        <Onbtn onClick={handleMoreBtn}>더보기</Onbtn>
      </OnHeader>
      <BtnWrapper>
        <Onbtn onClick={() => onClick(true)}>인기순</Onbtn>
        <p>|</p>
        <Onbtn onClick={() => onClick(false)}>최신순</Onbtn>
      </BtnWrapper>
      <BookListWrapper>
        {booklist.map((itm) => (
          <BookImgBtn key={itm.id}>
            <img src={itm.img} alt="" width="200px" height="250px" />
          </BookImgBtn>
        ))}
      </BookListWrapper>
    </OnChallengeWrapper>
  );
};

export default OnChallenge;
