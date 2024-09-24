import type MapInstance from "ol/Map";
import View from "ol/View";
import { initMap } from "@/entities/map";
import { type Tile, generateVectorTile } from "@/entities/tile";

export class Map {
  map: MapInstance;

  tile: Tile;

  constructor({ target }: MapConstructor) {
    this.tile = {
      format: "kml",
      url: "/static/map/UIA_World_Countries_Boundaries.kml",
      id: "test",
      instance: generateVectorTile({
        format: "kml",
        url: "/static/map/UIA_World_Countries_Boundaries.kml",
        id: "test",
      }),
    };

    this.map = initMap({
      target,
      layers: [this.tile.instance],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }

  destroy() {
    this.map.dispose();
  }

  // constructor({ target }: MapModelConstructorOptions) {
  //     // this.mapLayer = new TileLayer({
  //     //   source: new OSM(),
  //     // });

  //     // const tile = new VectorLayer({
  //     //   source: new VectorSource({
  //     //     url: "/map/UIA_World_Countries_Boundaries.kml",
  //     //     format: new KML(),
  //     //   }),
  //     // });

  //     this.mapLayer = new VectorTileLayer({
  //       source: new VectorTile({
  //         url: getCorrectPath("/map/UIA_World_Countries_Boundaries.kml"),
  //         format: new KML(),
  //         // projection: "EPSG:4326",
  //       }),
  //     });

  //     const vector = new VectorLayer({
  //       source: new VectorSource({
  //         url: getCorrectPath("/kml/Active.kml"),
  //         format: new KML(),
  //       }),
  //     });

  //     // const pipe = new TileLayer({
  //     //   source: new XYZ({ url: "/png/Hybrid_{z}_{x}_{y}.png" }),
  //     // });

  //     this.map = initMap({
  //       target,
  //       layers: [this.mapLayer, vector],
  //       view: new View({
  //         center: [0, 0],
  //         zoom: 2,
  //         // projection: new Projection({ code: "EPSG:4326" }),
  //       }),
  //     });
  //   }

  //   addLayer() {
  //     this.map.addLayer(
  //       new TileLayer({
  //         source: new OSM(),
  //       }),
  //     );
  //   }
}

type MapConstructor = {
  target: string;
};
