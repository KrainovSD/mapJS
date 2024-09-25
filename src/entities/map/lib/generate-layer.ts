import GeoJSON from "ol/format/GeoJSON";
import KML from "ol/format/KML";
import MVT from "ol/format/MVT";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorTileLayer from "ol/layer/VectorTile";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import VectorTileSource from "ol/source/VectorTile";
import XYZ from "ol/source/XYZ";
import { LAYER_FORMATS } from "../constants";
import type { LayerInfo } from "../model";
import { generateTileId } from "./generate-tile-id";

export function generateLayer({ format, ...rest }: LayerInfo, tile?: boolean) {
  switch (format) {
    case LAYER_FORMATS.Kml: {
      return new VectorLayer({
        properties: {
          id: tile ? generateTileId(rest.id) : rest.id,
        },
        source: new VectorSource({
          format: new KML(),
          ...rest,
        }),
      });
    }
    case LAYER_FORMATS.Xyz: {
      return new TileLayer({
        properties: {
          id: tile ? generateTileId(rest.id) : rest.id,
        },
        source: new XYZ({ ...rest }),
      });
    }
    case LAYER_FORMATS.GeoJson: {
      return new VectorLayer({
        properties: {
          id: tile ? generateTileId(rest.id) : rest.id,
        },
        source: new VectorSource({
          format: new GeoJSON(),
          ...rest,
        }),
      });
    }
    case LAYER_FORMATS.Mvt: {
      return new VectorTileLayer({
        properties: {
          id: tile ? generateTileId(rest.id) : rest.id,
        },
        source: new VectorTileSource({
          format: new MVT(),
          ...rest,
        }),
      });
    }
    default: {
      if (tile)
        return new TileLayer({
          properties: {
            id: tile ? generateTileId(rest.id) : rest.id,
          },
          source: new OSM(),
        });

      return null;
    }
  }
}
