import styles from "./IconButton.module.css";

type IconButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export function IconButton({ children, className, ...props }: IconButtonProps) {
  return (
    <button
      className={styles.button + " " + (className || "")}
      {...props}>
      {children}
    </button>
  );
}
