import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { ErrorContent } from "@/shared/ui";

export const ErrorCommonAsync = (): JSX.Element => {
  const { t } = useTranslation();

  const onClickErrorHandler = () => {
    // window.open("", "_blank");
  };

  return (
    <ErrorContent
      description={t("common.errors.common")}
      onClick={onClickErrorHandler}
      buttonLabel={t("common.errors.buttonAdmin")}
    />
  );
};
