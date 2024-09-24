import clsx from "clsx";
import React from "react";
import { COLORS } from "@/shared/config";
import { Flex } from "../flex";
import { styles } from "./styles";

type Props = {
  background?: "full" | "common" | "none";
  zIndex?: number;
  color?: string;
};

export function Loader(props: Props) {
  const { background = "none", color = COLORS.greyPrimary, zIndex = 1000 } = props;

  const Spinner = React.useMemo(() => {
    return (
      <div className={styles.spinner}>
        <div className={clsx(styles.inner(color, zIndex), "one")}></div>
        <div className={clsx(styles.inner(color, zIndex), "two")}></div>
        <div className={clsx(styles.inner(color, zIndex), "three")}></div>
      </div>
    );
  }, [color, zIndex]);

  if (background === "none") return Spinner;

  return (
    <Flex
      align="center"
      justify="center"
      className={clsx(styles.back(zIndex), background === "full" && "full")}
    >
      {Spinner}
    </Flex>
  );
}
