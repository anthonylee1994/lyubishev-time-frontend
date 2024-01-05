import React from "react";
import {Box, MenuItem, TextField} from "@mui/material";
import {useSummaryStore} from "../../store/useSummaryStore.ts";

export const Filter = React.memo(() => {
    const day = useSummaryStore(state => state.day);
    const setDay = useSummaryStore(state => state.setDay);

    return (
        <Box display="flex" alignItems="center" p={2} pb={0}>
            <TextField
                select
                fullWidth
                label="篩選時間範圍"
                onChange={e => setDay(Number(e.target.value))}
                value={day}
            >
                <MenuItem value={1}>即日內</MenuItem>
                <MenuItem value={7}>7日內</MenuItem>
                <MenuItem value={30}>30日內</MenuItem>
            </TextField>
        </Box>
    );
});
