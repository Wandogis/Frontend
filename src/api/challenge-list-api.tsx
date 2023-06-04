import React from "react";
import axios from "axios";

const getChallengeList = async () => {
  try {
    const response = await axios.get("/api/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching memo data: ", error);
  }
};

export default getChallengeList;
