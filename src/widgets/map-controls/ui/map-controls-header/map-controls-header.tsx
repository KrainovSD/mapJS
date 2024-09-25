import clsx from "clsx";
import React from "react";
import { useTranslation } from "react-i18next";
import { COLORS } from "@/shared/config";
import { Button, Flex, Text } from "@/shared/ui";
import { Icon } from "@/shared/ui/icons";
import { styles } from "./styles";

type Props = {
  onClickPanel: () => void;
};

export function MapControlsHeader(props: Props) {
  const { onClickPanel } = props;
  // TODO: Перевод
  const { t } = useTranslation();

  return (
    <Flex justify="space-between" align="center" className={styles.headerContainer}>
      <Text ellipsis className={styles.header}>
        {t("Настройки карты")}
      </Text>
      <Button
        type="link"
        className={clsx(styles.button, "button")}
        icon={<Icon icon="List" size={16} color={COLORS.black} />}
        onClick={onClickPanel}
      />
    </Flex>
  );
}
