import React, { memo } from "react";
import { ZoomableGroup, ComposableMap, Geographies } from "react-simple-maps";
import GeoItem from "./GeoItem";
import config from "../../config";
import styles from "./styles.scss";

const geoUrl = config.japanDashboardApi.geoDataUrl;

const Map = (): React.ComponentElement<void, null> => {
  const width = 800;
  const height = 600;

  return (
    <div className={styles.container}>
      <div className={styles.legend}>
        <span>Total Population</span>
        <div>
          <span>-</span>
          <div className={styles.thermometer} />
          <span>+</span>
        </div>
      </div>
      {process.browser && (
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
      )}
    </div>
  );
};

export default memo(Map);
