import { css } from "@emotion/css";
import { COLORS } from "@/shared/config";

export const styles = {
  base: css`
    position: relative;
    height: 51px;

    &.small {
      height: 47px;
    }
  `,
  text: css`
    height: 42px;
    font-size: 14px;
    color: ${COLORS.greyPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.selected {
      color: ${COLORS.black};
      font-weight: 700;
    }
  `,
  line: css`
    position: absolute;
    background: ${COLORS.bluePrimary};
    border-radius: 8px 8px 0px 0px;
    height: 4px;
    transition: all 600ms ease;
    top: calc(100% - 4px);
  `,
};
