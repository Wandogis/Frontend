import { ReactComponent as Avatar } from "../../assets/svg/AvatarsProfile.svg";

interface ProfileData {
  profileImg: JSX.Element;
  nickname: string;
  readPage: number;
}

export const profileData: ProfileData = {
  profileImg: <Avatar />,
  nickname: "완독이",
  readPage: 20,
};