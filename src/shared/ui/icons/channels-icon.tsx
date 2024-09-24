import type { IconProps } from "@/shared/types";

export function ChannelsIcon(props: IconProps): JSX.Element {
  const { fontSize = "16", color = "#FFFFFF", opacity = "1" } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={fontSize}
      height={fontSize}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.5 4.49997H10.0125C9.83062 4.48935 6.66125 4.26622 3.64313 1.73497C3.49738 1.61257 3.31973 1.5343 3.13104 1.50936C2.94236 1.48442 2.75047 1.51384 2.57793 1.59417C2.40538 1.6745 2.25935 1.80241 2.15697 1.96286C2.0546 2.12331 2.00014 2.30964 2 2.49997V12.5C2.00003 12.6904 2.0544 12.8768 2.15672 13.0373C2.25905 13.1979 2.40508 13.3259 2.57764 13.4063C2.75021 13.4867 2.94214 13.5162 3.13089 13.4912C3.31963 13.4663 3.49734 13.388 3.64313 13.2656C6.00375 11.2856 8.45563 10.7181 9.5 10.5593V12.5418C9.49979 12.7066 9.5403 12.8689 9.61794 13.0143C9.69558 13.1596 9.80793 13.2835 9.945 13.375L10.6325 13.8331C10.7654 13.9218 10.9176 13.9774 11.0764 13.9951C11.2351 14.0129 11.3959 13.9924 11.5451 13.9353C11.6943 13.8782 11.8276 13.7862 11.934 13.6669C12.0403 13.5477 12.1165 13.4047 12.1562 13.25L12.8919 10.4775C13.6523 10.384 14.3482 10.0032 14.8368 9.41304C15.3255 8.82288 15.5698 8.06814 15.5196 7.30361C15.4695 6.53907 15.1288 5.82268 14.5673 5.30136C14.0058 4.78005 13.2661 4.49332 12.5 4.49997ZM11.1875 12.9931V13L10.5 12.5418V10.5H11.85L11.1875 12.9931ZM12.5 9.49997H10.5V5.49997H12.5C13.0304 5.49997 13.5391 5.71069 13.9142 6.08576C14.2893 6.46083 14.5 6.96954 14.5 7.49997C14.5 8.03041 14.2893 8.53911 13.9142 8.91419C13.5391 9.28926 13.0304 9.49997 12.5 9.49997Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
}
