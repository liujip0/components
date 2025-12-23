import "@material-symbols/font-400/outlined.css";
import { Button } from "../../Button/Button.tsx";
import { Input } from "../Input.tsx";
import styles from "./Counter.module.css";

type CounterProps = {
  id: string;
  value: number;
  increment: () => void;
  decrement: () => void;
  min?: number;
  max?: number;

  label: string;

  disabled?: boolean;

  className?: string;
  buttonClassName?: string;
  inputClassName?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "id" | "value" | "onChange" | "type" | "min" | "max" | "disabled"
>;
export function Counter({
  id,
  value,
  increment,
  decrement,
  min,
  max,

  label,

  disabled,

  className,
  buttonClassName,
  inputClassName,

  ...props
}: CounterProps) {
  return (
    <div className={styles.container + " " + (className || "")}>
      <Button
        className={
          styles.button +
          " " +
          (disabled ? styles.buttonDisabled : "") +
          " " +
          (buttonClassName || "")
        }
        onClick={() => {
          if (min === undefined || value > min) {
            decrement();
          }
        }}
        disabled={disabled}>
        <span className="material-symbols-outlined">remove</span>
      </Button>
      <Input
        id={id}
        value={value}
        label={label}
        disabled={disabled}
        className={styles.input + " " + (inputClassName || "")}
        type="number"
        {...props}
      />
      <Button
        className={
          styles.button +
          " " +
          (disabled ? styles.buttonDisabled : "") +
          " " +
          (buttonClassName || "")
        }
        onClick={() => {
          if (max === undefined || value < max) {
            increment();
          }
        }}
        disabled={disabled}>
        <span className="material-symbols-outlined">add</span>
      </Button>
    </div>
  );
}
