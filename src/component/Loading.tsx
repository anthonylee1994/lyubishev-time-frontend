import {LinearProgress} from "@mui/material";
import React from "react";

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
