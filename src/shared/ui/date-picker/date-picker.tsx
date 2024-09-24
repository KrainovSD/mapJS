import { DatePicker as AntdDatePicker } from "antd";
import type { DatePickerProps as AntdDatePickerProps } from "antd";
import type { JSX } from "react";

interface DatePickerProps extends AntdDatePickerProps {}

export function DatePicker(props: DatePickerProps): JSX.Element {
  return <AntdDatePicker {...props} />;
}
