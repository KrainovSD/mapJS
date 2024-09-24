import React from "react";
import { I18nextProvider } from "react-i18next";
import { i18nConfig } from "@/shared/config";

export function I18Provider({ children }: React.PropsWithChildren) {
  return <I18nextProvider i18n={i18nConfig}>{children}</I18nextProvider>;
}
