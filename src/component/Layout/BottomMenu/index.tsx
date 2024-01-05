import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PieChartIcon from "@mui/icons-material/PieChart";
import RestoreIcon from "@mui/icons-material/Restore";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

export const BottomMenu = React.memo(() => {
    const location = useLocation();
    const navigate = useNavigate();
    const page = location.pathname.slice(1);

    return (
        <Paper
            sx={{
                position: "fixed",
                width: "100%",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                pb: "env(safe-area-inset-bottom)",
            }}
            elevation={3}
        >
            <BottomNavigation
                showLabels
                value={page}
                onChange={(_, newValue) => navigate(`/${newValue}`)}
            >
                <BottomNavigationAction label="活動標籤" icon={<LocalOfferIcon />} value="tags" />
                <BottomNavigationAction label="活動記錄" icon={<RestoreIcon />} value="" />
                <BottomNavigationAction label="統計數據" icon={<PieChartIcon />} value="summary" />
            </BottomNavigation>
        </Paper>
    );
});
