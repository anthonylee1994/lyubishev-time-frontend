import React from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useAuthStore} from "../../store/useAuthStore.ts";
import {BottomMenu} from "./BottomMenu";
import {TitleBar} from "./TitleBar";

export const Layout = React.memo(() => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore(state => state.isLoggedIn);

    React.useEffect(() => {
        if (!isLoggedIn() && location.pathname !== "/login") {
            navigate("/login");
        }
    }, [isLoggedIn, location.pathname, navigate]);

    React.useEffect(() => {
        if (isLoggedIn()) {
            document.querySelector(`meta[name="theme-color"]`)?.setAttribute("content", "#eceff1");
        } else {
            document.querySelector(`meta[name="theme-color"]`)?.setAttribute("content", "#f6f6f7");
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
