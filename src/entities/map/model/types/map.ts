import type { Projection } from "@/shared/types";
import type { Map as MapInstance } from "../../lib/classes";
import type { LayerInfo } from "./layer";

export type InitialMapSettings = {
  tile: string;
  layers: string[];
  projection: Projection;
  isActiveDebugger: boolean;
};

export type AllowMapSettings = {
  tiles: LayerInfo[];
  layers: LayerInfo[];
};

export type MapSettings = {
  initialMapSettings: InitialMapSettings;
  allowMapSettings: AllowMapSettings;
};

export type MapStore = {
  mapInstance: MapInstance | null;
  tile: string | null;
  layers: string[];
  projection: Projection;
  isActiveDebugger: boolean;

  clearState: () => void;
  setInitialSettings: (options: {
    tile: string;
    layers: string[];
    projection: Projection;
    isActiveDebugger: boolean;
  }) => void;
  setMapInstance: (map: MapInstance) => void;
  setTile: (tile: LayerInfo) => void;
  addLayer: (layer: LayerInfo) => void;
  removeLayer: (id: string) => void;
  setProjection: (options: { projection: Projection; allowMapSettings: AllowMapSettings }) => void;
  toggleDebugger: () => void;
};
