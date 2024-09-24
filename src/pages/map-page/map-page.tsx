import { Flex } from "antd";
import { MapConstructor } from "@/widgets/map-constructor";
import { styles } from "./styles";

export function MapPage() {
  return (
    <Flex className={styles.base}>
      <MapConstructor />
    </Flex>
  );
}
