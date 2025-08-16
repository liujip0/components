import { useState } from "react";
import { IconButton } from "../../main.ts";
import { Input, type InputProps } from "./Input.tsx";

export function Password({ ...props }: Omit<InputProps, "type" | "endIcon">) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      endIcon={
        <IconButton
          onClick={() => {
            setShowPassword(!showPassword);
          }}>
          {showPassword ?
            <span className="material-symbols-outlined">visibility_off</span>
          : <span className="material-symbols-outlined">visibility</span>}
        </IconButton>
      }
      {...props}
    />
  );
}
