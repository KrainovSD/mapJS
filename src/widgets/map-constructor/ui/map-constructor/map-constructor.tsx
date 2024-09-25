import React from "react";
import { MAP_STORE_SELECTORS, Map, useHandleMapSettings, useMapStore } from "@/entities/map";
import { Loader } from "@/shared/ui";
import { MAP_CONTAINER_ID } from "../../constants";
import { styles } from "./styles";

export const MapConstructor = React.memo(function MapConstructor() {
  const mapRef = React.useRef<Map | null>(null);
  const { data: mapSettings, isLoading } = useHandleMapSettings();
  const setMapInstance = useMapStore(MAP_STORE_SELECTORS.setMapInstance);
  const clearState = useMapStore(MAP_STORE_SELECTORS.clearState);

  React.useEffect(() => {
    if (!mapSettings) return;

    const tile =
      mapSettings.allowMapSettings.tiles.find(
        (tile) => tile.id === mapSettings.initialMapSettings.tile,
      ) || mapSettings.allowMapSettings.tiles[0];
    const initialLayers = new Set(mapSettings.initialMapSettings.layers);
    const layers = mapSettings.allowMapSettings.layers.filter((layer) =>
      initialLayers.has(layer.id),
    );

    if (!tile) throw new Error("Not found tiles");

    const mapInstance = new Map({
      target: MAP_CONTAINER_ID,
      layers,
      tile,
      projection: mapSettings.initialMapSettings.projection,
      isActiveDebugger: mapSettings.initialMapSettings.isActiveDebugger,
    });
    setMapInstance(mapInstance);
    mapRef.current = mapInstance;

    return () => {
      mapInstance.destroy();
      mapRef.current = null;
      clearState();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapSettings]);

  return (
    <div className={styles.base} id={MAP_CONTAINER_ID}>
      {isLoading && <Loader background="common" />}
    </div>
  );
});
