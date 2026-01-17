"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/src/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const user = await login(email, password);
      // Redirect based on role
      if (user.role === "owner") {
        router.push("/owner");
      } else if (user.role === "admin") {
        router.push("/admin");
      } else if (user.role === "super_admin") {
        router.push("/super-admin");
      }else {
        router.push("/");
      }
    } catch (err: any) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}  
        required
        className="border p-2 w-full"
      />
      <button className="bg-black text-white px-4 py-2 w-full">Login</button>
    </form>
  );
}
