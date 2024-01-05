import {Box} from "@mui/material";
import React from "react";
import {LoginButton} from "./LoginButton.tsx";
import {Title} from "./Title";

export const LoginPage = React.memo(() => {
    return (
        <Box display="flex" flexDirection="column" width="100%" justifyContent="center" alignItems="center">
            <Title />
            <LoginButton />
        </Box>
    );
});
