import { atom, AtomEffect } from "recoil";

export interface AuthUser {
  username: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
}

const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue) as T);
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export const authState = atom<AuthState>({
  key: "authState",
  default: {
    isAuthenticated: false,
    user: null,
  },
  effects: [localStorageEffect<AuthState>("authState")],
});
