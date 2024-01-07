import React from "react";
import {Outlet} from "react-router-dom";
import {BottomMenu} from "./BottomMenu";
import {TitleBar} from "./TitleBar";
import {useAuth} from "../../hook/useAuth.ts";
import {Box} from "@mui/material";

export const Layout = React.memo(() => {
    const {pathname} = useAuth();

    return (
        <Box flexDirection="column">
            {pathname === "/login" ? (
                <Outlet />
            ) : (
                <Box flexDirection="column">
                    <TitleBar />
                    <Outlet />
                    <BottomMenu />
                </Box>
            )}
        </Box>
    );
});
