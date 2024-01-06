import React from "react";
import {TransitionProps} from "@mui/material/transitions";
import {Slide} from "@mui/material";

export const SlideUpTransition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
