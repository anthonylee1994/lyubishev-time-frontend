import React from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {TitleBar} from "./TitleBar";
import {BottomMenu} from "./BottomMenu";
import {useAuthStore} from "../../store/useAuthStore.ts";

export const Layout = React.memo(() => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore(state => state.isLoggedIn);

    React.useEffect(() => {
        if (!isLoggedIn() && location.pathname !== "/login") {
            navigate("/login");
        }
    }, [isLoggedIn]);

    return (
        <React.Fragment>
            {location.pathname === "/login" ? null : (
                <React.Fragment>
                    <TitleBar />
                    <BottomMenu />
                </React.Fragment>
            )}
            <Outlet />
        </React.Fragment>
    );
});
