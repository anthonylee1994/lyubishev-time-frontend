import React from "react";
import {Outlet} from "react-router-dom";

export const Layout = React.memo(() => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
});
