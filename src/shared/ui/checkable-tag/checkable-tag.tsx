import { Tag as AntdTag } from "antd";
import type { GetProps } from "antd";
import type { JSX } from "react";

type Props = GetProps<typeof AntdTag.CheckableTag>;

export function CheckableTag(props: Props): JSX.Element {
  const { children, ...otherProps } = props;

  return <AntdTag.CheckableTag {...otherProps}>{children}</AntdTag.CheckableTag>;
}
