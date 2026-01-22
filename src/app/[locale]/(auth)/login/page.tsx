"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/src/lib/auth";
// import ReCAPTCHA from "react-google-recaptcha";
import { Eye, EyeOff, Mail, Lock, AlertCircle, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [formValid, setFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  // Form validation
  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;
    // const isRecaptchaValid = recaptchaToken !== null;
    
    setFormValid(isEmailValid && isPasswordValid);
  }, [email, password]);

  // Email validation
  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  // Password validation
  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError("Password is required");
    } else if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!formValid) {
      setError("Please complete all fields correctly");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Verify reCAPTCHA on server-side (you'll need to implement this)
      // const recaptchaVerified = await verifyRecaptcha(recaptchaToken!);
      
      // if (!recaptchaVerified) {
      //   throw new Error("reCAPTCHA verification failed");
      // }

      const user = await login(email, password);
      
      // Redirect based on role
      if (user.role === "owner") {
        router.push("/owner");
      } else if (user.role === "admin") {
        router.push("/admin");
      } else if (user.role === "super_admin") {
        router.push("/super-admin");
      } else {
        router.push("/");
      }
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
      // Reset reCAPTCHA on error
      setRecaptchaToken(null);
    } finally {
      setIsLoading(false);
    }
  }

  // Mock recaptcha verification - implement this on your backend
  async function verifyRecaptcha(token: string): Promise<boolean> {
    // In production, send this token to your backend
    // and verify with Google reCAPTCHA API
    try {
      const response = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      return false;
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  onBlur={() => validateEmail(email)}
                  required
                  className={`w-full px-4 py-3 pl-11 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none transition-all ${
                    emailError 
                      ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
                  }`}
                  disabled={isLoading}
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {emailError}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  onBlur={() => validatePassword(password)}
                  required
                  className={`w-full px-4 py-3 pl-11 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none transition-all ${
                    passwordError 
                      ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
                  }`}
                  disabled={isLoading}
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {passwordError}
                </p>
              )}
            </div>

            {/* reCAPTCHA */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Human Verification
              </label>
              <div className="flex justify-center">
                {/* <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={setRecaptchaToken}
                  onExpired={() => setRecaptchaToken(null)}
                  theme="light"
                  size="normal"
                /> */}
              </div>
              <p className="text-xs text-gray-500 text-center">
                Please verify that you're not a robot
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formValid || isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                !formValid || isLoading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl"
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Additional Links */}
            <div className="text-center space-y-3 pt-4 border-t border-gray-200">
              <a
                href="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Forgot your password?
              </a>
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}