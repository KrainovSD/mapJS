import clsx from "clsx";
import { COLORS } from "@/shared/config";
import { utils } from "@/shared/lib";
import { Flex } from "../flex";
import { Icon, type Icons } from "../icons";
import { Text } from "../typography";
import { styles } from "./styles";

type Props = {
  header: string;
  icon?: string;
  color?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onlyContent?: boolean;
  className?: string;
};

const DEFAULT_COLOR = COLORS.black;
const DEFAULT_ACTIVE_COLOR = COLORS.greyPrimary;
const DEFAULT_ICON = "Module";

export function Accordion(props: React.PropsWithChildren<Props>) {
  const {
    onlyContent,
    children,
    header,
    color = DEFAULT_ACTIVE_COLOR,
    icon = DEFAULT_ICON,
    isOpen,
    setIsOpen,
    className,
  } = props;

  const [colorActive, colorBg, colorBorder] = utils.takeOpacityColors(color, [20, 30]);
  const mainColor = isOpen ? colorActive : DEFAULT_COLOR;

  function onClickFolder() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {!onlyContent && (
        <Flex
          gap={10}
          align="center"
          onClick={onClickFolder}
          className={clsx(styles.base(colorBg, colorBorder), isOpen && "open", className)}
        >
          <Icon
            icon="ArrowFat"
            size={20}
            color={colorActive || DEFAULT_COLOR}
            className={clsx(styles.arrow, isOpen && "open")}
          />
          <Flex gap={"small"} align="center" className={styles.container}>
            {icon && <Icon size={20} icon={icon as keyof typeof Icons} color={mainColor} />}

            <Text ellipsis className={styles.text(mainColor)}>
              {header}
            </Text>
          </Flex>
        </Flex>
      )}

      {(onlyContent || isOpen) && children}
    </>
  );
}
