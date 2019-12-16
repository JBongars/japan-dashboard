import fetch from "isomorphic-unfetch";
import config from "../config/index.json";
import useMemoAsync from "../utils/useMemoAsync";

import {
  Prefecture,
  PrefectureResponse,
  PrefecturePopulation,
  PrefecturePopulationResponse
} from "../types";

const getPrefecturesInner = async (): Promise<Prefecture[]> => {
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
};

const getBasePrefecture = (): Prefecture => ({
  prefectureDetails: {
    iso: "all"
  }
});

const getPrefecturePopulationByIsoCodeInner = async (
  iso: string
): Promise<PrefecturePopulation[]> => {
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
  return data.result;
};

const getPrefectures = useMemoAsync(getPrefecturesInner);
const getPrefecturePopulationByIsoCode = useMemoAsync(
  getPrefecturePopulationByIsoCodeInner
);

export {
  getPrefectures,
  getBasePrefecture,
  getPrefecturePopulationByIsoCode,
  getPrefecturesInner,
  getPrefecturePopulationByIsoCodeInner
};
