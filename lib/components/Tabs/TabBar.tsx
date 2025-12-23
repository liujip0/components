import "@material-symbols/font-400/outlined.css";
import React from "react";
import type { TabProps } from "./Tab.tsx";
import styles from "./TabBar.module.css";

type TabBarProps = {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;

  className?: string;
};
export function TabBar({ value, onChange, children, className }: TabBarProps) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<TabProps>(child)) {
      return React.cloneElement(child, {
        selected: value === child.props.value,
        onClick: () => {
          onChange(child.props.value);
        },
      });
    } else {
      return child;
    }
  });

  return (
    <div className={styles.tabBar + " " + (className || "")}>
      {childrenWithProps}
    </div>
  );
}
