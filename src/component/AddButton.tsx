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
            }}>
            <Zoom in>
                <Fab onClick={onClick} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Zoom>
        </Box>
    );
});
