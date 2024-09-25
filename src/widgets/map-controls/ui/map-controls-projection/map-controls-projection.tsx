import { useTranslation } from "react-i18next";
import { MAP_STORE_SELECTORS, useHandleMapSettings, useMapStore } from "@/entities/map";
import { PROJECTIONS } from "@/shared/constants";
import { CheckBox, Flex, Text } from "@/shared/ui";
import { styles } from "./styles";

export function MapControlsProjection() {
  const { data: mapSettings } = useHandleMapSettings();
  const selectedProjection = useMapStore(MAP_STORE_SELECTORS.projection);
  const setProjection = useMapStore(MAP_STORE_SELECTORS.setProjection);
  // TODO: Перевод
  const { t } = useTranslation();

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
              onClick={isSelected ? undefined : () => setProjection(projection)}
            >
              {projection}
            </CheckBox>
          );
        })}
      </Flex>
    </Flex>
  );
}
