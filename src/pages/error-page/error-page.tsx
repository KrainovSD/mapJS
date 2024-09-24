import React from "react";
import { useTranslation } from "react-i18next";
import { hooks } from "@/shared/lib";
import { Button, Flex, Title } from "@/shared/ui";

export function ErrorPage() {
  const { t } = useTranslation();
  const navigate = hooks.useNavigate();

  const onClick = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Flex vertical gap="large" align="center" justify="center" style={{ height: "100%" }}>
      <Title level={3}>{t("errorPage.text")}</Title>
      <Button onClick={onClick}>{t("errorPage.button")}</Button>
    </Flex>
  );
}
