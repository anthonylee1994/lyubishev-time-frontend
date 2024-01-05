import AddIcon from "@mui/icons-material/Add";
import {Box, Fab, Zoom} from "@mui/material";
import React from "react";

interface Props {
    onClick: () => void;
}

export const AddButton = React.memo<Props>(({onClick}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                position: "fixed",
                bottom: "15%",
                left: "50%",
                transform: "translateX(-50%)",
            }}
        >
            <Zoom in>
                <Fab
                    variant="extended"
                    onClick={onClick}
                    color="secondary"
                    aria-label="add"
                    sx={{fontSize: {xs: 16, sm: 20}, width: {xs: 120, sm: 120}}}
                >
                    <AddIcon sx={{mr: 1}} />
                    新增
                </Fab>
            </Zoom>
        </Box>
    );
});
