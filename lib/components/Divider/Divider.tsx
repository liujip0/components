import styles from "./Divider.module.css";

type DividerProps = {
  orientation: "horizontal" | "vertical";
};
export function Divider({ orientation }: DividerProps) {
  return (
    <div
      className={
        styles.divider + " " + (styles[orientation] + "Divider")
      }></div>
  );
}
