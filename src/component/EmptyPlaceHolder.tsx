import {Box, Typography} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material/SvgIcon/SvgIcon";
import {grey} from "@mui/material/colors";
import React from "react";

interface Props {
    Icon: OverridableComponent<SvgIconTypeMap>;
    modelName: string;
}

export const EmptyPlaceHolder = React.memo<Props>(({Icon, modelName}) => {
    return (
        <Box
            mt="min(50%, calc(50vh - 120px))"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            color={grey[500]}
        >
            <Icon sx={{fontSize: {xs: 60, sm: 80}, mb: 2}} />
            <Typography sx={{fontSize: {xs: 14, sm: 20}}}>未有任何{modelName}</Typography>
        </Box>
    );
});
