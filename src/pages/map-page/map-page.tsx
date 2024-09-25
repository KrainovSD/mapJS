import { Flex } from "antd";
import { MapConstructor } from "@/widgets/map-constructor";
import { MapControls } from "@/widgets/map-controls";
import { styles } from "./styles";

export function MapPage() {
  return (
    <Flex className={styles.base}>
      <MapConstructor />
      <MapControls />
    </Flex>
  );
}
