import type { IconProps } from "@/shared/types";

export function SaveFillIcon(props: IconProps): JSX.Element {
  const { fontSize = "16", color = "#FFFFFF", ...rest } = props;

  return (
    <svg
      width={fontSize}
      height={fontSize}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.1667 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V3.83333L12.1667 0.5ZM8 13.8333C6.61667 13.8333 5.5 12.7167 5.5 11.3333C5.5 9.95 6.61667 8.83333 8 8.83333C9.38333 8.83333 10.5 9.95 10.5 11.3333C10.5 12.7167 9.38333 13.8333 8 13.8333ZM10.5 5.5H2.16667V2.16667H10.5V5.5Z"
        fill={color}
      />
    </svg>
  );
}
