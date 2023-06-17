import Book1 from "../jpeg/Book1.jpeg";
import Book2 from "../jpeg/Book2.jpeg";
import Book3 from "../jpeg/Book3.jpeg";
import Book4 from "../jpeg/book4.jpeg";
import Book5 from "../jpeg/Book5.jpeg";
import Book6 from "../jpeg/Book6.jpeg";
import Book7 from "../jpeg/Book7.jpeg";
import Book8 from "../jpeg/Book8.jpeg";
import Book9 from "../jpeg/Book9.jpeg";
import Book10 from "../jpeg/Book10.jpeg";
export interface OnBook {
  id: number;
  img: string;
  title: string;
  view: number;
  date: Date;
}

export const onGoingBook: OnBook[] = [
  {
    id: 1,
    img: Book1,
    view: 134,
    title: "거인의 노트",
    date: new Date("2023-03-20"),
  },
  {
    id: 2,
    img: Book2,
    title: "내가 너의 행복이 될게",
    view: 124,
    date: new Date("2023-03-12"),
  },
  {
    id: 3,
    img: Book3,
    title: "이끼숲",
    view: 500,
    date: new Date("2023-03-07"),
  },
  {
    id: 4,
    img: Book4,
    title: "아는만큼 보인다",
    view: 321,
    date: new Date("2023-03-19"),
  },
  {
    id: 5,
    img: Book5,
    title: "정리하는 뇌",
    view: 102,
    date: new Date("2023-03-11"),
  },
];

export const ExpectBook: OnBook[] = [
  {
    id: 1,
    img: Book6,
    view: 134,
    title: "최강의 인생",
    date: new Date("2023-03-20"),
  },
  {
    id: 2,
    img: Book7,
    title: "역행자",
    view: 124,
    date: new Date("2023-03-12"),
  },
  {
    id: 3,
    img: Book8,
    title: "내면 소통",
    view: 500,
    date: new Date("2023-03-07"),
  },
  {
    id: 4,
    img: Book9,
    title: "메리골드 마음 세탁소",
    view: 321,
    date: new Date("2023-03-19"),
  },
  {
    id: 5,
    img: Book10,
    title: "사고의 본질",
    view: 102,
    date: new Date("2023-03-11"),
  },
];
