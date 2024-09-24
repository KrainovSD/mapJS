import { css } from "@emotion/css";

interface DividerStylesParamsInterface {
  horizontalMargin?: number;
  verticalMargin?: number;
}

export const dividerStyles = ({
  horizontalMargin,
  verticalMargin,
}: DividerStylesParamsInterface) => css`
  height: auto;
  width: auto;
  min-width: auto;
  margin: ${verticalMargin || 0}px ${horizontalMargin || 0}px;
`;
