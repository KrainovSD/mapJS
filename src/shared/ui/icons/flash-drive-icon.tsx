import type { IconProps } from "@/shared/types";

export function FlashDriveIcon(props: IconProps): JSX.Element {
  const { fontSize = "16", color = "#FFFFFF", ...rest } = props;

  return (
    <svg
      width={fontSize}
      height={fontSize}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M15.023 5.78953L11.0855 1.85203C11.0332 1.79981 10.9711 1.7584 10.9029 1.73017C10.8346 1.70194 10.7614 1.68744 10.6875 1.6875H3.9375C3.63913 1.6875 3.35298 1.80603 3.142 2.017C2.93103 2.22798 2.8125 2.51413 2.8125 2.8125V15.1875C2.8125 15.4859 2.93103 15.772 3.142 15.983C3.35298 16.194 3.63913 16.3125 3.9375 16.3125H14.0625C14.3609 16.3125 14.647 16.194 14.858 15.983C15.069 15.772 15.1875 15.4859 15.1875 15.1875V6.1875C15.1876 6.11361 15.1731 6.04043 15.1448 5.97215C15.1166 5.90386 15.0752 5.84181 15.023 5.78953ZM12.9375 13.5C12.9375 13.6492 12.8782 13.7923 12.7727 13.8977C12.6673 14.0032 12.5242 14.0625 12.375 14.0625H11.25C11.1754 14.0625 11.1039 14.0329 11.0511 13.9801C10.9984 13.9274 10.9688 13.8558 10.9688 13.7812V11.269C10.9707 11.1238 10.9176 10.9833 10.8202 10.8757C10.7227 10.7681 10.5882 10.7013 10.4435 10.6889C10.3666 10.6838 10.2894 10.6946 10.2168 10.7205C10.1442 10.7465 10.0777 10.7871 10.0215 10.8399C9.96521 10.8926 9.92041 10.9564 9.88984 11.0272C9.85927 11.098 9.84358 11.1743 9.84375 11.2514V13.7827C9.84375 13.8572 9.81412 13.9288 9.76137 13.9815C9.70863 14.0343 9.63709 14.0639 9.5625 14.0639H8.4375C8.36291 14.0639 8.29137 14.0343 8.23863 13.9815C8.18588 13.9288 8.15625 13.8572 8.15625 13.7827V11.269C8.1582 11.1238 8.10512 10.9833 8.00768 10.8757C7.91024 10.7681 7.77566 10.7013 7.63102 10.6889C7.55407 10.6838 7.4769 10.6946 7.4043 10.7205C7.33169 10.7465 7.2652 10.7871 7.20895 10.8399C7.15271 10.8926 7.10791 10.9564 7.07734 11.0272C7.04677 11.098 7.03108 11.1743 7.03125 11.2514V13.7827C7.03125 13.8572 7.00162 13.9288 6.94887 13.9815C6.89613 14.0343 6.82459 14.0639 6.75 14.0639H5.625C5.47582 14.0639 5.33274 14.0046 5.22725 13.8992C5.12176 13.7937 5.0625 13.6506 5.0625 13.5014V9.5625C5.0625 9.41332 5.12176 9.27024 5.22725 9.16475C5.33274 9.05926 5.47582 9 5.625 9H12.375C12.5242 9 12.6673 9.05926 12.7727 9.16475C12.8782 9.27024 12.9375 9.41332 12.9375 9.5625V13.5Z"
        fill={color}
      />
    </svg>
  );
}
