import React from "react";
import {Box, Fab, Zoom} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface Props {
    onClick: () => void;
}

export const AddButton = React.memo<Props>(({ onClick }) => {
    return (
        <Box
            width="100%"
            maxWidth={600}
            display="flex"
            justifyContent="center"
            position="fixed"
            bottom="15%"
            mx='auto'
        >
            <Zoom in>
                <Fab onClick={onClick} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Zoom>
        </Box>
    );
});
