import type { IconProps } from "@/shared/types";

export function DeleteIcon(props: IconProps): JSX.Element {
  const { fontSize = "16", color = "#FFFFFF", opacity = 1 } = props;

  return (
    <svg
      fill="none"
      height={fontSize}
      viewBox="0 0 16 16"
      width={fontSize}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillOpacity={opacity}
        fill={color}
        d="M13.5 3H11V2.5C11 2.10218 10.842 1.72064 10.5607 1.43934C10.2794 1.15804 9.89782 1 9.5 1H6.5C6.10218 1 5.72064 1.15804 5.43934 1.43934C5.15804 1.72064 5 2.10218 5 2.5V3H2.5C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5C2 3.63261 2.05268 3.75979 2.14645 3.85355C2.24021 3.94732 2.36739 4 2.5 4H3V13C3 13.2652 3.10536 13.5196 3.29289 13.7071C3.48043 13.8946 3.73478 14 4 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V4H13.5C13.6326 4 13.7598 3.94732 13.8536 3.85355C13.9473 3.75979 14 3.63261 14 3.5C14 3.36739 13.9473 3.24021 13.8536 3.14645C13.7598 3.05268 13.6326 3 13.5 3ZM6 2.5C6 2.36739 6.05268 2.24021 6.14645 2.14645C6.24021 2.05268 6.36739 2 6.5 2H9.5C9.63261 2 9.75979 2.05268 9.85355 2.14645C9.94732 2.24021 10 2.36739 10 2.5V3H6V2.5ZM12 13H4V4H12V13ZM7 6.5V10.5C7 10.6326 6.94732 10.7598 6.85355 10.8536C6.75979 10.9473 6.63261 11 6.5 11C6.36739 11 6.24021 10.9473 6.14645 10.8536C6.05268 10.7598 6 10.6326 6 10.5V6.5C6 6.36739 6.05268 6.24021 6.14645 6.14645C6.24021 6.05268 6.36739 6 6.5 6C6.63261 6 6.75979 6.05268 6.85355 6.14645C6.94732 6.24021 7 6.36739 7 6.5ZM10 6.5V10.5C10 10.6326 9.94732 10.7598 9.85355 10.8536C9.75979 10.9473 9.63261 11 9.5 11C9.36739 11 9.24021 10.9473 9.14645 10.8536C9.05268 10.7598 9 10.6326 9 10.5V6.5C9 6.36739 9.05268 6.24021 9.14645 6.14645C9.24021 6.05268 9.36739 6 9.5 6C9.63261 6 9.75979 6.05268 9.85355 6.14645C9.94732 6.24021 10 6.36739 10 6.5Z"
      />
    </svg>
  );
}
