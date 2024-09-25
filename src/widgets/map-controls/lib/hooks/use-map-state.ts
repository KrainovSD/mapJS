import React from "react";
import { MAP_STORE_SELECTORS, useHandleMapSettings, useMapStore } from "@/entities/map";

export function useMapState() {
  const { data: mapSettings, isLoading } = useHandleMapSettings();
  const setInitialSettings = useMapStore(MAP_STORE_SELECTORS.setInitialSettings);

  React.useEffect(() => {
    if (!mapSettings) return;

    setInitialSettings({
      layers: mapSettings.initialMapSettings.layers,
      projection: mapSettings.initialMapSettings.projection,
      tile: mapSettings.initialMapSettings.tile,
      isActiveDebugger: mapSettings.initialMapSettings.isActiveDebugger,
    });
  }, [mapSettings, setInitialSettings]);

  return { isLoading };
}
