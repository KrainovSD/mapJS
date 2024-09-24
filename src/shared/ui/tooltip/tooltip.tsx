import { Tooltip as AntdTooltip, type TooltipProps as AntdTooltipProps } from "antd";

type TooltipProps = AntdTooltipProps;

export function Tooltip(props: TooltipProps): JSX.Element {
  const { children, ...otherProps } = props;

  return <AntdTooltip {...otherProps}>{children}</AntdTooltip>;
}
