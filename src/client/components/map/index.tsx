import React, { memo } from "react";
import { ZoomableGroup, ComposableMap, Geographies } from "react-simple-maps";
import GeoItem from "./GeoItem";
// import { geoPath } from "d3-geo";
// import { geoTimes } from "d3-geo-projection";

// import { geoMercator } from "d3-geo";

const geoUrl = "/geodata/prefectures.json";

const Map = (): React.ComponentElement<void, null> => {
  const width = 800;
  const height = 800;

  // const projection = () =>
  //   geoTimes()
  //     .translate([width / 2, height / 2])
  //     .scale(160);

  return (
    <React.Fragment>
      <ComposableMap
        width={width}
        height={height}
        data-tip=""
        projection="geoMercator"
        projectionConfig={{
          scale: 1500
        }}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {(obj: any) => obj.geographies.map(GeoItem)}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </React.Fragment>
  );
};

export default memo(Map);
