import type { InputHTMLAttributes } from "react";
import { PasswordInput } from "@mantine/core";
import styles from "./AppPasswordInput.module.scss";

interface AppPasswordInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;
  error?: string;
  description?: string;
}

const AppPasswordInput = ({
  label,
  error,
  description,
  ...props
}: AppPasswordInputProps) => {
  return (
    <PasswordInput
      {...props}
      label={label}
      error={error}
      description={description}
      classNames={{
        root: styles.root,
        label: styles.label,
        input: styles.input,
        innerInput: styles.innerInput,
        description: styles.description,
        error: styles.error,
      }}
    />
  );
};

export default AppPasswordInput;
