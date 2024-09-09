import { type Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { initMap } from "./lib";
import type { MapModelConstructorOptions } from "./types";

export class MapModel {
  map: Map;

  constructor({ target }: MapModelConstructorOptions) {
    this.map = initMap({
      target,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }
}
