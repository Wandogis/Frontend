import { ReactComponent as Logo } from "../../assets/svg/main-logo.svg";
import React, { useState, FormEvent, useContext } from "react";
import styled from "styled-components";
import { UilSearchAlt } from "@iconscout/react-unicons";
import { useNavigate, Navigate } from "react-router-dom";
import getChallengeList from "../../api/search-data";
import { BeatLoader } from "react-spinners";
import { LoadingContext } from "../loading-context";

const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const LogoWrapper = styled.button`
  position: absolute;
  left: 80px;
  background-color: transparent;
  border: none;
`;

const InputBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const SearchButton = styled.button`
  width: 45px;
  height: 45px;
  color: white;
  background-color: ${(props) => props.theme.mainYellow};
  border: none;
  border-radius: 50%;
`;
const SearchInput = styled.input`
  flex: 1;
  display: flex;
  border: 2px solid ${(props) => props.theme.mainYellow};
  width: 650px;
  height: 40px;
  margin-right: 15px;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: black;
  padding-left: 20px;
`;

interface SearchData {
  query: string;
}

interface SearchResultData {
  img: string;
  title: string;
  isbn: string;
}

const MainHeader: React.FC = () => {
  const { setIsLoading, isLoading } = useContext(LoadingContext);

  const [searchData, setSearchData] = useState<SearchData>({ query: "" });
  const [resultData, setResultData] = useState<SearchResultData[] | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await getChallengeList(searchData.query);
    setResultData(result.item);
    setIsLoading(false);
  };

  const handleClick = () => {
    navigate(`/main`, { replace: true }); // 이동하고 싶은 경로
  };

  return (
    <HeaderWrapper>
      {resultData && (
        <Navigate to="/search" state={{ searchData: resultData }} replace />
      )}
      <LogoWrapper onClick={handleClick}>
        <Logo />
      </LogoWrapper>
      <form onSubmit={handleSubmit}>
        <InputBtnWrapper>
          <SearchInput
            type="text"
            id="query"
            name="query"
            placeholder="도서 검색"
            value={searchData.query}
            onChange={handleChange}
            required
          />
          <SearchButton type="submit">
            <UilSearchAlt />
          </SearchButton>
        </InputBtnWrapper>
      </form>
      <BeatLoader color={"FFB100"} loading={isLoading} size={12} />
    </HeaderWrapper>
  );
};

export default MainHeader;
