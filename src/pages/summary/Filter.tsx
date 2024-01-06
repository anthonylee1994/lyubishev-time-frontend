import React from "react";
import {Box, TextField} from "@mui/material";
import {useSummaryStore} from "../../store/useSummaryStore.ts";

export const Filter = React.memo(() => {
    const day = useSummaryStore(state => state.day);
    const setDay = useSummaryStore(state => state.setDay);

    return (
        <Box display="flex" alignItems="center" p={2} pb={0}>
            <TextField
                select
                size="small"
                fullWidth
                label="篩選時間範圍"
                onChange={e => setDay(Number(e.target.value))}
                value={day}
                SelectProps={{native: true}}
            >
                <option value={1}>即日之內</option>
                <option value={7}>7日之內</option>
                <option value={30}>30日之內</option>
            </TextField>
        </Box>
    );
});
