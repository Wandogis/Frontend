import { ReactComponent as Book1 } from "../../assets/svg/book1.svg";
import { ReactComponent as Book2 } from "../../assets/svg/book2.svg";
import { ReactComponent as Book3 } from "../../assets/svg/book3.svg";

export interface OnBook {
  id: number;
  img: JSX.Element;
  title: string;
  view: number;
  date: string;
  endDate: string;
  progress: number;
}

export const preBooks: OnBook[] = [
  {
    id: 1,
    img: <Book1 />,
    view: 134,
    title: "거인의 노트",
    date: "2023-05-25",
    endDate: "2023-06-10",
    progress: 0,
  },
  {
    id: 5,
    img: <Book2 />,
    title: "내가 너의 행복이 될게",
    view: 102,
    date: "2023-06-03",
    endDate: "2023-06-20",
    progress: 0,
  },
];

export const ingBook: OnBook[] = [
  {
    id: 2,
    img: <Book2 />,
    title: "내가 너의 행복이 될게",
    view: 124,
    date: "2023-05-12",
    endDate: "2023-06-01",
    progress: 55,
  },
  {
    id: 4,
    img: <Book1 />,
    title: "거인의 노트",
    view: 321,
    date: "2023-04-19",
    endDate: "2023-05-30",
    progress: 82,
  },
];
export const edBook: OnBook[] = [
  {
    id: 3,
    img: <Book3 />,
    title: "이끼숲",
    view: 500,
    date: "2023-03-07",
    endDate: "2023-03-20",
    progress: 100,
  },
];
