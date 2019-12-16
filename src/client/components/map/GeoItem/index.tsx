import React, { CSSProperties, useContext } from "react";
import { Geography } from "react-simple-maps";
import config from "../../../config/index.json";

import { HomeContext } from "../../../context/homeData";

const stroke: CSSProperties = {
  stroke: "#888",
  strokeWidth: "0.5pt",
  strokeLinejoin: "round"
};

const getLog = (value: number, total: number): number => {
  return value / total;
};

const GeoItem = (geo: any): React.ComponentElement<any, null> => {
  const context: any = useContext(HomeContext);
  const { data, mutators } = context;
  const { setSelectedPrefecture, resetSelectedPrefecture } = mutators;
  const { prefectures } = data;
  const itemPrefecture = prefectures.find(
    elem => elem.prefectureDetails.iso === geo.properties.prefectureId
  );

  return (
    <Geography
      key={geo.rsmKey}
      geography={geo}
      onMouseEnter={async () => {
        const { prefectureId } = geo.properties;
        await setSelectedPrefecture(prefectureId);
      }}
      onMouseLeave={async () => {
        await resetSelectedPrefecture();
      }}
      style={{
        default: {
          fill: `rgba(0,0,102,${getLog(
            itemPrefecture.population,
            config.japanDashboardApi.geoGradientMax
          )})`,
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
