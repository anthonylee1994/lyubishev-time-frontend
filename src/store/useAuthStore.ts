import {create} from "zustand";
import {TelegramUser} from "telegram-login-button";
import {apiClient} from "../util/apiClient.ts";

interface AuthStore {
    token: string | null;
    login: (user: TelegramUser) => Promise<void>;
    logout: () => void;
    isLoggedIn: () => boolean;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    token: null,
    isLoggedIn: () => !!get().token || !!localStorage.getItem("token"),
    login: async (user: TelegramUser) => {
        const response = await apiClient.post("/auth/login", user);
        set({token: response.data.token});
        localStorage.setItem("token", response.data.token);
    },
    logout: () => {
        set({token: null});
        localStorage.removeItem("token");
    },
}));
