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
                position: "absolute",
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
                sx={{height: {xs: undefined, md: 80}}}
            >
                <BottomNavigationAction
                    label="活動標籤"
                    icon={<LocalOfferIcon sx={{fontSize: {xs: undefined, md: 32}}} />}
                    value="tags"
                />
                <BottomNavigationAction
                    label="活動記錄"
                    icon={<RestoreIcon sx={{fontSize: {xs: undefined, md: 32}}} />}
                    value=""
                />
                <BottomNavigationAction
                    label="統計數據"
                    icon={<PieChartIcon sx={{fontSize: {xs: undefined, md: 32}}} />}
                    value="summary"
                />
            </BottomNavigation>
        </Paper>
    );
});
