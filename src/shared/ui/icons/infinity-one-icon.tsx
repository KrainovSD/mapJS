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

export function InfinityOneIcon(props: IconProps): JSX.Element {
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
          d="M15.7496 7.99996C15.7497 8.74171 15.5298 9.46682 15.1178 10.0836C14.7057 10.7004 14.12 11.1811 13.4348 11.4649C12.7495 11.7488 11.9954 11.8231 11.2679 11.6783C10.5404 11.5336 9.8722 11.1764 9.34775 10.6518L9.31713 10.6187L5.57588 6.39434C5.25958 6.08383 4.85862 5.87366 4.42331 5.79021C3.988 5.70675 3.53774 5.75372 3.12903 5.92523C2.72032 6.09674 2.37137 6.38515 2.12597 6.75426C1.88057 7.12336 1.74966 7.55673 1.74966 7.99996C1.74966 8.4432 1.88057 8.87656 2.12597 9.24567C2.37137 9.61478 2.72032 9.90318 3.12903 10.0747C3.53774 10.2462 3.988 10.2932 4.42331 10.2097C4.85862 10.1263 5.25958 9.91609 5.57588 9.60559L5.76838 9.38809C5.90024 9.2389 6.08597 9.14821 6.2847 9.13596C6.48343 9.12371 6.67888 9.19091 6.82807 9.32277C6.97725 9.45464 7.06794 9.64036 7.08019 9.83909C7.09244 10.0378 7.02524 10.2333 6.89338 10.3825L6.684 10.6187L6.65338 10.6518C6.12891 11.1762 5.46072 11.5333 4.73331 11.678C4.0059 11.8226 3.25193 11.7483 2.56674 11.4644C1.88156 11.1806 1.29593 10.7 0.883898 10.0833C0.471871 9.46661 0.251953 8.74162 0.251953 7.99996C0.251953 7.25831 0.471871 6.53331 0.883898 5.91664C1.29593 5.29997 1.88156 4.81932 2.56674 4.53548C3.25193 4.25163 4.0059 4.17733 4.73331 4.32197C5.46072 4.46661 6.12891 4.8237 6.65338 5.34809L6.684 5.38121L10.4253 9.60559C10.7416 9.91609 11.1425 10.1263 11.5778 10.2097C12.0131 10.2932 12.4634 10.2462 12.8721 10.0747C13.2808 9.90318 13.6298 9.61478 13.8752 9.24567C14.1206 8.87656 14.2515 8.4432 14.2515 7.99996C14.2515 7.55673 14.1206 7.12336 13.8752 6.75426C13.6298 6.38515 13.2808 6.09674 12.8721 5.92523C12.4634 5.75372 12.0131 5.70675 11.5778 5.79021C11.1425 5.87366 10.7416 6.08383 10.4253 6.39434L10.2328 6.61184C10.1675 6.68571 10.0883 6.74599 9.99967 6.78925C9.91108 6.83251 9.81484 6.8579 9.71644 6.86396C9.61804 6.87003 9.5194 6.85665 9.42617 6.8246C9.33294 6.79254 9.24693 6.74244 9.17307 6.67715C9.0992 6.61186 9.03891 6.53266 8.99565 6.44407C8.95239 6.35548 8.92701 6.25923 8.92094 6.16083C8.91488 6.06243 8.92825 5.9638 8.96031 5.87057C8.99236 5.77734 9.04246 5.69133 9.10775 5.61746L9.31713 5.38121L9.34775 5.34809C9.8722 4.82355 10.5404 4.46632 11.2679 4.32159C11.9954 4.17686 12.7495 4.25112 13.4348 4.53499C14.12 4.81886 14.7057 5.29957 15.1178 5.91634C15.5298 6.53311 15.7497 7.25822 15.7496 7.99996Z"
          fill={color}
        />
        <rect x="12.5156" y="7.24658" width="4.54492" height="5" fill="white" />
        <path
          d="M15.8601 15.2466H14.7001V9.80658H13.2601V9.01658C13.6534 9.00325 14.0001 8.93992 14.3001 8.82658C14.6001 8.70658 14.8367 8.48992 15.0101 8.17658H15.8601V15.2466Z"
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
