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

const VisibilityIcon = ({ reveal }: { reveal: boolean }) => {
  return reveal ? (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
      <path d="M9.9 4.2A10.6 10.6 0 0 1 12 4c5 0 9.3 3 11 8-0.6 1.7-1.6 3.2-2.8 4.4" />
      <path d="M6.6 6.6C4.9 7.8 3.5 9.6 3 12c.9 2.7 2.7 4.8 5 6.1" />
    </svg>
  ) : (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

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
      visibilityToggleIcon={VisibilityIcon}
      visibilityToggleButtonProps={{
        "aria-label": "Toggle password visibility",
      }}
      classNames={{
        root: styles.root,
        label: styles.label,
        wrapper: styles.wrapper,
        input: styles.input,
        innerInput: styles.innerInput,
        visibilityToggle: styles.visibilityToggle,
        description: styles.description,
        error: styles.error,
      }}
    />
  );
};

export default AppPasswordInput;
