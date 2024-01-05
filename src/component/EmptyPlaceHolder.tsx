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
        <Box mt="50%" width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="column" color={grey[500]}>
            <Icon sx={{fontSize: 60, mb: 2}} />
            <Typography>未有任何{modelName}</Typography>
        </Box>
    );
});
