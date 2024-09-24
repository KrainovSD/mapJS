import type { GetProps } from "antd";
import { Layout as AntdLayout } from "antd";

type ContentProps = GetProps<typeof AntdLayout.Content>;

export function Content(props: ContentProps) {
  const { children, ...otherProps } = props;

  return <AntdLayout.Content {...otherProps}>{children}</AntdLayout.Content>;
}
