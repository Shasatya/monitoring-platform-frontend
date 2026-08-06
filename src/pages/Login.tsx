import { Stack, Text } from "@mantine/core";
import AppCard from "../components/ui/AppCard/AppCard";

const Login = () => {
  return (
    <Stack p="xl">
      <AppCard>
        <Text fw={600}>Monitoring Platform</Text>
        <Text c="dimmed" size="sm">
          Server monitoring dashboard
        </Text>
      </AppCard>
    </Stack>
  );
};

export default Login;
