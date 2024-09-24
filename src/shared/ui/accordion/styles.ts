import { css } from "@emotion/css";

export const styles = {
  arrow: css`
    transition: all 0.2s ease;
    transform: rotate(0deg);

    &.open {
      transform: rotate(90deg);
    }
  `,

  text: (color: string) => css`
    color: ${color};
    font-weight: 800;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    font-size: 16px;
  `,

  base: (colorBg: string, colorBorder: string) => css`
    border: 1px solid transparent;
    border-radius: 8px;
    transition: all 0.2s ease;
    max-width: 100%;
    overflow: hidden;
    padding: 4px;
    min-height: 35px;
    cursor: pointer;

    &.open {
      background-color: ${colorBg};
      border-color: ${colorBorder};
    }
  `,

  container: css`
    max-width: 100%;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
  `,
};
