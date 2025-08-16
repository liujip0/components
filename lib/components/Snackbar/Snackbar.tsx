import { useEffect } from "react";
import styles from "./Snackbar.module.css";

type SnackbarProps = {
  open: boolean;
  onClose?: () => void;
  autoHideDuration?: number;

  message?: string;
  action?: React.ReactNode;

  className?: string;
  messageClassName?: string;
  actionClassName?: string;
};
export function Snackbar({
  open,
  onClose,
  autoHideDuration,

  message,
  action,

  className,
  messageClassName,
  actionClassName,
}: SnackbarProps) {
  useEffect(() => {
    if (open && autoHideDuration && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  return open ?
      <div className={styles.snackbar + " " + (className || "")}>
        <p className={styles.message + " " + (messageClassName || "")}>
          {message}
        </p>
        <div className={actionClassName || ""}>{action}</div>
      </div>
    : <></>;
}
