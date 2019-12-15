import * as React from "react";
import HomePage from "../components/homePage";
import {
  getPrefectures,
  getPrefecturePopulationByIsoCode
} from "../services/prefecturePopulationService";

import { Prefecture, PrefecturePopulation } from "../types";

const Index = (): React.ComponentElement<null, null> => <HomePage />;

Index.getInitialProps = async (): Promise<any> => {
  const prefectures: Prefecture[] = await getPrefectures();
  const selectedPrefecture: Prefecture = prefectures[0];
  const prefecturePopulations: PrefecturePopulation[] = await getPrefecturePopulationByIsoCode(
    selectedPrefecture.iso
  );

  return {
    prefectures,
    selectedPrefecture,
    prefecturePopulations
  };
};

export default Index;
