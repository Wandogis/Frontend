import MainHeader from "../components/mainComponent/main-header";
import MainMenuBar from "../components/mainComponent/main-menu-bar";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import { LoadingContext } from "../components/loading-context";
import { BeatLoader } from "react-spinners";
import React, { useContext } from "react";

const List = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    margin-right: 30px;
    font-weight: 600;
    img {
      border-radius: 1rem;
    }
  }
`;

interface SearchResultData {
  img: string;
  title: string;
  isbn: string;
}

const SearchPage: React.FC = () => {
  const location = useLocation();
  let searchData: SearchResultData[] | undefined;
  if (location.state && "searchData" in location.state) {
    searchData = location.state.searchData;
  }
  const { isLoading } = useContext(LoadingContext);

  return (
    <div>
      <MainHeader />
      <MainMenuBar />
      <h4 style={{ marginTop: "3rem", marginLeft: "3rem" }}>검색 결과</h4>
      {isLoading ? (
        <BeatLoader color={"#123abc"} loading={isLoading} size={15} />
      ) : (
        <List>
          {Array.isArray(searchData)
            ? searchData.map((item: SearchResultData, index: number) => (
                <div key={index}>
                  <img src={item.img} alt="" width="200px" height="250px" />
                  <div style={{ width: "200px" }}>{item.title}</div>
                </div>
              ))
            : "No data found or data is not an array"}
        </List>
      )}
    </div>
  );
};

export default SearchPage;
