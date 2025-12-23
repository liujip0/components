import "@material-symbols/font-400/outlined.css";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  ref?: React.Ref<HTMLButtonElement>;
  children: React.ReactNode;

  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;
export function IconButton({
  ref,
  children,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      ref={ref}
      className={styles.button + " " + (className || "")}
      {...props}>
      {children}
    </button>
  );
}
