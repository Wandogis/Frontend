import React, { useState } from "react";
import { ReactComponent as Book1 } from "../assets/book1.svg";
import { ReactComponent as Book2 } from "../assets/book2.svg";
import { ReactComponent as Book3 } from "../assets/book3.svg";
import { styled } from "styled-components";

interface OnBook {
  id: number;
  img: JSX.Element;
  view: number;
  date: Date;
}
const OnChallengeWrapper = styled.div`
  margin: 1rem 3rem 0 3rem;
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
    height: 300px;
  }
`;

const OnChallenge: React.FC = () => {
  const [sorting, setSorting] = useState<boolean>(true);
  const onClick = (Sortby: boolean) => {
    setSorting(Sortby);
  };
  const onGoingBook: OnBook[] = [
    {
      id: 1,
      img: <Book1 />,
      view: 134,
      date: new Date("2023-03-20"),
    },
    {
      id: 2,
      img: <Book2 />,
      view: 124,
      date: new Date("2023-03-12"),
    },
    {
      id: 3,
      img: <Book3 />,
      view: 500,
      date: new Date("2023-03-07"),
    },
    {
      id: 4,
      img: <Book1 />,
      view: 321,
      date: new Date("2023-03-19"),
    },
    {
      id: 5,
      img: <Book2 />,
      view: 102,
      date: new Date("2023-03-11"),
    },
  ];

  return (
    <OnChallengeWrapper>
      <OnHeader>
        <div>진행 중인 챌린지</div>
        <Onbtn>더보기</Onbtn>
      </OnHeader>
      <BtnWrapper>
        <Onbtn onClick={() => onClick(true)}>인기순</Onbtn>
        <p>|</p>
        <Onbtn onClick={() => onClick(false)}>최신순</Onbtn>
      </BtnWrapper>
      <BookListWrapper>
        {onGoingBook.map((itm) => (
          <BookImgBtn key={itm.id}>{itm.img}</BookImgBtn>
        ))}
      </BookListWrapper>
    </OnChallengeWrapper>
  );
};

export default OnChallenge;
