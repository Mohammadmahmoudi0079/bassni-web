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

export const register = async (email: string, password: string, companyName: string, phoneNumber: string, countryCode: string) => {
  const res = await apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password, companyName, phoneNumber, countryCode }),
  });

  return res;
};


export const logout = async () => {
  try {
    await apiFetch("/auth/logout", { method: "POST" });
  } finally {
    // Always clear client-side auth
    localStorage.removeItem("access_token");

    // Clear cookie on client side as well (important for some browsers)
    document.cookie =
      "access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  }
};
 
export const me = () =>
  apiFetch("/auth/me");
