import React from "react";
import { useTranslation } from "react-i18next";
import { MAP_STORE_SELECTORS, useHandleMapSettings, useMapStore } from "@/entities/map";
import { CheckBox, Flex, Text } from "@/shared/ui";
import { styles } from "./styles";

export function MapControlsLayers() {
  const { data: mapSettings } = useHandleMapSettings();
  const selectedLayers = useMapStore(MAP_STORE_SELECTORS.layers);
  const addLayer = useMapStore(MAP_STORE_SELECTORS.addLayer);
  const removeLayer = useMapStore(MAP_STORE_SELECTORS.removeLayer);

  const selectedLayersCollection = React.useMemo(() => {
    return new Set(selectedLayers);
  }, [selectedLayers]);
  // TODO: Перевод
  const { t } = useTranslation();

  if (!mapSettings) return null;

  return (
    <Flex vertical className={styles.base} gap={10}>
      <Text>{t("Слои")}</Text>
      <Flex align="center" className={styles.container} gap={5}>
        {mapSettings.allowMapSettings.layers.map((layer) => {
          const isSelected = selectedLayersCollection.has(layer.id);

          return (
            <CheckBox
              key={layer.id}
              checked={isSelected}
              onClick={isSelected ? () => removeLayer(layer.id) : () => addLayer(layer)}
            >
              {layer.label}
            </CheckBox>
          );
        })}
      </Flex>
    </Flex>
  );
}
