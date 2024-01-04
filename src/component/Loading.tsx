import React from "react";
import {LinearProgress} from "@mui/material";

interface Props {
    show?: boolean;
}

export const Loading = React.memo<Props>(({show}) => {
    return (
        <LinearProgress
            sx={{
                height: 6,
                visibility: show ? "visible" : "hidden",
            }}
        />
    );
});
