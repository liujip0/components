import styles from "./Input.module.css";

type InputProps = {
  value: string | number;
  onChange?: (value: string) => void;
  type?: "text" | "password" | "email" | "number" | "search";
  id: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  className?: string;
  outlineClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  inputClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
export function Input({
  value,
  onChange,
  type = "text",
  id,
  startIcon,
  endIcon,
  label,
  error,
  helperText,
  disabled,
  className,
  outlineClassName,
  labelClassName,
  helperTextClassName,
  inputClassName,
  ...props
}: InputProps) {
  return (
    <div className={styles.container + " " + (className || "")}>
      {label && (
        <label
          htmlFor={id}
          className={styles.label + " " + (labelClassName || "")}>
          {label}
        </label>
      )}
      <div
        className={
          styles.outline +
          " " +
          (outlineClassName || "") +
          " " +
          (error ? styles.errorOutline : "")
        }>
        {startIcon}
        <input
          className={
            styles.input +
            " " +
            (inputClassName || "") +
            " " +
            (disabled ? styles.inputDisabled : "")
          }
          value={value}
          onChange={(event) => {
            if (onChange) {
              onChange(event.currentTarget.value);
            }
          }}
          type={type}
          id={id}
          disabled={disabled}
          {...props}
        />
        {endIcon}
      </div>
      {helperText && (
        <p
          className={
            styles.helperText +
            " " +
            (helperTextClassName || "") +
            " " +
            (error ? styles.helperTextError : "")
          }>
          {helperText}
        </p>
      )}
    </div>
  );
}
