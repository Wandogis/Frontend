import { ReactComponent as Logo } from "../../assets/main-logo.svg";
import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import { UilSearchAlt } from "@iconscout/react-unicons";

const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 80px;
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
