import { theme } from "antd";
import { type JSX, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ErrorContent } from "../../ui/error-content";
import { Flex } from "../../ui/flex";
import { Spin } from "../../ui/spin";
import { Text, Title } from "../../ui/typography";
import { spinContainerStyles, tableContent, wrapperStyles } from "./styles";

interface TablePageLayoutProps {
  title: string;
  quantity: number;
  totalQuantity?: number;
  isLoading: boolean;
  isError: boolean;
  topPanel: JSX.Element;
  table: JSX.Element;
  errorDescription?: string;
  refetch?: () => void;
}

export function TablePageLayout(props: TablePageLayoutProps): JSX.Element {
  const {
    title,
    isError,
    isLoading,
    table,
    topPanel,
    refetch,
    errorDescription,
    quantity,
    totalQuantity,
  } = props;
  const { t } = useTranslation();
  const { token } = theme.useToken();
  let quantityText: string | undefined;
  if (isLoading) quantityText = `${t("common.quantity")}...`;
  else if (totalQuantity && totalQuantity > quantity)
    quantityText = `${t("common.quantity")}: ${quantity} ${t("common.quantityFrom")} ${totalQuantity}`;
  else if (quantity != undefined) quantityText = `${t("common.quantity")}: ${quantity}`;

  const renderPageContent = useMemo(() => {
    if (isLoading)
      return (
        <Flex align="center" justify="center" className={spinContainerStyles}>
          <Spin iconSize={48} />
        </Flex>
      );

    if (isError)
      return (
        <ErrorContent
          description={errorDescription || t("common.errors.tablesContent")}
          onClick={refetch}
        />
      );

    return table;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isLoading, refetch, table]);

  return (
    <Flex gap={28} vertical className={wrapperStyles}>
      <Flex vertical gap={4}>
        <Title>{title}</Title>
        {!isError && <Text color={token.colorTextSecondary}>{quantityText}</Text>}
      </Flex>
      <Flex vertical gap="middle" flex={1} className={tableContent}>
        {!isError && topPanel}
        {renderPageContent}
      </Flex>
    </Flex>
  );
}
