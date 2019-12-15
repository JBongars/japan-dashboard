import React, { CSSProperties } from "react";
import { Geography } from "react-simple-maps";

const stroke: CSSProperties = {
  stroke: "#888",
  strokeWidth: "0.5pt",
  strokeLinejoin: "round"
};

const GeoItem = (geo: any): React.ComponentElement<any, null> => {
  console.log({ geo });
  return (
    <Geography
      key={geo.rsmKey}
      geography={geo}
      // onMouseEnter={() => {
      //   const { NAME, POP_EST } = geo.properties;
      //   setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
      // }}
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
