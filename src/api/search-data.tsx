import axios from "axios";

const getChallengeList = async (searchData: string): Promise<any> => {
  try {
    const response = await axios.get(
      `https://wandogi-a23b1946bc85.herokuapp.com/search/book?query=${searchData}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching memo data: ", error);
  }
};

export default getChallengeList;
