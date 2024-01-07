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
                height: {xs: "calc(100vh - 110px)", sm: "calc(100vh - 142px)"},
                width: "100%",
                mx: "auto",
                mt: {xs: 7, sm: 8},
            }}
        >
            <Box px={{xs: 0, sm: 2}} pb={{xs: 20, sm: 24}} maxWidth={600} mx="auto">
                {children}
            </Box>
        </Box>
    );
});
