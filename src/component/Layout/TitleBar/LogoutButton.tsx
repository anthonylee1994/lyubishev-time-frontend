import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import {MenuButton} from "./MenuButton.tsx";
import {useAuthStore} from "../../../store/useAuthStore.ts";
import {useNavigate} from "react-router-dom";

export const LogoutButton = React.memo(() => {
    const logout = useAuthStore(state => state.logout);
    const navigate = useNavigate();

    const onLogout = async () => {
        logout();
        navigate("/login");
    };

    return <MenuButton icon={<LogoutIcon />} onClick={onLogout} />;
});
