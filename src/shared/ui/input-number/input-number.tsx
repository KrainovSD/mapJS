import { InputNumber as AntdInputNumber } from "antd";
import type { InputNumberProps as AntdInputNumberProps } from "antd";
import type { JSX } from "react";

interface InputNumberProps extends AntdInputNumberProps {}

export function InputNumber(props: InputNumberProps): JSX.Element {
  return <AntdInputNumber {...props} />;
}
