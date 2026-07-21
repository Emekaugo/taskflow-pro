import type { User } from "../types/auth";

export interface StoredUser extends User {
  password: string;
}

const STORAGE_KEY = "users";

const demoUsers: StoredUser[] = [
  {
    id: 1,
    name: "Demo User",
    email: "demo@taskflow.com",
    password: "password123",
  },
];

function initializeUsers() {
  const storedUsers = localStorage.getItem(STORAGE_KEY);

  if (!storedUsers) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoUsers));

    return demoUsers;
  }

  return JSON.parse(storedUsers) as StoredUser[];
}

export function getUsers(): StoredUser[] {
  return initializeUsers();
}

export function saveUsers(users: StoredUser[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function findUserByEmail(email: string) {
  return getUsers().find(
    (user) => user.email.toLowerCase() === email.toLowerCase(),
  );
}

export function authenticateUser(email: string, password: string) {
  return getUsers().find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password,
  );
}

export function createUser(
  name: string,
  email: string,
  password: string,
): StoredUser {
  const users = getUsers();

  const newUser: StoredUser = {
    id: Date.now(),
    name,
    email,
    password,
  };

  users.push(newUser);

  saveUsers(users);

  return newUser;
}
