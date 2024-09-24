import type { ThemeConfig } from "antd";
import { COLORS } from "./color-config";

export const themeConfig: ThemeConfig = {
  token: {
    fontFamily: "Nunito",
    colorPrimary: COLORS.bluePrimary,
    colorPrimaryBg: COLORS.blueActive,
    colorLink: COLORS.bluePrimary,
    colorPrimaryTextHover: "#37544D",
    colorBgSpotlight: "#1C2E2A",
  },
  components: {
    Typography: {
      fontWeightStrong: 500,
    },
    Form: {
      itemMarginBottom: 0,
      labelRequiredMarkColor: "#FF4D4F",
    },
    Table: {
      headerColor: "rgba(0, 0, 0, 0.45)",
      headerBorderRadius: 0,
      headerBg: "transparent",
      cellPaddingBlock: 16,
      fontSize: 16,
      lineHeight: 1.5,
    },
    Tag: {
      defaultBg: "rgba(0, 0, 0, 0.02)",
    },
    Button: {
      defaultColor: "#000000E0",
      defaultGhostColor: "#FFFFFF",
    },
    Avatar: {
      borderRadius: 6,
    },
  },
};
