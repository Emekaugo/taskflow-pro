import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LoginForm from "../../components/auth/LoginForm";
import useAuth from "../../contexts/useAuth";

function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState("");

  async function handleLogin(email: string, password: string) {
    setError("");

    const success = await login(email, password);

    if (success) {
      navigate("/", {
        replace: true,
      });

      return;
    }

    setError("Invalid email or password. Please try again.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12">
      <div className="w-full max-w-md">
        {error && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-red-700 bg-red-900/30 px-4 py-3 text-sm text-red-300"
          >
            {error}
          </div>
        )}

        <LoginForm onLogin={handleLogin} />

        <p className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-400 transition hover:text-blue-300"
          >
            Create one
          </Link>
        </p>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="mb-2 text-sm font-semibold text-white">Demo Account</p>

          <p className="text-sm text-slate-400">
            <strong>Email:</strong> demo@taskflow.com
          </p>

          <p className="text-sm text-slate-400">
            <strong>Password:</strong> password123
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
