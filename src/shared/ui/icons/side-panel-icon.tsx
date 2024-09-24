import React from "react";
import type { IconProps } from "@/shared/types";

export function SidePanelIcon(props: IconProps): React.JSX.Element {
  const { fontSize = "16", color = "#FFFFFF" } = props;

  return (
    <svg
      width={fontSize}
      height={fontSize}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1875 2.8125H2.8125C2.51413 2.8125 2.22798 2.93103 2.017 3.142C1.80603 3.35298 1.6875 3.63913 1.6875 3.9375V14.0625C1.6875 14.3609 1.80603 14.647 2.017 14.858C2.22798 15.069 2.51413 15.1875 2.8125 15.1875H15.1875C15.4859 15.1875 15.772 15.069 15.983 14.858C16.194 14.647 16.3125 14.3609 16.3125 14.0625V3.9375C16.3125 3.63913 16.194 3.35298 15.983 3.142C15.772 2.93103 15.4859 2.8125 15.1875 2.8125ZM2.8125 3.9375H5.625V14.0625H2.8125V3.9375ZM15.1875 14.0625H6.75V3.9375H15.1875V14.0625Z"
        fill={color}
      />
    </svg>
  );
}
