import { css } from "@emotion/css";

export const styles = {
  custom: (color: string, size: number = 6) => css`
    background-color: ${color};
    width: ${size}px;
    height: ${size}px;
    min-width: ${size}px;
    min-height: ${size}px;
    border-radius: 100%;
  `,
};
