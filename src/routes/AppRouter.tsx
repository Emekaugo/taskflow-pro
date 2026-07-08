import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Board from "../pages/Board";
import Calendar from "../pages/Calendar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Projects from "../pages/Projects";
import Register from "../pages/Register";
import Settings from "../pages/Settings";
import Team from "../pages/Team";

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/board" element={<Board />} />

        <Route path="/calendar" element={<Calendar />} />

        <Route path="/team" element={<Team />} />

        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRouter;
