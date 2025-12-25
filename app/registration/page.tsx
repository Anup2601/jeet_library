"use client";
import React, { useState } from "react";
import { Lock, AlertCircle, UserPlus } from "lucide-react";

const REGISTRATION_KEY = process.env.NEXT_PUBLIC_REGISTRATION_KEY;
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc6yTO72WVPlHAqShDwEpsQCwoSjpV8TvDdrPwwYCLuvmJ3dg/viewform?vc=0&c=0&w=1&flr=0";

export default function RegistrationPage() {
  const [passKey, setPassKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    setLoading(true);
    setError(null);

    if (!passKey.trim()) {
      setError("Please enter the Registration Pass Key");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      if (passKey === REGISTRATION_KEY) {
        // Redirect to Google Form
        window.location.href = GOOGLE_FORM_URL;
      } else {
        setError("Invalid Pass Key. Access Denied.");
        setLoading(false);
      }
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 mt-20">
      <div className="w-full max-w-md">
        <div className="border border-slate-200 rounded-2xl shadow-2xl p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <UserPlus className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-white">
            Student Registration
          </h1>
          <p className="text-center text-white text-sm mb-8">
            Enter the Pass Key to access the registration form
          </p>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Registration Pass Key
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Enter Pass Key"
                  value={passKey}
                  onChange={(e) => setPassKey(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                  className="w-full h-12 pl-10 pr-4 text-base border border-slate-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                  disabled:bg-slate-100 text-white bg-transparent"
                  autoFocus
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !passKey.trim()}
              className="w-full h-12 text-base font-medium bg-cyan-400 text-black rounded-lg 
              hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : (
                "Access Registration Form"
              )}
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-white mt-6">
          Contact library staff if you don&apos;t have the pass key
        </p>
      </div>
    </div>
  );
}
