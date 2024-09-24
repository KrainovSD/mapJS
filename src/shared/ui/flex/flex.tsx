import { Flex as AntdFlex } from "antd";
import type { FlexProps as AntdFlexProps } from "antd";
import { type JSX, forwardRef } from "react";

// gap prop values
// large - 24px
// middle - 16px
// small - 8px

interface FlexProps extends AntdFlexProps {}

export const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref): JSX.Element => {
  const { children, ...otherProps } = props;

  return (
    <AntdFlex ref={ref} {...otherProps}>
      {children}
    </AntdFlex>
  );
});
