import { css } from "@emotion/css";
import { COLORS } from "@/shared/config";

export const styles = {
  base: css``,
  headerContainer: css`
    padding: 0 16px;
    height: 59px;
    width: 100%;

    &:hover .button {
      opacity: 1;
    }
  `,
  button: css`
    opacity: 0;
    transition: all 0.3s ease;
  `,
  header: css`
    color: ${COLORS.black};
    font-size: 16px;
    letter-spacing: 0.065px;
  `,

  icon: css`
    margin-top: 5px;
  `,
};
