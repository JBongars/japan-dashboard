import React, { useContext } from "react";
import styles from "./styles.scss";
import Map from "../map";
import PopulationTable from "../populationTable";
import { HomeContext } from "../../context/homeData";

const HomePage = (): React.ComponentElement<null, null> => {
  const context: any = useContext(HomeContext);
  const { data } = context;
  const { selectedPrefecture } = data;

  return (
    <div className={styles.container}>
      <div className={styles.col6}>
        {selectedPrefecture.prefectureDetails.iso === "all" || (
          <h2>
            Japan - {selectedPrefecture.prefectureDetails.prefectureEn} (
            {selectedPrefecture.prefectureDetails.prefectureJp})
          </h2>
        )}
        {selectedPrefecture.prefectureDetails.iso === "all" && <h2>Japan</h2>}
        {process.browser ? <Map /> : <div />}
      </div>
      <div className={styles.col6}>
        <PopulationTable />
      </div>
    </div>
  );
};

export default HomePage;
