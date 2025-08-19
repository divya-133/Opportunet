"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    // Simulate sending reset link
    setTimeout(() => {
      router.push("/reset-password?token=dev123"); // Simulated token
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <img src="/Logo.jpg" alt="Opportunet Logo" className="w-10 h-auto" />
        </div>

        <h2 className="text-2xl font-bold text-center text-[#111827] mb-2">
          Forgot Password?
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your email and we’ll send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6366F1]"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-6">
          Back to{" "}
          <a href="/login" className="text-[#6366F1] hover:underline">
            Login
          </a>
        </div>
      </div>
    </main>
  );
}
