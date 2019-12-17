import React, { memo } from "react";
import { ZoomableGroup, ComposableMap, Geographies } from "react-simple-maps";
import GeoItem from "../GeoItem";
import config from "../../../config";

const width = 800;
const height = 600;
const geoUrl = config.japanDashboardApi.geoDataUrl;

const MapInner = () => {
  return (
    <ComposableMap
      width={width}
      height={height}
      projection="geoMercator"
      projectionConfig={{
        scale: 1500
      }}
    >
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {(obj: any) =>
            obj.geographies.map((elem, index: number) => (
              <GeoItem key={`GeoItem_${index}`} {...elem} />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(MapInner);
