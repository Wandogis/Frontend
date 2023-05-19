import { ReactComponent as Avatar } from "../assets/AvatarsProfile.svg";

interface ProfileData {
  profileImg: JSX.Element;
  nickname: string;
  readnum: number;
  rank: number;
  fire: boolean;
}

export const profileData: ProfileData = {
  profileImg: <Avatar />,
  nickname: "완독이",
  readnum: 20,
  rank: 3249,
  fire: true,
};
