import { PROJECTIONS } from "@/shared/constants";
import type { MapSettings } from "../../model";

// ["png", "kml", "json", "mvt"]
// ["png", "kml", "json"]

export const MAP_SETTINGS_MOCK: MapSettings = {
  allowMapSettings: {
    tiles: [
      {
        format: "xyz",
        url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        id: "png",
        label: "OpenStreetMap",
      },
      {
        format: "kml",
        url: "/static/map/UIA_World_Countries_Boundaries.kml",
        id: "kml",
        label: "C# kml",
      },
      {
        format: "geoJson",
        url: "/static/countries.json",
        id: "json",
        label: "GeoJson",
      },
      {
        format: "mvt",
        url: "https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:cultural:ne_10m_admin_0_countries/tiles/WebMercatorQuad/{z}/{x}/{-y}.mvt",
        id: "mvt",
        label: "MVT Standart",
      },
    ],
    layers: [
      {
        format: "xyz",
        url: "/static/png/Hybrid_{z}_{x}_{y}.png",
        id: "png",
        label: "Кабеля PNG",
      },
      {
        format: "kml",
        url: "/static/kml/Active.kml",
        id: "kml",
        label: "Active points kml",
      },
      {
        format: "geoJson",
        url: "/static/geo/cable-geo.json",
        id: "json",
        label: "Кабеля JSON",
      },
    ],
  },
  initialMapSettings: {
    tile: "json",
    layers: ["json", "png"],
    projection: PROJECTIONS[3857],
    isActiveDebugger: false,
  },
};
