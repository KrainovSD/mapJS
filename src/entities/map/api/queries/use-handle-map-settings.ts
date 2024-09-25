import { useQuery } from "@tanstack/react-query";
import { requestApi } from "@/shared/api";
import { endpoints } from "@/shared/config";
import { utils } from "@/shared/lib";
import { MAP_SETTINGS_MOCK } from "../../constants";
import type { MapSettings } from "../../model";

export const useHandleMapSettings = () =>
  useQuery({
    queryKey: ["map-settings"],
    queryFn: () => fetchMapSetting(),
  });

function fetchMapSetting() {
  return requestApi<MapSettings, MapSettings>({
    method: "GET",
    path: endpoints.mapSettings,
    mock: utils.isHasFeature("map-settings-mock") ? MAP_SETTINGS_MOCK : undefined,
  });
}
