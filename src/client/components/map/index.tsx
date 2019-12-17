import React, { memo, useContext } from "react";
import { ZoomableGroup, ComposableMap, Geographies } from "react-simple-maps";
import { HomeContext } from "../../context/homeData";
import GeoItem from "./GeoItem";
import MapTooltip from "./MapTooltip";
import config from "../../config";
import styles from "./styles.scss";

const geoUrl = config.japanDashboardApi.geoDataUrl;

const Map = (): React.ComponentElement<void, null> => {
  const context: any = useContext(HomeContext);
  const { data } = context;
  const { selectedPrefecture } = data;

  const width = 800;
  const height = 600;

  const tooltipText = `${selectedPrefecture.prefectureDetails.prefectureEn} (${
    selectedPrefecture.prefectureDetails.prefectureJp
  })`;

  const tooltipVisibility = Boolean(
    selectedPrefecture.prefectureDetails.prefectureEn
  );

  return (
    <MapTooltip isVisible={tooltipVisibility} contents={tooltipText}>
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
    </MapTooltip>
  );
};

export default memo(Map);
