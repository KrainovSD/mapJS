import { Button as AntdButton } from "antd";
import type { ButtonProps as AntdButtonProps } from "antd";
import clsx from "clsx";
import type { JSX } from "react";
import { button, buttonIconStyle } from "./styles";

interface ButtonProps extends AntdButtonProps {
  onlyIcon?: boolean;
}

export function Button(props: ButtonProps): JSX.Element {
  const { onlyIcon, ...rest } = props;

  return (
    <AntdButton
      {...rest}
      type={onlyIcon ? "link" : rest.type}
      className={clsx(button, props.className, onlyIcon && buttonIconStyle)}
    />
  );
}
