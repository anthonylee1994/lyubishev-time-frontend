import {Box} from "@mui/material";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const Page = React.memo<Props>(({children}) => {
    return (
        <Box
            sx={{
                overflowY: "auto",
                height: "calc(100vh - 110px)",
                maxWidth: 600,
                mx: "auto",
                mt: {xs: 7, sm: 8},
            }}
        >
            <Box pb={{xs: 20, sm: 24}}>{children}</Box>
        </Box>
    );
});
