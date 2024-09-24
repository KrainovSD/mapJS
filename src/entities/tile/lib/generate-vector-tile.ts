import KML from "ol/format/KML";
import VectorTileLayer from "ol/layer/VectorTile";
import { VectorTile } from "ol/source";
import { TILE_FORMATS } from "../constants";
import type { TileFormat } from "../model";

type GenerateVectorTileOptions = {
  url: string;
  format: TileFormat;
  projection?: string;
};

export function generateVectorTile({ format, url, projection }: GenerateVectorTileOptions) {
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
      return null;
    }
  }
}
