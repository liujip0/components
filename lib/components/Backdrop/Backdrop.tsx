import "@material-symbols/font-400/outlined.css";
import styles from "./Backdrop.module.css";

type BackdropProps = {
  open: boolean;
  onClose?: () => void;

  className?: string;
};
export function Backdrop({ open, onClose, className }: BackdropProps) {
  return open ?
      <div
        onClick={() => {
          if (onClose) {
            onClose();
          }
        }}
        className={styles.backdrop + " " + (className || "")}></div>
    : <></>;
}
