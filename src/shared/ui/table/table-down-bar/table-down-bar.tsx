import { theme } from "antd";
import type { ReactNode } from "react";
import { downBarContainerStyles } from "./styles";

interface TableDownBarProps {
  children: ReactNode | ReactNode[];
  className?: string;
  float?: boolean;
}

export function TableDownBar(props: TableDownBarProps): JSX.Element {
  const { children } = props;
  const { token } = theme.useToken();

  return <div className={downBarContainerStyles(token)}>{children}</div>;
}
