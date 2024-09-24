import type { View } from "ol";
import type BaseLayer from "ol/layer/Base";
import Map from 'ol/Map';

type InitMapOptions = {
    target: string;
    view: View;
    layers: BaseLayer[];
  };

export function initMap({layers, target, view}: InitMapOptions){
  const map = new Map({ target, view, layers });

  return map;
}