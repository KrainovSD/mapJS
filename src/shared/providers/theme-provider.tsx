import { css } from "@emotion/css";
import { App as AntdApp, ConfigProvider } from "antd";
import type { Locale } from "antd/lib/locale";
import antdRu from "antd/locale/ru_RU";
import dayjs from "dayjs";
import dayjsRu from "dayjs/locale/ru";
import React from "react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { themeConfig } from "@/shared/config";

const dayjsLocales: Record<string, ILocale> = {
  ru: dayjsRu,
};
const antdLocales: Record<string, Locale> = {
  ru: antdRu,
};

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const { i18n } = useTranslation();

  React.useEffect(() => {
    if (dayjsLocales[i18n.language]) dayjs.locale(dayjsLocales[i18n.language]);
  }, [i18n.language]);

  return (
    <ConfigProvider
      theme={{ ...themeConfig, cssVar: { key: "app" } }}
      locale={antdLocales[i18n.language]}
    >
      <AntdApp className={appStyles}>{children}</AntdApp>
    </ConfigProvider>
  );
}

const appStyles = css`
  width: 100%;
  height: 100%;
`;
