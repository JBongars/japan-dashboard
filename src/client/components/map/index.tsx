import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { geoPath } from "d3-geo"
import { geoTimes } from "d3-geo-projection"


// import { geoMercator } from "d3-geo";

const geoUrl = "/geodata/prefectures.json";

const MapChart = () => {
  const width = 800;
  const height = 800;

  const projection = () =>  geoTimes()
      .translate([width/2, height/2])
      .scale(160)

  return (
    <>
      <ComposableMap
        width={width}
        height={height}
        data-tip=""
        projection="geoMercator"
        projectionConfig={{
          scale: 1300
        }}
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
                      fill: "#DDD",
                      outline: "none",
                      stroke: '#555',
                      'stroke-width': '1px',
                      'stroke-linejoin': 'round',
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                      stroke: '#555',
                      'stroke-width': '1px',
                      'stroke-linejoin': 'round',
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                      stroke: '#555',
                      'stroke-width': '1px',
                      'stroke-linejoin': 'round',
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
