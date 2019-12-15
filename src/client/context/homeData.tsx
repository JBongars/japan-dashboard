/* eslint-disable react/sort-comp */

import React from "react";
import { getPrefecturePopulationByIsoCode } from "../services/prefecturePopulationService";
import { Prefecture, PrefecturePopulation } from "../types";

export interface HomeDataState {
  data: {
    selectedPrefecture: Prefecture;
    prefectures: Prefecture[];
    prefecturePopulations: PrefecturePopulation[];
  };
  mutators: {
    setSelectedPrefecture: (selectedPrefectureIso: string) => Promise<void>;
    setPrefectures: (prefectures: Prefecture[]) => void;
    setPrefecturePopulations: (
      prefecturePopulations: PrefecturePopulation[]
    ) => void;
  };
}

const HomeContext: React.Context<Object> = React.createContext({});
const { Provider } = HomeContext;

class HomeData extends React.Component<Object, HomeDataState> {
  setSelectedPrefecture = async (
    selectedPrefectureIso: string
  ): Promise<void> => {
    const { data } = this.state;
    const selectedPrefecture = data.prefectures.find(
      elem => elem.iso === selectedPrefectureIso
    );
    const prefecturePopulations: PrefecturePopulation[] = await getPrefecturePopulationByIsoCode(
      selectedPrefectureIso
    );

    this.setState(prevState => ({
      data: {
        ...prevState.data,
        selectedPrefecture,
        prefecturePopulations
      }
    }));
  };

  setPrefectures = (prefectures: Prefecture[]): void => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        prefectures
      }
    }));
  };

  setPrefecturePopulations = (
    prefecturePopulations: PrefecturePopulation[]
  ): void => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        prefecturePopulations
      }
    }));
  };

  state = {
    data: {
      selectedPrefecture: null,
      prefectures: [],
      prefecturePopulations: [],
      ...this.props
    },
    // eslint-disable-next-line react/no-unused-state
    mutators: {
      setSelectedPrefecture: this.setSelectedPrefecture,
      setPrefectures: this.setPrefectures,
      setPrefecturePopulations: this.setPrefecturePopulations
    }
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export { HomeContext };
export default HomeData;
