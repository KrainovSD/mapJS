import type BaseLayer from "ol/layer/Base";
import type { TILE_FORMATS } from "../../constants";

export type TileFormat = ValueOf<typeof TILE_FORMATS>;
export type TileInfo = {
  id: string;
  url: string;
  format: TileFormat;
  projection?: string;
};
export type Tile = TileInfo & {
  instance: BaseLayer;
};
