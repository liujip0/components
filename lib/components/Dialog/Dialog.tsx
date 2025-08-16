import styles from "./Dialog.module.css";

type DialogProps = {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;

  backdropClassName?: string;
  dialogClassName?: string;
};
export function Dialog({
  open,
  onClose,
  children,

  backdropClassName,
  dialogClassName,
}: DialogProps) {
  return open ?
      <div
        className={styles.screenDarken + " " + (backdropClassName || "")}
        onClick={() => {
          if (onClose) {
            onClose();
          }
        }}>
        <div
          className={styles.dialog + " " + (dialogClassName || "")}
          onClick={(event) => {
            event.stopPropagation();
          }}>
          {children}
        </div>
      </div>
    : <></>;
}

type DialogTitleProps = {
  children: React.ReactNode;

  className?: string;
};
export function DialogTitle({ children, className }: DialogTitleProps) {
  return (
    <h2 className={styles.dialogTitle + " " + (className || "")}>{children}</h2>
  );
}

type DialogContentProps = {
  children: React.ReactNode;

  className?: string;
};
export function DialogContent({ children, className }: DialogContentProps) {
  return (
    <div className={styles.dialogContent + " " + (className || "")}>
      {children}
    </div>
  );
}

type DialogActionsProps = {
  children: React.ReactNode;

  className?: string;
};
export function DialogActions({ children, className }: DialogActionsProps) {
  return (
    <div className={styles.dialogActions + " " + (className || "")}>
      {children}
    </div>
  );
}
