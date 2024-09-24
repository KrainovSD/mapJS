import { theme } from "antd";
import type { JSX } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router-dom";
import { Content } from "../../ui/content";
import { Layout } from "../layout";
import { contentStyles, layoutStyles } from "./styles";

export function CoreLayout(): JSX.Element {
  const { token } = theme.useToken();

  return (
    <Layout className={layoutStyles}>
      <Content className={contentStyles(token)}>{<Outlet />}</Content>
    </Layout>
  );
}
