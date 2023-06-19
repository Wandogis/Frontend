interface ChallengePost {
  id: number;
  author: string;
  date: string;
  content: string;
}

export const ChallengePostList: ChallengePost[] = [
  {
    id: 1,
    author: "완",
    date: "2023-06-17",
    content: "첫 번째 글입니다."
  },
  {
    id: 2,
    author: "독",
    date: "2023-06-19",
    content: "두 번째 글입니다."
  },
];