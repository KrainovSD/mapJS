import { MapModel } from "./model";
import type { RenderMapOptions } from "./types";

export function renderMap({ target }: RenderMapOptions) {
  const context = new MapModel({ target });
  console.log(context);
}
