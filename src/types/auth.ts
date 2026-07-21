export interface User {
  id: number;

  name: string;

  email: string;
}

export interface LoginCredentials {
  email: string;

  password: string;
}

export interface RegisterData {
  name: string;

  email: string;

  password: string;
}

export interface AuthContextType {
  currentUser: User | null;

  login: (email: string, password: string) => Promise<boolean>;

  register: (name: string, email: string, password: string) => Promise<boolean>;

  logout: () => void;
}
