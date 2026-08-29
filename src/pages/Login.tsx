import { Stack, Text } from "@mantine/core";
import {
  AppButton,
  AppCard,
  AppInput,
  AppPasswordInput,
} from "../components/ui";

const Login = () => {
  return (
    <Stack p="xl" maw={500}>
      <AppCard>
        <Stack>
          <AppInput label="Email" placeholder="Enter your email" type="email" />

          <AppPasswordInput
            label="Password"
            placeholder="Enter your password"
          />

          <AppButton fullWidth>Login</AppButton>
        </Stack>
      </AppCard>
    </Stack>
  );
};

export default Login;
