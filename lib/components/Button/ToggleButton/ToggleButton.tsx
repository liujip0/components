import type React from "react";
import { omit } from "../../../utils/omit.ts";
import { Button } from "../Button.tsx";
import styles from "./ToggleButton.module.css";

export type ToggleButtonProps = {
  ref?: React.Ref<HTMLButtonElement>;
  children?: React.ReactNode;

  className?: string;
  classNameTrue?: string;
  classNameFalse?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "ref" | "className">;

export type ToggleButtonPropsAsStandalone = {
  value: boolean;
  onChange: (value: boolean) => void;
} & Omit<ToggleButtonProps, "value" | "onChange" | "onClick">;
export type ToggleButtonPropsAsChild = {
  value: string;
  selected?: boolean;
  onClick?: () => void;
} & Omit<ToggleButtonProps, "value" | "onClick" | "onChange">;

export function ToggleButton({
  value,
  onChange,
}: ToggleButtonPropsAsStandalone): React.ReactNode;
export function ToggleButton({
  value,
  onClick,
}: ToggleButtonPropsAsChild): React.ReactNode;

export function ToggleButton({
  ref,
  value,
  children,

  className,
  classNameTrue,
  classNameFalse,

  ...props
}: ToggleButtonPropsAsStandalone | ToggleButtonPropsAsChild): React.ReactNode {
  return (
    <Button
      ref={ref}
      className={
        ((
          "selected" in props ? props.selected : value
        ) ?
          styles.buttonTrue + " " + (classNameTrue || "")
        : styles.buttonFalse + " " + (classNameFalse || "")) +
        " " +
        (className || "")
      }
      onClick={() => {
        if ("onChange" in props && props.onChange) {
          props.onChange(!value);
        } else if ("onClick" in props && props.onClick) {
          props.onClick();
        }
      }}
      {...("onChange" in props ? omit(props, ["onChange"]) : props)}>
      {children}
    </Button>
  );
}
