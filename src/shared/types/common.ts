import type { GlobalToken } from "antd/es/theme/interface";
import type { CSSProperties } from "react";
import type { COLORS } from "../config";

export type TokenType = GlobalToken;

export interface IconProps {
  color?: string;
  fontSize?: string;
  classes?: string;
  opacity?: string;
  style?: CSSProperties;
  size?: number;
  className?: string;
}

export interface OptionInterface {
  label: string;
  value: number | string | null;
  color?: string;
}

export type OptionListType = OptionInterface[];

export type TagOption = {
  label: string;
  value: string;
  colorBg: string;
  color: string;
};

export type ColorConfig = typeof COLORS;
