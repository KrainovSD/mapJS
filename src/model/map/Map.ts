import { getCorrectPath } from "@/lib";
import type Map from "ol/Map";
import View from "ol/View";
import KML from "ol/format/KML";
import type BaseLayer from "ol/layer/Base";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorTileLayer from "ol/layer/VectorTile";
import { Projection } from "ol/proj";
import { VectorTile } from "ol/source";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import { initMap } from "./lib";
import type { MapModelConstructorOptions } from "./types";

export class MapModel {
  map: Map;

  mapLayer: BaseLayer;

  constructor({ target }: MapModelConstructorOptions) {
    // this.mapLayer = new TileLayer({
    //   source: new OSM(),
    // });

    // const tile = new VectorLayer({
    //   source: new VectorSource({
    //     url: "/map/UIA_World_Countries_Boundaries.kml",
    //     format: new KML(),
    //   }),
    // });

    this.mapLayer = new VectorTileLayer({
      source: new VectorTile({
        url: getCorrectPath("/map/UIA_World_Countries_Boundaries.kml"),
        format: new KML(),
        // projection: "EPSG:4326",
      }),
    });

    const vector = new VectorLayer({
      source: new VectorSource({
        url: getCorrectPath("/kml/Active.kml"),
        format: new KML(),
      }),
    });

    // const pipe = new TileLayer({
    //   source: new XYZ({ url: "/png/Hybrid_{z}_{x}_{y}.png" }),
    // });

    this.map = initMap({
      target,
      layers: [this.mapLayer, vector],
      view: new View({
        center: [0, 0],
        zoom: 2,
        // projection: new Projection({ code: "EPSG:4326" }),
      }),
    });
  }

  addLayer() {
    this.map.addLayer(
      new TileLayer({
        source: new OSM(),
      }),
    );
  }
}
