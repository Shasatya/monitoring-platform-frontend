import { Dashboard, Login } from "./pages";
import { useAuthStore } from "./store/authStore";

function App() {
  const { user, accessToken } = useAuthStore();

  const isLoggedIn = !!user && !!accessToken;

  return isLoggedIn ? <Dashboard /> : <Login />;
}

export default App;
