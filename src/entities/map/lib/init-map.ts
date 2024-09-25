import Map from "ol/Map";

type InitMapOptions = {
  target: string;
};

export function initMap({ target }: InitMapOptions) {
  const map = new Map({ target });

  return map;
}
