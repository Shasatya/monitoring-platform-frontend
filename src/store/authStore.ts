import { create } from "zustand";

type User = {
  _id: string;
  email: string;
  role: "admin" | "user";
};

type AuthState = {
  user: User | null;
  accessToken: string | null;
  setAuth: (data: { user: User; accessToken: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,

  setAuth: (data) =>
    set({
      user: data.user,
      accessToken: data.accessToken,
    }),

  logout: () =>
    set({
      user: null,
      accessToken: null,
    }),
}));
