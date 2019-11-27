import config from "../config/index.json";
import fetch from "isomorphic-unfetch";

import {
  Prefecture,
  PrefectureResponse,
  PrefecturePopulation,
  PrefecturePopulationResponse
} from "../types";

const getPrefectures = async (): Promise<Prefecture[]> => {
  console.log("hit service!");

  try {
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

    console.log(dataResponse);
    const data: PrefectureResponse = await dataResponse.json();
    const result: Prefecture[] = data.result;
    return result;
  } catch (err) {
    console.error(err);
  }
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

    const result: PrefecturePopulation[] = data.result;
    return result;
  } catch (err) {
    console.error(err);
  }
};

export { getPrefectures, getPrefecturePopulationByIsoCode };
