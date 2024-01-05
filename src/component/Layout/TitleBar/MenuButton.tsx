import {Box} from "@mui/material";
import React from "react";

interface Props {
    icon: React.ReactNode;
    onClick: () => void;
}

export const MenuButton = React.memo<Props>(({icon, onClick}) => {
    return (
        <Box
            p={1}
            borderRadius="25%"
            width={26}
            height={26}
            onClick={onClick}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 100ms",
                backgroundColor: "secondary.main",
                color: "rgba(0, 0, 0, 0.87)",
                boxShadow: 2,
                "&:active": {
                    boxShadow: 4,
                    transform: "scale(1.1)",
                },
            }}
        >
            {icon}
        </Box>
    );
});
