import { Divider as AntdDivider } from "antd";
import type { DividerProps as AntdDividerProps } from "antd";
import { clsx } from "clsx";
import { dividerStyles } from "./styles";

interface DividerProps extends AntdDividerProps {
  horizontalMargin?: number;
  verticalMargin?: number;
}

export function Divider(props: DividerProps) {
  const { horizontalMargin, verticalMargin, className, ...otherProps } = props;

  return (
    <AntdDivider
      className={clsx(dividerStyles({ horizontalMargin, verticalMargin }), className)}
      {...otherProps}
    />
  );
}
