import {Box} from "@mui/material";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const Page = React.memo<Props>(({children}) => {
    return (
        <Box my={{xs: 7, sm: 8}} maxWidth={600} mx="auto">
            {children}
        </Box>
    );
});
