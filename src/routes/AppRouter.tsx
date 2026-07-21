import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import ProtectedRoute from "../components/auth/ProtectedRoute";

import useAuth from "../contexts/useAuth";

import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Board from "../pages/Board";
import Calendar from "../pages/Calendar";
import Team from "../pages/Team";
import Settings from "../pages/Settings";

import Login from "../pages/Login";
import Register from "../pages/Register";

function AppRouter() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      {/* Protected Routes */}

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/board" element={<Board />} />

        <Route path="/calendar" element={<Calendar />} />

        <Route path="/team" element={<Team />} />

        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Public Routes */}

      <Route
        path="/login"
        element={currentUser ? <Navigate to="/dashboard" replace /> : <Login />}
      />

      <Route
        path="/register"
        element={
          currentUser ? <Navigate to="/dashboard" replace /> : <Register />
        }
      />

      {/* 404 */}

      <Route
        path="*"
        element={
          <Navigate to={currentUser ? "/dashboard" : "/login"} replace />
        }
      />
    </Routes>
  );
}

export default AppRouter;
