import type { IconProps } from "@/shared/types";

const prefix = "icon";
const getUniqueId = (() => {
  let id = 1_000_000;

  return () => {
    id += 1;

    return `${prefix}-${id.toString(16)}`;
  };
})();
const CLIP_PATH_ID = getUniqueId();

export function ArrowIcon(props: IconProps): JSX.Element {
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
      <g clipPath={`url(#${CLIP_PATH_ID})`}>
        <path
          d="M8.00033 2.66663L7.06033 3.60663L10.7803 7.33329H2.66699V8.66663H10.7803L7.06033 12.3933L8.00033 13.3333L13.3337 7.99996L8.00033 2.66663Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id={CLIP_PATH_ID}>
          <rect width={fontSize} height={fontSize} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
