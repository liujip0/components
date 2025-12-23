import "@material-symbols/font-400/outlined.css";
import { IconButton } from "../../Button/IconButton/IconButton.tsx";
import styles from "./Radio.module.css";

export type RadioProps = {
  id: string;
  value: string;
  onChange?: (value: boolean) => void;

  label?: string | React.ReactNode;

  className?: string;
  buttonClassName?: string;
  labelClassName?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "id" | "value" | "selected" | "onChange" | "className"
>;

export type RadioPropsAsChild = {
  selected?: boolean;
} & RadioProps;

export function RadioInternal({
  id,
  onChange,

  label,

  className,
  buttonClassName,
  labelClassName,
}: RadioProps): React.ReactNode;
export function RadioInternal({ selected }: RadioPropsAsChild): React.ReactNode;

export function RadioInternal({
  id,
  onChange,

  label,

  className,
  buttonClassName,
  labelClassName,

  ...props
}: RadioProps | RadioPropsAsChild) {
  return (
    <div className={styles.container + " " + (className || "")}>
      <IconButton
        className={buttonClassName || ""}
        onClick={() => {
          if (onChange && "selected" in props) {
            onChange(!props.selected);
          }
        }}>
        {"selected" in props && props.selected ?
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
          checked={"selected" in props && props.selected}
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

export function Radio({ ...props }: RadioProps) {
  return <RadioInternal {...props} />;
}
