import styles from "./Button.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export function Button({ children, className, ref, ...props }: ButtonProps) {
  return (
    <button
      ref={ref}
      className={styles.button + " " + (className || "")}
      {...props}>
      {children}
    </button>
  );
}
