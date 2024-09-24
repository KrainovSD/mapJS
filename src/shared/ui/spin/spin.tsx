import { Spin as AntdSpin } from "antd";
import type { SpinProps as AntdSpinProps } from "antd";
import { LoadingOutlinedIcon } from "../icons";

interface SpinProps extends AntdSpinProps {
  iconSize?: number;
}

export function Spin(props: SpinProps): JSX.Element {
  const { indicator, iconSize, ...otherProps } = props;

  return (
    <AntdSpin
      indicator={indicator || <LoadingOutlinedIcon spin style={{ fontSize: `${iconSize}px` }} />}
      {...otherProps}
    />
  );
}
