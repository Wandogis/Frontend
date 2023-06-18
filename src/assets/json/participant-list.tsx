import { ReactComponent as Avatar } from "../../assets/svg/AvatarsProfile.svg";

interface ParticipantData {
  id: number;
  profileImg: JSX.Element;
  nickname: string;
  readPage: number;
}

export const ParticipantDataList: ParticipantData[] = [
  {
    id: 1,
    profileImg: <Avatar />,
    nickname: "완",
    readPage: 100,
  },
  {
    id: 2,
    profileImg: <Avatar />,
    nickname: "독",
    readPage: 150,
  },
  {
    id: 3,
    profileImg: <Avatar />,
    nickname: "이",
    readPage: 200,
  },
]