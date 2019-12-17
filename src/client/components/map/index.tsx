import React, { useContext } from "react";
import { HomeContext } from "../../context/homeData";
import MapInner from "./MapInner";
import MapTooltip from "./MapTooltip";
import styles from "./styles.scss";

const Map = (): React.ComponentElement<void, null> => {
  const context: any = useContext(HomeContext);
  const { data } = context;
  const { selectedPrefecture, showDefaultPrefecture } = data;

  const tooltipText = `${selectedPrefecture.prefectureDetails.prefectureEn} (${
    selectedPrefecture.prefectureDetails.prefectureJp
  })`;
  const tooltipVisibility = !showDefaultPrefecture;

  return (
    <MapTooltip isVisible={tooltipVisibility} contents={tooltipText}>
      <div className={styles.container}>
        <div className={styles.legend}>
          <span>Total Population</span>
          <div>
            <span>-</span>
            <div className={styles.thermometer} />
            <span>+</span>
          </div>
        </div>
        {process.browser && <MapInner />}
      </div>
    </MapTooltip>
  );
};

export default Map;
