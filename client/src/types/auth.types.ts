// frontend/types/auth.types.ts

export interface AuthForms {
  email: string;
  password: string;
  username?: string; // optional if signup
}

export interface AuthResponse {
  token: string;  // JWT from backend
  user: {
    _id: string;
    username: string;
    email: string;
  };
  message?: string; // optional
}

export interface CreatAuthForms {
  username: string; // optional if signup
  email: string;
  password: string;
}


