import "@material-symbols/font-400/outlined.css";
import styles from "./Tab.module.css";

export type TabProps = {
  value: string;
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;

  className?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "className" | "onClick">;
export function Tab({
  selected,
  onClick,
  children,

  className,

  ...props
}: TabProps) {
  return (
    <div
      className={
        styles.tab +
        " " +
        (className || "") +
        " " +
        (selected ? styles.activeTab : "")
      }
      onClick={onClick}
      {...props}>
      {children}
    </div>
  );
}
