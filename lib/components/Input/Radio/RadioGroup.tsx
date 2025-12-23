import "@material-symbols/font-400/outlined.css";
import React from "react";
import type { RadioProps, RadioPropsAsChild } from "./Radio.tsx";
import styles from "./RadioGroup.module.css";

type RadioGroupProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  children?: React.ReactNode;

  label?: string;
  helperText?: string;

  error?: boolean;

  className?: string;
};
export function RadioGroup({
  name,
  value,
  onChange,
  children,

  label,
  helperText,

  error,

  className,
}: RadioGroupProps) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<RadioProps>(child)) {
      return React.cloneElement(child, {
        name: name,
        selected: value === child.props.value,
        onChange: (selected) => {
          if (selected) {
            onChange(child.props.value);
          } else {
            onChange("");
          }
        },
      } as RadioPropsAsChild);
    } else {
      return child;
    }
  });

  return (
    <div className={styles.container + " " + (className || "")}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.outline}>{childrenWithProps}</div>
      {helperText && (
        <p
          className={
            styles.helperText + " " + (error ? styles.helperTextError : "")
          }>
          {helperText}
        </p>
      )}
    </div>
  );
}
