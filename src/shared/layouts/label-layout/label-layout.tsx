import { theme } from "antd";
import React from "react";
import { Flex } from "../../ui/flex";
import { Text } from "../../ui/typography";
import * as styles from "./styles";

type Props = {
  label: string;
  required?: boolean;
  color?: string;
  size?: number;
  lineHeight?: number;
};

export function LabelLayout(props: React.PropsWithChildren<Props>) {
  const { token } = theme.useToken();
  const {
    children,
    label,
    required,
    color = token.Form?.labelColor || token.colorText,
    lineHeight = token.lineHeight,
    size,
  } = props;

  return (
    <Flex vertical gap={6} className={styles.base}>
      <div>
        <Text
          style={{ fontSize: `${size}px`, lineHeight: `${lineHeight}px`, fontWeight: "600", color }}
        >
          {label}
        </Text>
        {required && (
          <Text style={{ color: token.Form?.labelRequiredMarkColor, paddingLeft: "4px" }}>*</Text>
        )}
      </div>
      {children}
    </Flex>
  );
}
