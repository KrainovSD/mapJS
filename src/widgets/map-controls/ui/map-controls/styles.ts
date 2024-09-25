import { css } from "@emotion/css";
import { COLORS } from "@/shared/config";

export const styles = {
  base: css`
    width: 350px;
    height: 100%;
    background-color: ${COLORS.greyPrimary50Full};
    position: absolute;
    right: 0;
    z-index: 1;
    border-radius: 4px;
  `,

  baseClosed: css`
    width: 30px;
    height: 100%;
    position: absolute;
    right: 0;
    z-index: 1;
    border-radius: 4px;
    background-color: ${COLORS.greyPrimary50Full};

    &:hover .button {
      opacity: 1;
    }
  `,

  button: css`
    /* opacity: 0; */
    transition: all 0.3s ease;
    margin-top: 14px;
  `,

  divider: css`
    background-color: ${COLORS.greyPrimary};
  `,
};
