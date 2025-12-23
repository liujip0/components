import "@material-symbols/font-400/outlined.css";
import { IconButton } from "../../Button/IconButton/IconButton.tsx";
import styles from "./Checkbox.module.css";

type CheckboxProps = {
  id: string;
  value: boolean;
  onChange: (value: boolean) => void;

  label?: string | React.ReactNode;

  className?: string;
  buttonClassName?: string;
  labelClassName?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "id" | "value" | "onChange" | "className"
>;
export function Checkbox({
  id,
  value,
  onChange,

  label,

  className,
  buttonClassName,
  labelClassName,

  ...props
}: CheckboxProps) {
  return (
    <div className={styles.container + " " + (className || "")}>
      <IconButton
        className={buttonClassName || ""}
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
          {...props}
        />
      </IconButton>
      {label && (
        <label
          htmlFor={id}
          className={styles.label + " " + (labelClassName || "")}>
          {label}
        </label>
      )}
    </div>
  );
}
