import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { PROJECTIONS } from "@/shared/constants";
import type { MapStore } from "../types";

export const useMapStore = create<MapStore>()(
  devtools(
    (set, get) => ({
      tile: null,
      layers: [],
      mapInstance: null,
      projection: PROJECTIONS[3857],
      isActiveDebugger: false,
      clearState: () => {
        set(
          {
            tile: null,
            layers: [],
            mapInstance: null,
            projection: PROJECTIONS[3857],
            isActiveDebugger: false,
          },
          false,
          "clearState",
        );
      },
      setInitialSettings: ({ layers, projection, tile }) => {
        set({ layers, projection, tile }, false, "setInitialSettings");
      },
      setMapInstance: (map) => {
        set({ mapInstance: map }, false, "setMapInstance");
      },
      addLayer: (layer) => {
        set({ layers: [...get().layers, layer.id] }, false, "addLayer");
        get().mapInstance?.addLayer?.({ layerInfo: layer });
      },
      removeLayer: (id) => {
        set({ layers: [...get().layers.filter((layer) => layer !== id)] }, false, "removeLayer");
        get().mapInstance?.removeLayer?.({ layerId: id });
      },
      setProjection: (projection) => {
        set({ projection }, false, "setProjection");
        get().mapInstance?.setProjection?.({ projection });
      },
      setTile: (tile) => {
        set({ tile: tile.id }, false, "setTile");
        get().mapInstance?.setTile?.({ tileInfo: tile });
      },
      toggleDebugger: () => {
        const isActiveDebugger = get().isActiveDebugger;
        if (isActiveDebugger) get().mapInstance?.removeDebugger?.();
        else get().mapInstance?.addDebugger?.();

        set({ isActiveDebugger: !isActiveDebugger }, false, "toggleDebugger");
      },
    }),
    { name: "workflow" },
  ),
);
