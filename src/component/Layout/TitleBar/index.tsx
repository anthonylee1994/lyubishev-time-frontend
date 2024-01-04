import React from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {blueGrey, grey} from "@mui/material/colors";
import {LogoutButton} from "./LogoutButton.tsx";
import {AddButton} from "./AddButton.tsx";

export const TitleBar = React.memo(() => {
    return (
        <AppBar position="fixed" sx={{bgcolor: blueGrey[50]}}>
            <Toolbar sx={{bgcolor: blueGrey[50]}}>
                <Box
                    maxWidth={580}
                    mx="auto"
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <AddButton />
                    <Typography variant="h6" component="div" sx={{color: grey[900]}}>
                        柳比歇夫
                    </Typography>
                    <LogoutButton />
                </Box>
            </Toolbar>
        </AppBar>
    );
});
