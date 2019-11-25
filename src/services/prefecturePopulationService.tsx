import config from "../config";
import * as rp from "request-promise-native";
import {
  Prefecture,
  PrefectureResponse,
  PrefecturePopulation,
  PrefecturePopulationResponse
} from "../types";

const getPrefectures = async (): Promise<Prefecture[]> => {
  const data: PrefectureResponse = await rp.get(
    `${config.japanDashboardApi.host}/prefecture`,
    {
      json: true,
      simple: true
    }
  );

  const result: Prefecture[] = data.result;
  return result;
};

const getPrefecturePopulationByIsoCode = async (
  iso: string
): Promise<PrefecturePopulation[]> => {
  const data: PrefecturePopulationResponse = await rp.get(
    `${config.japanDashboardApi.host}/prefecture/${iso}`,
    { json: true, simple: true }
  );

  const result: PrefecturePopulation[] = data.result;
  return result;
};

export { getPrefectures, getPrefecturePopulationByIsoCode };
