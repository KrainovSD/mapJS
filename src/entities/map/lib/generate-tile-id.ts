import { TILE_PREFIX } from "../constants";

export function generateTileId(id: string) {
  return `${TILE_PREFIX}:${id}`;
}
