import { ReactComponent as Logo } from "../assets/main-logo.svg";
import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import { UilSearchAlt } from "@iconscout/react-unicons";

interface SearchData {
  query: string;
}
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
`;
const SearchButton = styled.button`
  flex: 1;
  width: 45px;
  height: 45px;
  color: white;
  background-color: ${(props) => props.theme.mainYellow};
  border: none;
  border-radius: 50%;
`;
const SearchInput = styled.input`
  border: 2px solid ${(props) => props.theme.mainYellow};
  width: 720px;
  height: 40px;
  margin-right: 15px;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: black;
  padding-left: 20px;
`;
const LogoWrapper = styled.div`
  margin-right: 100px;
`;

const InputBtnWrapper = styled.div`
  display: flex;
  justify-conent: center;
  text-align: center;
`;

const MainHeader: React.FC = () => {
  const [searchData, setSearchData] = useState<SearchData>({ query: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Search query submitted:", searchData.query);
    // 검색 api
  };

  return (
    <HeaderWrapper>
      <LogoWrapper>
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
    </HeaderWrapper>
  );
};

export default MainHeader;
