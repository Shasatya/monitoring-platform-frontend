import { Stack, Text } from "@mantine/core";
import {
  AppButton,
  AppCard,
  AppInput,
  AppPasswordInput,
} from "../components/ui";
import { AuthLayout } from "../components/auth";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your monitoring dashboard"
      footer={
        <Text size="sm">
          Don't have an account?{" "}
          <Text span c="blue" fw={600}>
            Sign up
          </Text>
        </Text>
      }
    >
      <AppCard>
        <Stack>
          <AppInput label="Email" placeholder="Enter your email" type="email" />

          <AppPasswordInput
            label="Password"
            placeholder="Enter your password"
          />

          <AppButton type="submit" fullWidth>
            Login
          </AppButton>
        </Stack>
      </AppCard>
    </AuthLayout>
  );
};

export default Login;
