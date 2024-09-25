import { useTranslation } from "react-i18next";
import { MAP_STORE_SELECTORS, useHandleMapSettings, useMapStore } from "@/entities/map";
import { DEBUGGER_ID } from "@/entities/map/constants";
import { CheckBox, Flex, Text } from "@/shared/ui";
import { styles } from "./styles";

export function MapControlsFeatures() {
  const { data: mapSettings } = useHandleMapSettings();
  const isActiveDebugger = useMapStore(MAP_STORE_SELECTORS.isActiveDebugger);
  const toggleDebugger = useMapStore(MAP_STORE_SELECTORS.toggleDebugger);
  // TODO: Перевод
  const { t } = useTranslation();

  if (!mapSettings) return null;

  return (
    <Flex vertical className={styles.base} gap={10}>
      <Text>{t("Дополнительные возможности")}</Text>
      <Flex align="center" className={styles.container} gap={5}>
        <CheckBox key={DEBUGGER_ID} checked={isActiveDebugger} onClick={toggleDebugger}>
          {t("Дебаггер")}
        </CheckBox>
      </Flex>
    </Flex>
  );
}
