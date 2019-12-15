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
  const { mutators } = context;
  const { setSelectedPrefecture } = mutators;

  return (
    <Geography
      key={geo.rsmKey}
      geography={geo}
      onMouseEnter={async () => {
        const { prefectureId } = geo.properties;
        setSelectedPrefecture(prefectureId);
      }}
      // onMouseLeave={() => {
      //   setTooltipContent("");
      // }}
      style={{
        default: {
          // fill: `rgba(0,0,102,${Math.random()})`,
          fill: `rgba(0,0,102,0.1)`,
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
