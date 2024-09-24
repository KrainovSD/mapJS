import { Collapse as AntdCollapse } from "antd";
import type { CollapseProps as AntdCollapseProps } from "antd";
import type { JSX } from "react";

interface CollapseProps extends AntdCollapseProps {}

export function Collapse(props: CollapseProps): JSX.Element {
  const { children, ...otherProps } = props;

  return <AntdCollapse {...otherProps}>{children}</AntdCollapse>;
}
