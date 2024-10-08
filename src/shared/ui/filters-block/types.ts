import type { FormRule } from "antd";
import type { OptionInterface } from "@/shared/types";
import type { RangePickerProps } from "@/shared/ui";

type InputValueType =
  | string
  | number
  | undefined
  | null
  | OptionInterface
  | RangePickerProps["value"];

export type FilterInputValueType = InputValueType | InputValueType[];

export type FilterFieldType = {
  name: string;
  label: string;
  rules?: FormRule[];
  // Использовать вместе с Select. Если установить в Select labelInValue и в Field, то в форме будет храниться выбранный объект, а не value. Используется для сложных renderDisplayValue
  labelInValue?: boolean;
  renderDisplayValue?: (value: FilterInputValueType) => string;
  icon?: JSX.Element;
  inputField?: JSX.Element;
};
