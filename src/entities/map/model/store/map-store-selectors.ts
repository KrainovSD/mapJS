import type { MapStore } from "../types";

export const MAP_STORE_SELECTORS = {
  layers: (state: MapStore) => state.layers,
  tile: (state: MapStore) => state.tile,
  mapInstance: (state: MapStore) => state.mapInstance,
  projection: (state: MapStore) => state.projection,
  clearState: (state: MapStore) => state.clearState,
  setInitialSettings: (state: MapStore) => state.setInitialSettings,
  setMapInstance: (state: MapStore) => state.setMapInstance,
  setTile: (state: MapStore) => state.setTile,
  setProjection: (state: MapStore) => state.setProjection,
  addLayer: (state: MapStore) => state.addLayer,
  removeLayer: (state: MapStore) => state.removeLayer,
  toggleDebugger: (state: MapStore) => state.toggleDebugger,
  isActiveDebugger: (state: MapStore) => state.isActiveDebugger,
};
