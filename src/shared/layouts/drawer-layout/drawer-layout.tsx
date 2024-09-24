import type { ReactNode } from "react";
import { Drawer, type DrawerProps } from "../../ui/drawer";
import { drawerStyles } from "./styles";

interface DrawerLayoutProps {
  children: ReactNode;
  isOpen: DrawerProps["open"];
  onClose: DrawerProps["onClose"];
}

export function DrawerLayout(props: DrawerLayoutProps): JSX.Element {
  const { children, isOpen, onClose } = props;

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      className={drawerStyles}
      closable={false}
      width={860}
      destroyOnClose
    >
      {children}
    </Drawer>
  );
}
