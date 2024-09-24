import { css } from "@emotion/css";
import type { TokenType } from "@/shared/types";

export const selectLoadingStyle = (token: TokenType) => css`
  padding: ${token.paddingSM}px;
`;
