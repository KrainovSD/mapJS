import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { COLORS } from "@/shared/config";
import { Button } from "../button";
import { Flex } from "../flex";
import { Icon } from "../icons";
import { Text, Title } from "../typography";
import { contentStyles, typographyStyles, wrapperStyles } from "./styles";

interface ErrorContentProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  onClick?: () => void;
}

export function ErrorContent(props: ErrorContentProps): JSX.Element {
  const { t } = useTranslation();
  const {
    title = t("common.notifications.cardGetErrorTitle"),
    description = t("common.notifications.cardGetErrorDescription"),
    buttonLabel = t("common.notifications.cardGetErrorRepeatButton"),
    onClick,
  } = props;

  return (
    <div className={wrapperStyles}>
      <Flex vertical align="center" gap={20} className={contentStyles}>
        <Icon icon="WarningFilled" color={COLORS.red} size={60} />
        <Flex vertical align="center" gap="large">
          <Flex vertical gap="small" className={typographyStyles}>
            <Title level={4}>{title}</Title>
            <Text>{description}</Text>
          </Flex>
          {onClick && buttonLabel && (
            <Button onClick={onClick} type="primary">
              {buttonLabel}
            </Button>
          )}
        </Flex>
      </Flex>
    </div>
  );
}
