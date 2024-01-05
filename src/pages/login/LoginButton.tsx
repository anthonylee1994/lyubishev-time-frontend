import React from "react";
import TelegramLoginButton, {TelegramUser} from "telegram-login-button";
import {Box, CircularProgress} from "@mui/material";
import {useAuthStore} from "../../store/useAuthStore.ts";
import {useNavigate} from "react-router-dom";

const mockUser = {
    id: 234392020,
    first_name: "窮三代IT狗",
    username: "internal_server_error",
    photo_url: "https://t.me/i/userpic/320/0HsMKYOWlgnBA2Httlfb3NBMp50KmdI4fD8tsNZu2js.jpg",
    auth_date: 1704334989,
    hash: "1a5186eae36d58a37868d019b8037a4dc02980e6f3e62cb124a80e8bec6b732d",
};

export const LoginButton = React.memo(() => {
    const [showLoading, setShowLoading] = React.useState(false);
    const isLoggedIn = useAuthStore(state => state.isLoggedIn);
    const login = useAuthStore(state => state.login);

    const navigate = useNavigate();

    const onLogin = async (user: TelegramUser) => {
        await login(user);
        if (isLoggedIn()) {
            setShowLoading(false);
            navigate("/");
        }
    };

    React.useEffect(() => {
        if (import.meta.env.DEV) {
            setTimeout(() => {
                onLogin(mockUser);
            }, 3000);
        }
    }, [onLogin]);

    return (
        <Box position="fixed" bottom={{xs: "10%", md: "15%"}}>
            {showLoading ? (
                <CircularProgress size={50} thickness={6} />
            ) : (
                <TelegramLoginButton botName="LyubishevBot" dataOnauth={onLogin} />
            )}
        </Box>
    );
});
