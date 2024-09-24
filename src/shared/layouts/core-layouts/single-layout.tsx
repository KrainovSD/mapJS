import { theme } from "antd";
import type { JSX } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router-dom";
import { Content } from "../../ui/content";
import { Layout } from "../layout";
import { layoutStyles, singleContentStyles } from "./styles";

export function SingleLayout(): JSX.Element {
  const { token } = theme.useToken();

  return (
    <Layout className={layoutStyles}>
      <Content className={singleContentStyles(token)}>{<Outlet />}</Content>
    </Layout>
  );
}
