import React from "react";
import {Box, Typography} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import {blueGrey} from "@mui/material/colors";

interface Props {
    modelName: string;
}

export const EmptyPlaceHolder = React.memo<Props>(({modelName}) => {
    return (
        <Box
            mt="50%"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            color={blueGrey[300]}
        >
            <SentimentVeryDissatisfiedIcon sx={{fontSize: 60, mb: 2}} />
            <Typography>未有任何{modelName}</Typography>
        </Box>
    );
});
