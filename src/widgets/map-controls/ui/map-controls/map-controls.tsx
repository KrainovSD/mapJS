import clsx from "clsx";
import React from "react";
import { COLORS } from "@/shared/config";
import { Button, Divider, Flex, Loader } from "@/shared/ui";
import { Icon } from "@/shared/ui/icons";
import { useMapState } from "../../lib/hooks";
import { MapControlsFeatures } from "../map-controls-features";
import { MapControlsHeader } from "../map-controls-header";
import { MapControlsLayers } from "../map-controls-layers";
import { MapControlsProjection } from "../map-controls-projection";
import { MapControlsTiles } from "../map-controls-tiles";
import { styles } from "./styles";

export const MapControls = React.memo(function MapControls() {
  const [isOpen, setIsOpen] = React.useState(true);

  const { isLoading } = useMapState();

  const onClickPanel = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  if (isLoading) {
    return (
      <Flex className={styles.base} vertical>
        <Loader background="common" />
      </Flex>
    );
  }

  if (!isOpen) {
    return (
      <Flex vertical className={styles.baseClosed}>
        <Button
          type="link"
          className={clsx(styles.button, "button")}
          icon={<Icon icon="List" size={16} color={COLORS.black} />}
          onClick={onClickPanel}
        />
      </Flex>
    );
  }

  return (
    <Flex className={styles.base} vertical>
      <MapControlsHeader onClickPanel={onClickPanel} />
      <Divider className={styles.divider} />
      <MapControlsTiles />
      <Divider className={styles.divider} />
      <MapControlsLayers />
      <Divider className={styles.divider} />
      <MapControlsProjection />
      <Divider className={styles.divider} />
      <MapControlsFeatures />
    </Flex>
  );
});
