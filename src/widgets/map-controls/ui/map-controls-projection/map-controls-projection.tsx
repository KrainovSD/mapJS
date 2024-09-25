import React from "react";
import { useTranslation } from "react-i18next";
import { MAP_STORE_SELECTORS, useHandleMapSettings, useMapStore } from "@/entities/map";
import { PROJECTIONS } from "@/shared/constants";
import type { Projection } from "@/shared/types";
import { CheckBox, Flex, Text } from "@/shared/ui";
import { styles } from "./styles";

export function MapControlsProjection() {
  const { data: mapSettings } = useHandleMapSettings();
  const selectedProjection = useMapStore(MAP_STORE_SELECTORS.projection);
  const setProjection = useMapStore(MAP_STORE_SELECTORS.setProjection);
  // TODO: Перевод
  const { t } = useTranslation();

  const recreateMap = React.useCallback(
    (projection: Projection) => {
      if (!mapSettings) return;
      setProjection({ projection, allowMapSettings: mapSettings.allowMapSettings });
    },
    [setProjection, mapSettings],
  );

  if (!mapSettings) return null;

  return (
    <Flex vertical className={styles.base} gap={10}>
      <Text>{t("Проекции")}</Text>
      <Flex align="center" className={styles.container} gap={5}>
        {Object.values(PROJECTIONS).map((projection) => {
          const isSelected = selectedProjection === projection;

          return (
            <CheckBox
              key={projection}
              checked={isSelected}
              onClick={isSelected ? undefined : () => recreateMap(projection)}
            >
              {projection}
            </CheckBox>
          );
        })}
      </Flex>
    </Flex>
  );
}
