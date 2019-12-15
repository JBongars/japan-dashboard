import React, { CSSProperties, useContext } from "react";
import { Geography } from "react-simple-maps";

import { HomeContext } from "../../../context/homeData";

const stroke: CSSProperties = {
  stroke: "#888",
  strokeWidth: "0.5pt",
  strokeLinejoin: "round"
};

const GeoItem = (geo: any): React.ComponentElement<any, null> => {
  const context: any = useContext(HomeContext);
  const { data, mutators } = context;
  const { prefectures } = data;
  const { setSelectedPrefecture } = mutators;

  return (
    <Geography
      key={geo.rsmKey}
      geography={geo}
      onMouseEnter={() => {
        const { prefectureId } = geo.properties;
        const selectedPrefecture = prefectures.find(
          elem => elem.id === prefectureId
        );
        setSelectedPrefecture(selectedPrefecture);
        console.log({ prefectureId });
      }}
      // onMouseLeave={() => {
      //   setTooltipContent("");
      // }}
      style={{
        default: {
          fill: `rgba(0,0,102,${Math.random()})`,
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
