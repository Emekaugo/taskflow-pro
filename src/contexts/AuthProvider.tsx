import { useState, type ReactNode } from "react";

import { AuthContext } from "./AuthContext";

import type { User } from "../types/auth";

import { authenticateUser, createUser, findUserByEmail } from "../data/users";

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("currentUser");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  async function login(email: string, password: string): Promise<boolean> {
    const user = authenticateUser(email, password);

    if (!user) {
      return false;
    }

    const authenticatedUser: User = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    setCurrentUser(authenticatedUser);

    localStorage.setItem("currentUser", JSON.stringify(authenticatedUser));

    return true;
  }

  async function register(
    name: string,
    email: string,
    password: string,
  ): Promise<boolean> {
    const existingUser = findUserByEmail(email);

    if (existingUser) {
      return false;
    }

    const newUser = createUser(name, email, password);

    const authenticatedUser: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    setCurrentUser(authenticatedUser);

    localStorage.setItem("currentUser", JSON.stringify(authenticatedUser));

    return true;
  }

  function logout() {
    setCurrentUser(null);

    localStorage.removeItem("currentUser");
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
