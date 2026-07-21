import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import RegisterForm from "../../components/auth/RegisterForm";
import useAuth from "../../contexts/useAuth";

function Register() {
  const { register } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState("");

  async function handleRegister(name: string, email: string, password: string) {
    setError("");

    const success = await register(name, email, password);

    if (success) {
      navigate("/", {
        replace: true,
      });

      return;
    }

    setError("An account with this email already exists.");
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

        <RegisterForm onRegister={handleRegister} />

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-400 transition hover:text-blue-300"
          >
            Sign In
          </Link>
        </p>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="mb-2 text-sm font-semibold text-white">Quick Tip</p>

          <p className="text-sm text-slate-400">
            After creating your account, you'll be signed in automatically and
            redirected to your dashboard.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;
