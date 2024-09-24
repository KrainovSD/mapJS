import { Badge as AntdBadge } from "antd";
import type { BadgeProps as AntdBadgeProps } from "antd";
import type { JSX } from "react";
import { styles } from "./styles";

interface BadgeProps extends AntdBadgeProps {
  custom?: boolean;
  customColor?: string;
  customSize?: number;
}

export function Badge(props: BadgeProps): JSX.Element {
  const { children, custom, customSize, customColor, ...otherProps } = props;

  if (custom) return <div className={styles.custom(customColor || "inherit", customSize)}></div>;

  return <AntdBadge {...otherProps}>{children}</AntdBadge>;
}
