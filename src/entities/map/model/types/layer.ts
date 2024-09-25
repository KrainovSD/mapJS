import type LayerOl from "ol/layer/Layer";
import type { LAYER_FORMATS } from "../../constants";

export type LayerFormat = ValueOf<typeof LAYER_FORMATS>;
export type LayerInfo = {
  id: string;
  label: string;
  url: string;
  format: LayerFormat;
  maxZoom?: number;
  minZoom?: number;
  projection?: string;
};
export type Layer = LayerInfo & {
  instance: LayerOl;
};
