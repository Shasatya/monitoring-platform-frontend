import type { ReactNode } from "react";
import { Container, Stack, Text, Title } from "@mantine/core";
import styles from "./AuthLayout.module.scss";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}

const AuthLayout = ({ title, subtitle, children, footer }: AuthLayoutProps) => {
  return (
    <main className={styles.layout}>
      <Container size={460} className={styles.container}>
        <Stack gap="xl">
          <div className={styles.header}>
            <Text className={styles.brand}>Monitoring Platform</Text>

            <Title order={1} className={styles.title}>
              {title}
            </Title>

            <Text className={styles.subtitle}>{subtitle}</Text>
          </div>

          {children}

          {footer && <div className={styles.footer}>{footer}</div>}
        </Stack>
      </Container>
    </main>
  );
};

export default AuthLayout;
