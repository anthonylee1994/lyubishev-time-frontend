import {Box, Typography} from "@mui/material";
import React from "react";
import TitleImage from "./asset/title.svg";

export const Title = React.memo(() => {
    return (
        <Box mt={{xs: 20, md: 25}} textAlign="center" width={{xs: 300, md: 400}}>
            <img src={TitleImage} style={{width: "100%"}} alt="title" />
            <Typography sx={{fontSize: {xs: "2.5rem", md: "2rem"}, fontWeight: "bold", mt: {xs: 1, md: 2}}}>柳比歇夫</Typography>
            <Typography color="gray" sx={{fontSize: {xs: "1.6rem", md: "2rem"}}}>
                時間管理大師
            </Typography>
        </Box>
    );
});
