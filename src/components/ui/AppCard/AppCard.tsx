import type { ReactNode } from "react";
import { Paper } from "@mantine/core";
import styles from "./AppCard.module.scss";

interface AppCardProps {
  children: ReactNode;
  className?: string;
}

const AppCard = ({ children, className = "" }: AppCardProps) => {
  return (
    <Paper className={`${styles.card} ${className}`} withBorder>
      {children}
    </Paper>
  );
};

export default AppCard;
