import styles from "./Input.module.css";

type TextAreaProps = {
  id: string;
  value: string | number;
  onChange?: (value: string) => void;

  label?: string;
  helperText?: string;

  error?: boolean;
  disabled?: boolean;

  className?: string;
  outlineClassName?: string;
  textAreaClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;

  ref?: React.Ref<HTMLTextAreaElement>;
} & Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id" | "value" | "onChange" | "disabled" | "className"
>;
export function TextArea({
  id,
  value,
  onChange,

  label,
  helperText,

  error,
  disabled,

  className,
  outlineClassName,
  textAreaClassName,
  labelClassName,
  helperTextClassName,

  ref,

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
          ref={ref}
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
