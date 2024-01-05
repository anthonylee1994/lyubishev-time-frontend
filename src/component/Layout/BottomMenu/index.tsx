import React from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RestoreIcon from "@mui/icons-material/Restore";
import PieChartIcon from "@mui/icons-material/PieChart";
import {useLocation, useNavigate} from "react-router-dom";

export const BottomMenu = React.memo(() => {
    const location = useLocation();
    const navigate = useNavigate();
    const page = location.pathname.slice(1);

    return (
        <BottomNavigation
            sx={{position: "fixed", bottom: 0, width: "100%", zIndex: 1, pb: "env(safe-area-inset-bottom)"}}
            showLabels
            value={page}
            onChange={(_, newValue) => {
                navigate(`/${newValue}`);
            }}
        >
            <BottomNavigationAction label="活動標籤" icon={<LocalOfferIcon />} value="tags" />
            <BottomNavigationAction label="活動記錄" icon={<RestoreIcon />} value="" />
            <BottomNavigationAction label="統計數據" icon={<PieChartIcon />} value="summary" />
        </BottomNavigation>
    );
});
