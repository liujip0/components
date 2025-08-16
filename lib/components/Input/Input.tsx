import styles from "./Input.module.css";

export type InputProps = {
  id: string;
  value: string | number;
  onChange?: (value: string) => void;
  type?: "text" | "password" | "email" | "number" | "search";

  label?: string;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  error?: boolean;
  disabled?: boolean;

  className?: string;
  outlineClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "id" | "value" | "onChange" | "type" | "disabled" | "className"
>;
export function Input({
  id,
  value,
  onChange,
  type = "text",

  label,
  helperText,
  startIcon,
  endIcon,

  error,
  disabled,

  className,
  outlineClassName,
  inputClassName,
  labelClassName,
  helperTextClassName,

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
