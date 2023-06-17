import Book1 from "../jpeg/Book9.jpeg";
import Book2 from "../jpeg/Book3.jpeg";
import Book3 from "../jpeg/Book5.jpeg";
import Book4 from "../jpeg/Book7.jpeg";
import Book5 from "../jpeg/Book10.jpeg";
export interface challengeBook {
  id: number;
  img: string;
  title: string;
  view: number;
  date: string;
  endDate: string;
  progress: number;
}

export const preBooks: challengeBook[] = [
  {
    id: 1,
    img: Book1,
    view: 134,
    title: "메리골드 마음 세탁소",
    date: "2023-05-25",
    endDate: "2023-06-10",
    progress: 0,
  },
  {
    id: 5,
    img: Book2,
    title: "이끼숲",
    view: 102,
    date: "2023-06-03",
    endDate: "2023-06-20",
    progress: 0,
  },
];

export const ingBook: challengeBook[] = [
  {
    id: 2,
    img: Book3,
    title: "정리하는 뇌",
    view: 124,
    date: "2023-05-12",
    endDate: "2023-07-21",
    progress: 55,
  },
  {
    id: 4,
    img: Book4,
    title: "역행자",
    view: 321,
    date: "2023-04-19",
    endDate: "2023-06-30",
    progress: 82,
  },
];
export const edBook: challengeBook[] = [
  {
    id: 3,
    img: Book5,
    title: "사고의 본질",
    view: 500,
    date: "2023-03-07",
    endDate: "2023-03-20",
    progress: 100,
  },
];
