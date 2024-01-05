import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useAuthStore} from "../../../store/useAuthStore.ts";
import {MenuButton} from "./MenuButton.tsx";

export const LogoutButton = React.memo(() => {
    const logout = useAuthStore(state => state.logout);
    const navigate = useNavigate();

    const onLogout = async () => {
        logout();
        navigate("/login");
    };

    return <MenuButton icon={<LogoutIcon />} onClick={onLogout} />;
});
