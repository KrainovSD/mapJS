import { css } from "@emotion/css";
import type { TokenType } from "@/shared/types";

export const layoutStyles = css`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const contentStyles = (token: TokenType) => css`
  background: ${token.colorBgBase};
  padding: 44px 32px 32px 32px;
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

export const singleContentStyles = (token: TokenType) => css`
  background: ${token.colorBgBase};
  width: 100%;
  height: 100%;
`;
