import styles from "./Input.module.css";

type TextAreaProps = {
  value: string | number;
  onChange?: (value: string) => void;
  id: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  className?: string;
  outlineClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  textAreaClassName?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export function TextArea({
  value,
  onChange,
  id,
  label,
  error,
  helperText,
  disabled,
  className,
  outlineClassName,
  labelClassName,
  helperTextClassName,
  textAreaClassName,
  ...props
}: TextAreaProps) {
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
          (error ? styles.errorOutline : "") +
          " " +
          (outlineClassName || "")
        }>
        <textarea
          className={
            styles.input +
            " " +
            (textAreaClassName || "") +
            " " +
            (disabled ? styles.inputDisabled : "")
          }
          value={value}
          onChange={(event) => {
            if (onChange) {
              onChange(event.currentTarget.value);
            }
          }}
          id={id}
          disabled={disabled}
          {...props}></textarea>
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
