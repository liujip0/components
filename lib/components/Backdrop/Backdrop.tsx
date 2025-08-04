import styles from "./Backdrop.module.css";

type BackdropProps = {
  open: boolean;
  onClose?: () => void;
};
export function Backdrop({ open, onClose }: BackdropProps) {
  return open ?
      <div
        onClick={() => {
          if (onClose) {
            onClose();
          }
        }}
        className={styles.backdrop}></div>
    : <></>;
}
