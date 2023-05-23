import { ReactComponent as Book1 } from "../../assets/svg/book1.svg";
import { ReactComponent as Book2 } from "../../assets/svg/book2.svg";
import { ReactComponent as Book3 } from "../../assets/svg/book3.svg";

export interface OnBook {
  id: number;
  img: JSX.Element;
  title: string;
  view: number;
  date: Date;
}

export const onGoingBook: OnBook[] = [
  {
    id: 1,
    img: <Book1 />,
    view: 134,
    title: "거인의 노트",
    date: new Date("2023-03-20"),
  },
  {
    id: 2,
    img: <Book2 />,
    title: "내가 너의 행복이 될게",
    view: 124,
    date: new Date("2023-03-12"),
  },
  {
    id: 3,
    img: <Book3 />,
    title: "이끼숲",
    view: 500,
    date: new Date("2023-03-07"),
  },
  {
    id: 4,
    img: <Book1 />,
    title: "거인의 노트",
    view: 321,
    date: new Date("2023-03-19"),
  },
  {
    id: 5,
    img: <Book2 />,
    title: "내가 너의 행복이 될게",
    view: 102,
    date: new Date("2023-03-11"),
  },
];

export const ExpectBook: OnBook[] = [
  {
    id: 1,
    img: <Book1 />,
    view: 134,
    title: "거인의 노트",
    date: new Date("2023-03-20"),
  },
  {
    id: 2,
    img: <Book2 />,
    title: "내가 너의 행복이 될게",
    view: 124,
    date: new Date("2023-03-12"),
  },
  {
    id: 3,
    img: <Book3 />,
    title: "이끼숲",
    view: 500,
    date: new Date("2023-03-07"),
  },
  {
    id: 4,
    img: <Book1 />,
    title: "거인의 노트",
    view: 321,
    date: new Date("2023-03-19"),
  },
  {
    id: 5,
    img: <Book2 />,
    title: "내가 너의 행복이 될게",
    view: 102,
    date: new Date("2023-03-11"),
  },
];
