import { IconButton } from "../../Button/IconButton/IconButton.tsx";
import styles from "./Radio.module.css";

export type RadioProps = {
  id: string;
  value: string;
  selected?: boolean;
  onChange?: (value: boolean) => void;

  label?: string | React.ReactNode;

  className?: string;
  buttonClassName?: string;
  labelClassName?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "id" | "value" | "selected" | "onChange" | "className"
>;
export function Radio({
  id,
  selected,
  onChange,

  label,

  className,
  buttonClassName,
  labelClassName,

  ...props
}: RadioProps) {
  return (
    <div className={styles.container + " " + (className || "")}>
      <IconButton
        className={buttonClassName || ""}
        onClick={() => {
          if (onChange) {
            onChange(!selected);
          }
        }}>
        {selected ?
          <span className="material-symbols-outlined">
            radio_button_checked
          </span>
        : <span className="material-symbols-outlined">
            radio_button_unchecked
          </span>
        }
        <input
          type="radio"
          id={id}
          checked={selected}
          onChange={(event) => {
            if (onChange) {
              onChange(event.currentTarget.checked);
            }
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
