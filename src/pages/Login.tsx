import { Stack, Text } from "@mantine/core";
import { AppButton, AppCard } from "../components/ui";

const Login = () => {
  return (
    <Stack p="xl">
      <AppCard>
        <Text fw={600}>Monitoring Platform</Text>
        <Text c="dimmed" size="sm">
          Server monitoring dashboard
        </Text>
      </AppCard>

      <Stack p="xl" maw={400}>
        <AppButton>Primary</AppButton>

        <AppButton variant="secondary">Secondary</AppButton>

        <AppButton variant="danger">Delete</AppButton>

        <AppButton variant="ghost">Cancel</AppButton>

        <AppButton loading>Login</AppButton>

        <AppButton fullWidth>Full Width</AppButton>
      </Stack>
    </Stack>
  );
};

export default Login;
