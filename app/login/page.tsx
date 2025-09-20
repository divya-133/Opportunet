"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function LoginPage() {
   const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // new state

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // ✅ Success → redirect with router
      router.push("/explore");
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/Logo.jpg"
            alt="Opportunet Logo"
            className="w-10 h-auto object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-black mb-2">Welcome Back 👋</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Log in to continue using <span className="text-purple-600 font-semibold">Opportunet</span>
        </p>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <img src="/google.jpg" alt="Google" className="w-6 h-6" />
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </button>
          <button className="w-full border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <img src="/facebook.jpg" alt="Facebook" className="w-6 h-6" />
            <span className="text-sm font-medium text-gray-700">Continue with Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative text-center mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <span className="bg-white px-4 text-sm text-gray-500 relative z-10">or continue with email</span>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // toggle input type
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="form-checkbox text-indigo-600" />
              Remember me
            </label>
            <a href="/forgot-password" className="text-indigo-600 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-5 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>

          {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}
        </form>

        <div className="text-center text-sm text-gray-500 mt-6">
          New to Opportunet? <a href="/register" className="text-indigo-600 hover:underline">Create an account</a>
        </div>
      </div>
    </main>
  );
}


