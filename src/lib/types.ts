// lib/types.ts

// -----------------------------
// Roles
// -----------------------------
export type Role = "owner" | "admin" | "super_admin";

// -----------------------------
// User returned from /auth/me or /auth/login
// -----------------------------
export interface User {
  id: number;
  email: string;
  role: Role;
}

// -----------------------------
// Login request payload
// -----------------------------
export interface LoginRequest {
  email: string;
  password: string;
}

// -----------------------------
// Signup request payload (owners only)
// -----------------------------
export interface SignupRequest {
  email: string;
  password: string;
  role?: "owner"; // Only owners can sign up via frontend
}

// -----------------------------
// API Response wrapper
// -----------------------------
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

// -----------------------------
// Optional: middleware session info
// -----------------------------
export interface SessionUser {
  id: number;
  email: string;
  role: Role;
}
