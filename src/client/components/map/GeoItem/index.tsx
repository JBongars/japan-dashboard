import React, { CSSProperties, useContext } from "react";
import { Geography } from "react-simple-maps";
import config from "../../../config";

import { HomeContext } from "../../../context/homeData";
import { getLog } from "../../../utils";

const stroke: CSSProperties = {
  stroke: "#888",
  strokeWidth: "0.5pt",
  strokeLinejoin: "round"
};

const GeoItem = (geo: any): React.ComponentElement<any, null> => {
  const context: any = useContext(HomeContext);
  const { data, mutators } = context;
  const { setSelectedPrefecture, setShowDefaultPrefecture } = mutators;
  const { prefectures } = data;
  const itemPrefecture = prefectures.find(
    elem => elem.prefectureDetails.iso === geo.properties.prefectureId
  );
  const fill = getLog(
    itemPrefecture.population,
    config.japanDashboardApi.geoGradientMax
  );

  return (
    <Geography
      key={geo.rsmKey}
      geography={geo}
      onMouseEnter={async (): Promise<void> => {
        const { prefectureId } = geo.properties;
        await setSelectedPrefecture(prefectureId);
      }}
      onMouseLeave={() => {
        setShowDefaultPrefecture(true);
      }}
      style={{
        default: {
          fill: `rgba(10, 110, 140,${fill})`,
          outline: "none",
          ...stroke
        },
        hover: {
          fill: "#F53",
          outline: "none",
          ...stroke
        },
        pressed: {
          fill: "#E42",
          outline: "none",
          ...stroke
        }
      }}
    />
  );
};

export default GeoItem;
