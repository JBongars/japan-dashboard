import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

// import { geoMercator } from "d3-geo";

const geoUrl = "/geodata/prefectures.json";

const MapChart = () => {
  const width = 800;
  const height = 800;

  // const projection = () => {
  //   return geoMercator()
  //     .translate([400, 400])
  //     .scale(1000);
  // };

  return (
    <>
      <ComposableMap
        width={width}
        height={height}
        data-tip=""
        projection="geoMercator"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
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
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
