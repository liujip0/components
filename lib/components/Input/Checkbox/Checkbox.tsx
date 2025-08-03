import { IconButton } from "../../Button/IconButton/IconButton.tsx";
import styles from "./Checkbox.module.css";

type CheckboxProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  id: string;
  label?: string | React.ReactNode;
  className?: string;
};
export function Checkbox({
  value,
  onChange,
  id,
  label,
  className,
}: CheckboxProps) {
  return (
    <div className={styles.container}>
      <IconButton
        className={className}
        onClick={() => {
          onChange(!value);
        }}>
        {value ?
          <span className="material-symbols-outlined">check_box</span>
        : <span className="material-symbols-outlined">
            check_box_outline_blank
          </span>
        }
        <input
          type="checkbox"
          id={id}
          checked={value}
          onChange={(event) => {
            onChange(event.currentTarget.checked);
          }}
          hidden
        />
      </IconButton>
      {label && (
        <label
          htmlFor={id}
          className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
}
