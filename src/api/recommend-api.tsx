import axios, { AxiosResponse } from "axios";

interface IRecommendParams {
  recommendInfo: string;
  accessToken: string;
}

const postRecommend = async ({
  recommendInfo,
  accessToken,
}: IRecommendParams): Promise<AxiosResponse | void> => {
  try {
    return await axios.post(
      `http://43.201.80.154:80/memo?content=${recommendInfo}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (error) {
    console.error("Error occurred while posting recommend: ", error);
  }
};

interface IDeleteParams {
  deleteRecommendId: string;
  accessToken: string;
}

const deleteRecommendBook = async ({
  deleteRecommendId,
  accessToken,
}: IDeleteParams): Promise<AxiosResponse | void> => {
  try {
    return await axios.delete(
      `http://43.201.80.154:80/memo/${deleteRecommendId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (error) {
    console.error("Error occurred while deleting recommend book: ", error);
  }
};

export { postRecommend, deleteRecommendBook };
