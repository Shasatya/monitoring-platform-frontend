import type { ReactNode } from "react";
import { Text, Title } from "@mantine/core";
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
      <section className={styles.visual}>
        <div className={styles.visualContent}>
          <Text className={styles.brand}>Monitoring Platform</Text>

          <Title order={1} className={styles.visualTitle}>
            Monitor your infrastructure.
            <br />
            Stay ahead of problems.
          </Title>

          <Text className={styles.visualDescription}>
            Real-time server metrics, logs, alerts and infrastructure insights
            in one place.
          </Text>

          <div className={styles.dashboardPreview}>
            <div className={styles.previewHeader}>
              <span>Server Overview</span>
              <span className={styles.status}>● Live</span>
            </div>

            <div className={styles.previewStats}>
              <div className={styles.stat}>
                <span>CPU Usage</span>
                <strong>42%</strong>
              </div>

              <div className={styles.stat}>
                <span>Memory</span>
                <strong>68%</strong>
              </div>

              <div className={styles.stat}>
                <span>Requests</span>
                <strong>284/s</strong>
              </div>
            </div>

            <div className={styles.chart}>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.authPanel}>
        <div className={styles.authContent}>
          <div className={styles.header}>
            <Title order={2} className={styles.title}>
              {title}
            </Title>

            <Text className={styles.subtitle}>{subtitle}</Text>
          </div>

          {children}

          {footer && <div className={styles.footer}>{footer}</div>}
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
