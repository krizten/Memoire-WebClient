export interface AuthState {
  isAuthenticated: boolean;
  user: any;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
};
