"use client";

import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
  const router = useRouter();

  const handleContinue = () => {
    // After verification, continue to app
    router.push("/explore");
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <img src="/Logo.jpg" alt="Opportunet Logo" className="w-10 h-auto" />
        </div>

        <h2 className="text-2xl font-bold text-[#111827] mb-2">Verify Your Email</h2>
        <p className="text-sm text-gray-600 mb-6">
          We've sent a verification link to your email. Please check your inbox and confirm your account.
        </p>

        <button
          onClick={handleContinue}
          className="w-full bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
        >
          Go to Explore
        </button>
      </div>
    </main>
  );
}
