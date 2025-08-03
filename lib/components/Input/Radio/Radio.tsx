import { IconButton } from "../../Button/IconButton/IconButton.tsx";
import styles from "./Radio.module.css";

export type RadioProps = {
  selected?: boolean;
  onChange?: (value: boolean) => void;
  id: string;
  value: string;
  name?: string;
  label?: string | React.ReactNode;
  className?: string;
};
export function Radio({
  selected,
  onChange,
  name,
  id,
  label,
  className,
}: RadioProps) {
  return (
    <div className={styles.container}>
      <IconButton
        className={className}
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
          name={name}
          id={id}
          checked={selected}
          onChange={(event) => {
            if (onChange) {
              onChange(event.currentTarget.checked);
            }
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
