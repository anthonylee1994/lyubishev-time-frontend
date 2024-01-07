import {useLocation, useNavigate} from "react-router-dom";
import {ThemeColorUtil} from "../util/ThemeColorUtil.ts";
import {useAuthStore} from "../store/useAuthStore.ts";
import React from "react";

export const useAuth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const verifyToken = useAuthStore(state => state.verifyToken);
    const verified = useAuthStore(state => state.verified);
    const token = useAuthStore(state => state.token);
    const pathname = location.pathname;

    React.useEffect(() => {
        verifyToken();
    }, [verifyToken]);

    React.useEffect(() => {
        if (token) {
            ThemeColorUtil.setThemeColor("#eceff1");
        } else {
            ThemeColorUtil.setThemeColor("#f6f6f7");
        }
    }, [token]);

    React.useEffect(() => {
        if (verified === null) {
            // not verified yet, do nothing
        } else if (verified) {
            if (pathname === "/login") {
                navigate("/");
            }
        } else {
            if (pathname !== "/login") {
                navigate("/login");
            }
        }
    }, [pathname, navigate, verified]);

    return {verified, token, pathname};
};
