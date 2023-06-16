interface ingChallengeData {
  id: number;
  challengeTitle: string;
  startDate: string;
  endDate: string;
  participant: number;
}

export const ingChallengeList: ingChallengeData[] = [
  {
    id: 1,
    challengeTitle: "아자아자",
    startDate: "2023-05-13",
    endDate: "2023-05-19",
    participant: 2,
  },
  {
    id: 2,
    challengeTitle: "화이팅",
    startDate: "2023-05-05",
    endDate: "2023-05-19",
    participant: 3,
  },
];