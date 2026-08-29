import { Stack, Text } from "@mantine/core";
import { AppButton, AppInput, AppPasswordInput } from "../components/ui";
import { AuthLayout } from "../components/auth";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your monitoring account"
      footer={
        <Text size="sm">
          Don't have an account?{" "}
          <Text span c="blue" fw={600}>
            Sign up
          </Text>
        </Text>
      }
    >
      <Stack
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <AppInput label="Email" placeholder="Enter your email" type="email" />
        <AppPasswordInput label="Password" placeholder="Enter your password" />
        <AppButton type="submit" fullWidth>
          Login
        </AppButton>
      </Stack>
    </AuthLayout>
  );
};

export default Login;
