import React from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {blueGrey, grey} from "@mui/material/colors";
import {LogoutButton} from "./LogoutButton.tsx";

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
                    <Box display="flex" alignItems="flex-end">
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontSize: {xs: 20, sm: 26},
                                color: grey[900],
                                fontWeight: "bold",
                                mr: 1,
                            }}
                        >
                            柳比歇夫
                        </Typography>
                        <Typography
                            component="div"
                            sx={{fontSize: {xs: 16, sm: 18}, color: grey[700], mb: {base: 0.1, sm: 0.2} }}
                        >
                            時間管理大師
                        </Typography>
                    </Box>
                    <LogoutButton />
                </Box>
            </Toolbar>
        </AppBar>
    );
});
