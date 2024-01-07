import {TelegramUser} from "telegram-login-button";
import {create} from "zustand";
import {apiClient} from "../util/apiClient.ts";

interface AuthStore {
    verified: boolean | null;
    token: string | null;
    getToken: () => string | null;
    verifyToken: () => Promise<void>;
    login: (user: TelegramUser) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>(set => ({
    verified: null,
    token: localStorage.getItem("token"),
    getToken: () => localStorage.getItem("token"),
    verifyToken: async () => {
        try {
            const response = await apiClient.get("/me");
            if (response.data.token) {
                set({token: response.data.token, verified: true});
                localStorage.setItem("token", response.data.token);
            } else {
                set({token: null, verified: false});
                localStorage.removeItem("token");
            }
        } catch (e) {
            set({token: null, verified: false});
            localStorage.removeItem("token");
        }
    },
    login: async (user: TelegramUser) => {
        const response = await apiClient.post("/auth/login", user);
        set({token: response.data.token, verified: true});
        localStorage.setItem("token", response.data.token);
    },
    logout: () => {
        set({token: null, verified: false});
        localStorage.removeItem("token");
    },
}));
