import { Map, type View } from "ol";
import type BaseLayer from "ol/layer/Base";

type InitMapOptions = {
  target: string;
  view: View;
  layers: BaseLayer[];
};

export function initMap({ target, view, layers }: InitMapOptions) {
  const map = new Map({ target, view, layers });

  return map;
}
