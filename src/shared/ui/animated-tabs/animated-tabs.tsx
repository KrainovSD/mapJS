import clsx from "clsx";
import React from "react";
import { utils } from "@/shared/lib";
import { Flex } from "../flex";
import { Text } from "../typography";
import { styles } from "./styles";

type Props = {
  tabs: string[];
  className?: string;
  tabClassName?: string;
  setSelectedTab: (tab: string) => void;
  selectedTab: string | null;
  size?: "big" | "small";
};

export function AnimatedTabs(props: Props) {
  const { selectedTab, setSelectedTab, tabs, size = "small" } = props;
  const componentId = React.useMemo(() => {
    return utils.randomString();
  }, []);

  const [offset, setOffset] = React.useState({ x: 0, w: 0 });
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    if (!selectedTab) return;

    let node: Element | null = null;

    try {
      node = document.getElementById(getTabId(selectedTab, componentId));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }

    if (!node || !containerRef.current) return;

    const { x: containerX } = containerRef.current.getBoundingClientRect() ?? {};
    const { x: tabX, width: tabWidth } = node.getBoundingClientRect() ?? {};
    setOffset({ x: tabX - containerX, w: tabWidth });
  }, [selectedTab, componentId]);

  return (
    <Flex
      gap={28}
      className={clsx(styles.base, size === "small" && "small", props.className)}
      ref={containerRef}
    >
      {tabs.map((tab) => {
        return (
          <Text
            key={tab}
            id={getTabId(tab, componentId)}
            className={clsx(styles.text, tab === selectedTab && "selected", props.tabClassName)}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </Text>
        );
      })}
      {offset.w > 0 && (
        <div className={styles.line} style={{ left: offset.x, width: offset.w }}></div>
      )}
    </Flex>
  );
}

function getTabId(tab: string, componentId: string) {
  return `${tab}:${componentId}`;
}
