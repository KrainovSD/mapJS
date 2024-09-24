import KML from "ol/format/KML";
import TileLayer from "ol/layer/Tile";
import VectorTileLayer from "ol/layer/VectorTile";
import { OSM, VectorTile } from "ol/source";
import { TILE_FORMATS } from "../constants";
import type { TileInfo } from "../model";

export function generateVectorTile({ format, url, projection }: TileInfo) {
  switch (format) {
    case TILE_FORMATS.Kml: {
      return new VectorTileLayer({
        source: new VectorTile({
          url,
          format: new KML(),
          projection,
        }),
      });
    }
    default: {
      return new TileLayer({
        source: new OSM(),
      });
    }
  }
}
