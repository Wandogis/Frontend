import { ReactComponent as Book1 } from "../assets/book1.svg";
import { ReactComponent as Book2 } from "../assets/book2.svg";
import { ReactComponent as Book3 } from "../assets/book3.svg";

export interface OnBook {
  id: number;
  img: JSX.Element;
  view: number;
  date: Date;
}

export const onGoingBook: OnBook[] = [
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

export const ExpectBook: OnBook[] = [
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
