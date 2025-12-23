import "@material-symbols/font-400/outlined.css";
import styles from "./Button.module.css";

type ButtonProps = {
  ref?: React.Ref<HTMLButtonElement>;
  children?: React.ReactNode;

  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;
export function Button({ ref, children, className, ...props }: ButtonProps) {
  return (
    <button
      ref={ref}
      className={styles.button + " " + (className || "")}
      {...props}>
      {children}
    </button>
  );
}
