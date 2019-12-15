import fetch from "isomorphic-unfetch";
import config from "../config/index.json";

import {
  Prefecture,
  PrefectureResponse,
  PrefecturePopulation,
  PrefecturePopulationResponse
} from "../types";

const getPrefectures = async (): Promise<Prefecture[]> => {
  try {
    console.log("Fetching prefectures...");
    const dataResponse: Response = await fetch(
      `${config.japanDashboardApi.host}/prefecture`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Credentials": "true"
        }
      }
    );

    const data: PrefectureResponse = await dataResponse.json();

    console.log(data);

    return data.result;
  } catch (err) {
    console.error(err);
  }
  return [];
};

const getPrefecturePopulationByIsoCode = async (
  iso: string
): Promise<PrefecturePopulation[]> => {
  try {
    const dataResponse: Response = await fetch(
      `${config.japanDashboardApi.host}/prefecture/${iso}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Credentials": "true"
        }
      }
    );
    const data: PrefecturePopulationResponse = await dataResponse.json();

    console.log(`Fetch prefecture iso=${iso}`);
    console.log(data);

    return data.result;
  } catch (err) {
    console.error(err);
  }

  return [];
};

export { getPrefectures, getPrefecturePopulationByIsoCode };
