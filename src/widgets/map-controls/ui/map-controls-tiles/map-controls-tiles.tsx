import { useTranslation } from "react-i18next";
import { MAP_STORE_SELECTORS, useHandleMapSettings, useMapStore } from "@/entities/map";
import { CheckBox, Flex, Text } from "@/shared/ui";
import { styles } from "./styles";

export function MapControlsTiles() {
  const { data: mapSettings } = useHandleMapSettings();
  const selectedTile = useMapStore(MAP_STORE_SELECTORS.tile);
  const setTile = useMapStore(MAP_STORE_SELECTORS.setTile);
  // TODO: Перевод
  const { t } = useTranslation();

  if (!mapSettings) return null;

  return (
    <Flex vertical className={styles.base} gap={10}>
      <Text>{t("Тайлы")}</Text>
      <Flex align="center" className={styles.container} gap={5}>
        {mapSettings.allowMapSettings.tiles.map((tile) => {
          const isSelected = tile.id === selectedTile;

          return (
            <CheckBox
              key={tile.id}
              checked={isSelected}
              onClick={isSelected ? undefined : () => setTile(tile)}
            >
              {tile.label}
            </CheckBox>
          );
        })}
      </Flex>
    </Flex>
  );
}
