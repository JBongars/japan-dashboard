/* eslint-disable react/sort-comp */

import React from "react";
import { getPrefecturePopulationByIsoCode } from "../services/prefecturePopulationService";
import { Prefecture, DefaultPrefecture, PrefecturePopulation } from "../types";

export interface HomeDataState {
  data: {
    showDefaultPrefecture: boolean;
    defaultPrefecture: DefaultPrefecture;
    selectedPrefecture: Prefecture;
    prefectures: Prefecture[];
    prefecturePopulations: PrefecturePopulation[];
  };
  mutators: {
    setSelectedPrefecture: (selectedPrefectureIso: string) => Promise<void>;
    setShowDefaultPrefecture: (showDefaultPrefecture: boolean) => void;
    setPrefectures: (prefectures: Prefecture[]) => void;
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
      elem => elem.prefectureDetails.iso === selectedPrefectureIso
    );
    this.setShowDefaultPrefecture(false);

    this.setState(
      prevState => ({
        data: {
          ...prevState.data,
          selectedPrefecture
        }
      }),
      async () => {
        const prefecturePopulations: PrefecturePopulation[] = await getPrefecturePopulationByIsoCode(
          selectedPrefectureIso
        );

        this.setState(prevState => ({
          data: {
            ...prevState.data,
            prefecturePopulations
          }
        }));
      }
    );
  };

  setPrefectures = (prefectures: Prefecture[]): void => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        prefectures
      }
    }));
  };

  setShowDefaultPrefecture = (showDefaultPrefecture: boolean): void => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        showDefaultPrefecture
      }
    }));
  };

  state = {
    data: {
      showDefaultPrefecture: true,
      defaultPrefecture: null,
      selectedPrefecture: null,
      prefectures: [],
      prefecturePopulations: [],
      ...this.props
    },
    // eslint-disable-next-line react/no-unused-state
    mutators: {
      setSelectedPrefecture: this.setSelectedPrefecture,
      setShowDefaultPrefecture: this.setShowDefaultPrefecture,
      setPrefectures: this.setPrefectures
    }
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export { HomeContext };
export default HomeData;
