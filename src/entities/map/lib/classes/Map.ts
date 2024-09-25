import type MapInstance from "ol/Map";
import View from "ol/View";
import type BaseLayer from "ol/layer/Base";
import type OlLayer from "ol/layer/Layer";
import TileLayer from "ol/layer/Tile";
import { TileDebug } from "ol/source";
import type { Projection } from "@/shared/types";
import { DEBUGGER_ID } from "../../constants";
import type { LayerInfo } from "../../model";
import { generateLayer, generateTileId, initMap } from "../index";

export class Map {
  map: MapInstance;

  tileId: string | null = null;

  constructor({ target, ...rest }: MapConstructor) {
    this.map = initMap({
      target,
    });
    this.init(rest);
  }

  init({ isActiveDebugger, layers, projection, tile }: Init) {
    this.tileId = tile.id;
    const initialLayers: (BaseLayer | OlLayer)[] = [generateLayer(tile, true)!];
    if (isActiveDebugger)
      initialLayers.push(
        new TileLayer({
          properties: { id: DEBUGGER_ID },
          source: new TileDebug(),
        }) as BaseLayer,
      );
    for (const layerInfo of layers) {
      const layer = generateLayer(layerInfo);
      if (layer) {
        initialLayers.push(layer);
      }
    }

    this.map.setView(
      new View({
        center: [0, 0],
        zoom: 2,
        projection,
      }),
    );
    this.map.setLayers(initialLayers);
  }

  addLayer({ layerInfo }: AddLayer) {
    const layer = generateLayer(layerInfo);
    if (layer) this.map.addLayer(layer);
  }

  removeLayer({ layerId }: RemoveLayer) {
    const layer = this.map.getAllLayers().find((layer) => layer.getProperties().id === layerId);
    if (layer) {
      layer.getSource()?.dispose();
      layer.dispose();
      this.map.removeLayer(layer);
    }
  }

  setTile({ tileInfo }: SetTile) {
    const prevTileId = this.tileId ? generateTileId(this.tileId) : null;

    const prevTile = this.map
      .getAllLayers()
      .find((layer) => layer.getProperties().id === prevTileId);
    if (prevTile) {
      prevTile.getSource()?.dispose();
      prevTile.dispose();
      this.map.removeLayer(prevTile);
    }

    const layers = this.map.getAllLayers();

    const tile = generateLayer(tileInfo, true)!;
    this.tileId = tileInfo.id;
    this.map.setLayers([tile, ...layers]);
  }

  setProjection(options: SetProjection) {
    this.clear();
    this.init(options);
  }

  addDebugger() {
    this.map.addLayer(
      new TileLayer({
        properties: { id: DEBUGGER_ID },
        source: new TileDebug(),
      }) as BaseLayer,
    );
  }

  removeDebugger() {
    const layer = this.map.getAllLayers().find((layer) => layer.getProperties().id === DEBUGGER_ID);
    if (layer) {
      layer.getSource()?.dispose();
      layer.dispose();
      this.map.removeLayer(layer);
    }
  }

  clear() {
    this.map.getAllLayers().forEach((layer) => {
      layer.getSource()?.dispose();
      layer.dispose();
      this.map.removeLayer(layer);
    });
    this.map.getView().dispose();
  }

  destroy() {
    this.clear();
    this.map.dispose();
    this.map.setTarget(undefined);
  }
}

type MapConstructor = {
  target: string;
  tile: LayerInfo;
  layers: LayerInfo[];
  projection: Projection;
  isActiveDebugger: boolean;
};

type Init = Omit<MapConstructor, "target">;

type AddLayer = {
  layerInfo: LayerInfo;
};

type RemoveLayer = {
  layerId: string;
};

type SetTile = {
  tileInfo: LayerInfo;
};

type SetProjection = Omit<MapConstructor, "target">;
