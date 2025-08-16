import React from "react";
import styles from "./Select.module.css";

type SelectProps = {
  id: string;
  value: string;
  onChange?: (value: string) => void;
  children?: React.ReactNode;

  label?: string;
  helperText?: string;

  error?: boolean;
  disabled?: boolean;

  className?: string;
  outlineClassName?: string;
  selectClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
} & Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "id" | "value" | "onChange" | "disabled" | "className"
>;
export function Select({
  id,
  value,
  onChange,
  children,

  label,
  helperText,

  error,
  disabled,

  className,
  outlineClassName,
  selectClassName,
  labelClassName,
  helperTextClassName,

  ...props
}: SelectProps) {
  return (
    <div className={styles.container + " " + (className || "")}>
      {label && (
        <label
          htmlFor={id}
          className={
            styles.label +
            " " +
            (styles.labelClassName || "") +
            " " +
            (labelClassName || "")
          }>
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
        <select
          id={id}
          className={
            styles.select +
            " " +
            (disabled ? styles.selectDisabled : "") +
            " " +
            (selectClassName || "")
          }
          value={value}
          onChange={(event) => {
            if (onChange) {
              onChange(event.target.value);
            }
          }}
          disabled={disabled}
          {...props}>
          {children}
        </select>
      </div>
      {helperText && (
        <p
          className={
            styles.helperText +
            " " +
            (error ? styles.helperTextError : "") +
            " " +
            (helperTextClassName || "")
          }>
          {helperText}
        </p>
      )}
    </div>
  );
}
