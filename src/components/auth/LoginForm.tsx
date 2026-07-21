import { useState } from "react";

interface LoginFormProps {
  onLogin: (email: string, password: string) => Promise<void> | void;
}

function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await onLogin(email.trim(), password);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg"
    >
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

        <p className="mt-2 text-slate-400">
          Sign in to continue using TaskFlow Pro.
        </p>
      </div>

      <div className="space-y-6">
        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
            disabled={isSubmitting}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        {/* Password */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            disabled={isSubmitting}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        {/* Submit */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
