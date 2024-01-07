import {Box} from "@mui/material";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const Page = React.memo<Props>(({children}) => {
    return (
        <Box
            sx={{
                mt: {xs: 7, sm: 8},
            }}
            px={{xs: 0, sm: 2}}
            pb={{xs: 24, sm: 24}}
            maxWidth={600}
            mx="auto"
        >
            {children}
        </Box>
    );
});
