import type { InputHTMLAttributes } from "react";
import { TextInput } from "@mantine/core";
import styles from "./AppInput.module.scss";

interface AppInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;
  error?: string;
  description?: string;
}

const AppInput = ({ label, error, description, ...props }: AppInputProps) => {
  return (
    <TextInput
      {...props}
      label={label}
      error={error}
      description={description}
      classNames={{
        root: styles.root,
        label: styles.label,
        input: styles.input,
        description: styles.description,
        error: styles.error,
      }}
    />
  );
};

export default AppInput;
