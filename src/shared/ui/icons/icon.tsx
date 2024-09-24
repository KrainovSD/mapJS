import type { IconProps } from "@/shared/types";
import { Icons } from "./icons";

type Props = {
  icon: keyof typeof Icons;
} & IconProps;

export function Icon(props: Props) {
  const { icon, ...rest } = props;
  const Icon = Icons[icon];
  if (!Icon) return null;

  const size = parseInt(String(rest.fontSize), 10) || rest.size;

  return (
    <Icon
      {...rest}
      fontSize={size == undefined ? undefined : `${size}px`}
      size={size == undefined ? undefined : size}
      style={{
        ...rest.style,
        fontSize: size == undefined ? undefined : `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
    />
  );
}
