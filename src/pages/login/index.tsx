import React from "react";
import {Title} from "./Title";
import {LoginButton} from "./LoginButton.tsx";
import {Box} from "@mui/material";

export const LoginPage = React.memo(() => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            width="100%"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Title />
            <LoginButton />
        </Box>
    );
});
