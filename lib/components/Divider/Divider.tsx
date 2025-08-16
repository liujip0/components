import styles from "./Divider.module.css";

type DividerProps = {
  orientation: "horizontal" | "vertical";
  className?: string;
};
export function Divider({ orientation, className }: DividerProps) {
  return (
    <div
      className={
        styles.divider +
        " " +
        (styles[orientation] + "Divider") +
        " " +
        (className || "")
      }></div>
  );
}
