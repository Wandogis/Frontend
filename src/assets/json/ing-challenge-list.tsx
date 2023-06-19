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
    startDate: "2023-06-21",
    endDate: "2023-06-30",
    participant: 2,
  },
  {
    id: 2,
    challengeTitle: "화이팅",
    startDate: "2023-06-25",
    endDate: "2023-07-05",
    participant: 3,
  },
];