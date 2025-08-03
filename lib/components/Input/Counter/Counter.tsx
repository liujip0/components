import { Button } from "../../Button/Button.tsx";
import { Input } from "../Input.tsx";
import styles from "./Counter.module.css";

type CounterProps = {
  value: number;
  id: string;
  increment: () => void;
  decrement: () => void;
  label: string;
  max?: number;
  disabled?: boolean;
};
export function Counter({
  value,
  id,
  increment,
  decrement,
  label,
  max,
  disabled = false,
}: CounterProps) {
  return (
    <div className={styles.container}>
      <Button
        className={
          styles.button + " " + (disabled ? styles.buttonDisabled : "")
        }
        onClick={() => {
          if (value > 0) {
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
        className={styles.input}
        type="number"
      />
      <Button
        className={
          styles.button + " " + (disabled ? styles.buttonDisabled : "")
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
