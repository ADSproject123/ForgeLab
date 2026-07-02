"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface LoginFormProps {
  onLogin: (email: string, password: string) => Promise<unknown>;
  authError?: string;
}

export function LoginForm({ onLogin, authError }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await onLogin(email, password);
    } catch {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">ForgeLab Admin</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to manage projects</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/10"
              placeholder="admin@forgelab.cam"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/10"
              placeholder="Your password"
            />
          </div>

          {authError && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{authError}</p>
          )}

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-60"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
