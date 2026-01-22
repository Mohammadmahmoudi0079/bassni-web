"use client";

import { useState } from "react";
import { register } from "@/src/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Country phone codes for the dropdown
const countryPhoneCodes = [
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "TR", name: "Turkey", dialCode: "+90" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "BR", name: "Brazil", dialCode: "+55" },
  { code: "MX", name: "Mexico", dialCode: "+52" },
  { code: "SG", name: "Singapore", dialCode: "+65" },
  { code: "AE", name: "UAE", dialCode: "+971" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
];

export default function RegisterPage() {
 const [formData, setFormData] = useState({
  email: "",
  password: "",
  confirmPassword: "",
  companyName: "",
  countryCode: "+1|US",
  phoneNumber: "",
});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (error) setError("");
  };

  // Password validation
  const validatePassword = () => {
    if (formData.password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      return "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }
    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match";
    }
    return "";
  };

  // Phone number validation
  const validatePhoneNumber = (phone: string) => {
    // Basic validation - adjust based on your needs
    const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setError("");
  setSuccess("");

  // Validate all required fields
  if (!formData.companyName.trim()) {
    setError("Company name is required");
    return;
  }

  if (!formData.email.trim()) {
    setError("Email is required");
    return;
  }

  if (!formData.phoneNumber.trim()) {
    setError("Phone number is required");
    return;
  }

  const passwordError = validatePassword();
  if (passwordError) {
    setError(passwordError);
    return;
  }

  if (!validatePhoneNumber(formData.phoneNumber)) {
    setError("Please enter a valid phone number");
    return;
  }

  // Rest of the code remains the same...
  setLoading(true);
  // ...


    // Optional: Uncomment for reCAPTCHA verification
    /*
    const recaptchaToken = await executeRecaptcha('register');
    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification");
      return;
    }
    */
    try {
      // Prepare registration data
      const registrationData = {
  email: formData.email,
  password: formData.password,
  companyName: formData.companyName, // Now required
  phoneNumber: {
    number: formData.phoneNumber,
    countryCode: formData.countryCode
  },
  // recaptchaToken, // Uncomment when implementing reCAPTCHA
};

      await register(registrationData.email, registrationData.password, registrationData.companyName, registrationData.phoneNumber);
      
      setSuccess("Registration successful! Redirecting to login...");
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // ReCAPTCHA component - uncomment when ready to implement
  /*
  const ReCaptcha = dynamic(
    () => import('react-google-recaptcha'),
    { ssr: false }
  );
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaKey, setRecaptchaKey] = useState<string | null>(null);
  
  useEffect(() => {
    // Fetch your reCAPTCHA site key from your backend or environment variable
    const fetchRecaptchaKey = async () => {
      const key = await getRecaptchaSiteKey();
      setRecaptchaKey(key);
    };
    fetchRecaptchaKey();
  }, []);
  
  const executeRecaptcha = async (action: string) => {
    if (!recaptchaRef.current || !recaptchaKey) return null;
    
    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();
      
      // Verify token with your backend
      const isValid = await verifyRecaptchaToken(token, action);
      return isValid ? token : null;
    } catch (error) {
      console.error("reCAPTCHA error:", error);
      return null;
    }
  };
  */

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-gray-600">
            Join us and start your journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-green-700 text-sm">{success}</p>
            </div>
          )}

          {/* Company Name Field */}
<input
  id="companyName"
  name="companyName"
  type="text"
  required
  placeholder="Enter your company name"
  value={formData.companyName}
  onChange={handleChange}
  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm transition-colors"
/>

{/* Phone Number Field */}
<input
  id="phoneNumber"
  name="phoneNumber"
  type="tel"
  required
  placeholder="Phone number"
  value={formData.phoneNumber}
  onChange={handleChange}
  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm transition-colors"
/>

          {/* Phone Number Field with Country Code */}
          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-gray-500 text-xs">(Optional)</span>
            </label>
            <div className="flex gap-3">
              <div className="w-1/3">
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
                >
                  {countryPhoneCodes.map((country) => (
                    <option key={country.code} value={`${country.dialCode}|${country.code}`}>
                      {country.dialCode} ({country.code})
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-2/3">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="At least 8 characters"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm transition-colors"
            />
            <p className="text-xs text-gray-500 mt-1">
              Must contain uppercase, lowercase, and number
            </p>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password *
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm transition-colors"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the{" "}
              <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-500">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Uncomment for reCAPTCHA */}
          {/*
          {recaptchaKey && (
            <div className="recaptcha-container">
              <ReCaptcha
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                size="invisible"
                badge="inline"
              />
            </div>
          )}
          */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Sign in
            </Link>
          </p>
        </div>

        {/* Additional Info */}
        <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-200">
          <p>By registering, you agree to our terms and privacy policy. All fields marked with * are required.</p>
        </div>
      </div>
    </div>
  );
}