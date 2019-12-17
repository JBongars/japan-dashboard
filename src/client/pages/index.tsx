import * as React from "react";
import HomePage from "../components/HomePage";
import {
  getPrefectures,
  getBasePrefecture,
  getPrefecturePopulationByIsoCode
} from "../services/prefecturePopulationService";

import { Prefecture, PrefecturePopulation } from "../types";

const Index = (): React.ComponentElement<null, null> => <HomePage />;

Index.getInitialProps = async (): Promise<any> => {
  const prefectures: Prefecture[] = await getPrefectures();
  const selectedPrefecture: Prefecture = prefectures[0];
  const defaultPrefecture: Prefecture = await getBasePrefecture();
  const prefecturePopulations: PrefecturePopulation[] = await getPrefecturePopulationByIsoCode(
    selectedPrefecture.prefectureDetails.iso
  );

  return {
    prefectures,
    selectedPrefecture,
    defaultPrefecture,
    prefecturePopulations
  };
};

export default Index;
