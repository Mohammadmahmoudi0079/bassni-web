//src/lib/auth.ts
import { apiFetch } from "./api";

export const login = async (email: string, password: string) => {
  const res = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  // Client usage
  localStorage.setItem("access_token", res.token);

  // Middleware usage
  document.cookie = `access_token=${res.token}; path=/`;

  return res;
};

export const register = async (email: string, password: string) => {
  const res = await apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  return res;
};


export const logout = () =>
  apiFetch("/auth/logout", { method: "POST" });

export const me = () =>
  apiFetch("/auth/me");
