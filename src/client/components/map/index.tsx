import React, { memo } from "react";
import { ZoomableGroup, ComposableMap, Geographies } from "react-simple-maps";
import GeoItem from "./GeoItem";
import config from "../../config";

const geoUrl = config.japanDashboardApi.geoDataUrl;

const Map = (): React.ComponentElement<void, null> => {
  const width = 800;
  const height = 800;

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
            {(obj: any) =>
              obj.geographies.map((elem, index: number) => (
                <GeoItem key={`GeoItem_${index}`} {...elem} />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </React.Fragment>
  );
};

export default memo(Map);
