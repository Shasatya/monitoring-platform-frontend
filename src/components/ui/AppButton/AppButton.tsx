import type { ReactNode } from "react";
import { Button } from "@mantine/core";
import styles from "./AppButton.module.scss";

type AppButtonVariant = "primary" | "secondary" | "danger" | "ghost";

interface AppButtonProps {
  children: ReactNode;
  variant?: AppButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const AppButton = ({
  children,
  variant = "primary",
  loading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  onClick,
}: AppButtonProps) => {
  return (
    <Button
      type={type}
      loading={loading}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      className={styles.button}
      data-variant={variant}
    >
      {children}
    </Button>
  );
};

export default AppButton;
